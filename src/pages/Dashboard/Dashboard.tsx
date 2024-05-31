import React, { useState } from "react";
import StatusTable from "./StatusTable";
import { Button, Grid, Typography, Modal, Box } from "@mui/material";
import StatusCard from "./StatusCards";
import { statusCardData } from "../../data";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Calender from "./Calender";
import AddJobForm from "./AddJobForm";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";

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
  dashboardContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: "2%",
  },
  statusSection: {
    width: "78%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  text: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontSize: "22px",
  },
  statusCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    gap: "2%",
    width: "30%",
  },
  button: {
    backgroundColor: "#4B93E7",
    color: "#FFFFFF",
    textTransform: "none",
    borderRadius: "8px",
    boxShadow: "none",
  },
  calender: {
    width: "20%",
    height: "auto",
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4px",
    padding: "10px",
  },
  tableContainer: {},
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
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4rem",
    },
    "&::-webkit-scrollbar-track": {
      background: "#E5EDF9",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#9eaabb",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#92a1b4",
    },
  },
});

function Dashboard() {
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
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = (event: React.MouseEvent, reason: string) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div className={classes?.dashboardContainer}>
      <div className={classes?.statusSection}>
        <div>
          <div className={classes?.heading}>
            <Typography className={classes?.text}>Overview</Typography>
            <div className={classes?.buttonContainer}>
              <Button
                variant="contained"
                className={classes?.button}
                size="small"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Candidate
              </Button>
              <Button
                variant="contained"
                className={classes?.button}
                size="small"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleOpen}
              >
                Add Job
              </Button>
            </div>
          </div>

          <div className={classes?.statusCardContainer}>
            {statusCardData.map((data) => (
              <StatusCard
                key={data.description} // Ensure each item has a unique key
                number={data.number}
                description={data.description}
                image={data.image}
              />
            ))}
          </div>
        </div>
        <div className={classes?.tableContainer}>
          <Typography className={classes?.text}>Require Attention</Typography>
          <StatusTable />
        </div>
      </div>
      <div className={classes?.calender}>{/* <Calender /> */}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="job-form-modal"
        aria-describedby="job-form-description"
      >
        <Box className={classes?.modalStyle}>
          <AddJobForm formData={formData} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default Dashboard;
