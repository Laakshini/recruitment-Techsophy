import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Stack,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import useCustomStyles from "../../../hooks/CustomStylesHook";
import pdfIcon from "../../../assets/icons/🦆 icon _file type pdf2_pdf.png";
import docIcon from "../../../assets/icons/🦆 icon _file type doc word document_doc.png";
import scorePng from "../../../assets/icons/Group 2588.png";
import RightPng from "../../../assets/icons/Component 16right.png";
import wrongPng from "../../../assets/icons/Component 13wrong.png";
import CONSTANTS from "../constants/constants";
import { StyledTypography } from "../styles";
import "../style.css";

const UPLOADED_FILES = [
  { fileName: "Resume.pdf", fileType: "pdf", uploadDate: "May 25 2024" },
  { fileName: "CV.doc", fileType: "doc", uploadDate: "May 24 2024" },
  { fileName: "Resume.pdf", fileType: "pdf", uploadDate: "May 25 2024" },
  { fileName: "CV.doc", fileType: "doc", uploadDate: "May 24 2024" },
  { fileName: "Resume.pdf", fileType: "pdf", uploadDate: "May 25 2024" },
  { fileName: "CV.doc", fileType: "doc", uploadDate: "May 24 2024" },
];

const EXPERIENCE_DETAILS = [
  {
    jobRole: "Senior Data Analyst",
    company: "Google",
    joinDate: "May 2021",
    leaveDate: "Present",
    responsibilities: [
      "Data Exploration and Analysis: They perform exploratory data analysis to uncover insights, trends, and patterns in the data, often using statistical and visualisation techniques.",
      "Data Cleaning and Preprocessing: Data analysts are responsible for cleaning and preparing raw renewable data to ensure its accuracy and reliability for analysis.",
      "Reporting and Communication: Data analysts communicate their findings through reports, dashboards, and presentations to help stakeholders make informed decisions based on the data-driven insights",
    ],
  },
  {
    jobRole: "Senior Software Engineer",
    company: "Microsoft",
    joinDate: "May 2020",
    leaveDate: "May 2021",
    responsibilities: [
      "Data Exploration and Analysis: They perform exploratory data analysis to uncover insights, trends, and patterns in the data, often using statistical and visualisation techniques.",
      "Data Cleaning and Preprocessing: Data analysts are responsible for cleaning and preparing raw renewable data to ensure its accuracy and reliability for analysis.",
      "Reporting and Communication: Data analysts communicate their findings through reports, dashboards, and presentations to help stakeholders make informed decisions based on the data-driven insights",
    ],
  },
];

const CRITERIA = [
  "Qualifications and skills match",
  "Experience Relevance",
  "Education",
  "Keywords Match",
  "Years of Experience",
  "Job Hopping",
  "Cultural Fit",
  "Interview Performance",
  "References",
  "Additional Factors",
];

