import fs from 'fs/promises';
import { join } from 'path';

const copy = async () => {

  const folderPath = join('src', 'fs', 'files');
  const newFolderPath = join('src', 'fs', 'files_copy');

  try {
    try {
      await fs.stat(newFolderPath);
      throw new Error('FS operation failed')
    } catch (err) {
      if (err.code !== 'ENOENT') console.log(err);
    }

    const stat = await fs.stat(folderPath)
    if (!stat.isDirectory()) {
      throw new Error('FS operation failed')
    }

    await fs.mkdir(newFolderPath)
    console.log('new folder created');

    const files = await fs.readdir(folderPath)

    await Promise.all(files.forEach(async (file) => {
      const oldFilePath = join(folderPath, file);
      const newFilePath = join(newFolderPath, file);

      const fileStat = await fs.stat(oldFilePath);

      if (fileStat.isFile()) {
        await fs.copyFile(oldFilePath, newFilePath)
      }
    })
    )
  } catch {
  }

};

await copy();

