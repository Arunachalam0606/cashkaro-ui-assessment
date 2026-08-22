import { useState } from "react"

import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon"

import MobileIcon from "@/assets/svgs/icons/mobile-icon.svg"
import TrainIcon from "@/assets/svgs/icons/train-icon.svg"
import JewelIcon from "@/assets/svgs/icons/jewel-icon.svg"
import AppleIcon from "@/assets/svgs/icons/apple-icon.svg"
import SuitcaseIcon from "@/assets/svgs/icons/suitcase-icon.svg"

export const ExcludedCasesSection = () => {
  const defaultIsExpanded = false
  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded)

  const excludedItems = [
    {
      id: "mobile-app",
      label: "Mobile App Orders",
      icon: MobileIcon,
    },
    {
      id: "metro-fastag",
      label: "Metro & FASTag Recharges",
      icon: TrainIcon,
    },
    {
      id: "gold-silver",
      label: "Gold & Silver Buys",
      icon: JewelIcon,
    },
    {
      id: "apple-products",
      label: "All Apple Products",
      icon: AppleIcon,
    },
    {
      id: "gst-registered",
      label: "GST Registered & Business Owners",
      icon: SuitcaseIcon,
    },
  ]

  const visibleItems = isExpanded ? excludedItems : excludedItems.slice(0, 4)

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <section className="flex w-full flex-col items-start gap-3 md:max-w-160 md:gap-4">
      <h2 className="text-base font-semibold tracking-tight text-ck-dark md:text-xl md:tracking-[-0.45px] md:text-ck-heading">
        Excluded Cases
      </h2>

      <div className="flex w-full flex-col gap-3 md:gap-4">
        <div className="-mx-4 grid w-[calc(100%+2rem)] grid-cols-1 gap-3 bg-ck-pink-bg px-5 py-5 md:mx-0 md:w-full md:grid-cols-2 md:gap-x-4 md:gap-y-5.5 md:rounded-[12px] md:p-8">
          {visibleItems.map((item) => (
            <div key={item.id} className="flex items-center gap-2 md:gap-2.5">
              <img
                src={item.icon}
                alt={item.id}
                className="size-5 shrink-0 object-contain md:size-7"
              />

              <span className="text-sm font-medium text-ck-dark md:font-semibold md:text-ck-text-charcoal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={toggleExpanded}
        className="flex h-9 w-full cursor-pointer items-center justify-center gap-1.5 rounded-[8px] bg-ck-pink-badge text-xs font-semibold text-ck-blue transition-colors hover:bg-ck-pink-badge/80 md:h-11.5 md:gap-2 md:rounded-[12px] md:text-base md:text-ck-royal"
      >
        <span>{isExpanded ? "View Less" : "View All"}</span>

        <ChevronDownIcon
          className={`size-3.5 transition-transform duration-200 md:size-4 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </section>
  )
}
