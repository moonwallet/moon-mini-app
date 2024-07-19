import { Page, Button } from '../kit'

import { useCopy } from '../hooks'
import { useWallet } from '../hooks'
import { QrCode } from '../kit/QrCode'

function Receive() {
  const { copy, isCopied } = useCopy()
  const { address } = useWallet()

  return (
    <Page>
      <div className="mt-[80px] flex flex-col gap-10 text-center">
        <h1 className="text-[28px] leading-[36px]">Receive token on<br />Solana network</h1>
        <div className="flex flex-col gap-6">
          <QrCode
            className="mx-auto"
            text={address}
          />
          <Button
            className="text-center text-main text-[18px] leading-[22px] font-medium break-words"
            onClick={() => { copy(address) }}
          >
            {address}
          </Button>
        </div>
        <Button
          theme="big-light"
          onClick={() => { copy(address) }}
        >
          {isCopied ? 'COPIED!' : 'COPY ADDRESS'}
        </Button>
      </div>
    </Page>
  )
}

export default Receive
