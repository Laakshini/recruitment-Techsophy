import { Typography } from "@mui/material";
import React from "react";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { eventsToday, eventsTomorrow, eventsThisWeek } from "../../data";
import Event from "./Event";
interface CalenderProps {
  eventsToday: any;
  eventsTomorrow: any;
  eventsThisWeek: any;
}
const styles = (theme: any) => ({
  text: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontSize: "16px",
    display: "flex",
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // marginTop: '10px',
  },
  subText: {
    color: theme.palette.secondary.main,
    opacity: "50%",
    fontSize: "12px",
    fontWeight: 600,
  },
});
const Calender = () => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);
  return (
    <>
      <Typography className={classes?.text}>
        Upcoming Events <AddCircleOutlineIcon sx={{ color: "#4B93E7" }} />
      </Typography>
      <div className={classes?.section}>
        <Typography className={classes?.subText}>Today</Typography>
        <div className={classes?.section}>
          {eventsToday.map((eachEvent: any) => {
            return <Event event={eachEvent} />;
          })}
        </div>
      </div>
      <div className={classes?.section}>
        <Typography className={classes?.subText}>Tomorrow</Typography>
        <div className={classes?.section}>
          {eventsTomorrow.map((eachEvent: any) => {
            return <Event event={eachEvent} />;
          })}
        </div>
      </div>
      <div className={classes?.section}>
        <Typography className={classes?.subText}>This Week</Typography>
        <div className={classes?.section}>
          {eventsThisWeek.map((eachEvent: any) => {
            return <Event event={eachEvent} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Calender;
