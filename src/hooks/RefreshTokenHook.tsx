import { useState, useEffect } from "react";
import CONSTANTS from "../constants/constants";
import axios from "axios";
import { REFRESH_TOKEN } from "../constants/endpoints";

const useTokenRefresh = (initialToken: string, initialExpiryTime: number) => {
  console.log("i am called", initialToken, initialExpiryTime);
  const [token, setToken] = useState(initialToken);
  const [expiryTime, setExpiryTime] = useState(initialExpiryTime);

  useEffect(() => {
    let refreshTimeout: any;

    const refreshAuthToken = async () => {
      let body = {
        token: token,
      };
      try {
        // Replace this URL with your refresh token endpoint
        const response = await axios.post(
          `${process.env.REACT_APP_API_GATEWAY_URL}${REFRESH_TOKEN}`,
          body
        );

        const data = await response?.data;
        if (response?.data?.refreshToken) {
          setToken(data?.refreshToken);
          sessionStorage.setItem(
            CONSTANTS.REACT_TOKEN,
            data?.refreshToken || ""
          );
          setExpiryTime(data?.tokenExpiry); // newExpiryTime should be in seconds
          scheduleTokenRefresh(data?.tokenExpiry);
        } else {
          // Handle token refresh failure (e.g., logout the user)
          console.error("Failed to refresh token:", data.message);
        }
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
    };

    const scheduleTokenRefresh = (expiryTime: number) => {
      // Clear any existing timeout
      if (refreshTimeout) {
        clearTimeout(refreshTimeout);
      }

      // Schedule a refresh before the token expires
      const refreshTime = (expiryTime - 60) * 1000; // Refresh 1 minute before expiry
      refreshTimeout = setTimeout(refreshAuthToken, refreshTime);
    };

    // Schedule the initial token refresh
    scheduleTokenRefresh(expiryTime);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(refreshTimeout);
  }, [token, expiryTime]);

  return [token, setToken];
};

export default useTokenRefresh;
