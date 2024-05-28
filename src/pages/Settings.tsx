import { useNavigate } from 'react-router-dom'

import format from '../format'
import { usePersistStore } from '../store'

import Page from '../kit/Page'
import Button from '../kit/Button'
import Divider from '../kit/Divider'
import Group from '../kit/Group'
import GroupButton from '../kit/GroupButton'

import { useCopy } from '../hooks'
import { useWallet } from '../hooks'

import { ReactComponent as PhraseIcon } from '../assets/phrase.svg'
import { ReactComponent as DisconnectIcon } from '../assets/disconnect.svg'

function Settings() {
  const navigate = useNavigate()
  const { copy, isCopied } = useCopy()
  const { address } = useWallet()
  const { setMnemonic } = usePersistStore()

  return (
    <Page>
      <div className="mt-5 flex flex-col gap-2 items-center">
        <div className="w-[80px] h-[80px] rounded-full bg-[#D6DDEA]" />
        <div className="text-[18px] leading-[22px] font-medium">{format.address(address)}</div>
        <Button
          theme="small-light"
          onClick={() => { copy(address) }}
        >
          {isCopied ? 'Copied!' : 'Copy Address'}
        </Button>
      </div>
      <Group className="mt-10">
        <GroupButton icon={<PhraseIcon />} text="Show Recovery Phrase" onClick={() => { navigate('/show-phrase') }} />
        <Divider />
        <GroupButton icon={<DisconnectIcon />} text="Disconnect Wallet" onClick={() => { setMnemonic(null) }} />
      </Group>
    </Page>
  )
}

export default Settings
