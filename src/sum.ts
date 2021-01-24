export default (...num: number[]): number => {
  return num.reduce((a, b) => a + b, 0);
};
