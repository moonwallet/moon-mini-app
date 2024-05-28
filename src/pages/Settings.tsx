import format from '../format'

import Page from '../kit/Page'
import Button from '../kit/Button'

import { useCopy } from '../hooks'
import { useWallet } from '../hooks'

function Settings() {
  const { copy, isCopied } = useCopy()
  const { address } = useWallet()

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
    </Page>
  )
}

export default Settings
