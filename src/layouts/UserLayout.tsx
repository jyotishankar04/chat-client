import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const UserLayout = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-screen overflow-hidden flex flex-col justify-start items-center">
        <Navbar />
        <div className="container   h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
