import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="justify-center flex flex-col gap-5 items-center h-screen text-3xl">
      <h1>Page not found</h1>
      <Link to="/" className="btn btn-primary">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
