import { createHash } from 'node:crypto';
import { createReadStream } from 'fs';
import { join } from 'path'

const calculateHash = async () => {
  const fileName = 'fileToCalculateHashFor.txt'
  const filePath = join('src', 'hash', 'files', fileName);
  let hash;

  const fileStream = createReadStream(filePath);
  fileStream.on('data', (chunk) => {
    hash = createHash('sha256').update(chunk);
  });

  fileStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(`${fileHash}`);
  });

};

await calculateHash();
