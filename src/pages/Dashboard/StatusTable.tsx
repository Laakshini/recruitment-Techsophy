import React, { useState } from "react";

import useCustomStyles from "../../hooks/CustomStylesHook";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Jobs from "./Jobs";
import Candidates from "./Candidates";
import Onboarding from "./Onboarding";
import Colors from "../../utils/colors.json";
import { useTheme } from "@emotion/react";

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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
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
    fontWeight: 300,
    fontSize: "16px",
    Opacity: "50%",
    color: theme.palette.secondary.main,
    "&.Mui-selected": {
      // backgroundColor: theme.palette.secondary.main,
      color: `${theme.palette.secondary.main} !important`,
      fontSize: "16px",
      fontWeight: 600,
    },
  },
  customDialog: {
    "& .MuiDialog-paper": {
      maxWidth: "unset",
    },
  },
  tabsTableContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  tabsTableSection: {
    width: "100%",
  },
  tabsSection: {
    width: "70%",
  },
});

function StatusTable() {
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
            <Jobs />
          </div>
        );
      case 1:
        return (
          <div className={classes?.tabsTableSection}>
            <Candidates />
          </div>
        );
      case 2:
        return (
          <div className={classes?.tabsTableSection}>
            <Onboarding />
          </div>
        );

      default:
        return null;
    }
  };

  return (
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
            <Tab className={classes?.contactRegistrationTab} label="Jobs" />
            <Tab
              className={classes?.contactRegistrationTab}
              label="Candidates"
            />
            <Tab
              className={classes?.contactRegistrationTab}
              label="Onboarding"
            />
          </Tabs>
        </div>
      </div>
      <div className={classes?.tabsTableContainer}>
        {handleTabSwitching(tabvalue)}
      </div>
    </div>
  );
}

export default StatusTable;
