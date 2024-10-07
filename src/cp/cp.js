import child_process from 'child_process';
import { join } from 'path'

const spawnChildProcess = async (args) => {
  const pathToChild = join('src', 'cp', 'files', 'script.js')

  const child = child_process.fork(pathToChild, args, {
    stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
  })
  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['1', '2', 10]);
