import React, { useState } from "react";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
import { Clear } from "@mui/icons-material";
import { request } from "../../services/Request";
import { ADD_JOBS } from "../../constants/endpoints";
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

interface JobFormProps {
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
    marginRight: "16px",
  },
  textArea: {
    resize: "none",
    outline: "none",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
  },
  textField: {
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
});

const AddJobForm: React.FC<JobFormProps> = ({ handleClose }) => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);

  const [formState, setFormState] = useState({
    employmentType: "",
    jobTitle: "",
    experience: 0,
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
  });

  const handleSave = async() => {
    console.log("Form State:", formState);
    const response = await request.post(`${process.env.REACT_APP_API_GATEWAY_URL}${ADD_JOBS}`,formState);
    console.log(response);

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
        <TextField
          label="Job Title"
          fullWidth
          value={formState.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          className={classes?.textField}
        />
        <Box className={classes?.rowFlex}>
          <FormControl fullWidth className={classes?.textField}>
            <InputLabel>Employee Type</InputLabel>
            <Select
              value={formState.employmentType}
              onChange={(e) => handleChange("employmentType", e.target.value)}
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
            value={formState.startDate ? formState.startDate.toISOString().split("T")[0] : ""}
            onChange={(e) => handleChange("startDate", new Date(e.target.value))}
            className={classes?.textField}
          />
          <TextField
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formState.endDate ? formState.endDate.toISOString().split("T")[0] : ""}
            onChange={(e) => handleChange("endDate", new Date(e.target.value))}
            className={classes?.textField}
          />
        </Box>

        <FormControl fullWidth className={classes?.textField}>
          <InputLabel>Location</InputLabel>
          <Select
            multiple
            value={formState.location}
            onChange={(e) => handleChange("location", e.target.value as string[])}
            endAdornment={
              formState.location.length > 0 && (
                <InputAdornment position="end" className={classes?.closeButton}>
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
        <TextareaAutosize
          minRows={2}
          placeholder="Job Description"
          value={formState.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className={`${classes?.textArea} ${classes?.textField}`}
        />

        <FormControl fullWidth className={classes?.textField}>
          <InputLabel>Department</InputLabel>
          <Select
            value={formState.department}
            onChange={(e) => handleChange("department", e.target.value as string)}
            endAdornment={
              formState.department && (
                <InputAdornment position="end" className={classes?.closeButton}>
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
          <InputLabel>Role Category</InputLabel>
          <Select
            value={formState.roleCategory}
            onChange={(e) => handleChange("roleCategory", e.target.value as string)}
            endAdornment={
              formState.roleCategory && (
                <InputAdornment position="end" className={classes?.closeButton}>
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
        <TextareaAutosize
          minRows={2}
          placeholder="About Company"
          value={formState.aboutCompany}
          onChange={(e) => handleChange("aboutCompany", e.target.value)}
          className={`${classes?.textArea} ${classes?.textField}`}
        />
        <TextField
          label="Client Name"
          fullWidth
          value={formState.clientName}
          onChange={(e) => handleChange("clientName", e.target.value)}
          className={classes?.textField}
        />
        <TextField
          label="Education"
          fullWidth
          value={formState.education}
          onChange={(e) => handleChange("education", e.target.value)}
          className={classes?.textField}
        />
        <FormControl fullWidth className={classes?.textField}>
          <InputLabel>Key Skills</InputLabel>
          <Select
            multiple
            value={formState.keySkills}
            onChange={(e) => handleChange("keySkills", e.target.value as string[])}
            endAdornment={
              formState.keySkills.length > 0 && (
                <InputAdornment position="end" className={classes?.closeButton}>
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
          <InputLabel>Status</InputLabel>
          <Select
            value={formState.status}
            onChange={(e) => handleChange("status", e.target.value as string)}
            endAdornment={
              formState.status && (
                <InputAdornment position="end" className={classes?.closeButton}>
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
        <TextField
          type="number"
          label="Openings"
          fullWidth
          value={formState.openings}
          onChange={(e) => handleChange("openings", parseInt(e.target.value))}
          className={classes?.textField}
        />
      </Box>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          className={classes?.saveButton}
          onClick={handleSave}
        >
          Add Job
        </Button>
      </Box>
    </Paper>
  );
};

export default AddJobForm;
