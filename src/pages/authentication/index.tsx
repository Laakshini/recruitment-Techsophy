import {
  Box,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import Logo from "../../assets/icons/Group 2BlueBird.png";
import LoginIcon from "../../assets/icons/Group 2495login.svg";
import useCustomStyles from "../../hooks/CustomStylesHook";
import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";
import { StyledTypography } from "../candidateProfile/styles";

interface LoginProps {
  setLogin: any;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E6EEF8",
  padding: theme.spacing(10),
  boxShadow: `
    5px 5px 15px rgba(255, 255, 255, 0.1),
    inset -5px -5px 15px rgba(255, 255, 255, 0.2),
    10px 10px 30px rgba(0, 0, 0, 0.3),
    -10px -10px 30px rgba(255, 255, 255, 0.2)
  `,
}));

const styles = (theme: any) => ({
  commonFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  tabsContainer: {
    display: "flex",
    width: "100%",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
  contactRegisterTabs: {
    borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
    background: "transparent",
    "&.MuiTabs-root .MuiTabScrollButton-root svg": {
      color: theme.palette.secondary.main,
    },
    "&.MuiTabs-root .MuiTabs-indicator": {
      backgroundColor: "#F7AC25",
      height: "8%",
      borderRadius: "0.5vw 0.5vw 0 0",
    },
  },
  contactRegistrationTab: {
    textTransform: "capitalize",
    fontWeight: 400,
    fontSize: "1.2rem",
    opacity: "50%",
    "&.Mui-selected": {
      color: "#4B93E7 !important",
      fontSize: "1.5rem",
      fontWeight: 600,
      opacity: "100%",
    },
  },
  tabsTableContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 26px",
  },
  tabsTableSection: {
    width: "20rem",
    height: "20rem",
  },
  tabsSection: {
    width: "100%",
  },
  hr1: {
    border: "none",
    height: "2px",
    backgroundColor: "#E5EDF9",
    margin: 0,
  },
  relativeBox: {
    position: "relative",
  },
  indicator: {
    width: "2px",
    height: "100%",
    backgroundColor: "#D3E2F4",
    borderRadius: "4px",
    position: "absolute",
    left: "0px",
  },
  borderLeft: {
    borderLeft: "2px solid #D3E2F4",
  },
  loginBox: {
    width: "99vw",
    height: "97.8vh",
    backgroundColor: "rgb(255, 255, 255)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  paperInner: {
    backgroundColor: "#E6EEF8",
    width: "540px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "32px",
  },
});

const Login = ({ setLogin }: any) => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  const [tabvalue, setTabValue] = React.useState(0);

  const handleChange = (e: any, newValue: number) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const handleTabSwitching = (tab: any) => {
    switch (tab) {
      case 0:
        return (
          <div className={classes?.tabsTableSection}>
            <LoginTab setLogin={setLogin} />
          </div>
        );
      case 1:
        return (
          <div className={classes?.tabsTableSection}>
            <RegisterTab />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <Box className={classes?.loginBox}>
      <StyledPaper elevation={0}>
        <Paper elevation={0} className={classes?.paperInner}>
          <Box className={classes?.commonFlex}>
            {/* <Box
              component="img"
              src={Logo}
              alt="Logo icon"
              sx={{ width: "16px", height: "28px" }}
            /> */}
            <StyledTypography fontSize="1.5rem" fontWeight={"600"}>
              Techsophy HR
            </StyledTypography>
          </Box>
          <Box className={classes?.commonFlex}>
            <Box
              component="img"
              src={LoginIcon}
              alt="Login icon"
              sx={{ width: "206px", height: "178px" }}
            />
            <Box className={classes?.relativeBox}>
              <div className={classes?.indicator}></div>
              <div className={classes?.tabsContainer}>
                <div className={classes?.tabsSection}>
                  <Tabs
                    id="Product-Register-Tabs"
                    value={tabvalue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    className={classes?.contactRegisterTabs}
                  >
                    <Tab
                      className={classes?.contactRegistrationTab}
                      label="Login"
                      value={0}
                    />

                    <Tab
                      className={`${classes?.contactRegistrationTab} ${classes?.borderLeft}`}
                      label="Sign Up"
                      value={1}
                    />
                  </Tabs>
                </div>
              </div>
              <hr className={classes?.hr1}></hr>
              <div className={classes?.tabsTableContainer}>
                {handleTabSwitching(tabvalue)}
              </div>
            </Box>
          </Box>
        </Paper>
      </StyledPaper>
    </Box>
  );
};

export default Login;
