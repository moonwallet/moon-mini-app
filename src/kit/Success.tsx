import Lottie from 'lottie-react'

import animationSuccess from '../assets/animation-success.json'

function Success() {
  return (
    <div className="Success flex flex-col items-center gap-[50px]">
      <div className="mt-[150px] w-[112px] h-[112px]">
        <Lottie
          style={{ width: 112, height: 112 }}
          animationData={animationSuccess}
          loop={true}
        />
      </div>
      <h1 className="text-center">Your Wallet is ready</h1>
    </div>
  )
}

export default Success
