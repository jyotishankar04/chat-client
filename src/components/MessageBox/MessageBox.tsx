import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";
import MessageBubble from "./MessageBubble";
import { sampleMessage } from "../../utils/sampleData";
import { memo } from "react";

const MessageBox = () => {
  const messages = sampleMessage;
  return (
    <div className="h-[95%] w-full p-2">
      <MessageHeader />
      <div className="flex flex-col h-[85%] overflow-auto justify-between">
        <div className="p-5 h-full">
          {messages.map((message) => (
            <MessageBubble key={message._id} message={message} />
          ))}
        </div>
      </div>
      <MessageFooter />
    </div>
  );
};

export default memo(MessageBox);
