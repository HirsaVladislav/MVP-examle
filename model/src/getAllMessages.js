import fs from "fs";
import { pipeline } from "stream";
import * as url from 'url';

export const getAllMessages = (req, res) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  res.setHeader('Content-Type', 'text/html');
  const readStream = fs.createReadStream(__dirname + '../db/userMesages.json');
  pipeline(readStream, res, (err) => err && console.log(err));
};