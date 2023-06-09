import React from "react";
import StyledBadge from "../../../components/StyledBadge";
import { Stack, Avatar, Typography, IconButton, Divider } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserIdProfile,
  closeRightSideBar,
  selectUserIdProfile,
} from "../../../app/slices/rightSideBarSlice";
import { useTheme } from "@mui/material/styles";
import {
  VideocamOutlined as VideocamOutlinedIcon,
  CallOutlined as CallOutlinedIcon,
  SearchOutlined as SearchOutlinedIcon,
  KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon,
} from "@mui/icons-material";

const ConversationsHeader = () => {
  const userIdProfile = useSelector(selectUserIdProfile);
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Stack
      px={4}
      py={2.5}
      gap={2}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"start"}
      sx={{
        flexShrink: 0,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        cursor: "pointer",
        height: "90px",
      }}
    >
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
          }}
          src={faker.image.avatar()}
          onClick={() => {
            if (userIdProfile) {
              dispatch(closeRightSideBar());
            } else if (!userIdProfile) {
              dispatch(setUserIdProfile({ userId: "This is just a user id" }));
            }
          }}
        />
      </StyledBadge>
      <Stack gap={0.25}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: theme.palette.mode === "light" ? "#030303" : "#f7f7f7",
          }}
        >
          Pink Panda
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            color: theme.palette.mode === "light" ? "#7C7C7D" : "#9e9e9e",
          }}
        >
          Online
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          marginLeft: "auto",
        }}
      >
        <IconButton>
          <VideocamOutlinedIcon />
        </IconButton>
        <IconButton>
          <CallOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            marginRight: 1,
          }}
        >
          <SearchOutlinedIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton
          sx={{
            marginLeft: 1,
          }}
        >
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ConversationsHeader;
