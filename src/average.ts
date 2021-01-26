import sum from "#/sum";

export default (...num: number[]): number => {
  const size = num.length;
  if (size === 0) return 0;
  return sum(...num) / size;
};
