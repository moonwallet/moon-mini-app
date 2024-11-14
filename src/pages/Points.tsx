import { useGetMe, useGetTasks, useShareLink, useOpenLink, useCopy, usePlatform } from '../hooks'
import { Page, Task } from '../kit'

import point from '../assets/point.png'

export const Points = () => {
  const { data: me, refetch: refetchMe } = useGetMe()
  const { data: tasks, refetch: refetchTasks } = useGetTasks()
  const { shareUrl, shareLink } = useShareLink({})
  const { openLink } = useOpenLink()
  const { copy, isCopied } = useCopy()
  const { isTg } = usePlatform()

  const share = () => {
    console.log(shareUrl)
    try {
      openLink(shareLink)
      if (!isTg) {
        copy(shareUrl)
      }
    } catch {
      copy(shareUrl)
    }
    // track('Points invite pressed')
  }


  const afterClaim = () => {
    refetchMe()
    refetchTasks()
  }

  return (
    <Page>
      <div className="flex flex-col items-center text-center">
        <img src={point} className="w-[100px] h-[100px]" />
        <h1 className="mt-4 text-[32px] leading-[40px] font-bold">
          {me?.total_points} <span className="text-[#3C3C4399]">Moon Points</span>
        </h1>
        <div className="text-[#00000080] text-[16px] leading-[24px]">Complete&nbsp;tasks, earn&nbsp;points, get&nbsp;future&nbsp;rewards</div>
      </div>
        <div className="w-full mt-7 flex flex-col gap-2 text-left">
        {(tasks || []).map(task => (
          <Task
            key={`task-${task.id}`}
            id={task.id}
            image={task.image_url}
            title={task.name}
            subtitle={task.description}
            buttonText={(task.id === 1 && isCopied) ? 'Copied!' : task.cta}
            link={task.target_url}
            claimable={task.claimable}
            afterClaim={afterClaim}
            isSuccess={task.is_completed}
            onClick={task.id === 1 ? share : undefined}
            bottom={task.id === 1 ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="">Points earned:</div>
                  <div className="">{me?.ref.points || 0}</div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="">Friends invited:</div>
                  <div className="">{me?.ref.count || 0}</div>
                </div>
              </div>
            ) : undefined}
          />
        ))}
      </div>
    </Page>
  )
}
