import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TSlippage, TToast } from '../types'

type TStore = {
  isDebug: boolean
  setDebug: (_: boolean) => void

  toasts: TToast[]
  setToasts: (_: TToast[]) => void
}

export const useStore = create<TStore>((set/*, get*/) => ({
  isDebug: false,
  setDebug: (isDebug) => set(({ isDebug })),

  toasts: [],
  setToasts: (toasts) => set(({ toasts })),
}))

type TPersistStore = {
  mnemonic: null | string
  setMnemonic: (_: null | string) => void
  slippage: TSlippage
  setSlippage: (_: TSlippage) => void
}

export const usePersistStore = create<TPersistStore>()(persist((set/* , get*/) => ({
  mnemonic: null,
  setMnemonic: (mnemonic) => set(({ mnemonic })),
  slippage: 0.01,
  setSlippage: (slippage) => set(({ slippage })),
}), {
  name: 'moon-storage',
}))
