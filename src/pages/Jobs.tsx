import {
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
  renderActionsCell,
} from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import TsDatagrid from "../components/TsDatagrid";
import { Box, Button, IconButton, Modal } from "@mui/material";
import useCustomStyles from "../hooks/CustomStylesHook";
import { useTheme } from "@mui/material";
import JobsIcons from "./../assets/icons/Group 2509.png";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { request } from "../services/Request";
import { GET_JOBS, GET_JOB_BY_ID } from "../constants/endpoints";
import AddJobForm from "./Dashboard/AddJobForm";
import ReactLoading from 'react-loading';
import { getAllJobs, getJobById } from "../services/JobService";
import zIndex from "@mui/material/styles/zIndex";
 

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
  modalStyle: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "90%",
    width: "40%",
    
  },
  loader: {
    color: theme.palette.secondary.main,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  formLoader:{
    textAlign: "center",
    position: "relative",
    top: "50%",
    left: "50%",
    zIndex: 99,
  }
  
});
 
const Jobs = () => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState();
  const handleEdit = async (id: any) => {
    setOpen(true);
    const response: any = await getJobById(id);
    setFormData(response.data);
    // setContent(id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const daysAgo = (uploadDate: any) => {
  const upload: any = new Date(uploadDate);
  const today: any = new Date();
  const diffTime = today - upload;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays===0){
    return "Today"
  }
  return `${diffDays} days ago`;
};
 
  const renderRole = (params: any) => {
    const posted = daysAgo(params?.row?.created)
    return (
      <div className={classes?.roleContainer}>
        <div>
          <img src={JobsIcons} className={classes?.logo} />
        </div>
        <div>
          <div className={classes?.roleText}>{params?.row?.jobTitle}</div>
          <div className={classes?.postedText}>{posted}</div>
        </div>
      </div>
    );
  };
  const renderActions = (params: any) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton>
          <EditIcon
            onClick={() => {
              handleEdit(params.row.jobId);
            }}
          />
        </IconButton>
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
    },
  ];
 
  const getJobs = async () => {
    const response= await getAllJobs();
    setData(response.data);
  };
  useEffect(() => {
    getJobs();
  }, []);
 
  return (
    <div className={classes?.tableContainer}>
      <div style={{ width: "100%", height: 400 }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="job-form-modal"
        aria-describedby="job-form-description"
      >
        <Box className={classes?.modalStyle}>
          {
          formData?
          <AddJobForm formData={formData} handleClose={handleClose} dialogAction={"Edit"}/>
          :
          <ReactLoading type="spin" color="#071C50" height={50} width={50} className={classes?.formLoader}/>
          }
        </Box>
      </Modal>
      {
      data?
      <TsDatagrid
          sx={{
            "& .MuiDataGrid-columnSeparator": { display: "none" },
            "& .MuiDataGrid-columnHeader--moving": {
              backgroundColor: "unset",
            },
          }}
          rows={data}
          columns={columns}
          getRowId={(row: any) => row._id}
        />
        :
        <ReactLoading type="spin" color="#071C50" height={50} width={50} className={classes?.loader}/>
      }
        
      </div>
    </div>
  );
};
 
export default Jobs;