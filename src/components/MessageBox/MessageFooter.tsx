import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { memo } from "react";

const MessageFooter = () => {
  return (
    <div className="w-full flex pt-2 flex-row items-center justify-between ">
      <div className="flex flex-row gap-3">
        <button className="btn btn-square btn-primary ">
          <HiOutlineEmojiHappy className="text-white w-full text-2xl" />
        </button>
        <button className="btn btn-square btn-primary overflow-hidden relative ">
          <FaRegImage className="text-white w-full text-2xl" />
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            className="opacity-0 h-full absolute w-full cursor-pointer "
          />
        </button>
      </div>
      <div className="w-full mx-5">
        <input
          type="text"
          className="w-full p-2 input-md outline-none  text-pretty"
          placeholder="Type a message..."
        />
      </div>
      <div>
        <button className="btn text-2xl btn-square btn-primary">
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default memo(MessageFooter);
