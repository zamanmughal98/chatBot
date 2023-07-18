type IFAQs = IQuestionAnswer[];

type Iquestion = string;

type IqList = question[];

type Ianswer = string;

interface IQuestionAnswer {
  question: question;
  answer: answer;
}
type IchatBot = void;
