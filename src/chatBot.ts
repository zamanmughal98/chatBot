import promptSync from 'prompt-sync';
import { getAnswer, greet } from './utils.js';

const chatBot = (): IchatBot => {
  const prompt = promptSync();

  console.log(greet);

  while (true) {
    const userAsked: Iquestion = prompt('User: ');
    if (userAsked.toLowerCase() === 'exit') break;

    const answer: Ianswer = getAnswer(userAsked);
    console.log(`Chatbot: ${answer}`);
  }
};

export default chatBot;
