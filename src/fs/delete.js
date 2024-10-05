import fs from 'node:fs';
import { join } from 'path';

const remove = async () => {
  const fileName = 'fileToRemove.txt'
  const filePath = join('src', 'fs', 'files', fileName);

  fs.stat(filePath, function (err) {
    if (err != null) {
      throw new Error('FS operation failed')
    }

    fs.unlink(filePath, () => {
      console.log('Deleted');
    })
  })
};

await remove();
