import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="w-full  flex flex-col justify-start  h-[96%] rounded-lg">
      <div className="divider">
        <h1 className="text-3xl  text-center  font-semibold">My Profile</h1>
      </div>
      <div className="grid h-auto grid-cols-2 gap-2">
        <div className=" flex justify-center items-start ">
          <div className="border-2 border-primary rounded-full p-2">
            <Link to={""}>
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="avatar  w-20 h-20  md:w-72 md:h-72 rounded-full  "
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold ">
              Name: <span className="text-primary">Jhon Doe</span>{" "}
            </h2>
            <p className="text-lg">
              Email:{" "}
              <span className="text-primary font-semibold">
                jhondoe@example.com
              </span>
            </p>
            <p className="text-lg">
              Bio:{" "}
              <span className="text-primary font-semibold">
                Hey i am using coChatter
              </span>
            </p>
            <p className="text-lg">
              Friends: <span className="text-primary font-semibold">173</span>
            </p>{" "}
            <button className="btn btn-primary w-52 mt-5">Edit Profile</button>
          </div>
        </div>
      </div>
      <div className="divider  flex flex-col overflow-auto h-96 ">
        <h2 className="text-3xl sticky top-0 bg-base-100 p-6  text-center divider  font-semibold">
          Friends
        </h2>
        <div className="grid grid-cols-1 w-full  gap-2">
          {[...Array(100)].map((_, index) => (
            <div>
              <h1>
                Friend {index + 1}:{" "}
                <span className="text-primary">Friend Name</span>{" "}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
