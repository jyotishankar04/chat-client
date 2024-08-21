import { memo } from "react";

interface props {
  _id: string;
  sender: {
    avatar: string;
    name: string;
  };
}

const RequestNotficationCard: React.FC<{ user: props }> = ({ user }) => {
  return (
    <div className="px-5 py-2 w-full border-2  border-primary/50 rounded-md ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img
            src={user.sender.avatar}
            alt="user-image"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold">{user.sender.name}</h3>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <button className=" btn btn-primary">Accept</button>
          <button className=" btn btn-outline btn-error ">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default memo(RequestNotficationCard);
