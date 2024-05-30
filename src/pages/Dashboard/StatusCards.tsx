import React from "react";
import { Card, CardContent, Typography, Box, makeStyles } from "@mui/material";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
import { Opacity } from "@mui/icons-material";
import { transform } from "typescript";

interface StatusCardProps {
  number: number;
  description: string;
  image: string;
}
const styles = (theme: any) => ({
  statusCardContainer: {
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing(2),
    backgroundColor: "transparent",
    width: "18rem",
    height: "10rem",
    margin: "10px",
    // border: '2px solid black',
  },
  numberCircle: {
    width: "55px",
    height: "45px",
    borderRadius: "20px",
    backgroundColor: theme.palette.secondary.light,
    border: "1px solid #082777",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
    transform: "translate(-25%, -25%)",
  },
  descriptionContainer: {
    //   height: '48px'
    width: "50%",
    marginLeft: "1rem",
    whiteSpace: "pre-wrap",
  },
  description: {
    color: "#000000",
    Opacity: "50%",
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  imageBox: {
    display: "flex",
    alignItems: "flex-start",
    padding: 4,
    width: "50%",
  },
  image: {
    width: "95px",
    height: "75px",
  },
  number: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontSize: "1rem",
  },
  descriptionImageContainer: {
    backgroundColor: theme.palette.secondary.light,
    width: "100%",
    height: "100%",
    display: "flex",
    borderRadius: "8px",
    // paddingBottom: "2rem",
    // position: "relative",
  },
});

const StatusCard: React.FC<StatusCardProps> = ({
  number,
  description,
  image,
}) => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  return (
    <div className={classes?.statusCardContainer}>
      <div className={classes?.descriptionImageContainer}>
        <div>
          <div className={classes?.numberCircle}>
            <Typography className={classes?.number}>{number}</Typography>
          </div>

          <div className={classes?.descriptionContainer}>
            <Typography className={classes?.description}>
              {description}
            </Typography>
          </div>
        </div>
        <div className={classes?.imageBox}>
          <img src={image} className={classes?.image} />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
