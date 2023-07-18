const storedQuestions: IFAQs = [
  {
    question: 'What is your name?',
    answer: 'My name is Chatbot. Nice to meet you!',
  },
  {
    question: 'How are you doing?',
    answer: "I am an AI, so I don't have feelings, but thank you for asking!",
  },
  {
    question: 'Can you help me with my homework?',
    answer: 'Of course! I will do my best to assist you with your homework.',
  },
  {
    question: 'What is the capital of France?',
    answer: 'The capital of France is Paris.',
  },
  {
    question: 'Tell me a joke.',
    answer:
      "Sure, here you go: Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    question: 'How tall is Mount Everest?',
    answer: 'Mount Everest is approximately 8,848 meters (29,029 feet) tall.',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter is the largest planet in our solar system.',
  },
  {
    question: 'Who painted the Mona Lisa?',
    answer: 'The Mona Lisa was painted by Leonardo da Vinci.',
  },
  {
    question: 'What is the currency of Japan?',
    answer: 'The currency of Japan is the Japanese Yen (JPY).',
  },
  {
    question: 'How many continents are there?',
    answer:
      'There are seven continents: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America.',
  },
  {
    question: 'What is the national animal of Australia?',
    answer: 'The national animal of Australia is the kangaroo.',
  },
  {
    question: 'Who wrote the Harry Potter book series?',
    answer: 'The Harry Potter book series was written by J.K. Rowling.',
  },
  {
    question: 'What is the largest ocean in the world?',
    answer: 'The largest ocean in the world is the Pacific Ocean.',
  },
  {
    question: 'What is the main ingredient in chocolate?',
    answer: 'The main ingredient in chocolate is cocoa beans.',
  },
  {
    question: 'Who is the current President of the United States?',
    answer:
      'As of my knowledge cutoff in September 2021, the current President of the United States is Joe Biden.',
  },
  {
    question: 'What is the square root of 144?',
    answer: 'The square root of 144 is 12.',
  },
];

export const getAnswer = (question: Iquestion): Ianswer => {
  const keywords: IqList = question.toLowerCase().split(' ');

  for (const { question, answer } of storedQuestions) {
    const matchedKeywords: IqList = keywords.filter((keyword: Iquestion) =>
      question.toLowerCase().includes(keyword),
    );

    if (matchedKeywords.length > 0) {
      return answer;
    }
  }

  return sorry;
};

export const greet: Ianswer = 'Chatbot: Hello! How can I assist you?';
const sorry: Ianswer = "I'm sorry, I don't have an answer to that question.";
