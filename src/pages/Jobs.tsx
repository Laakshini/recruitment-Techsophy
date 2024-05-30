import {
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
  renderActionsCell,
} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import TsDatagrid from "../components/TsDatagrid";
import { Button, IconButton } from "@mui/material";
import useCustomStyles from "../hooks/CustomStylesHook";
import { useTheme } from "@mui/material";
import JobsIcons from "./../assets/icons/Group 2509.png";
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { request } from "../services/Request";
import { GET_JOBS } from "../constants/endpoints";
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
  const [open, setOpen]= useState(false);
  const [content, setContent]= useState("");
  const handleEdit=(id:any)=>{
    setOpen(true);
    setContent(id);

  }
  const handleClose=()=>{
    setOpen(false);
  }

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
  const renderActions =(params:any)=>{
    return(
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <IconButton>
          <EditIcon onClick={()=>{handleEdit(params.row.id)}}/>
        </IconButton>
      </div>
    )
  }

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
      field: "openings",
      headerName: "Openings",
      type: "number",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "location",
      headerName: "Location",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "employmentType",
      headerName: "Employment Type",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "roleCategory",
      headerName: "Role Category",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "experience",
      headerName: "Experience",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "package",
      headerName: "Package",
      type: "string",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      headerAlign: "center",
      align: "center",
      renderCell: renderActions,
    }
  ];
  const data=[
    {
      id: 1,
      role: "Senior Data Analyst",
      posted: "100 days ago",
      openings: 2,
      location: 'Hyderabad',
      status: 'Active',
      employmentType: 'Full Time',
      roleCategory: 'Administ',
      experience: 'Senior Level',
      package: '10L',
    },
    {
      id: 2,
      role: "Senior Data Analyst",
      posted: "100 days ago",
      openings: 2,
      location: 'Hyderabad',
      status: 'Active',
      employmentType: 'Full Time',
      roleCategory: 'Administ',
      experience: 'Senior Level',
      package: '10L',
    }
  ];
  const getJobs=async()=>{
    const response:any= await request.get(`${process.env.REACT_APP_API_GATEWAY_URL}${GET_JOBS}`);
    console.log(response);
  }
  useEffect(()=>{
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })


  return (
    <div className={classes?.tableContainer}>
      <div style={{ width: "100%", height: 400 }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Job</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" sx={{color: '#000000'}}>Submit</Button>
          </DialogActions>
        </Dialog>
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
