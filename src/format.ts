const format = {
  amount: (amount: number) => amount.toFixed(4),
  fiat: (amount: number) => amount.toFixed(2),
  address: (address: string) => `${address.substring(0, 4)}..${address.substring(address.length - 4)}`,
  percent: (amount: number) => amount.toFixed(2),
}

export default format
