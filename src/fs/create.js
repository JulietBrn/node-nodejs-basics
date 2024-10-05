import { exists } from 'fs';
import fs from 'node:fs/promises';
import { join } from 'path';

const create = async () => {
  const fileName = 'fresh.txt'
  const filePath = join('src', 'fs', 'files', fileName);

  exists(filePath, (e) => {
    if (e) {
      throw new Error('FS operation failed');
    } else {
      fs.writeFile(filePath, 'I am fresh and young')
    }
  })

};

await create();
