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

const Onboarding = () => {
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
      field: "onboardedOn",
      headerName: "Onboarded On",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "trainingCompleted",
      headerName: "Training",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "documentsSubmitted",
      headerName: "Documentation",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "supervisor",
      headerName: "Supervisor",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "project",
      headerName: "Project",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      firstName: "Vinod",
      lastName: "Gadde",
      onboardedOn: "22-04-2024",
      trainingCompleted: 6,
      totaltrainings: 10,
      documentsSubmitted: 6,
      totalDocuments: 10,
      supervisor: "Santosh",
      score: 70,
      role: "Sr Frontend Developer",
      project: "Apple",
    },
    {
      id: 2,
      firstName: "Arjun",
      lastName: "Kumar",
      onboardedOn: "15-05-2024",
      trainingCompleted: 8,
      totaltrainings: 10,
      documentsSubmitted: 9,
      totalDocuments: 10,
      supervisor: "Rajesh",
      score: 85,
      role: "Backend Developer",
      project: "Google",
    },
    {
      id: 3,
      firstName: "Sneha",
      lastName: "Rao",
      onboardedOn: "01-04-2024",
      trainingCompleted: 10,
      totaltrainings: 10,
      documentsSubmitted: 10,
      totalDocuments: 10,
      supervisor: "Anita",
      score: 95,
      role: "Data Scientist",
      project: "Microsoft",
    },
    {
      id: 4,
      firstName: "Amit",
      lastName: "Sharma",
      onboardedOn: "10-03-2024",
      trainingCompleted: 7,
      totaltrainings: 10,
      documentsSubmitted: 7,
      totalDocuments: 10,
      supervisor: "Vikas",
      score: 80,
      role: "DevOps Engineer",
      project: "Amazon",
    },
    {
      id: 5,
      firstName: "Priya",
      lastName: "Gupta",
      onboardedOn: "05-02-2024",
      trainingCompleted: 9,
      totaltrainings: 10,
      documentsSubmitted: 9,
      totalDocuments: 10,
      supervisor: "Neha",
      score: 90,
      role: "Project Manager",
      project: "Netflix",
    },
    {
      id: 6,
      firstName: "Rohit",
      lastName: "Verma",
      onboardedOn: "12-01-2024",
      trainingCompleted: 5,
      totaltrainings: 10,
      documentsSubmitted: 5,
      totalDocuments: 10,
      supervisor: "Sandeep",
      score: 65,
      role: "QA Engineer",
      project: "Facebook",
    },
    {
      id: 7,
      firstName: "Nisha",
      lastName: "Patel",
      onboardedOn: "20-05-2024",
      trainingCompleted: 4,
      totaltrainings: 10,
      documentsSubmitted: 4,
      totalDocuments: 10,
      supervisor: "Kavita",
      score: 60,
      role: "UI/UX Designer",
      project: "Tesla",
    },
    {
      id: 8,
      firstName: "Karan",
      lastName: "Joshi",
      onboardedOn: "15-04-2024",
      trainingCompleted: 6,
      totaltrainings: 10,
      documentsSubmitted: 8,
      totalDocuments: 10,
      supervisor: "Ravi",
      score: 75,
      role: "Mobile Developer",
      project: "Spotify",
    },
    {
      id: 9,
      firstName: "Megha",
      lastName: "Singh",
      onboardedOn: "25-04-2024",
      trainingCompleted: 8,
      totaltrainings: 10,
      documentsSubmitted: 8,
      totalDocuments: 10,
      supervisor: "Preeti",
      score: 82,
      role: "Full Stack Developer",
      project: "Airbnb",
    },
    {
      id: 10,
      firstName: "Rahul",
      lastName: "Nair",
      onboardedOn: "30-03-2024",
      trainingCompleted: 7,
      totaltrainings: 10,
      documentsSubmitted: 7,
      totalDocuments: 10,
      supervisor: "Akhil",
      score: 78,
      role: "System Analyst",
      project: "Uber",
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

export default Onboarding;
