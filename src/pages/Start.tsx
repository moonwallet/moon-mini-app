import { useNavigate } from 'react-router-dom'

import Button from '../kit/Button'

import moon from '../assets/moon.png'
import importIcon from '../assets/import.svg'
import createIcon from '../assets/create.svg'

function Create() {
  const navigate = useNavigate()

  const buttonStyle = 'h-[80px] gb-white'
  return (
    <>
      <div className="px-3">
        <img src={moon} className="mx-auto mb-[80px] w-[180px] h-[180px]" alt="React logo" />
        <h1 className="mb-[22px] text-[36px] leading-[44px] font-bold text-center">Let’s set up your Moon</h1>
        <div className="mx-auto max-w-[400px] flex flex-col gap-2">
          <Button
            className={buttonStyle}
            onClick={() => { navigate('/import') }}
          >
            <div className="flex items-center gap-3 h-[80px] p-[14px] bg-[#fff] rounded-[20px]">
              <img src={importIcon} className="w-10 h-10" />
              <div className="flex-x text-left">
                <div className="text-[18px] leading-[22px] font-medium">Import Secret Recovery Phrase</div>
                <div className="text-[14px] leading-[18px] text-secondary/[60%]">Import Existing Solana Wallet</div>
              </div>
            </div>
          </Button>
          <Button
            className={buttonStyle}
            onClick={() => { navigate('/create') }}
          >
            <div className="flex items-center gap-3 h-[80px] p-[14px] bg-[#fff] rounded-[20px]">
              <img src={createIcon} className="w-10 h-10" />
              <div className="flex-x text-left">
                <div className="text-[18px] leading-[22px] font-medium">Create new Wallet</div>
                <div className="text-[14px] leading-[18px] text-secondary/[60%]">Create new Wallet on Solana</div>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Create
