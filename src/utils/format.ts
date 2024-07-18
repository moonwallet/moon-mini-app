export const format = {
  amount: (amount: number) => amount.toFixed(2),
  fiat: (amount: number) => '$' + amount.toFixed(2),
  _fiat: (amount: number) => amount.toFixed(2),
  address: (address: string) => `${address.substring(0, 4)}..${address.substring(address.length - 4)}`,
  percent: (decimalShare: number) => (decimalShare * 100).toFixed(2) + '%',
  commas: (amount: number) => parseFloat(amount.toFixed(2)).toLocaleString('en-US'),
}
