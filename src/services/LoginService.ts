import axios from "axios";
import { USER_REGISTER, USER_SIGN_IN } from "../constants/endpoints";

interface FetchUserTokenResponse {
  tokenExpiry: number;
  token: string;
  message: string;
  success: boolean;
  data: {};
}

interface SignInResponse {
  data: {
    tokenExpiry: number;
    success: boolean;
    token?: string;
    message: string;
    data: {};
  };
}

export const fetchUserToken = async (body: {
  email: string;
  password: string;
}): Promise<FetchUserTokenResponse> => {
  try {
    const res: SignInResponse = await axios.post(
      `${process.env.REACT_APP_API_GATEWAY_URL}${USER_SIGN_IN}`,
      body
    );

    if (res?.data?.success) {
      return {
        tokenExpiry: res?.data?.tokenExpiry,
        token: res?.data?.token || "",
        message: res?.data?.message,
        success: true,
        data: res?.data?.data,
      };
    }

    return {
      token: "",
      message: res?.data?.message,
      success: false,
      data: {},
      tokenExpiry: 0,
    };
  } catch (error) {
    console.error("Error fetching user token:", error);
    return {
      token: "",
      message:
        "An error occurred while signing in, Please check your credientials",
      success: false,
      data: {},
      tokenExpiry: 0,
    };
  }
};

export const registerUser = async (body: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  groups: [string];
  roles: [string];
}) => {
  try {
    const res: any = await axios.post(
      `${process.env.REACT_APP_API_GATEWAY_URL}${USER_REGISTER}`,
      body
    );

    if (res?.data?.success) {
      return {
        message: res?.data?.message,
        success: true,
        data: res?.data?.data,
      };
    }

    return { message: res?.data?.message, success: false, data: {} };
  } catch (error) {
    return {
      token: "",
      message:
        "An error occurred while registering user, Please try after some time",
      success: false,
    };
  }
};
