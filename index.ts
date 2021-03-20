export default (a: string) => {
  return process.env[a].toLowerCase() === 'true'
};
