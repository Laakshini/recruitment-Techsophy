import {
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
  renderActionsCell,
} from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import TsDatagrid from "../components/TsDatagrid";
import { Button, IconButton } from "@mui/material";
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
import { GET_JOBS } from "../constants/endpoints";
import AddJobForm from "./Dashboard/AddJobForm";

interface JobFormData {
  jobId: string;
  employmentType: string;
  jobTitle: string;
  experience: string;
  location: string[];
  package: string;
  description: string;
  department: string;
  roleCategory: string;
  aboutCompany: string;
  clientName: string;
  education: string;
  keySkills: string[];
  startDate: Date | null; 
  endDate: Date | null; 
  status: string;
  created: string;
  __v: number;
  openings: number;
}

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
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState<JobFormData>({
    employmentType: "",
   jobTitle: "",
   experience: "0",
   location: [] as string[],
   description: "",
   department: "",
   roleCategory: "",
   aboutCompany: "",
   clientName: "",
   education: "",
   keySkills: [] as string[],
   startDate: null as Date | null,
   endDate: null as Date | null,
   status: "",
   openings: 0,
   package: '10L',
   created: '',
   __v: 0,
   jobId: ''
 });

  const handleEdit = async (id: any) => {
    const response: any = await request.get(
      `${process.env.REACT_APP_API_GATEWAY_URL}${GET_JOBS}`
    );
    setFormData(response.data[0])
    setOpen(true);
    // setContent(id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderRole = (params: any) => {
    return (
      <div className={classes?.roleContainer}>
        <div>
          <img src={JobsIcons} className={classes?.logo} />
        </div>
        <div>
          <div className={classes?.roleText}>{params?.row?.jobTitle}</div>
          <div className={classes?.postedText}>{params?.row?.created}</div>
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
              handleEdit(params.row.id);
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
    const response: any = await request.get(
      `${process.env.REACT_APP_API_GATEWAY_URL}${GET_JOBS}`
    );
    console.log(response);
    setData(response.data);
  };
  useMemo(() => {
    getJobs();
  }, []);

  return (
    <div className={classes?.tableContainer}>
      <div style={{ width: "100%", height: 400 }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
          <AddJobForm formData={formData} handleClose={handleClose} />
          </DialogContent>
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
          getRowId={(row: any) => row._id}
        />
      </div>
    </div>
  );
};

export default Jobs;
