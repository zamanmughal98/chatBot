import { body } from 'express-validator';
import { validationMessage } from '../lib/chatBot';

export const questionValidation = [
  body('question')
    .notEmpty()
    .withMessage(validationMessage.empty)
    .isString()
    .withMessage(validationMessage.string)
    .isLength({ min: 2 })
    .withMessage(validationMessage.minLength),
];
