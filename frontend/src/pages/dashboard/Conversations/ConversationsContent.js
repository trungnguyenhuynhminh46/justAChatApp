import React from "react";
import { Stack } from "@mui/material";
import { Chat_History } from "../../../data";
import {
  MsgDivider,
  MsgNormal,
  MsgImg,
  MsgDoc,
  MsgLink,
  MsgReply,
} from "./Message";
import ScrollBar from "../../../components/Scrollbar";

const ConversationsContent = () => {
  return (
    <ScrollBar
      timeout={500}
      clickOnTrack={false}
      style={{
        flex: 1,
      }}
    >
      <Stack
        sx={{
          flex: 1,
          p: "26px",
        }}
      >
        {Chat_History.map((message, index) => {
          switch (message.type) {
            case "divider":
              return <MsgDivider key={index} message={message} />;
            case "msg":
              switch (message.subtype) {
                case "img":
                  return <MsgImg key={index} message={message} />;
                case "doc":
                  return <MsgDoc key={index} message={message} />;
                case "link":
                  return <MsgLink key={index} message={message} />;
                case "reply":
                  return <MsgReply key={index} message={message} />;
                default:
                  return <MsgNormal key={index} message={message} />;
              }
            // Not define yet!
            default:
              return null;
          }
        })}
      </Stack>
    </ScrollBar>
  );
};

export default ConversationsContent;
