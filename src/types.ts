export type TPricePeriod = '1h' | '3h' | '6h' | '12h' | '24h'

export type TToken = {
  address: string
  title: string
  delta: number
  price: number
}
