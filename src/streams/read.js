import { createReadStream } from 'fs';
import os from 'os';
import { join } from 'path'

const read = async () => {
  const fileName = 'fileToRead.txt'
  const filePath = join('src', 'streams', 'files', fileName);

  const fileStream = createReadStream(filePath)
  fileStream.on('data', (chunk) => {
    process.stdout.write(chunk + os.EOL)
  })

};

await read();
