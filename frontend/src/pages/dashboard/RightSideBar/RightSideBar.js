import React from "react";
import { useSelector } from "react-redux";
import {
  selectRightSideBarType,
  selectUserIdProfile,
} from "../../../app/slices/rightSideBarSlice";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Contact from "./Contact";
import Shared from "./Shared";
import Starred from "./Starred";

const RightSideBar = () => {
  const theme = useTheme();
  const type = useSelector(selectRightSideBarType);
  const userId = useSelector(selectUserIdProfile);
  const isShown = Boolean(userId);
  if (isShown) {
    return (
      <Box
        sx={{
          width: "364px",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
        }}
      >
        {type === "CONTACT" && <Contact />}
        {type === "SHARED" && <Shared />}
        {type === "STARRED" && <Starred />}
      </Box>
    );
  }
  return null;
};

export default RightSideBar;
