import { memo } from "react";
import { Link } from "react-router-dom";

interface message {
  attachments?: {
    public_id: string;
    url: string;
  }[];
  content: string;
  _id: string;
  sender: {
    _id: string;
    name: string;
  };
  chat: string;
  createdAt: string;
}

const MessageBubble: React.FC<{ message: message }> = ({ message }) => {
  return (
    <div>
      <div
        className={`chat  ${
          message.sender._id && message.sender._id == "user._id"
            ? "chat-end"
            : "chat-start"
        } `}
      >
        <div>
          <div className="text-xs">{message.sender.name}</div>
        </div>
        {message.attachments && message.attachments?.length > 0 ? (
          <div>
            <div className="chat-bubble max-w-72">
              <Link to={message.attachments[0].url}>
                <img src={message.attachments[0].url} alt="" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="chat-bubble">
            {message.content && message.content}
          </div>
        )}
      </div>
      {/* <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble">
          It was you who would bring balance to the Force
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble">Not leave it in Darkness</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble">Not leave it in Darkness</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble">Not leave it in Darkness</div>
      </div> */}
    </div>
  );
};

export default memo(MessageBubble);
