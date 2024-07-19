import QRCodeStyling from 'qr-code-styling'
import { useEffect, useRef } from 'react'

import moon from '../assets/moon.png'

const SIZE = 180

const qrCode = new QRCodeStyling({
  width: SIZE,
  height: SIZE,
  margin: 0,
  image: moon,
  backgroundOptions: {
    color: "#EFEFF1",
  },
  dotsOptions: {
    color: '#000',
    type: 'rounded'
  },
  cornersSquareOptions: {
    color: '#000',
    type: 'extra-rounded'
  },
  cornersDotOptions: {
    color: '#000',
    // type: 'dot'
  },
  qrOptions: {
    errorCorrectionLevel: 'M',
    mode: 'Byte',
    typeNumber: 0
  },
  imageOptions: {
    // imageSize: 1,
  }
})

export const QrCode = ({ text, className }: {
  text: string
  className?: string
}) => {

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current)
    }
  }, [ref.current])

  useEffect(() => {
    qrCode.update({
      data: text,
      width: SIZE,
      height: SIZE
    })
  }, [text])

  return (
    <div className={className} style={{ width: SIZE, height: SIZE }}>
      <div ref={ref} />
    </div>
  )
}
