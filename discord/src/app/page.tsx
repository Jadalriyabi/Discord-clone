import {use, useState} from "react";

interface Message {
  sender: string;
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {sender: "Alice", content: "Hello, world!"},
    {sender: "Bob", content: "Hello, Alice!" }
  ]);

  return messages.map((message, index) => 
    (
    <div key={index}>
      <strong>{message.sender}</strong>: {message.content}
      {}
    </div>
  ));
}
