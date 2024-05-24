import Page from '../kit/Page'
import Menu from '../kit/Menu'
import Transaction from '../kit/Transaction'

function History() {

  const DateMark = ({ date }: { date: string }) => (
    <div className="Date pt-10 pb-2 text-[14px] leading-[18px] text-[#3C3C4399]">{date}</div>
  )

  return (
    <Page bottom={<Menu />}>
      <DateMark date={'16 May'} />
      <div className="flex flex-col gap-2">
        <Transaction />
      </div>
      <DateMark date={'15 May'} />
      <div className="flex flex-col gap-2">
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
      <DateMark date={'14 May'} />
      <div className="flex flex-col gap-2">
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </Page>
  )
}

export default History
