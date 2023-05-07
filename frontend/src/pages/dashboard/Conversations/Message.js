import {
  Divider,
  Stack,
  Box,
  Typography,
  Avatar,
  IconButton,
  Link,
  MenuList,
  MenuItem,
  ListItemText,
  Menu,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  PhotoSizeSelectActualOutlined as PhotoSizeSelectActualOutlinedIcon,
  FileDownloadOutlined as FileDownloadOutlinedIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";
import { Message_options } from "../../../data";

function hexToRgb(input) {
  const hex = input.slice(1);
  if (hex) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;

    return `rgba(${red}, ${green}, ${blue}, 0.2)`;
  }
  return "rgb(0, 0, 0)";
}

const MessageMenu = ({ isLeft }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const positionProps = (isLeft) => {
    if (isLeft) {
      return {
        anchorOrigin: {
          vertical: "center",
          horizontal: "right",
        },
        transformOrigin: {
          vertical: "center",
          horizontal: "left",
        },
      };
    }
    return {
      anchorOrigin: {
        vertical: "center",
        horizontal: "left",
      },
      transformOrigin: {
        vertical: "center",
        horizontal: "right",
      },
    };
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon></MoreHorizIcon>
      </IconButton>
      <Menu
        id="messages-menu"
        aria-labelledby="messages-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...positionProps(isLeft)}
      >
        <MenuList>
          {Message_options.slice(0, 4).map((item, index) => {
            return (
              <MenuItem key={index}>
                <ListItemText>{item.title}</ListItemText>
              </MenuItem>
            );
          })}
          <Divider />
          {Message_options.slice(4).map((item, index) => {
            return (
              <MenuItem key={index}>
                <ListItemText>{item.title}</ListItemText>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

const ConservationMessage = (props) => {
  const theme = useTheme();
  const { message } = props;
  const type = message.type;
  const subtype = message.subtype;
  const isRight = message.incoming;
  if (type === "divider") {
    return (
      <Divider
        sx={{
          fontSize: 14,
        }}
      >
        {message.text}
      </Divider>
    );
  }
  if (type === "msg") {
    if (isRight) {
      return (
        <Stack direction={"column"} alignItems={"end"} gap={2} mb={2}>
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              position: "relative",
            }}
            alignItems={"center"}
          >
            <MessageMenu isLeft={!isRight} />
            <Stack
              gap={1}
              sx={{
                px: "22px",
                py: "10px",
                borderRadius: "16px",
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              {subtype === "reply" && (
                <Box
                  p={2}
                  sx={{
                    background: hexToRgb(theme.palette.primary.main),
                    borderRadius: "10px",
                  }}
                >
                  {message.reply}
                </Box>
              )}
              {subtype === "link" && (
                <Stack
                  gap={2}
                  alignItems={"end"}
                  p={2}
                  sx={{
                    background: hexToRgb(theme.palette.primary.main),
                    borderRadius: "10px",
                  }}
                >
                  <Link
                    underline="none"
                    href={message.link}
                    sx={{
                      width: "100%",
                      maxWidth: "200px",
                    }}
                  >
                    <Avatar
                      alt={message.preview}
                      src={message.preview}
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </Link>
                  <Typography sx={{ color: "#fff" }}>
                    {message.title}
                  </Typography>
                  <Link
                    href={message.link}
                    underline="hover"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    {message.link}
                  </Link>
                </Stack>
              )}
              {subtype === "doc" && (
                <Stack
                  direction={"row"}
                  gap={2}
                  alignItems={"center"}
                  p={2}
                  sx={{
                    background: hexToRgb(theme.palette.primary.main),
                    borderRadius: "10px",
                  }}
                >
                  <IconButton>
                    <PhotoSizeSelectActualOutlinedIcon
                      sx={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                  <Typography sx={{ color: "#fff" }}>
                    {message.fileName}
                  </Typography>
                  <IconButton>
                    <FileDownloadOutlinedIcon
                      sx={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </Stack>
              )}
              {message.message && (
                <Typography variant="body1" component={"p"}>
                  {message.message}
                </Typography>
              )}
              {subtype === "img" && (
                <Avatar
                  sx={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "auto",
                    borderRadius: "20px",
                    overflow: "hidden",
                    pb: "8px",
                  }}
                  alt={message.img}
                  src={message.img}
                ></Avatar>
              )}
            </Stack>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: "#888888",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            0:12
          </Typography>
        </Stack>
      );
    }
    if (!isRight) {
      return (
        <Stack direction={"row"} alignItems={"end"} gap={2} mb={2}>
          <Stack
            direction={"row"}
            gap={1}
            sx={{ position: "relative" }}
            alignItems={"center"}
          >
            <Stack
              gap={1}
              sx={{
                px: "22px",
                py: "10px",
                borderRadius: "16px",
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "#F8FAFF"
                    : theme.palette.background.paper,
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              {subtype === "reply" && (
                <Box
                  p={2}
                  sx={{
                    background: theme.palette.background.default,
                    borderRadius: "10px",
                  }}
                >
                  {message.reply}
                </Box>
              )}
              {subtype === "link" && (
                <Stack
                  gap={2}
                  alignItems={"start"}
                  p={2}
                  sx={{
                    background: theme.palette.background.default,
                    borderRadius: "10px",
                  }}
                >
                  <Link
                    underline="none"
                    href={message.link}
                    sx={{
                      width: "100%",
                      maxWidth: "200px",
                    }}
                  >
                    <Avatar
                      alt={message.preview}
                      src={message.preview}
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </Link>
                  <Typography>{message.title}</Typography>
                  <Link
                    href={message.link}
                    underline="hover"
                    sx={{
                      color: theme.palette.primary.main,
                    }}
                  >
                    {message.link}
                  </Link>
                </Stack>
              )}
              {subtype === "doc" && (
                <Stack
                  direction={"row"}
                  gap={2}
                  alignItems={"center"}
                  p={2}
                  sx={{
                    background: hexToRgb(theme.palette.primary.main),
                    borderRadius: "10px",
                  }}
                >
                  <IconButton>
                    <PhotoSizeSelectActualOutlinedIcon
                      sx={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                  <Typography sx={{ color: "#fff" }}>
                    {message.fileName}
                  </Typography>
                  <IconButton>
                    <FileDownloadOutlinedIcon
                      sx={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </Stack>
              )}
              {message.message && (
                <Typography variant="body1" component={"p"}>
                  {message.message}
                </Typography>
              )}
              {subtype === "img" && (
                <Avatar
                  sx={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "auto",
                    borderRadius: "20px",
                    overflow: "hidden",
                    pb: "8px",
                  }}
                  alt={message.img}
                  src={message.img}
                ></Avatar>
              )}
            </Stack>
            <MessageMenu isLeft={!isRight} />
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: "#888888",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            0:12
          </Typography>
        </Stack>
      );
    }
  }
  return null;
};

export default ConservationMessage;
