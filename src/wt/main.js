import { Worker } from 'worker_threads'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToWorker = join(__dirname, 'worker.js')
  
    console.log('i am index');
    const worker = new Worker(pathToWorker, {
      workerData: 5
    })
    worker.postMessage('hi from worker')
};

await performCalculations();