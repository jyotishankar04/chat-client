import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      data-theme={"dark"}
      className="w-full h-screen flex justify-center items-center"
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
