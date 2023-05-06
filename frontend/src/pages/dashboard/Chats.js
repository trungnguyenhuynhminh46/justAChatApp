import {
  InputBase,
  Stack,
  Typography,
  styled,
  IconButton,
  Box,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  SystemUpdateAlt as SystemUpdateAltIcon,
} from "@mui/icons-material";
import { CircleDashed } from "phosphor-react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import ScrollBar from "../../components/Scrollbar";
import StyledBadge from "../../components/StyledBadge";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  height: "50px",
  borderRadius: "21px",
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
}));

const ChatSection = (props) => {
  const { chat, theme } = props;
  return (
    <Stack gap={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "16px",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          borderRadius: "15px",
          gap: "16px",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="User picture"
            src={chat.img}
            sx={{
              width: "48px",
              height: "48px",
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
            {chat.name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: theme.palette.mode === "light" ? "#7C7C7D" : "#9e9e9e",
            }}
          >
            {chat.msg}
          </Typography>
        </Stack>
        <Stack
          sx={{
            height: "100%",
            marginLeft: "auto",
          }}
          justifyContent={"space-between"}
        >
          <Typography
            variant="subtitle2"
            sx={{
              marginBottom: "auto",
              fontWeight: 600,
              color: theme.palette.mode === "light" ? "#7C7C7D" : "#9e9e9e",
            }}
          >
            {chat.time}
          </Typography>
          {chat.unread > 0 && (
            <Box
              sx={{
                background: theme.palette.primary.main,
                color: "#fff",
                width: "16px",
                height: "16px",
                borderRadius: "8px",
                fontSize: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                lineHeight: "12px",
              }}
            >
              {chat.unread}
            </Box>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export const Chats = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "384px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        paddingTop: "35px",
        paddingLeft: "30px",
        paddingRight: "30px",
        height: "100vh",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        zIndex: 1,
      }}
    >
      <Stack gap={4}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h4" component={"h4"}>
            Chats
          </Typography>
          <CircleDashed width={30} height={30} />
        </Stack>
        <Search>
          <Box
            sx={{
              marginLeft: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: theme.palette.mode === "light" ? "#030303" : "#f7f7f7",
            }}
          >
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search"
            sx={{
              flex: 1,
              padding: "16px",
              color: theme.palette.mode === "light" ? "#030303" : "#f7f7f7",
            }}
          />
          <IconButton
            sx={{
              marginRight: "20px",
              color: theme.palette.mode === "light" ? "#030303" : "#f7f7f7",
            }}
          >
            <FilterListIcon />
          </IconButton>
        </Search>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <SystemUpdateAltIcon />
          <Button variant="text">Archived</Button>
        </Box>
      </Stack>
      <Divider
        width="100%"
        height={0.8}
        sx={{
          marginTop: "16px",
        }}
      />
      <ScrollBar
        timeout={500}
        clickOnTrack={false}
        style={{
          flex: 1,
          maxHeight: "512px",
        }}
      >
        <Stack
          sx={{
            marginTop: "16px",
          }}
          gap={2}
        >
          <Typography variant="subtitle1">Pinned</Typography>
          <Stack gap={2}>
            {ChatList.slice(0, 2).map((chat) => {
              return <ChatSection key={chat.id} chat={chat} theme={theme} />;
            })}
          </Stack>
        </Stack>
        <Stack
          sx={{
            marginTop: "32px",
          }}
          gap={2}
        >
          <Typography variant="subtitle1">All Chats</Typography>
          <Stack gap={2}>
            {ChatList.slice(2).map((chat) => {
              return <ChatSection key={chat.id} chat={chat} theme={theme} />;
            })}
          </Stack>
        </Stack>
      </ScrollBar>
    </Stack>
  );
};
