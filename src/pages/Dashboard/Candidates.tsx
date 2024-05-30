import {
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import React, { useState } from "react";
import TsDatagrid from "../../components/TsDatagrid";
import { IconButton } from "@mui/material";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@mui/material";
import JobsIcons from "../../assets/icons/Group 2509.png";
const styles = (theme: any) => ({
  tableContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.light,
  },
  logo: {
    width: "2rem",
    height: "2rem",
  },
  roleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 3,
  },
  nameText: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  roleText: {
    fontSize: "0.8rem",
    color: theme.palette.secondary.main,
    opacity: "50%",
  },
});

const Candidates = () => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  const renderRole = (params: any) => {
    return (
      <div className={classes?.roleContainer}>
        <div>
          <img src={JobsIcons} className={classes?.logo} />
        </div>
        <div>
          <div className={classes?.nameText}>
            {params?.row?.firstName + params?.row?.lastName}
          </div>
          <div className={classes?.roleText}>{params?.row?.role}</div>
        </div>
      </div>
    );
  };

  const columns: GridColDef[] = [
    {
      field: "",
      headerName: "",
      type: "string",
      sortable: false,
      width: 250,
      renderCell: renderRole,
    },
    {
      field: "appliedOn",
      headerName: "Applied On",
      type: "number",
      width: 170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "interviewRoundCompleted",
      headerName: "Interview Round",
      type: "number",
      width: 170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "assignedTo",
      headerName: "Assigned To",
      type: "number",
      width: 170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "score",
      headerName: "Score",
      type: "number",
      width: 170,
      headerAlign: "center",
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      firstName: "Vinod",
      lastName: "Gadde",
      appliedOn: "22-04-2024",
      interviewRoundCompleted: 6,
      totalInterviewRounds: 10,
      assignedTo: "Santosh",
      score: 70,
      role: "Sr Frontend Developer",
    },
    {
      id: 2,
      firstName: "Anjali",
      lastName: "Mehta",
      appliedOn: "15-03-2024",
      interviewRoundCompleted: 8,
      totalInterviewRounds: 10,
      assignedTo: "Ravi",
      score: 85,
      role: "Backend Developer",
    },
    {
      id: 3,
      firstName: "Rohit",
      lastName: "Sharma",
      appliedOn: "10-05-2024",
      interviewRoundCompleted: 5,
      totalInterviewRounds: 8,
      assignedTo: "Priya",
      score: 78,
      role: "Full Stack Developer",
    },
    {
      id: 4,
      firstName: "Sneha",
      lastName: "Patil",
      appliedOn: "01-04-2024",
      interviewRoundCompleted: 7,
      totalInterviewRounds: 10,
      assignedTo: "Arjun",
      score: 90,
      role: "Data Scientist",
    },
    {
      id: 5,
      firstName: "Amit",
      lastName: "Kumar",
      appliedOn: "18-02-2024",
      interviewRoundCompleted: 6,
      totalInterviewRounds: 10,
      assignedTo: "Neha",
      score: 75,
      role: "DevOps Engineer",
    },
    {
      id: 6,
      firstName: "Priya",
      lastName: "Nair",
      appliedOn: "30-03-2024",
      interviewRoundCompleted: 4,
      totalInterviewRounds: 8,
      assignedTo: "Santosh",
      score: 80,
      role: "Mobile App Developer",
    },
    {
      id: 7,
      firstName: "Vikas",
      lastName: "Joshi",
      appliedOn: "25-04-2024",
      interviewRoundCompleted: 3,
      totalInterviewRounds: 5,
      assignedTo: "Ravi",
      score: 68,
      role: "QA Engineer",
    },
    {
      id: 8,
      firstName: "Maya",
      lastName: "Singh",
      appliedOn: "12-01-2024",
      interviewRoundCompleted: 9,
      totalInterviewRounds: 10,
      assignedTo: "Priya",
      score: 88,
      role: "Product Manager",
    },
    {
      id: 9,
      firstName: "Raj",
      lastName: "Kapoor",
      appliedOn: "22-04-2024",
      interviewRoundCompleted: 10,
      totalInterviewRounds: 10,
      assignedTo: "Arjun",
      score: 95,
      role: "Project Manager",
    },
    {
      id: 10,
      firstName: "Alok",
      lastName: "Verma",
      appliedOn: "05-04-2024",
      interviewRoundCompleted: 2,
      totalInterviewRounds: 6,
      assignedTo: "Neha",
      score: 65,
      role: "Business Analyst",
    },
  ];

  return (
    <div className={classes?.tableContainer}>
      <div style={{ width: "100%", height: 400 }}>
        <TsDatagrid
          sx={{
            "& .MuiDataGrid-columnSeparator": { display: "none" },
            "& .MuiDataGrid-columnHeader--moving": {
              backgroundColor: "unset",
            },
          }}
          rows={data}
          columns={columns}
          // pageSize={10}
          // pageSizeArray={[10, 20, 30]}
          // getSelectedRowsData={() => {}}
          // handlePageChange={() => {}}
          // handlePageSizeChange={() => {}}
          // isCheckboxSelection={false}
          // totalElements={data?.length}
        />
      </div>
    </div>
  );
};

export default Candidates;
