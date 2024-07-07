import Page from '../kit/Page'
import Group from '../kit/Group'
import GroupItem from '../kit/GroupItem'
import Divider from '../kit/Divider'

import hiIcon from '../assets/hi.png'
import { ReactComponent as InfoIcon } from '../assets/info.svg'

function Invite() {
  const invite = 'ABCDEF'

  return (
    <Page bottom={
      'bottom'
    }>
      <div className="flex flex-col items-center">
        <img src={hiIcon} className="w-[80px] h-[80px]" />
        <h1 className="text-[32px] leading-[40px] font-bold text-center">Invite friends and <span className="text-main">earn 50% from their Fees</span></h1>
      </div>
      <div className="mt-10 flex items-center gap-2">
        {invite.split('').map(char => (
          <div className="flex items-center justify-center w-full flex-grow basis-0 h-[72px] bg-white rounded-[12px] text-[36px] leading-[44px]">{char}</div>
        ))}
      </div>
      <Group className="mt-5">
        <GroupItem
          title="Invites Left:"
          value={`5 out of 5`}
        />
        <Divider className="mx-3"/>
        <GroupItem
          title="Referrals:"
          value={0}
        />
        <Divider className="mx-3"/>
        <GroupItem
          title="SOL Earned:"
          value={0}
        />
        <Divider className="mx-3"/>
        <div className="flex items-start gap-[10px] py-4 px-3 text-main">
          <InfoIcon className="h-5 w-5" />
          <div className="text-[16px] leading-[22px]">Rewards are automatically deposited to your SOL balance</div>
        </div>
      </Group>
    </Page>
  )
}

export default Invite
