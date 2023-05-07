import React from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Stack, Box, IconButton, Typography } from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import { changeTypeRightSideBar } from "../../../../app/slices/rightSideBarSlice";
import ScrollBar from "../../../../components/Scrollbar";

const Starred = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Stack
      sx={{
        height: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: "30px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 2,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          height: "90px",
          flexShrink: 0,
        }}
      >
        <IconButton
          onClick={() => {
            dispatch(changeTypeRightSideBar({ type: "CONTACT" }));
          }}
        >
          <KeyboardBackspaceIcon
            width="20px"
            height="20px"
            sx={{
              cursor: "pointer",
              color: theme.palette.text.secondary,
            }}
          />
        </IconButton>
        <Typography
          component={"span"}
          variant="body2"
          color={theme.palette.text.secondary}
        >
          Starred Messages
        </Typography>
      </Box>
      {/* Content */}
      <ScrollBar
        timeout={500}
        clickOnTrack={false}
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
      ></ScrollBar>
    </Stack>
  );
};

export default Starred;
