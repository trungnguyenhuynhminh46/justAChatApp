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
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import {
  PhotoSizeSelectActualOutlined as PhotoSizeSelectActualOutlinedIcon,
  FileDownloadOutlined as FileDownloadOutlinedIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";
import { Message_options } from "../../../data";

const MessageMenu = ({ sx, setShowMsgMenu }) => {
  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowMsgMenu(false);
      }}
    >
      <Paper
        sx={{ zIndex: 1, width: 320, maxWidth: "100%", ...sx }}
        elevation={3}
      >
        <MenuList>
          {Message_options.slice(0, 4).map((item) => {
            return (
              <MenuItem>
                <ListItemText>{item.title}</ListItemText>
              </MenuItem>
            );
          })}
          <Divider />
          {Message_options.slice(4).map((item) => {
            return (
              <MenuItem>
                <ListItemText>{item.title}</ListItemText>
              </MenuItem>
            );
          })}
        </MenuList>
      </Paper>
    </ClickAwayListener>
  );
};

const MsgDivider = (props) => {
  const { message } = props;
  return (
    <Divider
      sx={{
        fontSize: 14,
      }}
    >
      {message.text}
    </Divider>
  );
};

const MsgNormal = (props) => {
  const theme = useTheme();
  const { message } = props;
  const isInComming = message.incoming;
  const [showMsgMenu, setShowMsgMenu] = useState(false);
  if (isInComming) {
    // Right
    return (
      <Stack direction={"column"} alignItems={"end"} gap={2} mb={2}>
        <Stack
          direction={"row"}
          gap={1}
          sx={{
            position: "relative",
          }}
        >
          {showMsgMenu && (
            <MessageMenu
              setShowMsgMenu={setShowMsgMenu}
              sx={{
                position: "absolute",
                left: 0,
                top: "0.5",
                transform: "translate(-100%, 0)",
              }}
            />
          )}
          <IconButton
            onClick={() => {
              setShowMsgMenu((prev) => !prev);
            }}
          >
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
          <Box
            sx={{
              height: "44px",
              px: "22px",
              borderRadius: "16px",
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {message.message}
          </Box>
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
  return (
    <Stack direction={"row"} alignItems={"end"} gap={2} mb={2}>
      <Stack direction={"row"} gap={1} sx={{ position: "relative" }}>
        {showMsgMenu && (
          <MessageMenu
            setShowMsgMenu={setShowMsgMenu}
            sx={{
              position: "absolute",
              right: 0,
              top: "0.5",
              transform: "translate(100%, 0)",
            }}
          />
        )}
        <Box
          sx={{
            height: "44px",
            px: "22px",
            borderRadius: "16px",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {message.message}
        </Box>
        <IconButton
          onClick={() => {
            setShowMsgMenu((prev) => !prev);
          }}
        >
          <MoreHorizIcon></MoreHorizIcon>
        </IconButton>
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
};

const MsgImg = (props) => {
  const theme = useTheme();
  const { message } = props;
  const isInComming = message.incoming;
  const [showMsgMenu, setShowMsgMenu] = useState(false);
  if (isInComming) {
    // Right
    return (
      <Stack mb={2} gap={2} alignItems={"end"}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems="center"
          sx={{ position: "relative" }}
        >
          {showMsgMenu && (
            <MessageMenu
              setShowMsgMenu={setShowMsgMenu}
              sx={{
                position: "absolute",
                left: 0,
                top: "0.5",
                transform: "translate(-100%, 0)",
              }}
            />
          )}
          <IconButton
            onClick={() => {
              setShowMsgMenu((prev) => !prev);
            }}
          >
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
          <Stack
            alignItems={"end"}
            gap={0.5}
            sx={{
              px: "22px",
              pt: "8px",
              pb: "16px",
              borderRadius: "16px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            {message.message && (
              <Typography sx={{ color: "#fff" }}>{message.message}</Typography>
            )}
            <Avatar
              sx={{
                width: "100%",
                maxWidth: "200px",
                height: "auto",
                borderRadius: "20px",
                overflow: "hidden",
              }}
              alt={message.img}
              src={message.img}
            ></Avatar>
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
  return (
    <Stack direction={"row"} alignItems={"end"} gap={2} mb={2}>
      <Stack
        direction={"row"}
        gap={1}
        alignItems="center"
        sx={{ position: "relative" }}
      >
        {showMsgMenu && (
          <MessageMenu
            setShowMsgMenu={setShowMsgMenu}
            sx={{
              position: "absolute",
              right: 0,
              top: "0.5",
              transform: "translate(100%, 0)",
            }}
          />
        )}
        <Stack
          gap={0.5}
          sx={{
            position: "relative",
            px: "22px",
            pt: "8px",
            pb: "16px",
            alignItems: "start",
            borderRadius: "16px",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
          }}
        >
          <Typography sx={{ ml: "4px" }}>{message.message}</Typography>
          <Avatar
            sx={{
              width: "100%",
              maxWidth: "200px",
              height: "auto",
              borderRadius: "20px",
              overflow: "hidden",
            }}
            alt={message.img}
            src={message.img}
          ></Avatar>
        </Stack>
        <IconButton
          onClick={() => {
            setShowMsgMenu((prev) => !prev);
          }}
        >
          <MoreHorizIcon></MoreHorizIcon>
        </IconButton>
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
};

const MsgDoc = (props) => {
  const theme = useTheme();
  const { message } = props;
  const isInComming = message.incoming;
  const [showMsgMenu, setShowMsgMenu] = useState(false);
  if (isInComming) {
    // Right
    return (
      <Stack gap={2} mb={2} alignItems={"end"}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems="center"
          sx={{ position: "relative" }}
        >
          {showMsgMenu && (
            <MessageMenu
              setShowMsgMenu={setShowMsgMenu}
              sx={{
                position: "absolute",
                left: 0,
                top: "0.5",
                transform: "translate(-100%, 0)",
              }}
            />
          )}
          <IconButton
            onClick={() => {
              setShowMsgMenu((prev) => !prev);
            }}
          >
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "end",

              borderRadius: "16px",
              padding: "16px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              p={2}
              sx={{ background: "#0054a8", borderRadius: "10px" }}
            >
              <IconButton>
                <PhotoSizeSelectActualOutlinedIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
              <Typography sx={{ color: "#fff" }}>{message.image}</Typography>
              <IconButton>
                <FileDownloadOutlinedIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </Stack>
            <Typography sx={{ color: "#fff" }}>{message.message}</Typography>
          </Box>
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
  return (
    <Stack direction={"row"} gap={2} mb={2} alignItems={"end"}>
      <Stack
        direction={"row"}
        gap={1}
        alignItems="center"
        sx={{
          position: "relative",
        }}
      >
        {showMsgMenu && (
          <MessageMenu
            setShowMsgMenu={setShowMsgMenu}
            sx={{
              position: "absolute",
              right: 0,
              top: "0.5",
              transform: "translate(100%, 0)",
            }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "start",

            borderRadius: "16px",
            padding: "16px",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
          }}
        >
          <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            p={2}
            sx={{
              background: theme.palette.background.default,
              borderRadius: "10px",
            }}
          >
            <IconButton>
              <PhotoSizeSelectActualOutlinedIcon
                sx={{
                  color: theme.palette.text.primary,
                }}
              />
            </IconButton>
            <Typography>{message.image}</Typography>
            <IconButton>
              <FileDownloadOutlinedIcon
                sx={{
                  color: theme.palette.text.primary,
                }}
              />
            </IconButton>
          </Stack>
          <Typography sx={{ ml: 0.5 }}>{message.message}</Typography>
        </Box>
        <IconButton
          onClick={() => {
            setShowMsgMenu((prev) => !prev);
          }}
        >
          <MoreHorizIcon></MoreHorizIcon>
        </IconButton>
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
};

const MsgLink = (props) => {
  const theme = useTheme();
  const { message } = props;
  const isInComming = message.incoming;
  const [showMsgMenu, setShowMsgMenu] = useState(false);
  if (isInComming) {
    // Right
    return (
      <Stack gap={2} mb={2} alignItems={"end"}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems="center"
          sx={{ position: "relative" }}
        >
          {showMsgMenu && (
            <MessageMenu
              setShowMsgMenu={setShowMsgMenu}
              sx={{
                position: "absolute",
                left: 0,
                top: "0.5",
                transform: "translate(-100%, 0)",
              }}
            />
          )}
          <IconButton
            onClick={() => {
              setShowMsgMenu((prev) => !prev);
            }}
          >
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "end",

              borderRadius: "16px",
              padding: "16px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Stack
              gap={2}
              alignItems={"end"}
              p={2}
              sx={{ background: "#0054a8", borderRadius: "10px" }}
            >
              <Link
                underline="none"
                href={message.link}
                sx={{
                  width: "100%",
                  maxWidth: "260px",
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
              <Typography sx={{ color: "#fff" }}>{message.title}</Typography>
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
            <Typography sx={{ color: "#fff" }}>{message.message}</Typography>
          </Box>
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
  return (
    <Stack direction={"row"} gap={2} mb={2} alignItems={"end"}>
      <Stack
        direction={"row"}
        gap={1}
        alignItems="center"
        sx={{ position: "relative" }}
      >
        {showMsgMenu && (
          <MessageMenu
            setShowMsgMenu={setShowMsgMenu}
            sx={{
              position: "absolute",
              right: 0,
              top: "0.5",
              transform: "translate(100%, 0)",
            }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,

            borderRadius: "16px",
            padding: "16px",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
          }}
        >
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
          <Typography sx={{ ml: 0.5 }}>{message.message}</Typography>
        </Box>
        <IconButton
          onClick={() => {
            setShowMsgMenu((prev) => !prev);
          }}
        >
          <MoreHorizIcon></MoreHorizIcon>
        </IconButton>
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
};

const MsgReply = (props) => {
  const theme = useTheme();
  const { message } = props;
  const isInComming = message.incoming;
  const [showMsgMenu, setShowMsgMenu] = useState(false);
  if (isInComming) {
    // Right
    return (
      <Stack gap={2} mb={2} alignItems={"end"}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems="center"
          sx={{ position: "relative" }}
        >
          {showMsgMenu && (
            <MessageMenu
              setShowMsgMenu={setShowMsgMenu}
              sx={{
                position: "absolute",
                left: 0,
                top: "0.5",
                transform: "translate(-100%, 0)",
              }}
            />
          )}
          <IconButton
            onClick={() => {
              setShowMsgMenu((prev) => !prev);
            }}
          >
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "end",

              borderRadius: "16px",
              padding: "16px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Box p={2} sx={{ background: "#0054a8", borderRadius: "10px" }}>
              {message.reply}
            </Box>
            <Typography sx={{ color: "#fff" }}>{message.message}</Typography>
          </Box>
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
  return (
    <Stack direction={"row"} gap={2} mb={2} alignItems={"end"}>
      <Stack
        direction={"row"}
        gap={1}
        alignItems="center"
        sx={{
          position: "relative",
        }}
      >
        {showMsgMenu && (
          <MessageMenu
            setShowMsgMenu={setShowMsgMenu}
            sx={{
              position: "absolute",
              right: 0,
              top: "0.5",
              transform: "translate(100%, 0)",
            }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,

            borderRadius: "16px",
            padding: "16px",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
          }}
        >
          <Box
            p={2}
            sx={{
              background: theme.palette.background.default,
              borderRadius: "10px",
            }}
          >
            {message.reply}
          </Box>
          <Typography sx={{ ml: 0.5 }}>{message.message}</Typography>
        </Box>
        <IconButton
          onClick={() => {
            setShowMsgMenu((prev) => !prev);
          }}
        >
          <MoreHorizIcon></MoreHorizIcon>
        </IconButton>
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
};

export { MsgDivider, MsgNormal, MsgImg, MsgDoc, MsgLink, MsgReply };
