import React from "react";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
interface EventProps {
  event: any;
}
const styles = (theme: any) => ({
  container: {
    backgroundColor: "rgba(160, 219, 244, 0.34)",
    // height: "37px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerCompleted: {
    backgroundColor: "#B0F1B65C",
    opacity: "36%",
    height: "37px",
    borderRadius: "4px",
    display: "flex",
  },
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#1B5CBE",
    minWidth: "2rem",
  },
  number: {
    fontSize: "12px",
  },
  divider: {
    color: "#1B5CBE",
  },
  boldSpan: {
    fontWeight: 600,
    fontSize: "10px",
    color: "#1B5CBE",
  },
  normalSpan: {
    fontSize: "10px",
    color: "#1B5CBE",
    fontWeight: 400,
  },
  descriptionContainer: {
    // padding: '2px 5px',
  },
  indicator: {
    width: "0.3rem",
    backgroundColor: "rgba(27, 92, 190, 0.5)",
  },
});
const Event: React.FC<EventProps> = ({ event }) => {
  const isCompleted = event.status === "Completed";
  const theme = useTheme();
  const classes: any = useCustomStyles(styles, theme);
  return (
    <div className={classes?.container}>
      <div className={classes?.time}>
        <Typography className={classes?.number}>{event.time}</Typography>
      </div>
      <Divider orientation="vertical" className={classes?.divider} />
      <div className={classes?.descriptionContainer}>
        <Typography sx={{ fontSize: "10px" }}>
          <span className={classes?.boldSpan}>{event.description.name}</span>,{" "}
          <span className={classes?.normalSpan}>
            {event.description.role}, {event.description.phase}
          </span>
          <span className={classes?.boldSpan}> | {event.description.time}</span>
        </Typography>
      </div>
      <div className={classes?.indicator}></div>
    </div>
  );
};

export default Event;
