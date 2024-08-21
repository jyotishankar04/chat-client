import { memo, useRef } from "react";
import { IoIosNotifications } from "react-icons/io";
import RequestNotficationCard from "./RequestNotficationCard";
import { sampleNotifications } from "../../utils/sampleData";

const Notification = () => {
  const modalRef = useRef(null);
  const data = sampleNotifications;

  return (
    <div className="indicator mr-3">
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => modalRef.current && modalRef.current?.showModal()}
      >
        <span
          className={`indicator-item badge badge-secondary ${
            data && data.length > 0 ? "block" : "hidden"
          }`}
        >
          {data && data.length}
        </span>
        <IoIosNotifications className="h-6 w-6" />
      </button>

      <dialog id="my_modal_2" ref={modalRef} className="modal">
        <div className="modal-box">
          <div className="flex flex-col max-h-[400px] h-auto overflow-auto justify-start gap-4 items-center ">
            <h1 className="card-title">Requests</h1>
            {data.length > 0
              ? data.map((user) => (
                  <RequestNotficationCard key={user._id} user={user} />
                ))
              : "No Notifications"}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default memo(Notification);
