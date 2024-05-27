import QRCodeStyling from 'qr-code-styling'
import { useEffect, useRef } from 'react'

const SIZE = 180

const qrCode = new QRCodeStyling({
  width: SIZE,
  height: SIZE,
  margin: 0,
  dotsOptions: {
    color: '#000',
    type: 'extra-rounded'
  },
  cornersSquareOptions: {
    color: '#000',
    type: 'extra-rounded'
  },
  cornersDotOptions: {
    color: '#000',
    type: 'dot'
  },
  qrOptions: {
    errorCorrectionLevel: 'M',
    mode: 'Byte',
    typeNumber: 0
  }
})

const QrCode = ({ text }: {
  text: string
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
    <div className="bg-white" style={{ width: SIZE, height: SIZE }}>
      <div ref={ref} />
    </div>
  )
}

export { QrCode }
