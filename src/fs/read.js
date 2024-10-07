import fs from 'node:fs/promises';
import { join } from 'path';

const read = async () => {
  const fileName = 'fileToRead.txt'
  const filePath = join('src', 'fs', 'files', fileName);

  try {
    const data = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch {
    throw new Error('FS operation failed')
  }
};

await read();
