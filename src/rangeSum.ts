export default (range: number[], power: number[], num: number): number => {
  return range.reduce((prev, current, i, src): number => {
    if (current <= num) {
      const next = src[i + 1] ?? 0;
      const value = next
        ? Math.min(next - current, num - (current - 1))
        : num - (current - 1);
      return prev + value * power[i];
    } else {
      return prev;
    }
  }, 0);
};
