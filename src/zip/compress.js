import { pipeline } from 'stream'
import { createWriteStream, createReadStream} from 'fs';
import { join } from 'path';
import zlib from 'zlib'

const compress = async () => {
  const fileNameFrom = 'fileToCompress.txt'
  const filePathFrom = join('src', 'zip', 'files', fileNameFrom);

  const fileNameTo = 'archive.gz'
  const filePathTo = join('src', 'zip', 'files', fileNameTo);

  const reedStream = createReadStream(filePathFrom)
  const writeStream = createWriteStream(filePathTo)

  const compressStream = zlib.createGzip()

  pipeline(reedStream, compressStream, writeStream, (err) => console.log(err))
};

await compress();
