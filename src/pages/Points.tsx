import { Page, Group } from '../kit'

import point from '../assets/point.png'

function Points() {
  const points = 0

  return (
    <Page>
      <div className="flex flex-col items-center text-center">
        <img src={point} className="w-[100px] h-[100px]" />
        <h1 className="mt-4 text-[32px] leading-[40px] font-bold">
          {points} <span className="text-[#3C3C4399]">Moon Points</span>
        </h1>
        <div className="text-[#00000080] text-[16px] leading-[24px]">Complete&nbsp;tasks, earn&nbsp;points, get&nbsp;future&nbsp;rewards</div>
      </div>
      <div className="w-full mt-[60px] flex flex-col gap-2">
        <Group>
          <div className="flex items-start justify-between gap-3 px-4 py-4">
            <div>
              <div className="text-[18px] leading-[22px] font-medium">Share your referral on X</div>
              <div className="text-[13px] leading-[18px] text-[#3C3C4399]">Connect your X and share referral</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[15px] leading-[22px] text-main font-medium">+500</div>
              <img className="w-5 h-5" src={point} />
            </div>
          </div>
        </Group>
        <Group>
          <div className="flex items-start justify-between gap-3 px-4 py-4">
            <div>
              <div className="text-[18px] leading-[22px] font-medium">Refer a fren</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[15px] leading-[22px] text-main font-medium">+500</div>
              <img className="w-5 h-5" src={point} />
            </div>
          </div>
        </Group>
        <Group>
          <div className="flex items-start justify-between gap-3 px-4 py-4">
            <div>
              <div className="text-[18px] leading-[22px] font-medium">Trade on Moon</div>
              <div className="text-[13px] leading-[18px] text-[#3C3C4399]">Each $100 = 500 Points</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[15px] leading-[22px] text-main font-medium">+500</div>
              <img className="w-5 h-5" src={point} />
            </div>
          </div>
        </Group>
        <Group>
          <div className="flex items-start justify-between gap-3 px-4 py-4">
            <div>
              <div className="text-[18px] leading-[22px] font-medium">Swap <span className="text-main">$DUK</span> on Moon</div>
              <div className="text-[13px] leading-[18px] text-[#3C3C4399]">3x Bonus, $100 = 1500 Points</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[15px] leading-[22px] text-main font-medium">+500</div>
              <img className="w-5 h-5" src={point} />
            </div>
          </div>
        </Group>
      </div>
    </Page>
  )
}

export default Points
