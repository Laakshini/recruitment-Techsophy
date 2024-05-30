import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CONSTANTS from "./constants/constants";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {stylesCustom} from "./styles";
import { useTheme } from "@emotion/react";
import useCustomStyles from "../../hooks/CustomStylesHook";

interface NavigatorProps {
  StyledContainer: React.ElementType;
  StyledBox: React.ElementType;
  StyledTypography: React.ElementType;
}

function Navigator({ StyledBox, StyledTypography }: NavigatorProps) {
  const theme = useTheme();
  const classes = useCustomStyles(stylesCustom, theme);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <Box m={1} className={classes?.stackFlex}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" className={classes?.blueIcon50} />}
      >
        <Link underline="hover" href="#">
          <StyledTypography className={classes?.grayTypo}>
            Candidates
          </StyledTypography>
        </Link>
        <StyledTypography>{CONSTANTS.CANDIDATE_NAME}</StyledTypography>
      </Breadcrumbs>

      <StyledBox className={classes?.pointerIcon} onClick={handleGoBack}>
        <ArrowBackIcon fontSize="small" className={classes?.blueIcon} />
        <StyledTypography>Go Back</StyledTypography>
      </StyledBox>
    </Box>
  );
}

export default Navigator;
