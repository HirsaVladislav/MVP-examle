import { sendHomePage } from './src/sendHomePage.js';
import { addMessage } from './src/addMessage.js';
import { getAllMessages } from './src/getAllMessages.js';
import { getPresenter } from './src/getPresenter.js';
import express from 'express';
import bodyParser from 'body-parser'; 

const PORT = 3000;
const app = express();

app.use(bodyParser.json())
app.get('/', sendHomePage);
app.post('/addMessage', addMessage);
app.get('/presenter/index.js', getPresenter);
app.get('/getAllMessages', getAllMessages);


app.listen(PORT, () => console.info(`Server started on port ${PORT}, follow this link http://localhost:${PORT}/`));