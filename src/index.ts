import * as bodyParser from 'body-parser';
import express from 'express';
import route from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
