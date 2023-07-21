interface IQuestionAnswer {
  question: Iquestion;
  answer: Ianswer;
}
interface IQuestionRequest {
  question: Iquestion;
}
interface IValidationError {
  type?: string;
  value?: string;
  msg?: string;
  path?: string;
  location?: string;
}
interface IQuestionResponse {
  Error?: IValidationError[];
  answer?: Ianswer;
  error?: string;
}

type IFAQs = IQuestionAnswer[];
type Iquestion = string;
type IqList = question[];
type Ianswer = string;
