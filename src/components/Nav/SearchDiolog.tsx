import { memo, useRef } from "react";

const SearchDialog = () => {
  const modalRef = useRef(null);

  return (
    <>
      <button
        className="btn btn-ghost btn-circle mr-2"
        onClick={() => modalRef.current && modalRef.current?.showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <dialog id="my_modal_2" ref={modalRef} className="modal">
        <div className="modal-box">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="flex flex-col max-h-[400px] h-auto overflow-auto justify-start items-center mt-5 p-10">
            <div>User not found</div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default memo(SearchDialog);
