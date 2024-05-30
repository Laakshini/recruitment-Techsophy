import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";

interface StyledTypographyProps {
  fontSize?: string;
  fontWeight?: string;
}
interface StyledImageProps {
  width?: string;
  height?: string;
}

export const stylesCustom = (theme: any) => ({
  leftTopSection: {
    display: "flex",
    gap: "12px",
  },
  leftBottomSection: {
    display: "flex",
    paddingLeft: "16px",
    gap: "28px",
  },
  avatar: {
    width: 65,
    height: 65,
  },
  columnFlex: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  rowFlex: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  stackFlex: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pointerIcon: {
    cursor: "pointer",
  },
  detailContainer: {
    backgroundColor: "#DDEAFB",
    borderRadius: "9px",
    padding: "2px 35px",
  },
  grayTypo: {
    fontWeight: "400",
    fontSize: "16px",
    opacity: "50%",
  },
  editButton: {
    color: "#7D9BE7",
    fontSize: "16px",
    textDecoration: "underline",
    cursor: "pointer",
  },
  boxRight: {
    position: "absolute",
    right: "80px",
    paddingLeft: "64px",
    borderLeft: "2px solid #E5EDF9",
  },
  statusItem: {
    backgroundColor: "#DDEAFB",
    borderRadius: "9px",
    padding: "2px 41px",
    textWrap: "nowrap",
  },
  statusItemImage: {
    backgroundColor: "#DDEAFB",
    borderRadius: "50%",
    padding: "3px",
    width: "24px",
    height: "24px",
    position: "absolute",
    left: "-1px",
    top: "-1px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blueIcon50: {
    color: "#071C50",
    opacity: "50%",
  },
  divider: {
    margin: "0 8px",
  },
  padding25: {
    padding: "2px 25px !important",
  },
});

export const StyledContainer = styled(Box)({
  position: "relative",
});

export const VerticalDivider = styled(Box)({
  height: "100%",
  margin: "0 8px",
  transform: "rotate(180deg)",
  borderLeft: "1px solid",
  borderColor: "rgba(0, 0, 0, 0.12)",
});

export const StyledTypography = styled(Typography)<StyledTypographyProps>(
  ({ fontSize, fontWeight }) => ({
    fontSize: fontSize || "12px",
    fontFamily: "poppins",
    fontWeight: fontWeight || 400,
    color: "#082777",
  })
);

export const StyledTypographyHover = styled(Typography)<StyledTypographyProps>(
  ({ fontSize, fontWeight }) => ({
    fontSize: fontSize || "12px",
    fontFamily: "poppins",
    fontWeight: fontWeight || 400,
    color: "#082777",
    "&:hover": { textDecoration: "underline" },
  })
);

export const ImageDimen = styled(Box)<StyledImageProps>(
  ({ width, height }) => ({
    width: width || "25px",
    height: height || "25px",
  })
);
