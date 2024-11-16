import { useGetMe } from '../hooks'
import { TShareLinkData } from '../types'

const botUrl = import.meta.env.VITE_BOT_URL

if (!botUrl) {
  console.error('No VITE_BOT_URL')
}

export const useShareLink = ({ address, text }: {
  address?: string
  text?: string
}) => {
  const { data: me } = useGetMe()

  const _text = text || '🌚 Moon Wallet'

  const data: TShareLinkData = {
    address: address,
    ref: me?.ref.code || undefined,
  }

  const encodedData = btoa(JSON.stringify(data))
    .split('=').join('')
    .split('+').join('-')
    .split('/').join('_')

  const shareUrl = `${botUrl}/app?startapp=${encodedData}`
  const shareLink = `https://t.me/share/url?text=${encodeURIComponent(_text)}&url=${encodeURIComponent(shareUrl)}&`

  return { shareUrl, shareLink }
}
