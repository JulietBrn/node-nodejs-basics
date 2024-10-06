import path from 'path';
import  { promises as fs } from 'fs';
import { release, version } from 'os';
import { createServer as createServerHttp }  from 'http';

import('./files/c.js')

const random = Math.random();
const directoryPath = `${import.meta.dirname}`

let unknownObject;

if (random > 0.5) {
  const jsonData = await fs.readFile(path.join(directoryPath, './files/a.json'), 'utf-8');
  unknownObject = JSON.parse(jsonData);
} else {
  const jsonData = await fs.readFile(path.join(directoryPath, './files/b.json'), 'utf-8');
  unknownObject = JSON.parse(jsonData);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {unknownObject, myServer}
