import { useEffect, useState } from "react"

import RedirectIcon from "@/assets/svgs/icons/redirect-icon.svg"

import MyntraLogo from "@/assets/pngs/logos/myntra.png"
import RupeeCoin from "@/assets/pngs/rupee-coin.png"
import Avatars from "@/assets/pngs/avatars.png"

import MoneyGif from "@/assets/gifs/3d-money-icon.gif"

interface CashbackActionCardProps {
  isMobileSticky?: boolean
}

export const CashbackActionCard = (props: CashbackActionCardProps) => {
  const { isMobileSticky = false } = props

  const defaultTickerIndex = 0
  const [tickerIndex, setTickerIndex] = useState(defaultTickerIndex)

  const tickerItems = [
    {
      image: MoneyGif,
      text: "₹10,000 Cashback Earned on Myntra Today",
    },
    {
      image: Avatars,
      text: "80K Users Shoppers Today",
    },
    {
      image: MoneyGif,
      text: "₹10,000 Cashback Earned on Flipkart Today",
    },
  ]

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setTickerIndex((previous) => (previous + 1) % tickerItems.length)
    }, 3500)

    return () => {
      clearInterval(tickerInterval)
    }
  }, [tickerItems.length])

  if (isMobileSticky) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col items-center justify-center gap-1 border-t border-border bg-white px-4 pt-1.5 pb-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
        <div className="h-6 w-full overflow-hidden">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${tickerIndex * 100}%)` }}
          >
            {tickerItems.map((item, index) => (
              <div
                key={`${item.text}-${index}`}
                className="flex h-6 w-full shrink-0 items-center justify-center gap-2"
              >
                <img
                  src={item.image}
                  alt="ticker-icon"
                  className="h-4.5 w-auto object-contain"
                />

                <span className="text-[10px] font-semibold text-ck-muted">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="relative flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[12px] bg-ck-orange px-4 text-base font-bold text-white shadow-sm active:scale-[0.99]"
        >
          <div className="animate-shimmer-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <span className="relative z-10">Earn Cashback on Myntra</span>

          <img
            src={RedirectIcon}
            alt="redirect-icon"
            className="relative z-10 size-4"
          />
        </button>
      </div>
    )
  }

  return (
    <section className="flex w-full max-w-132 flex-col items-start gap-4">
      <div className="bg-hero-radial flex h-26 w-full items-center gap-4 rounded-[18px] p-5 shadow-sm">
        <div className="flex h-15.75 w-auto max-w-46.5 min-w-30 items-center justify-center rounded-[10px] border border-ck-border-gray bg-white">
          <img src={MyntraLogo} alt="myntra-logo" className="h-auto max-w-29" />
        </div>

        <div className="flex flex-col items-start gap-1 text-white">
          <span className="text-[clamp(18px,2vw,27px)] leading-8 font-bold tracking-wide">
            Upto 7% Cashback
          </span>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 text-[clamp(12px,2vw,18px)] text-white hover:underline"
          >
            <span>View All</span>

            <span>→</span>
          </button>
        </div>
      </div>

      <div className="shadow-card-elevated flex w-full flex-col items-start gap-6 rounded-[20px] border border-border bg-white p-6 md:gap-8 md:p-8.5">
        <div className="flex w-full items-center gap-3.5">
          <img
            src={RupeeCoin}
            alt="rupee-coin"
            className="size-12 shrink-0 object-contain"
          />

          <div className="flex flex-col gap-1">
            <h3 className="text-[20px] leading-6 font-extrabold text-ck-text-main">
              Ready to earn cashback?
            </h3>

            <span className="text-base leading-5 font-normal text-ck-body">
              Shop on Myntra & earn Cashback
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-1">
          <div className="h-9 w-full overflow-hidden">
            <div
              className="flex w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${tickerIndex * 100}%)` }}
            >
              {tickerItems.map((item, index) => (
                <div
                  key={`${item.text}-${index}`}
                  className="flex h-9 w-full shrink-0 items-center justify-center gap-2"
                >
                  <img
                    src={item.image}
                    alt="ticker-icon"
                    className="h-9 w-auto object-contain"
                  />

                  <span className="text-[15px] leading-tight font-semibold text-ck-muted">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="relative flex h-14 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[16px] bg-ck-orange px-6 text-base font-bold text-white shadow-sm transition-all hover:brightness-105 active:scale-[0.99] md:h-17 md:text-[clamp(12px,2vw,18px)]"
          >
            <div className="animate-shimmer-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <span className="relative z-10">Earn Cashback on Myntra</span>

            <img
              src={RedirectIcon}
              alt="redirect-icon"
              className="relative z-10 size-4.5"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
