import Page from '../kit/Page'
import Button from '../kit/Button'

import { useCopy } from '../hooks'
import { useWallet } from '../hooks'

function Receive() {
  const { copy, isCopied } = useCopy()
  const { address } = useWallet()

  return (
    <Page>
      <div className="mt-[120px] flex flex-col gap-10 text-center">
        <h1 className="text-[28px] leading-[36px]">Receive token on<br />Solana network</h1>
        <Button
          className="text-center text-main text-[18px] leading-[22px] font-medium"
          onClick={() => { copy(address) }}
        >
          {address}
        </Button>
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
