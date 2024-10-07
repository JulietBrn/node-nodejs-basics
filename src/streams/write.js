import { createWriteStream } from 'fs';
import { join } from 'path'

const write = async () => {
  const fileName = 'fileToWrite.txt'
  const filePath = join('src', 'streams', 'files', fileName);

  const fileStream = createWriteStream(filePath)
  process.stdin.on('data', (data) => {
    fileStream.write(data)
  })
};

await write();