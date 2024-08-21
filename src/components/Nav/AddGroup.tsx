import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { sampleUsers } from "../../utils/sampleData";
import AddGroupCard from "./AddGroupCard";
export const AddGroup = () => {
  const modalRef = useRef(null);
  const data = sampleUsers;

  return (
    <>
      {" "}
      <button
        className="btn btn-ghost btn-circle mr-5"
        onClick={() => modalRef.current && modalRef.current?.showModal()}
      >
        <IoMdAdd className="h-6 w-6" />
      </button>
      <dialog id="my_modal_2" ref={modalRef} className="modal">
        <div className="modal-box  flex flex-col justify-start  gap-3">
          <h2 className="card-title ">Create a group</h2>
          <div className="form-control">
            <input
              type="text"
              placeholder="Group name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Group description"
              className="input input-bordered w-full mt-5"
            />
          </div>
          <div className="w-full  flex justify-start items-start gap-2 flex-col">
            <h1 className="stat-title">Add 3 members</h1>
            <input
              type="text"
              placeholder="Search"
              className="input  input-bordered  w-full"
            />
            <div className="w-full  max-h-96 bg-base-300 p-5 rounded-lg flex flex-col gap-2 overflow-auto ">
              {data.map((user) => (
                <AddGroupCard key={user._id} user={user} />
              ))}
              {data.map((user) => (
                <AddGroupCard key={user._id} user={user} />
              ))}
              {data.map((user) => (
                <AddGroupCard key={user._id} user={user} />
              ))}
              {data.map((user) => (
                <AddGroupCard key={user._id} user={user} />
              ))}
            </div>
          </div>

          <button className="btn w-full btn-primary">Create</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};
