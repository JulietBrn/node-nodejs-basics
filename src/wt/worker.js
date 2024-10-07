import { workerData, parentPort } from 'worker_threads'

console.log(workerData);
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
};

// sendResult();
// parentPort.postMessage(sendResult())
parentPort.on('message', (msg) => {
  console.log(msg);
})