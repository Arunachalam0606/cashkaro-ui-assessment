import { useEffect, useState } from "react"

import { CouponCardDesktopSvg } from "@/components/coupon/coupon-card-desktop"
import { CouponCardCopiedDesktopSvg } from "@/components/coupon/coupon-card-copied-desktop"
import { CouponCardMobileSvg } from "@/components/coupon/coupon-card-mobile"
import { CouponCardCopiedMobileSvg } from "@/components/coupon/coupon-card-copied-mobile"
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon"

import CheckIcon from "@/assets/svgs/icons/check-icon.svg"
import CopyIcon from "@/assets/svgs/icons/copy-icon.svg"

export interface CouponCardProps {
  id?: string
  code?: string
  title?: string
  initialHours?: number
  className?: string
  onCopy?: (code: string) => void
  onSeeDetails?: () => void
}

export const CouponCard = (props: CouponCardProps) => {
  const {
    id,
    code = "CK999",
    title = "Buy any 3 Products at just ₹999 + Upto 15% Cashback on all Foxtale orders.",
    initialHours = 10,
    className = "",
    onCopy,
    onSeeDetails,
    ...viewProps
  } = props

  const defaultCopyState = "default" as const
  const defaultSeconds = initialHours * 3600

  const [copyState, setCopyState] = useState<"default" | "copying" | "copied">(
    defaultCopyState
  )
  const [remainingSeconds, setRemainingSeconds] = useState(defaultSeconds)

  const handleCopy = () => {
    if (copyState !== "default") {
      return
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(code)
    }

    setCopyState("copying")

    if (onCopy) {
      onCopy(code)
    }
  }

  const handleDetailsClick = () => {
    if (!onSeeDetails) {
      return
    }

    onSeeDetails()
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  useEffect(() => {
    if (copyState === "copying") {
      const timerId = setTimeout(() => {
        setCopyState("copied")
      }, 1000)

      return () => clearTimeout(timerId)
    }

    if (copyState === "copied") {
      const resetId = setTimeout(() => {
        setCopyState("default")
      }, 3500)

      return () => clearTimeout(resetId)
    }
  }, [copyState])

  const hours = Math.floor(remainingSeconds / 3600)
  const minutes = Math.floor((remainingSeconds % 3600) / 60)
  const formattedTimer = `${String(hours).padStart(2, "0")}h:${String(minutes).padStart(2, "0")}m`

  const isCopied = copyState === "copied"

  const mobileButtonText = isCopied ? "COPIED" : code
  const desktopButtonText = code

  const mobileButtonStyle =
    copyState === "copied"
      ? "border border-[#1D985C] bg-[#1D985C]/5 text-[#1D985C]"
      : copyState === "copying"
        ? "border border-ck-blue/24 bg-ck-blue/5 text-ck-blue/35"
        : "border border-ck-blue/24 bg-ck-blue/5 text-ck-blue hover:bg-ck-blue/10"

  const desktopButtonStyle =
    copyState === "copied"
      ? "border md:border-2 border-[#1D985C] bg-[#1D985C]/5 text-[#1D985C]"
      : copyState === "copying"
        ? "border md:border-2 border-ck-blue/24 bg-ck-blue/5 text-ck-blue/35"
        : "border md:border-2 border-ck-blue/24 bg-ck-blue/5 text-ck-blue hover:bg-ck-blue/10"

  return (
    <section
      id={id}
      className={`relative w-full max-w-90 drop-shadow-[0px_8px_60px_rgba(7,42,78,0.1)] md:max-w-160 ${className}`}
      {...viewProps}
    >
      <div className="relative block w-full md:hidden">
        {isCopied ? (
          <CouponCardCopiedMobileSvg timer={formattedTimer} />
        ) : (
          <CouponCardMobileSvg timer={formattedTimer} />
        )}

        <div className="absolute top-[19%] right-[7%] bottom-[12%] left-[19.2%] flex flex-col justify-between pr-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="line-clamp-2 text-sm leading-3.75 font-extrabold tracking-tight text-ck-text-gift">
              {title}
            </h3>

            <button
              type="button"
              onClick={handleDetailsClick}
              className="flex cursor-pointer items-center gap-0.5 text-xs font-semibold text-ck-dark/50 transition-colors hover:text-ck-dark"
            >
              <span>See Details</span>

              <ChevronDownIcon className="size-3.5 -rotate-90 text-ck-dark/50 sm:size-4" />
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={handleCopy}
              className={`flex h-8.5 w-full cursor-pointer items-center justify-between gap-2 rounded-[8px] px-3 text-[14px] leading-5 font-bold transition-all sm:h-9 sm:px-4 sm:text-[16px] ${mobileButtonStyle}`}
            >
              <span className="tracking-wide">{mobileButtonText}</span>

              {copyState === "copied" ? (
                <img
                  src={CheckIcon}
                  alt="copied"
                  className="size-4 shrink-0 object-contain sm:size-4.5"
                />
              ) : (
                <img
                  src={CopyIcon}
                  alt="copy"
                  className={`size-4 shrink-0 object-contain sm:size-4.5 ${
                    copyState === "copying" ? "opacity-35" : ""
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="relative hidden aspect-640/214 w-full md:block">
        {isCopied ? (
          <CouponCardCopiedDesktopSvg timer={formattedTimer} />
        ) : (
          <CouponCardDesktopSvg timer={formattedTimer} />
        )}

        <div className="absolute top-[24%] right-[6.5%] bottom-[12%] left-[20%] flex flex-col justify-between">
          <div>
            <h3 className="line-clamp-2 text-sm font-semibold tracking-tight text-ck-text-gift md:text-[16px] md:leading-snug lg:text-[20px] lg:leading-6.75 xl:text-[23px] xl:leading-7.5">
              {title}
            </h3>
          </div>

          <div className="flex flex-row items-center justify-between gap-2 lg:gap-4">
            <button
              type="button"
              onClick={handleDetailsClick}
              className="flex shrink-0 cursor-pointer items-center gap-1 text-xs font-medium text-ck-dark/50 transition-colors hover:text-ck-dark md:text-sm lg:text-[17px] xl:text-[19px]"
            >
              <span>See Details</span>

              <ChevronDownIcon className="size-3.5 -rotate-90 text-ck-dark/50 md:size-4 lg:size-5" />
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className={`flex h-9 w-33.75 cursor-pointer items-center justify-between gap-1.5 rounded-[10px] px-2.5 text-xs font-bold transition-all md:h-10.5 md:w-42.5 md:rounded-[12px] md:px-3.5 md:text-sm lg:h-12.5 lg:w-53.75 lg:rounded-[14px] lg:px-5 lg:text-[17px] xl:h-14 xl:w-62.5 xl:rounded-[16px] xl:px-6 xl:text-[20px] ${desktopButtonStyle}`}
            >
              <span className="tracking-wide">{desktopButtonText}</span>

              {copyState === "copied" ? (
                <img
                  src={CheckIcon}
                  alt="copied"
                  className="size-4 shrink-0 object-contain md:size-4.5 lg:size-5 xl:size-5.5"
                />
              ) : (
                <img
                  src={CopyIcon}
                  alt="copy"
                  className={`size-4 shrink-0 object-contain md:size-4.5 lg:size-5 xl:size-5.5 ${
                    copyState === "copying" ? "opacity-35" : ""
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CouponCard
