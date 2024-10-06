import { Transform, pipeline } from 'stream'
import os from 'os';

const transform = async () => {
  const writeStream = process.stdin
  const reedStream = process.stdout

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const gottenChunk = chunk.toString().trim()

      const reversedChunk = gottenChunk.split('').reverse().join('')

      callback(null, reversedChunk + os.EOL)
    }
  })

  pipeline(writeStream, transformStream, reedStream, (err) => console.log(err))

};

await transform();