import React from "react";
import { Stack } from "@mui/material";
import ConversationsHeader from "./ConversationsHeader";
import ConversationsContent from "./ConversationsContent";
import ConversationsFooter from "./ConversationsFooter";

const Conversations = () => {
  return (
    <Stack
      sx={{
        flex: 1,
      }}
    >
      <ConversationsHeader />
      <ConversationsContent />
      <ConversationsFooter />
    </Stack>
  );
};

export default Conversations;
