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
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { useTheme } from "@emotion/react";
import { BorderColor, Clear } from "@mui/icons-material";

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

  const [employeeType, setEmployeeType] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [requiredExperience, setRequiredExperience] = useState(0);
  const [location, setLocation] = useState<string[]>([]);
  const [jobDescription, setJobDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [roleCategory, setRoleCategory] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [clientName, setClientName] = useState("");
  const [education, setEducation] = useState("");
  const [keySkills, setKeySkills] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [status, setStatus] = useState("");
  const [openings, setOpenings] = useState(0);

  const handleSave = () => {
    console.log("Employee Type:", employeeType);
    console.log("Job Title:", jobTitle);
    console.log("Required Experience:", requiredExperience);
    console.log("Location:", location);
    console.log("Job Description:", jobDescription);
    console.log("Department:", department);
    console.log("Role Category:", roleCategory);
    console.log("About Company:", aboutCompany);
    console.log("Client Name:", clientName);
    console.log("Education:", education);
    console.log("Key Skills:", keySkills);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Status:", status);
    console.log("Openings:", openings);
  };

  const handleClear = (
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    setFunction("");
  };

  const handleClearMultiple = (
    setFunction: React.Dispatch<React.SetStateAction<string[]>>
  ): void => {
    setFunction([]);
  };

  return (
    <Paper className={classes?.jobAddForm}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className={classes?.textField}
        />
        <Box className={classes?.rowFlex}>
          <FormControl fullWidth className={classes?.textField}>
            <InputLabel>Employee Type</InputLabel>
            <Select
              value={employeeType}
              onChange={(e) => setEmployeeType(e.target.value as string)}
              endAdornment={
                employeeType && (
                  <InputAdornment
                    position="end"
                    className={classes?.closeButton}
                  >
                    <IconButton
                      onClick={() => handleClear(setEmployeeType)}
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
            value={requiredExperience}
            onChange={(e) => setRequiredExperience(parseInt(e.target.value))}
            className={classes?.textField}
          />
        </Box>
        <Box className={classes?.rowFlex}>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={startDate ? startDate.toISOString().split("T")[0] : ""}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className={classes?.textField}
          />
          <TextField
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={endDate ? endDate.toISOString().split("T")[0] : ""}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            className={classes?.textField}
          />
        </Box>

        <FormControl fullWidth className={classes?.textField}>
          <InputLabel>Location</InputLabel>
          <Select
            multiple
            value={location}
            onChange={(e) => setLocation(e.target.value as string[])}
            endAdornment={
              location.length > 0 && (
                <InputAdornment position="end" className={classes?.closeButton}>
                  <IconButton
                    onClick={() => handleClearMultiple(setLocation)}
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
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className={`${classes?.textArea} ${classes?.textField}`}
        />

        <FormControl fullWidth className={classes?.textField}>
          <InputLabel>Department</InputLabel>
          <Select
            value={department}
            onChange={(e) => setDepartment(e.target.value as string)}
            endAdornment={
              department && (
                <InputAdornment position="end" className={classes?.closeButton}>
                  <IconButton
                    onClick={() => handleClear(setDepartment)}
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
            value={roleCategory}
            onChange={(e) => setRoleCategory(e.target.value as string)}
            endAdornment={
              department && (
                <InputAdornment position="end" className={classes?.closeButton}>
                  <IconButton
                    onClick={() => handleClear(setDepartment)}
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
          value={aboutCompany}
          onChange={(e) => setAboutCompany(e.target.value)}
          className={`${classes?.textArea} ${classes?.textField}`}
        />
        <TextField
          label="Client Name"
          fullWidth
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className={classes?.textField}
        />
        <TextField
          label="Education"
          fullWidth
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          className={classes?.textField}
        />
        <FormControl fullWidth className={classes?.textField}>
          <InputLabel>Key Skills</InputLabel>
          <Select
            multiple
            value={keySkills}
            onChange={(e) => setKeySkills(e.target.value as string[])}
            endAdornment={
              department && (
                <InputAdornment position="end" className={classes?.closeButton}>
                  <IconButton
                    onClick={() => handleClear(setDepartment)}
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
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            endAdornment={
              department && (
                <InputAdornment position="end" className={classes?.closeButton}>
                  <IconButton
                    onClick={() => handleClear(setDepartment)}
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
          value={openings}
          onChange={(e) => setOpenings(parseInt(e.target.value))}
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
