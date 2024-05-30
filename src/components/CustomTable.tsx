import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import useCustomStyles from "../hooks/CustomStylesHook";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Colors from "../utils/colors.json";
import { Co2Sharp, Opacity } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import JobsIcons from "../assets/icons/Group 2509.png";

interface TableColumn {
  minHeight?: number;
  id: string;
  label: string;
  align: "left" | "right" | "center";
  minWidth?: number;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const styles = (theme: any) => ({
  customTableContainer: {
    minWidth: 200,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "0.6rem",
    marginBottom: "1rem",
    // border: "1px solid grey",
    // overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4rem", // Initially hide the scrollbar
      height: "0.3rem",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: Colors.GRAY,
      borderRadius: 7,
    },
  },
  customTableHeading: {
    backgroundColor: theme.palette.secondary.light,
    fontWeight: "normal",
    fontSize: "16px",
  },
  btnStyles: {
    fontSize: "8px",
    fontWeight: 300,
  },
  actionsWidth: {
    // minWidth: 200,
  },
  customTableCell: {
    padding: "0.3rem",
  },
  mainText: {
    fontSize: "0.8rem",
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  sideText: {
    fontSize: "11px",
    fontWeight: 400,
    color: theme.palette.secondary.main,
    Opacity: "50%",
  },
  logo: {
    height: "30px",
    width: "30px",
    marginRight: "5px",
  },
  subText: {
    fontSize: "10px",
    fontWeight: 300,
    color: theme.palette.secondary.main,
    Opacity: "50%",
  },
  tableHeadings: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: theme.palette.secondary.main,
    Opacity: "50%",
  },
});

const CustomTable: React.FC<TableProps> = ({ columns, data }) => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);
  // console.log('TableData', data);

  return (
    <TableContainer component={Paper} className={classes?.customTableContainer}>
      <Table stickyHeader size="medium">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                className={classes?.customTableHeading}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                <Typography className={classes?.tableHeadings}>
                  {column.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  className={classes?.customTableCell}
                >
                  {column.id === "job" ||
                  column.id === "positionsLeft" ||
                  column.id === "offered" ? (
                    <Typography className={classes?.mainText}>
                      {column.id === "job" ? (
                        <div style={{ display: "flex" }}>
                          <img src={JobsIcons} className={classes?.logo} />
                          <div>
                            <Typography className={classes?.mainText}>
                              {row[column.id].role}
                            </Typography>
                            <Typography className={classes?.subText}>
                              {row[column.id].posted}
                            </Typography>
                          </div>
                        </div>
                      ) : (
                        <>{row[column.id]}</>
                      )}
                    </Typography>
                  ) : (
                    <Typography className={classes?.sideText}>
                      {row[column.id]}
                    </Typography>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
