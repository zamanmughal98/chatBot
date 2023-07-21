import * as express from 'express';
import { chatbotAnswersController } from '../controller';
import { questionValidation } from '../validation';

const route = express.Router();

route.post('/', questionValidation, chatbotAnswersController);

export default route;
