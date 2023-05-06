import React from "react";
import { Chats } from "./Chats";
import Conversations from "./Conversations";
import RightSideBar from "./RightSideBar";

const GeneralApp = () => {
  return (
    <>
      <Chats />
      <Conversations />
      <RightSideBar />
    </>
  );
};

export default GeneralApp;
