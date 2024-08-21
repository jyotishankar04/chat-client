import Navbar from "../components/Navbar";
import { samepleChats } from "../utils/sampleData";
import ChatItem from "../components/chat/ChatItem";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const ChatLayout = () => {
  const [state, setState] = useState("");
  const data = samepleChats;

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col justify-start items-center">
      <Navbar />
      <div className="container grid grid-cols-3 gap-2 w-full h-full">
        <div className=" flex-col flex gap-1 mt-2 w-full px-4">
          <div>
            <input
              onChange={(e) => setState(e.target.value)}
              type="text"
              className="input-md  border border-primary outline-none rounded-full w-full"
              placeholder="Search for a chat"
            />
          </div>
          {data && data.map((chat) => <ChatItem key={chat._id} chat={chat} />)}
        </div>
        <div className="bg-base-200 rounded-lg w-full h-[95%] overflow-auto mr-6 m-2 col-span-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
