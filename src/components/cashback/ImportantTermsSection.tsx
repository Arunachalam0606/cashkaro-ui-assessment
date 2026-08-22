import { useState } from "react"

import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon"

import AccordionIcon from "@/assets/svgs/icons/accordion-icon.svg"

export const ImportantTermsSection = () => {
  const defaultIsExpanded = false
  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded)

  const allTerms = [
    "Open Myntra only through CashKaro. Don’t add items before.",
    "No Cashback on exchanges or replacements.",
    "Didn’t track? Raise a Missing Cashback ticket within 30 days.",
  ]

  const visibleTerms = isExpanded ? allTerms : allTerms.slice(0, 3)

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <section className="flex w-full flex-col items-start gap-3 md:max-w-160 md:gap-4">
      <h2 className="text-base font-semibold tracking-tight text-ck-dark md:text-xl md:tracking-[-0.45px] md:text-ck-heading">
        Important Terms
      </h2>

      <div className="flex w-full flex-col items-start gap-3 md:gap-4">
        <div className="bg-terms-card flex w-full flex-col items-start gap-3 rounded-[12px] p-4 md:gap-4 md:p-6">
          {visibleTerms.map((term, index) => (
            <div key={term} className="flex w-full flex-col gap-3 md:gap-4">
              <div className="flex items-start gap-2 md:gap-3">
                <img
                  src={AccordionIcon}
                  alt="term-icon"
                  className="mt-0.5 size-4 shrink-0 object-contain"
                />

                <span className="text-sm leading-5 font-medium text-ck-dark">
                  {term}
                </span>
              </div>

              {index < visibleTerms.length - 1 && (
                <div className="bg-terms-divider h-px w-full" />
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleExpanded}
          className="flex h-9 w-full cursor-pointer items-center justify-center gap-1.5 rounded-[8px] bg-ck-lilac text-xs font-semibold text-ck-blue transition-colors hover:bg-ck-lilac/80 md:h-11.5 md:gap-2 md:rounded-[12px] md:text-base md:text-ck-royal"
        >
          <span>{isExpanded ? "View Less" : "View All"}</span>

          <ChevronDownIcon
            className={`size-3.5 transition-transform duration-200 md:size-4 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </section>
  )
}
