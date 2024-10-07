const parseArgs = () => {
    const argsArray = []

    for (let i = 2; i < process.argv.length; i += 2) {
      argsArray.push(`${process.argv[i]} is ${process.argv[i + 1]}`);
    }

    console.log(argsArray.join(', '));
};

parseArgs();