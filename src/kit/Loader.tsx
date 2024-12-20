export const Loader = ({ size }: { size: number }) => (
  <div
    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[50px] h-[50px]"
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full rounded-full border-[3px] border-main border-l-main/10 border-t-main/10 animate-[spin_0.6s_linear_infinite]" />
  </div>
)
