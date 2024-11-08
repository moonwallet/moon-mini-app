export type TPricePeriod = '1h' | '3h' | '6h' | '12h' | '24h'

export type TToken = {
  address: string
  title: string
  ticker: string
  delta: number
  price: number
}

export type TCandle = {
  open: number
  high: number
  low: number
  close: number
  time: number
}

export type TShareLinkData = {
  address?: string
  ref?: string
}
