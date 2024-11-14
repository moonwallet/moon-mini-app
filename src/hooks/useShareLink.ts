import { useGetMe } from '../hooks'
import { TShareLinkData } from '../types'

const botUrl = import.meta.env.VITE_BOT_URL

if (!botUrl) {
  console.error('No VITE_BOT_URL')
}

export const useShareLink = ({ address }: {
  address?: string
}) => {
  const { data: me } = useGetMe()

  const data: TShareLinkData = {
    address: address,
    ref: me?.ref.code || undefined,
  }

  const encodedData = btoa(JSON.stringify(data))
    .split('=').join('')
    .split('+').join('-')
    .split('/').join('_')

  const shareUrl = `${botUrl}/app?startapp=${encodedData}`
  const shareLink = `https://t.me/share/url?text=${encodeURIComponent('Moon Wallet')}&url=${encodeURIComponent(shareUrl)}&`

  return { shareUrl, shareLink }
}
