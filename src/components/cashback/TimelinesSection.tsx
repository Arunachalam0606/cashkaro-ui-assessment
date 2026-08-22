import InfoIcon from "@/assets/svgs/icons/info-icon.svg"
import TimeIcon from "@/assets/svgs/icons/time-icon.svg"
import ConfirmsIcon from "@/assets/svgs/icons/confirms-icon.svg"
import BankIcon from "@/assets/svgs/icons/bank-icon.svg"
import TimelineCardBg from "@/assets/svgs/bgs/timeline-card.svg"

export const TimelinesSection = () => {
  return (
    <section className="flex w-full flex-col items-start gap-2 md:gap-4">
      <div className="flex items-center gap-1.5">
        <h2 className="text-base font-semibold tracking-tight text-ck-dark md:text-xl md:tracking-[-0.45px] md:text-ck-heading">
          Cashback Timelines
        </h2>

        <button
          type="button"
          aria-label="Cashback timelines info"
          className="flex size-4 cursor-pointer items-center justify-center text-ck-icon-inactive"
        >
          <img src={InfoIcon} alt="info-icon" className="size-4" />
        </button>
      </div>

      <div className="flex h-15 w-full items-center gap-1 rounded-[12px] bg-ck-lilac p-1.5 md:h-26 md:gap-2 md:rounded-[10px] md:p-2">
        <div className="relative flex h-12 min-w-0 flex-1 basis-1/3 items-center md:h-22">
          <img
            src={TimelineCardBg}
            alt="timeline-shape"
            className="pointer-events-none absolute inset-0 h-full w-full rounded-[8px] object-cover md:rounded-[10px] md:object-fill"
          />

          <div className="relative z-10 flex min-w-0 items-center gap-1 pl-1.5 md:gap-2.5 md:pl-4">
            <img
              src={TimeIcon}
              alt="time-icon"
              className="size-6 shrink-0 object-contain md:size-8 lg:size-9.5"
            />

            <div className="flex min-w-0 flex-col gap-0.5 md:gap-1">
              <span className="truncate text-[clamp(12px,1.25vw,16px)] leading-3 font-medium text-ck-gray-label md:leading-4">
                Tracks In
              </span>

              <span className="truncate text-[clamp(11px,1.25vw,18px)] leading-3.5 font-semibold text-ck-dark-alt md:leading-5">
                36 Hours
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex h-12 min-w-0 flex-1 basis-1/3 items-center md:h-22">
          <img
            src={TimelineCardBg}
            alt="timeline-shape"
            className="pointer-events-none absolute inset-0 h-full w-full rounded-[8px] object-cover md:rounded-[10px] md:object-fill"
          />

          <div className="relative z-10 flex min-w-0 items-center gap-1 pl-1.5 md:gap-2.5 md:pl-4">
            <img
              src={ConfirmsIcon}
              alt="confirms-icon"
              className="size-6 shrink-0 object-contain md:size-8 lg:size-9.5"
            />

            <div className="flex min-w-0 flex-col gap-0.5 md:gap-1">
              <span className="truncate text-[clamp(12px,1.25vw,16px)] leading-3 font-medium text-ck-gray-label md:leading-4">
                Confirms in
              </span>

              <span className="truncate text-[clamp(11px,1.25vw,18px)] leading-3.5 font-semibold text-ck-dark-alt md:leading-5">
                35 Days
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex h-12 min-w-0 flex-1 basis-1/3 items-center rounded-[8px] bg-white px-1.5 md:h-22 md:rounded-[10px] md:px-4">
          <div className="flex min-w-0 items-center gap-[3px] md:gap-[9px]">
            <img
              src={BankIcon}
              alt="bank-icon"
              className="size-6 shrink-0 object-contain md:size-8 lg:size-9.5"
            />

            <div className="flex min-w-0 flex-col gap-0.5 md:gap-1">
              <span className="truncate text-[clamp(12px,1.25vw,16px)] leading-3 font-medium text-ck-gray-label md:leading-4">
                Withdraw
              </span>

              <span className="truncate text-[clamp(11px,1.25vw,18px)] leading-3.5 font-semibold text-ck-dark-alt md:leading-5">
                UPI/Bank
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
