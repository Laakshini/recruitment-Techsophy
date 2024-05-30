import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Paper,
  Input,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { StyledTypography } from "../candidateProfile/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { registerUser } from "../../services/LoginService";
import { useDispatch } from "react-redux";
import CONSTANTS from "../../constants/constants";

const styles = (theme: any) => ({
  commonFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
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
    height: "2.5rem",
    marginBottom: "8px",
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
    marginTop: "8px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
    gap: "1rem",
    "&:hover": {
      backgroundColor: "#f0a822",
    },
  },
});

function RegisterTab() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useCustomStyles(styles, theme);

  const [credentials, setCredentials] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    groups: [],
    roles: [],
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRe, setShowPasswordRe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibilityRe = () => {
    setShowPasswordRe(!showPasswordRe);
  };

  const handleUserRegister = async () => {
    const response = await registerUser(credentials);
    console.log(response);
    if (response?.success) {
      dispatch({
        type: "SEND_ALERT",
        data: {
          enable: true,
          type: "success",
          message: response?.message,
          duration: 50000,
        },
      });
    } else {
      sessionStorage.setItem(CONSTANTS.REACT_TOKEN, "");
      alert(response?.message);
    }
  };

  return (
    <Container maxWidth={false} className={classes?.mainContainer}>
      <div className={classes?.authInputs}>
        <Input
          onChange={(event) =>
            setCredentials({
              ...credentials,
              firstName: event.target.value,
            })
          }
          disableUnderline
          type="name"
          className={classes?.commonInput}
          placeholder="First Name"
        />
        <Input
          onChange={(event) =>
            setCredentials({
              ...credentials,
              lastName: event.target.value,
            })
          }
          disableUnderline
          type="name"
          className={classes?.commonInput}
          placeholder="Last Name"
        />
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
          placeholder="Email"
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
            style={{ top: "43%" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div style={{ position: "relative" }}>
          <Input
            onChange={(event) =>
              setCredentials({
                ...credentials,
                mobile: event.target.value,
              })
            }
            disableUnderline
            className={classes?.commonInput}
            placeholder="Mobile"
            style={{ marginBottom: "0px" }}
          />
        </div>
        <button className={classes?.loginBtn} onClick={handleUserRegister}>
          Sign Up
        </button>
        {/* <button
          className={classes?.loginBtn}
          style={{ backgroundColor: "#4B93E7" }}
        >
          Login with Google{" "}
          <GoogleIcon fontSize="small" />
        </button> */}
      </div>
    </Container>
  );
}

export default RegisterTab;
