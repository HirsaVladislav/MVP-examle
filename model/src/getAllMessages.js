import { createReadStream, existsSync } from "fs";
import { writeFile } from "node:fs/promises";
import { pipeline } from "stream";
import * as url from 'url';

export const getAllMessages = async(req, res) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const filePath = __dirname + '../db/userMesages.json';
  res.setHeader('Content-Type', 'application/json');

  if(!existsSync(filePath)) {
    const defaultParams = JSON.stringify([]);
    await writeFile(filePath, defaultParams, 'utf8');
  };
  
  const readStream = createReadStream(filePath);
  pipeline(readStream, res, (err) => err && console.log(err));
};