import { useState } from "react";
import { Link } from "react-router-dom";

const SecuritySettings = () => {
  const [activeTab, setActiveTab] = useState("password");
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-6">
      <div className="w-[90%] p-5 mx-auto">
        <div className=" grid grid-cols-2 gap-2">
          <div>
            <button
              className={`btn btn-outline w-full ${
                activeTab == "password" ? "btn-primary" : ""
              }`}
              onClick={() => setActiveTab("password")}
            >
              Change Password
            </button>
          </div>
          <button
            className={`btn btn-outline w-full ${
              activeTab == "email" ? "btn-primary" : ""
            }`}
            onClick={() => setActiveTab("email")}
          >
            Change Email
          </button>
        </div>
        <div
          className={`w-[80%] mx-auto mt-5 ${
            activeTab == "password" ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2">
            <label className="text-lg text-base-content">
              Current Password
            </label>
            <input
              type="password"
              className="input-md rounded-lg bg-base-300 outline-none"
              placeholder="Enter your current password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-base-content">New Password</label>
            <input
              type="password"
              className="input-md rounded-lg bg-base-300 outline-none"
              placeholder="Enter your new password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-base-content">Repeat Password</label>
            <input
              type="password"
              className="input-md rounded-lg bg-base-300 outline-none"
              placeholder="Repeat your new password"
            />
          </div>

          <button className="btn btn-primary w-full mt-4">
            Change Password
          </button>
          <Link to={"forgot"} className="text-xl pt-4">
            forgot password?{" "}
          </Link>
        </div>
        <div
          className={`w-full flex flex-col items-center ${
            activeTab == "email" ? "block" : "hidden"
          }`}
        >
          <div className="w-[80%]">
            <div className="flex mt-5 flex-col gap-2">
              <label className="text-lg text-base-content">Current Email</label>
              <input
                type="email"
                className="input-md rounded-lg bg-base-300 outline-none"
                placeholder="Enter your current email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-base-content">New Email</label>
              <input
                type="email"
                className="input-md rounded-lg bg-base-300 outline-none"
                placeholder="Enter your new email"
              />
            </div>
            <button className="btn btn-primary w-full mt-4">
              Change Email
            </button>
            <div className={`mt-10 flex gap-7 items-center`}>
              <label>Enter the OTP</label>
              <input
                type="number"
                className="input-md bg-base-300 outline-none   rounded-md "
                placeholder="OTP"
              ></input>
              <button className="btn btn-primary">Resend OTP</button>
            </div>

            <button className="btn btn-primary w-full mt-5">
              Verify Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
