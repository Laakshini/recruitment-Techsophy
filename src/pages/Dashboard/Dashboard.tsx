import React from "react";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
import StatusTable from "./StatusTable";
import { Button, Grid, Typography } from "@mui/material";
import StatusCard from "./StatusCards";
import { statusCardData } from "../../data";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Calender from "./Calender";
const styles = (theme: any) => ({
  dashboardContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: "2%",
    // justifyContent: "center",
    // alignItems: "center",
    // height: "100vh",
  },
  statusSection: {
    width: "78%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // marginRight: "2rem",
  },
  text: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontSize: "22px",
  },
  statusCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    gap: "2%",
    width: "30%",
  },
  button: {
    backgroundColor: "#4B93E7",
    color: "#FFFFFF",
    textTransform: "none",
    borderRadius: "8px",
    boxShadow: "none",
  },
  calender: {
    width: "20%",
    height: "auto",
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4px",
    padding: "10px",
  },
  tableContainer: {},
});
function Dashboard() {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);
  return (
    <div className={classes?.dashboardContainer}>
      <div className={classes?.statusSection}>
        <div>
          <div className={classes?.heading}>
            <Typography className={classes?.text}>Overview</Typography>
            <div className={classes?.buttonContainer}>
              <Button
                variant="contained"
                className={classes?.button}
                size="small"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Candidate
              </Button>
              <Button
                variant="contained"
                className={classes?.button}
                size="small"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Job
              </Button>
            </div>
          </div>

          <div className={classes?.statusCardContainer}>
            {statusCardData.map((data) => (
              <StatusCard
                number={data.number}
                description={data.description}
                image={data.image}
              />
            ))}
          </div>
        </div>
        <div className={classes?.tableContainer}>
          <Typography className={classes?.text}>Require Attention</Typography>
          <StatusTable />
        </div>
      </div>
      <div className={classes?.calender}>{/* <Calender /> */}</div>
    </div>
  );
}

export default Dashboard;

/* Control Flow: index -> App -> Wrapper -> Header -> SideNav -> NavListItems(Dashboard) -> Dashboard */
