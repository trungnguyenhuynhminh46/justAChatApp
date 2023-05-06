import { Box, Stack, IconButton, InputBase, Fab, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { LinkSimple, Smiley, PaperPlaneTilt } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { ClickAwayListener } from "@mui/base";
import { Footer_Actions } from "../../../data";

const ConversationsFooter = () => {
  const theme = useTheme();
  const [showEmoji, setShowEmoji] = useState(false);
  const [showFooterActions, setShowFooterActions] = useState(false);

  return (
    <Stack
      direction={"row"}
      sx={{
        position: "relative",
        py: 2.5,
        px: 3,
        pr: 4.5,
        gap: 3,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      {showEmoji && (
        <ClickAwayListener
          onClickAway={() => {
            setShowEmoji(false);
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(-100px, -96%)",
            }}
          >
            <Picker data={data} onEmojiSelect={console.log} />
          </Box>
        </ClickAwayListener>
      )}
      {showFooterActions && (
        <ClickAwayListener
          onClickAway={() => {
            setShowFooterActions(false);
          }}
        >
          <Stack
            gap={2}
            sx={{
              position: "absolute",
              bottom: "68px",
              left: "40px",
            }}
          >
            {Footer_Actions.map((item) => {
              return (
                <Tooltip title={item.title} placement="right">
                  <Fab
                    aria-label={item.title}
                    sx={{
                      backgroundColor: item.color,
                    }}
                  >
                    {item.icon}
                  </Fab>
                </Tooltip>
              );
            })}
          </Stack>
        </ClickAwayListener>
      )}
      <Box
        sx={{
          pl: 3,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          height: "50px",
          borderRadius: "21px",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
      >
        <IconButton
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.mode === "light" ? "#030303" : "#f7f7f7",
          }}
          onClick={() => {
            setShowFooterActions((prev) => !prev);
          }}
        >
          <LinkSimple width={24} height={24} />
        </IconButton>
        <InputBase
          placeholder="Write a message..."
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
          onClick={() => {
            setShowEmoji((prev) => !prev);
          }}
        >
          <Smiley />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: 48,
          height: 48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: theme.palette.primary.main,
          borderRadius: "10px",
        }}
      >
        <IconButton
          sx={{
            color: "#fff",
          }}
        >
          <PaperPlaneTilt />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default ConversationsFooter;
