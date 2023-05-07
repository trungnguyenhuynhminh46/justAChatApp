import React from "react";
import { Stack } from "@mui/material";
import { Chat_History } from "../../../data";
import ConservationMessage from "./Message";
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
          return <ConservationMessage key={index} message={message} />;
        })}
      </Stack>
    </ScrollBar>
  );
};

export default ConversationsContent;
