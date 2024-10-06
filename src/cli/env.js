const parseEnv = () => {
  const rssKeys = Object.keys(process.env).filter(el => {
    return el.startsWith('RSS');
  })

  const rssVars = rssKeys.map(key => {
    return `${key}=${process.env[key]}`
  })

  console.log(rssVars.join('; '));
};

parseEnv();