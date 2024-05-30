import React, { useState } from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CONSTANTS from "./constants/constants";
import Navigator from "./navigator";
import CandidateBasic from "./CandidateBasic";
import HeroSection from "./HeroSection";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "13px",
});

const StyledBoxMain = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  backgroundColor: "#F3F8FF",
  borderRadius: "8px",
  padding: "32px 22px",
  gap: "8px",
});

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "12px",
});

const StyledTypography = styled(Typography)({
  fontSize: "12px",
  fontWeight: 600,
  color: "#071C50",
});

const PointerIcon = styled(Box)({
  cursor: "pointer",
});

function CandidateProfile() {
  return (
    <>
      <StyledContainer maxWidth={false}>
        <Navigator
          StyledContainer={StyledContainer}
          StyledBox={StyledBox}
          StyledTypography={StyledTypography}
        />

        <CandidateBasic
          StyledContainer={StyledContainer}
          StyledBox={StyledBox}
          StyledBoxMain={StyledBoxMain}
          PointerIcon={PointerIcon}
        />

        <HeroSection
          StyledTypography={StyledTypography}
          PointerIcon={PointerIcon}
        />
      </StyledContainer>
    </>
  );
}

export default CandidateProfile;
