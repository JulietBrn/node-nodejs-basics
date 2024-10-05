import fs from 'node:fs';
import { join } from 'path';

const rename = async () => {
  const fileName = 'wrongFilename.txt'
  const newFileName = 'properFilename.md'

  const filePath = join('src', 'fs', 'files', fileName);
  const newFilePath = join('src', 'fs', 'files', newFileName);

  fs.stat(filePath, function (err) {
    if (err != null) {
      throw new Error('FS operation failed')
    }

    fs.stat(newFilePath, function (err) {
      if (err == null) {
        throw new Error('FS operation failed')
      }

      fs.rename(filePath, newFilePath, (renameErr) => {
        if (renameErr) {
          throw new Error('FS operation failed')
        }
        console.log('Rename success');
      });
    });
  });
};

await rename();
