import { createChart, ColorType } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

import { TCandle } from '../types'

export const TradingView = ({ candles }: {
  candles: TCandle[]
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(
    () => {
      if (chartContainerRef.current === null) {
        return
      }
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current!.clientWidth })
      }

      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 270,
        layout: {
          background: {
            type: ColorType.Solid,
            color: 'transparent'
          },
          textColor: '#3C3C4399',
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
          borderColor: '#E8E8E8',
        },
        grid: {
          vertLines: { color: '#E8E8E8' },
          horzLines: { color: '#E8E8E8' },
        },
        rightPriceScale: {
          visible: true,
          ticksVisible: true,
          // textColor: 'rgba(197, 203, 206, 1)',
          borderColor: '#E8E8E8',
      }
      })

      const newSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      })
      // @ts-expect-error // ...
      newSeries.setData(candles)

      newSeries.applyOptions({
        priceFormat: {
          type: 'price',
          precision: 9,
          minMove: 0.000000001,
        },
      })

      chart.timeScale().fitContent()

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        chart.remove()
      }
    },
    [candles]
  )

  return (
    <div className="TradingView h-full" ref={chartContainerRef} />
  )
}
