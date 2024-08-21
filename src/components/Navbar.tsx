// import { AddGroup } from "./Nav/AddGroup";
import { memo } from "react";
import Notification from "./Nav/Notification";
import Profile from "./Nav/Profile";
import SearchDialog from "./Nav/SearchDiolog";
import ThemeToggle from "./Nav/ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbar mt-2   container bg-primary-content px-4 rounded-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl rounded-full">coChatter</a>
      </div>
      <div className="flex-none">
        <SearchDialog />
        {/* <AddGroup /> */}
        <Notification />
        <ThemeToggle />
        <Profile />
      </div>
    </div>
  );
};

export default memo(Navbar);
