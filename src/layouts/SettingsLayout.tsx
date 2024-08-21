import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const SettingsLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/user/settings/general");
  }, []);
  return (
    <div className="h-full">
      <div className="divider  card-title text-4xl">Settings</div>
      <div className="container w-full grid  grid-cols-3   h-full">
        <div className=" w-full p-3 gap-4 mt-4 h-[100%] flex flex-col  ">
          <NavLink
            to={"general"}
            className={({ isActive }) =>
              `btn ${
                isActive
                  ? "btn-primary  text-white "
                  : "btn-ghost border-primary border text-primary"
              }`
            }
          >
            <h1 className="text-xl  font-semibold">General</h1>
          </NavLink>
          <NavLink
            to={"security"}
            className={({ isActive }) =>
              `btn ${
                isActive
                  ? "btn-primary  text-white "
                  : "btn-ghost border-primary border text-primary"
              }`
            }
          >
            <h1 className="text-xl  font-semibold">Security</h1>
          </NavLink>
          <NavLink
            to={"help"}
            className={({ isActive }) =>
              `btn ${
                isActive
                  ? "btn-primary  text-white "
                  : "btn-ghost border-primary border text-primary"
              }`
            }
          >
            <h1 className="text-xl  font-semibold">Help</h1>
          </NavLink>
          <NavLink to={"general"}>
            <button className="btn w-full btn-error border border-error">
              <h1 className="text-xl text-white font-semibold">Log out</h1>
            </button>
          </NavLink>
        </div>
        <div className="col-span-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