const daysAgo = (uploadDate: any) => {
  const upload: any = new Date(uploadDate);
  const today: any = new Date();
  const diffTime = today - upload;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} days ago`;
};

const styles = (theme: any) => ({
  commonFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  columnFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },
  stackFlex: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1rem",
  },
  mainContainer: {
    display: "flex",
    gap: "2%",
  },
  boxOne: {
    width: "68%",
  },
  boxTwo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "30%",
    borderRadius: "8px",
    border: "2px solid #E5EDF9",
  },
  documentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "94%",
    backgroundColor: "#E7F1FF",
    border: "1px solid rgba(7, 28, 80, 0.15)",
    borderRadius: "6.46px",
  },
  editButton: {
    color: "#7D9BE7",
    fontSize: "16px",
    textDecoration: "underline",
    cursor: "pointer",
  },
  grayTypo: {
    fontWeight: "400",
    fontSize: "16px",
    opacity: "50%",
    display: "inline",
  },
  docDate: {
    fontWeight: "400",
    fontSize: "12px",
    opacity: "50%",
  },
  jobRole: {
    fontWeight: "400",
    fontSize: "16px",
    marginBottom: "8px",
  },
  qualificationText: {
    fontWeight: "600",
    fontSize: "16px",
    display: "inline",
    color: "#469607",
  },
});

const GeneralTab = () => {
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);
  const [showMore, setShowMore] = useState(false);

  const visibleFiles = showMore ? UPLOADED_FILES : UPLOADED_FILES.slice(0, 4);

  return (
    <Container maxWidth={false} className={classes?.mainContainer}>
      <Box className={classes?.boxOne}>
        <Stack className={classes?.commonFlex}>
          <StyledTypography fontSize="16px">Candidate Files</StyledTypography>
          <StyledTypography className={classes?.editButton}>
            Edit
          </StyledTypography>
        </Stack>
        <Grid container sx={{ mt: 1 }} spacing={1}>
          {visibleFiles.map((file, index) => (
            <Grid item xs={3} key={index}>
              <Box
                className={`${classes?.documentContainer} ${classes?.commonFlex}`}
              >
                <Box
                  component="img"
                  src={file.fileType === "pdf" ? pdfIcon : docIcon}
                  alt={`${file.fileType} icon`}
                  style={{ width: "14px", height: "16px" }}
                />
                <StyledTypography fontSize="16px" fontWeight="400">
                  {file.fileName}
                </StyledTypography>
                <StyledTypography className={classes?.docDate}>
                  {daysAgo(file.uploadDate)}
                </StyledTypography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {UPLOADED_FILES.length > 4 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 0,
              mr: 1,
              mb: 2,
            }}
          >
            <Button
              sx={{ textTransform: "none" }}
              onClick={() => setShowMore(!showMore)}
            >
              <StyledTypography className={classes?.editButton}>
                {showMore ? "View Less" : "View All"}
              </StyledTypography>
            </Button>
          </Box>
        )}
        <Stack className={classes?.commonFlex}>
          <StyledTypography
            sx={{
              fontSize: "16px",
            }}
          >
            Last Experience
          </StyledTypography>
          <StyledTypography className={classes?.editButton}>
            Edit
          </StyledTypography>
        </Stack>
        <Box sx={{ mt: 0 }}>
          <List sx={{ padding: 0 }}>
            {EXPERIENCE_DETAILS.map((exp, index) => (
              <ListItem key={index} sx={{ padding: 0, mb: 3 }}>
                <ListItemText
                  sx={{ margin: 0 }}
                  primary={
                    <StyledTypography
                      className={classes?.jobRole}
                      variant="subtitle1"
                    >
                      {exp.jobRole}
                    </StyledTypography>
                  }
                  secondary={
                    <>
                      <StyledTypography className={classes?.jobRole}>
                        {exp.company}{" "}
                        <StyledTypography
                          className={`${classes?.jobRole} ${classes?.grayTypo}`}
                        >
                          ({exp.joinDate} - {exp.leaveDate})
                        </StyledTypography>
                      </StyledTypography>
                      <StyledTypography className={classes?.jobRole}>
                        Responsible for:
                        {exp.responsibilities.map((responsibility, index) => (
                          <Box key={index} sx={{ pl: 2 }}>
                            <StyledTypography
                              className={`${classes?.jobRole} ${classes?.grayTypo}`}
                            >
                              {index + 1}. {responsibility}
                            </StyledTypography>
                          </Box>
                        ))}
                      </StyledTypography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box className={classes?.boxTwo}>
        <Paper
          elevation={0}
          className={classes?.columnFlex}
          sx={{
            mt: 6,
            mb: 6,
            p: 3,
          }}
        >
          <img src={scorePng} alt="score icon" style={{ width: "48px" }} />
          <StyledTypography fontSize="16px">
            Score:{" "}
            <StyledTypography className={classes?.qualificationText}>
              {CONSTANTS.ELIGIBILITY}
            </StyledTypography>
          </StyledTypography>
          <StyledTypography className={classes?.editButton}>
            Edit
          </StyledTypography>
        </Paper>
        <Box>
          {CRITERIA.map((item, index) => (
            <Box key={index} className={classes?.stackFlex}>
              <StyledTypography className={classes?.jobRole}>
                {item}
              </StyledTypography>
              {index === 3 || index === 5 || index === 8 ? (
                <img src={wrongPng} alt="Wrong" />
              ) : (
                <img src={RightPng} alt="Right" />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default GeneralTab;
