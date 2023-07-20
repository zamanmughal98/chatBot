import * as bodyParser from 'body-parser';
import express from 'express';
import { getAnswer } from './chatBot';

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (request, response) => {
  try {
    const { question: userAsked } = request.body;
    const answer: Ianswer = getAnswer(userAsked);
    response.status(200).json({ answer });
  } catch (error) {
    response.json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
