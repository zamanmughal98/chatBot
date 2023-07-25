import * as express from 'express';
import { chatbotAnswersController, createToken } from '../controller';
import { questionValidation } from '../validation';

const route = express.Router();

route.get('/', createToken);
route.post('/', questionValidation, chatbotAnswersController);

export default route;
