import { pipeline } from 'stream'
import { createWriteStream, createReadStream} from 'fs';
import { join } from 'path';
import zlib from 'zlib'

const decompress = async () => {

  const fileNameFrom = 'archive.gz'
  const filePathFrom = join('src', 'zip', 'files', fileNameFrom);

  const fileNameTo = 'fileToCompress.txt'
  const filePathTo = join('src', 'zip', 'files', fileNameTo);

  const reedStream = createReadStream(filePathFrom)
  const writeStream = createWriteStream(filePathTo)

  const compressStream = zlib.createGunzip()

  pipeline(reedStream, compressStream, writeStream, (err) => console.log(err))
};

await decompress();
