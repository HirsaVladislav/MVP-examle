import { existsSync } from "node:fs";
import { writeFile, readFile } from "node:fs/promises";
import * as url from 'url';

export const addMessage = async(req, res) => {
    try {
        const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
        const filePath = __dirname + '../db/userMesages.json';
    
        if(!existsSync(filePath)) {
            const defaultParams = JSON.stringify([]);
            await writeFile(filePath, defaultParams, 'utf8');
        };
        
        const json = await readFile(filePath, 'utf-8');
        const messageArray = JSON.parse(json);
        const message = req?.body?.message;

        if (!message) {
            res.statusCode = 400;
            res.statusMessage = 'Invalid message';
            return res.end();
        };

        const newMessage = {
            id: Date.now(),
            message
        };
        messageArray.push(newMessage);
        await writeFile(filePath, JSON.stringify(messageArray), 'utf8');
    
        res.end(JSON.stringify(messageArray));
        
    } catch (error) {
        console.error(error)
    }
};