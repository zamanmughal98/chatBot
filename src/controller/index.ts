import { validationResult } from 'express-validator';
import { getAnswer } from '../lib/chatBot';
import { Request, Response } from 'express';

export const chatbotAnswersController = (
  request: Request<never, never, IQuestionRequest, never>,
  response: Response<IQuestionResponse>,
) => {
  const validationErrors = validationResult(request);
  if (!validationErrors.isEmpty()) {
    response.status(400).json({ Error: validationErrors.array() });
    return;
  }
  try {
    const { question: userAsked } = request.body;
    const answer: Ianswer = getAnswer(userAsked);
    response.status(200).json({ answer });
  } catch (error: any) {
    response.status(500).json({ error: error.message });
  }
};
