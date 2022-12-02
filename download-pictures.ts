import fs from 'fs';
import https from 'https';
import { getSpeakers } from './data';

getSpeakers().map(speaker => {    
    const path = `public/pictures/${speaker.slug}.jpg`;

    if (fs.existsSync(path)) return;

    const file = fs.createWriteStream(path);
    https.get(speaker.image.url, response => {
       response.pipe(file);
    
       file.on("finish", () => {
           file.close();
       });
    });
});
