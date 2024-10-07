import fs from 'node:fs';
import { join } from 'path';

const list = async () => {
  const folderPath = join('src', 'fs', 'files');
  let files

  fs.stat(folderPath, (err, stat) => {
    if (err || stat.isFile()) {
      throw new Error('FS operation failed')
    }

    fs.readdir(folderPath, (err, data) => {
      files = data;

      files.forEach((file) => {
        const filePath = join(folderPath, file)

        fs.stat(filePath, (err, stat) => {
          if (stat.isFile()) {
            console.log(file);
          }
        })

      })
    })
  })
};

await list();
