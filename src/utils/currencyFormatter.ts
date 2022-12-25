export const currencyFormat = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    currency: 'PHP',
    currencyDisplay: 'code',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(value);
};
