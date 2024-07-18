export const explorer = {
  wallet: (address: string) => `https://solscan.io/account/${address}`,
  token: (address: string) => `https://solscan.io/token/${address}`,
  tx: (hash: string) => `https://solscan.io/tx/${hash}`,
}
