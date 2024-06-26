import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  MenuItem,
  TextField,
  TextareaAutosize,
  Button,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
import { Clear } from "@mui/icons-material";
import { request } from "../../services/Request";
import { ADD_JOBS } from "../../constants/endpoints";
import { v4 as uuidv4 } from "uuid";
const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
];

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

interface JobFormProps {
  formData: JobFormData;
  handleClose: (event: React.MouseEvent, reason: string) => void;
}

const styles = (theme: any) => ({
  jobAddForm: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
  },
  heading: {
    color: "#071C50",
    fontWeight: "600",
  },
  formFields: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  rowFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
  saveButton: {
    backgroundColor: "green",
    "&:hover": { backgroundColor: "darkgreen" },
  },
  closeButton: {
    marginRight: "1.5rem",
  },
  textArea: {
    resize: "none",
    outline: "none",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
  },
  textField: {
    marginBottom: theme.spacing(2),
    "& .MuiInputLabel-root": {
      color: "#969696",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#4B93E7",
      },
      "& input": {
        color: "#000",
      },
    },
  },
  errorTextField: {
    borderColor: "red",
  },
  errorMessage: {
    color: "red",
    fontSize: "0.875rem",
  },
});

const AddJobForm: React.FC<JobFormProps> = ({ formData, handleClose }) => {
  console.log("AddJobForm", formData);
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  const [formState, setFormState] = useState({
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
    package: "10L",
    created: "",
    __v: 0,
    jobId: "",
  });

  useEffect(() => {
    if (formData) {
      // Update form state with the provided form data
      setFormState(formData);
      console.log("formData1: ", formData);
    }
  }, [formData]);

  useEffect(() => {
    console.log("formState: ", formState);
  }, [formState]);

  const handleAdd = async () => {
    const form = { ...formState, jobId: uuidv4() };
    console.log("Form State:", formState);
    const response = await request.post(
      `${process.env.REACT_APP_API_GATEWAY_URL}${ADD_JOBS}`,
      form
    );
    console.log(response);
  };
  const handleEdit = async () => {
    //code to update job
  };

  const handleClear = (key: keyof typeof formState): void => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: Array.isArray(prevState[key]) ? [] : "",
    }));
  };

  const handleChange = (
    key: keyof typeof formState,
    value: string | number | Date | null | string[]
  ): void => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Paper className={classes?.jobAddForm}>
      <Box className={classes?.rowFlex}>
        <Typography variant="h6" className={classes?.heading}>
          Add Job
        </Typography>
        <IconButton onClick={(event) => handleClose(event, "closeButtonClick")}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box className={classes?.formFields}>
        <Box className={classes?.rowFlex}>
          <TextField
            label="Job Title"
            fullWidth
            value={formState.jobTitle}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            className={classes?.textField}
          />
          <TextField
            type="number"
            label="Openings"
            fullWidth
            value={formState.openings}
            onChange={(e) => handleChange("openings", parseInt(e.target.value))}
            className={classes?.textField}
          />
        </Box>
        <Box className={classes?.rowFlex}>
          <FormControl fullWidth className={classes?.textField}>
            <InputLabel id="employee-type-label">Employee Type</InputLabel>
            <Select
              labelId="employee-type-label"
              value={formState.employmentType}
              onChange={(e) => handleChange("employmentType", e.target.value)}
              label="Employee Type"
              endAdornment={
                formState.employmentType && (
                  <InputAdornment
                    position="end"
                    className={classes?.closeButton}
                  >
                    <IconButton
                      onClick={() => handleClear("employmentType")}
                      edge="end"
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              <MenuItem value="full-time">Full Time</MenuItem>
              <MenuItem value="part-time">Part Time</MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="number"
            label="Required Experience (in years)"
            fullWidth
            value={formState.experience}
            onChange={(e) =>
              handleChange("experience", parseInt(e.target.value))
            }
            className={classes?.textField}
          />
        </Box>
        <Box className={classes?.rowFlex}>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formState.startDate}
            onChange={(e) =>
              handleChange(
                "startDate",
                new Date(e.target.value).toISOString().split("T")[0]
              )
            }
            className={classes?.textField}
          />
          <TextField
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formState.endDate}
            onChange={(e) =>
              handleChange(
                "endDate",
                new Date(e.target.value).toISOString().split("T")[0]
              )
            }
            className={classes?.textField}
          />
        </Box>
        <Box className={classes?.rowFlex}>
          <FormControl fullWidth className={classes?.textField}>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              multiple
              value={formState.location}
              onChange={(e) =>
                handleChange("location", e.target.value as string[])
              }
              label="Location"
              endAdornment={
                formState.location.length > 0 && (
                  <InputAdornment
                    position="end"
                    className={classes?.closeButton}
                  >
                    <IconButton
                      onClick={() => handleClear("location")}
                      edge="end"
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Client Name"
            fullWidth
            value={formState.clientName}
            onChange={(e) => handleChange("clientName", e.target.value)}
            className={classes?.textField}
          />
        </Box>
        <TextareaAutosize
          minRows={2}
          placeholder="Job Description"
          value={formState.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className={`${classes?.textArea} ${classes?.textField}`}
        />
        <Box className={classes?.rowFlex}>
          <FormControl fullWidth className={classes?.textField}>
            <InputLabel id="department-type-label">Department</InputLabel>
            <Select
              labelId="department-type-label"
              value={formState.department}
              onChange={(e) =>
                handleChange("department", e.target.value as string)
              }
              label="Department"
              endAdornment={
                formState.department && (
                  <InputAdornment
                    position="end"
                    className={classes?.closeButton}
                  >
                    <IconButton
                      onClick={() => handleClear("department")}
                      edge="end"
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes?.textField}>
            <InputLabel id="role-category-label">Role Category</InputLabel>
            <Select
              labelId="role-category-label"
              value={formState.roleCategory}
              onChange={(e) =>
                handleChange("roleCategory", e.target.value as string)
              }
              label="Role Category"
              endAdornment={
                formState.roleCategory && (
                  <InputAdornment
                    position="end"
                    className={classes?.closeButton}
                  >
                    <IconButton
                      onClick={() => handleClear("roleCategory")}
                      edge="end"
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextareaAutosize
          minRows={2}
          placeholder="About Company"
          value={formState.aboutCompany}
          onChange={(e) => handleChange("aboutCompany", e.target.value)}
          className={`${classes?.textArea} ${classes?.textField}`}
        />

        <TextField
          label="Education"
          fullWidth
          value={formState.education}
          onChange={(e) => handleChange("education", e.target.value)}
          className={classes?.textField}
        />
        <Box className={classes?.rowFlex}>
          <FormControl fullWidth className={classes?.textField}>
            <InputLabel id="key-skills-label">Key Skills</InputLabel>
            <Select
              labelId="key-skills-label"
              multiple
              value={formState.keySkills}
              onChange={(e) =>
                handleChange("keySkills", e.target.value as string[])
              }
              label="Key Skills"
              endAdornment={
                formState.keySkills.length > 0 && (
                  <InputAdornment
                    position="end"
                    className={classes?.closeButton}
                  >
                    <IconButton
                      onClick={() => handleClear("keySkills")}
                      edge="end"
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              <MenuItem value="HTML">HTML</MenuItem>
              <MenuItem value="CSS">CSS</MenuItem>
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="React">React</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className={classes?.textField}>
            <InputLabel id="status-type-label">Status</InputLabel>
            <Select
              labelId="status-type-label"
              value={formState.status}
              onChange={(e) => handleChange("status", e.target.value as string)}
              label="Status"
              endAdornment={
                formState.status && (
                  <InputAdornment
                    position="end"
                    className={classes?.closeButton}
                  >
                    <IconButton
                      onClick={() => handleClear("status")}
                      edge="end"
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          className={classes?.saveButton}
          onClick={handleAdd}
        >
          Add Job
        </Button>
      </Box>
    </Paper>
  );
};

export default AddJobForm;
