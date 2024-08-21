import { Link, useParams } from "react-router-dom";
import { samepleChats } from "../../utils/sampleData";
import { MdMenu } from "react-icons/md";
import { memo } from "react";

const MessageHeader = () => {
  const { id } = useParams();
  const data = samepleChats[Number(id) - 1];
  return (
    <div className="card flex flex-row w-full  items-center  justify-between gap-6  bg-primary-content p-2 ">
      <Link
        to={`/user/${id}`}
        className="flex justify-start items-center gap-5"
      >
        <div>
          <img
            alt="user image"
            src={data.avatar[0] && data.avatar[0]}
            className="w-10 rounded-full avatar"
          />
        </div>
        <div className="w-full">
          <h1 className="text-lg font-bold">{data.name}</h1>
          <p className="text-sm text-gray-600">{}</p>
        </div>
      </Link>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <MdMenu className="text-3xl" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">Clear Chat</a>
          </li>
          <li>
            <a>Remove Friend</a>
          </li>
          <li className="text-error">
            <a>Block User</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(MessageHeader);
