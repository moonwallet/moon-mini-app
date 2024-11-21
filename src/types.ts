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

export type TUserId = string

export type TMe = {
  // id: TUserId
  // username: string | null
  // first_name: string | null
  // last_name: string | null
  ref: {
    code: string
    count: number
    points: number
  },
  total_points: number
}

export type TTask = {
  id: number
  name: string
  description: string
  position_order: number
  points: number
  cta: string
  target_url: null | string
  is_completed: boolean
  claimable: boolean
  is_partner?: boolean
  image_url?: string
}

export type TSlippage = number

export type TToast = {
  text: string
  createdAt: number
}
