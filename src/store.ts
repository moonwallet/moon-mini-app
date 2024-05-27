import { create } from 'zustand'

type TStore = {
  mnemonic: null | string
  setMnemonic: (_: null | string) => void

  isDebug: boolean
  setDebug: (_: boolean) => void
}

export const useStore = create<TStore>((set/*, get*/) => ({
  mnemonic: null,
  setMnemonic: (mnemonic) => set(({ mnemonic })),
}))
