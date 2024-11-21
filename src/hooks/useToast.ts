import { useStore } from '../hooks'
import { TToast } from '../types'

export const useToast = () => {
  const { toasts, setToasts } = useStore()

  const toast = ({ text }: {
    text: string
  }) => {
    const toast: TToast = {
      text,
      createdAt: +(new Date())
    }
    setToasts([
      ...toasts,
      toast,
    ])
  }

  return { toast }
}
