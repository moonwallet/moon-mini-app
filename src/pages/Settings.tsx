import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Page, Button, Divider, Group, GroupButton, BottomSheet } from '../kit'

import { useCopy, usePersistStore, useWallet } from '../hooks'

import { format } from '../utils'

import ava from '../assets/ava.png'
import { ReactComponent as PhraseIcon } from '../assets/phrase.svg'
import { ReactComponent as DisconnectIcon } from '../assets/disconnect.svg'

export const Settings = () => {
  const navigate = useNavigate()
  const { copy, isCopied } = useCopy()
  const { address } = useWallet()
  const { setMnemonic } = usePersistStore()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Page>
      <div className="mt-5 flex flex-col gap-2 items-center">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-[#D6DDEA]">
          <img className="w-[80px] h-[80px]" src={ava} />
        </div>
        <div className="text-[18px] leading-[22px] font-medium">{format.address(address)}</div>
        <Button
          theme="small-light"
          onClick={() => { copy(address) }}
        >
          {isCopied ? 'Copied!' : 'Copy Address'}
        </Button>
      </div>
      <Group className="mt-10">
        <GroupButton icon={<PhraseIcon />} text="Show Recovery Phrase" onClick={() => { navigate('/phrase') }} />
        <Divider />
        <GroupButton icon={<DisconnectIcon />} text="Disconnect Wallet" onClick={() => { setIsOpen(true) }} />
      </Group>

      <BottomSheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="text-[17px] leading-[22px] font-medium">Make sure you saved your Recovery Phrase</div>
        <div className="mt-4 text-[14px] leading-[24px] font-medium text-text/50">Your Recovery Phrase is necessary for accessing your assets.</div>
        <div className="mt-7 flex flex-col gap-4">
          <Button
            theme="big-light"
            onClick={() => { navigate('/phrase') }}
          >
            SHOW RECOVERY PHRASE
          </Button>
          <Button
            theme="big-danger"
            onClick={() => { setMnemonic(null) }}
          >
            DISCONNECT WALLET
          </Button>
        </div>
      </BottomSheet>
    </Page>
  )
}
