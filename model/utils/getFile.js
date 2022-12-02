import fs from "fs";
import { pipeline } from "stream";
import * as url from 'url';

export const sendHomePage = (filePath) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  res.setHeader('Content-Type', 'text/html');
  const readStream = fs.createReadStream(__dirname + '../../view/index.html');
  pipeline(readStream, res, (err) => err && console.log(err));
};