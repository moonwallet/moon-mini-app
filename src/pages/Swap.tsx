import { useState } from 'react'

import Button from '../kit/Button'
import Page from '../kit/Page'
import InputAmount from '../kit/InputAmount'

import { ReactComponent as AddIcon } from '../assets/add.svg'
import { ReactComponent as SwapIcon } from '../assets/swap.svg'

function Swap() {
  const isButtonEnabled = false
  const buttonText = 'ENTER AMOUNT'

  const [amount, setAmount] = useState(0)

  const selectFrom = () => {
  }

  const selectTo = () => {
  }

  const swapTokens = () => {
  }

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <div className="rounded-[20px] bg-white">
          <Button
            onClick={selectFrom}
            className="flex items-center gap-2 p-[14px]"
          >
            <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-main/10">
              <AddIcon className="w-6 h-6 text-main" />
            </div>
            <div className="text-[18px] leading-[22px] font-medium text-main">Swap from</div>
          </Button>
          <div className="p-5 pb-8 border-black/[8%] border-t">
            <InputAmount
              amount={amount}
              onChange={setAmount}
            />
          </div>
          <Button
            wrapperClassName="absoulte w-10 h-10 -bottom-[24px] left-[50%] -translate-x-[50%]"
            className="flex items-center justify-center w-10 h-10 bg-[#EAEAEC] rounded-full"
            onClick={swapTokens}
          >
            <SwapIcon className="w-10 h-10 text-[#808082]" />
          </Button>
        </div>
        <div className="rounded-[20px] bg-white">
          <Button
            onClick={selectTo}
            className="flex items-center gap-2 p-[14px]"
          >
            <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-main/10">
              <AddIcon className="w-6 h-6 text-main" />
            </div>
            <div className="text-[18px] leading-[22px] font-medium text-main">Swap to</div>
          </Button>
        </div>
      </div>
      <div className="mt-7">
        <Button
          theme="big"
          disabled={!isButtonEnabled}
          onClick={() => {}}
        >
          {buttonText}
        </Button>
      </div>
    </Page>
  )
}

export default Swap
