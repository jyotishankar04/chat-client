import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/6567609/pexels-photo-6567609.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="navbar rounded-lg grid grid-cols-2 absolute top-5 container left-[50%] -translate-x-[50%] bg-base-300/60 ">
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">coChatter</a>
        </div>
        <div className="navbar-end flex gap-5 justify-end items-center w-full">
          <Link to={"/auth/login"} className="btn btn-ghost px-10">
            Login
          </Link>
          <Link
            to={"/auth/signup"}
            className="btn btn-primary text-white px-10"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-neutral-content text-center ">
        <div className=" flex justify-center  items-center flex-col w-full">
          <h1 className="mb-5 text-5xl font-bold">
            Start connecting with coChatter
          </h1>
          <p className="mb-5">Collaborate, connect, chat.</p>
          <button className="btn  btn-primary text-white px-10">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
