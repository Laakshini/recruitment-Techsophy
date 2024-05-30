import React from "react";
import { Paper } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@emotion/react";
import useCustomStyles from "../../hooks/CustomStylesHook";

import GeneralTab from "./tabs/General";

interface NavigatorProps {
  StyledTypography: React.ElementType;
  PointerIcon: React.ElementType;
}

const styles = (theme: any) => ({
  contactRegisterContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    "@media (min-width: 1000px) and (max-width: 1500px)": {
      padding: "1%  0 2% 0",
    },
    "@media (min-width: 600px) and (max-width: 1000px)": {
      padding: "6%  0 2% 0",
    },
    "@media (max-width: 600px)": {
      padding: "10%  0 2% 0",
    },
  },
  tabsContainer: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
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
    fontSize: "16px",
    opacity: "50%",
    color: theme.palette.secondary.main,
    "&.Mui-selected": {
      // backgroundColor: theme.palette.secondary.main,
      color: `${theme.palette.secondary.main} !important`,
      fontSize: "16px",
      fontWeight: 600,
      opacity: "100%",
    },
  },
  customDialog: {
    "& .MuiDialog-paper": {
      maxWidth: "unset",
    },
  },
  tabsTableContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "32px 26px",
  },
  tabsTableSection: {
    width: "100%",
  },
  tabsSection: {
    width: "70%",
  },
  hr1: {
    border: "none",
    height: "2px",
    backgroundColor: "#E5EDF9",
    margin: 0,
  },
});

function HeroSection({ StyledTypography, PointerIcon }: NavigatorProps) {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  const [tabvalue, setTabValue] = React.useState(0);

  const handleChange = (e: any, newValue: number) => {
    setTabValue(newValue);
  };

  const handleTabSwitching = (tab: any) => {
    switch (tab) {
      case 0:
        return (
          <div className={classes?.tabsTableSection}>
            <GeneralTab />
          </div>
        );
      case 1:
        return <div className={classes?.tabsTableSection}></div>;
      case 2:
        return <div className={classes?.tabsTableSection}></div>;
      case 3:
        return <div className={classes?.tabsTableSection}></div>;
      case 4:
        return <div className={classes?.tabsTableSection}></div>;
      case 5:
        return <div className={classes?.tabsTableSection}></div>;
      case 6:
        return <div className={classes?.tabsTableSection}></div>;

      default:
        return null;
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{ backgroundColor: "#F3F8FF", marginBottom: "1rem" }}
    >
      <div className={classes?.contactRegisterContainer}>
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
                label="General"
              />
              <Tab
                className={classes?.contactRegistrationTab}
                label="Evaluations"
              />
              <Tab
                className={classes?.contactRegistrationTab}
                label="Experience"
              />
              <Tab
                className={classes?.contactRegistrationTab}
                label="Education"
              />
              <Tab className={classes?.contactRegistrationTab} label="Events" />
              <Tab
                className={classes?.contactRegistrationTab}
                label="Documents"
              />
              <Tab
                className={classes?.contactRegistrationTab}
                label="Messages"
              />
            </Tabs>
          </div>
        </div>
        <hr className={classes?.hr1}></hr>
        <div className={classes?.tabsTableContainer}>
          {handleTabSwitching(tabvalue)}
        </div>
      </div>
    </Paper>
  );
}

export default HeroSection;
