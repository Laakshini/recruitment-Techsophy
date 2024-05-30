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
  roleText: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  postedText: {
    fontSize: "0.8rem",
    color: theme.palette.secondary.main,
    opacity: "50%",
  },
});

const Jobs = () => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  const renderRole = (params: any) => {
    return (
      <div className={classes?.roleContainer}>
        <div>
          <img src={JobsIcons} className={classes?.logo} />
        </div>
        <div>
          <div className={classes?.roleText}>{params?.row?.role}</div>
          <div className={classes?.postedText}>{params?.row?.posted}</div>
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
      field: "positionsLeft",
      headerName: "Positions Left",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "applications",
      headerName: "Applications",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "interviewed",
      headerName: "Interviewed",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "rejected",
      headerName: "Rejected",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "feedbackPending",
      headerName: "Feedback Pending",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "offered",
      headerName: "Offered",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      role: "Senior Data Analyst",
      posted: "100 days ago",
      positionsLeft: 3,
      applications: 123,
      interviewed: 40,
      rejected: 33,
      feedbackPending: 7,
      offered: 2,
    },
    {
      id: 2,
      role: "Junior Data Analyst",
      posted: "78 days ago",
      positionsLeft: 7,
      applications: 567,
      interviewed: 22,
      rejected: 20,
      feedbackPending: 2,
      offered: 4,
    },
    {
      id: 3,
      role: "Product Designer",
      posted: "56 days ago",
      positionsLeft: 10,
      applications: 123,
      interviewed: 40,
      rejected: 33,
      feedbackPending: 7,
      offered: 2,
    },
    {
      id: 4,
      role: "Java Developer",
      posted: "48 days ago",
      positionsLeft: 3,
      applications: 123,
      interviewed: 40,
      rejected: 33,
      feedbackPending: 7,
      offered: 2,
    },
    {
      id: 5,
      role: "Product Manager",
      posted: "13 days ago",
      positionsLeft: 7,
      applications: 567,
      interviewed: 22,
      rejected: 20,
      feedbackPending: 2,
      offered: 4,
    },
    {
      id: 6,
      role: "Frontend Developer",
      posted: "30 days ago",
      positionsLeft: 5,
      applications: 210,
      interviewed: 50,
      rejected: 35,
      feedbackPending: 8,
      offered: 3,
    },
    {
      id: 7,
      role: "Backend Developer",
      posted: "45 days ago",
      positionsLeft: 2,
      applications: 150,
      interviewed: 45,
      rejected: 20,
      feedbackPending: 10,
      offered: 1,
    },
    {
      id: 8,
      role: "UI/UX Designer",
      posted: "90 days ago",
      positionsLeft: 1,
      applications: 180,
      interviewed: 55,
      rejected: 40,
      feedbackPending: 5,
      offered: 2,
    },
    {
      id: 9,
      role: "Marketing Specialist",
      posted: "60 days ago",
      positionsLeft: 4,
      applications: 300,
      interviewed: 80,
      rejected: 50,
      feedbackPending: 12,
      offered: 6,
    },
    {
      id: 10,
      role: "Sales Manager",
      posted: "25 days ago",
      positionsLeft: 3,
      applications: 250,
      interviewed: 60,
      rejected: 30,
      feedbackPending: 15,
      offered: 5,
    },
    {
      id: 11,
      role: "Customer Support",
      posted: "40 days ago",
      positionsLeft: 6,
      applications: 400,
      interviewed: 70,
      rejected: 45,
      feedbackPending: 20,
      offered: 8,
    },
    {
      id: 12,
      role: "HR Specialist",
      posted: "70 days ago",
      positionsLeft: 2,
      applications: 220,
      interviewed: 65,
      rejected: 35,
      feedbackPending: 10,
      offered: 4,
    },
    {
      id: 13,
      role: "IT Support",
      posted: "85 days ago",
      positionsLeft: 5,
      applications: 170,
      interviewed: 40,
      rejected: 25,
      feedbackPending: 7,
      offered: 2,
    },
    {
      id: 14,
      role: "DevOps Engineer",
      posted: "95 days ago",
      positionsLeft: 3,
      applications: 200,
      interviewed: 55,
      rejected: 30,
      feedbackPending: 15,
      offered: 3,
    },
    {
      id: 15,
      role: "Cloud Architect",
      posted: "50 days ago",
      positionsLeft: 1,
      applications: 180,
      interviewed: 60,
      rejected: 40,
      feedbackPending: 20,
      offered: 2,
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

export default Jobs;
