import { memo } from "react";
import { NavLink } from "react-router-dom";

const ChatItem: React.FC<{
  chat: {
    avatar: string[];
    name: string;
    _id: string;
    groupChat: boolean;
    members: string[];
  };
}> = ({ chat }) => {
  return (
    <NavLink
      key={chat._id}
      to={`/chat/user/${chat._id}`}
      className={({ isActive }) =>
        ` btn   px-10 py-2 w-full flex justify-start items-center gap-8 h-auto  hover:bg-primary-content ${
          isActive ? "btn-ghost bg-primary-content text-primary" : "btn-ghost"
        }`
      }
    >
      <div className="">
        <img
          src={chat.avatar[0]}
          alt=""
          className=" avatar w-12 h-12 rounded-full"
        />
      </div>
      <h1>{chat.name}</h1>
    </NavLink>
  );
};

export default memo(ChatItem);
