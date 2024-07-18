export const format = {
  amount: (amount: number) => amount.toFixed(2),
  fiat$: (amount: number) => '$' + amount.toFixed(2),
  fiat: (amount: number) => amount.toFixed(2),
  address: (address: string) => `${address.substring(0, 4)}..${address.substring(address.length - 4)}`,
  percent: (decimalShare: number) => (decimalShare * 100).toFixed(2) + '%',
  commas: (amount: number) => parseFloat(amount.toFixed(2)).toLocaleString('en-US'),
  short: (amount: number, digits: number = 2): string => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ]
    try {
      const regexp = /\.0+$|(\.[0-9]*[1-9])0+$/
      const item = lookup.slice().reverse().find(item => amount >= item.value)
      return item ? (amount / item.value).toFixed(digits).replace(regexp, '$1').concat(item.symbol) : '0'
    } catch (e) {
      console.error(e)
    }
    return '0'
  }
}
