import { useCopy } from './useCopy'

export const useShare = () => {
  const { copy } = useCopy()

  const share = ({ url, title, text }: {
    url: string
    title: string
    text: string
  }) => {
    if (navigator.share) {
      navigator.share({
        url,
        title,
        text,
      })
    } else {
      copy(url)
    }
  }

  return { share }
}
