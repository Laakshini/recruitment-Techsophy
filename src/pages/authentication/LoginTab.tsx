import {
  Container,
  Checkbox,
  Input,
  FormControlLabel,
  Box,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import useCustomStyles from "../../hooks/CustomStylesHook";
import GoogleIcon from "@mui/icons-material/Google";
import { StyledTypography } from "../candidateProfile/styles";
import { StyledTypographyHover } from "../candidateProfile/styles";
import { fetchUserToken } from "../../services/LoginService";
import CONSTANTS from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

interface LoginProps {
  setLogin: any;
}

const styles = (theme: any) => ({
  commonFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  stackFlex: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commonInput: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "400",
    color: "#082777",
    borderRadius: "8px",
    backgroundColor: "#DDEAFB",
    border: "1px solid #4B93E7",
    width: "100%",
    height: "3rem",
    "&:focus": {
      borderColor: "red",
    },
  },
  sampButtonBlue: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#4B93E7",
  },
  loginBtn: {
    backgroundColor: "#F7AC25",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    color: "#ffffff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    marginTop: "16px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
    gap: "1rem",
    "&:hover": {
      backgroundColor: "#f0a822",
    },
  },
});

function LoginTab({ setLogin }: any) {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useCustomStyles(styles, theme);
  const [checked, setChecked] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUserLogin = async () => {
    setIsLoading(true);
    const response: any = await fetchUserToken(credentials);
    console.log(response);
    if (response?.success) {
      sessionStorage.setItem(CONSTANTS.REACT_TOKEN, response?.token || "");
      sessionStorage.setItem("tokenExpiry", response?.tokenExpiry || 0);
      sessionStorage.setItem(CONSTANTS.FIRST_NAME, response?.data?.firstName);
      sessionStorage.setItem(CONSTANTS.LAST_NAME, response?.data?.lastName);
      sessionStorage.setItem(CONSTANTS.USER_EMAIL, response?.data?.email);
      if (sessionStorage.getItem(CONSTANTS.REACT_TOKEN)) {
        navigate(`${process.env.PUBLIC_URL}/dashboard`);
      }
      dispatch({
        type: "SEND_ALERT",
        data: {
          enable: true,
          type: "success",
          message: response?.message,
          duration: 5000,
        },
      });
      setIsLoading(false);
    } else {
      sessionStorage.setItem(CONSTANTS.REACT_TOKEN, "");
      alert(response?.message);
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth={false} className={classes?.mainContainer}>
      <div className={classes?.authInputs}>
        <Input
          onChange={(event) =>
            setCredentials({
              ...credentials,
              email: event.target.value,
            })
          }
          disableUnderline
          type="email"
          className={classes?.commonInput}
          placeholder="Email or Phone"
          style={{ marginBottom: "24px" }}
        />
        <div style={{ position: "relative" }}>
          <Input
            onChange={(event) =>
              setCredentials({
                ...credentials,
                password: event.target.value,
              })
            }
            disableUnderline
            type={showPassword ? "text" : "password"}
            className={classes?.commonInput}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={classes?.sampButtonBlue}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <Box className={classes?.stackFlex}>
          <Box className={classes?.commonFlex}>
            <Checkbox
              size="small"
              checked={checked}
              onChange={handleChange}
              color="primary"
              sx={{
                margin: "0px -8px",
                "&.Mui-checked": {
                  color: "#4B93E7",
                },
              }}
            />
            <StyledTypography>Remember Me</StyledTypography>
          </Box>
          <div>
            <StyledTypographyHover>Forgot Password?</StyledTypographyHover>
          </div>
        </Box>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <button onClick={handleUserLogin} className={classes?.loginBtn}>
            Sign in
          </button>
        )}

        {/* <button
          className={classes?.loginBtn}
          style={{ backgroundColor: "#4B93E7" }}
        >
          Login with Google <GoogleIcon fontSize="small" />
        </button> */}
      </div>
    </Container>
  );
}

export default LoginTab;
