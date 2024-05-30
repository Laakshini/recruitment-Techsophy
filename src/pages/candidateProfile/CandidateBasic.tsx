import React from "react";
import CONSTANTS from "./constants/constants";
import { Box, Button, Avatar, Typography, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import ProfileImage from "../../assets/images/Ellipse 3profileImage.svg";
import { useTheme } from "@emotion/react";
import useCustomStyles from "../../hooks/CustomStylesHook";
import { stylesCustom } from "./styles";
import { StyledTypography } from "./styles";

interface NavigatorProps {
  StyledContainer: React.ElementType;
  StyledBox: React.ElementType;
  StyledBoxMain: React.ElementType;
  PointerIcon: React.ElementType;
}

function CandidateBasic({ StyledBoxMain, PointerIcon }: NavigatorProps) {
  const theme = useTheme();
  const classes = useCustomStyles(stylesCustom, theme);

  return (
    <StyledBoxMain>
      <Box className={classes?.columnFlex}>
        {/* Profile Details */}
        <Box className={classes?.leftTopSection}>
          <Avatar
            src={ProfileImage}
            alt="User Name"
            className={classes?.avatar}
          />
          <Box className={classes?.columnFlex}>
            <Box className={classes?.rowFlex}>
              <StyledTypography fontSize="22px">
                {CONSTANTS.CANDIDATE_NAME}
              </StyledTypography>
              <Box className={classes?.detailContainer}>
                <StyledTypography fontSize="12px">
                  {CONSTANTS.CANDIDATE_TYPE}
                </StyledTypography>
              </Box>
            </Box>
            <Box className={classes?.rowFlex}>
              <StyledTypography className={classes?.grayTypo}>
                {CONSTANTS.CANDIDATE_MAIL}
              </StyledTypography>
              <Divider
                orientation="vertical"
                flexItem
                className={classes?.divider}
              />
              <StyledTypography className={classes?.grayTypo}>
                {CONSTANTS.CANDIDATE_PHONE}
              </StyledTypography>
            </Box>
          </Box>
        </Box>

        {/* Icons and Edit Button */}
        <Box className={classes?.leftBottomSection}>
          <StyledTypography className={classes?.editButton}>
            Edit
          </StyledTypography>
          <PointerIcon>
            <LinkedInIcon
              fontSize="small"
              sx={{ color: CONSTANTS.ICON_COLOR }}
            />
          </PointerIcon>
          <PointerIcon>
            <TwitterIcon
              fontSize="small"
              sx={{ color: CONSTANTS.ICON_COLOR }}
            />
          </PointerIcon>
          <PointerIcon>
            <LanguageIcon
              fontSize="small"
              sx={{ color: CONSTANTS.ICON_COLOR }}
            />
          </PointerIcon>
        </Box>
      </Box>

      {/* Current Status Section */}
      <Box className={`${classes?.boxRight} ${classes?.columnFlex}`}>
      <StyledTypography fontSize="16px">
          Current Status
        </StyledTypography>
        <Box
          className={classes?.columnFlex}
          sx={{
            width: "14rem",
          }}
        >
          <StatusItem
            label="Round"
            value={
              <Box className={classes?.statusItem}>
                <StyledTypography fontSize="12px">
                  {CONSTANTS.INTERVIEW_ROUND}
                </StyledTypography>
              </Box>
            }
          />
          <StatusItem
            label="Assigned to"
            value={
              <Box
                className={`${classes?.statusItem} ${classes?.padding25}`}
              >
                <Box className={classes?.statusItemImage}>
                  <Avatar
                    src={ProfileImage}
                    sx={{ width: 20, height: 20 }}
                    alt="User Image"
                  />
                </Box>
                <StyledTypography fontSize="12px">
                  {CONSTANTS.INTERVIEWER}
                </StyledTypography>
              </Box>
            }
          />
          <StatusItem
            label="Interview Date"
            value={
              <Box>
                <StyledTypography className={classes?.grayTypo}>
                  Jul 30,2021
                </StyledTypography>
              </Box>
            }
          />
        </Box>
      </Box>
    </StyledBoxMain>
  );
}

interface StatusItemProps {
  label: string;
  value: React.ReactNode;
}

const StatusItem = ({ label, value }: StatusItemProps) => (
  <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
    <Typography sx={{ fontWeight: "400", opacity: "50%" }}>{label}</Typography>
    <Box sx={{ position: "absolute", left: "60%" }}>{value}</Box>
  </Box>
);

export default CandidateBasic;
