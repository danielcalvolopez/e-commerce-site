export const vatCalculator = (percentage, price) => {
  const percent = (percentage / 100) * price;
  const total = Math.trunc(percent);
  return total;
};
