import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDone } from "react-icons/md";

interface props {
  _id: string;
  avatar: string;
  name: string;
}

const AddGroupCard: React.FC<{ user: props }> = ({ user }) => {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div className="px-5 py-2 w-full border-2  border-primary/50 rounded-md ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img
            src={user.avatar}
            alt="user-image"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold">{user.name}</h3>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={() => setIsAdded((prev) => !prev)}
            className={` btn btn-primary rounded-full btn-square ${
              !isAdded ? "bg-primary" : "bg-success"
            }`}
          >
            {isAdded ? (
              <MdDone className="text-white text-3xl " />
            ) : (
              <IoMdAdd className="text-white text-3xl " />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGroupCard;
