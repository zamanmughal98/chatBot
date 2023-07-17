import promptSync from "prompt-sync";
import { getAnswer } from "./utils.js";

const chatBot = () => {
  const prompt = promptSync();

  console.log("Chatbot: Hello! How can I assist you?");

  while (true) {
    const userAsked = prompt("User: ");
    if (userAsked.toLowerCase() === "exit") break;

    const answer = getAnswer(userAsked);
    console.log(`Chatbot: ${answer}`);
  }
};

export default chatBot;
