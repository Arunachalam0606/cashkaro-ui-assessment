import { useState } from "react"

export const AboutSection = () => {
  const defaultIsExpanded = false
  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded)

  const content =
    "About Myntra Flipkart is India's largest marketplace, selling mobile to TVs to Fashion, at unbeatable prices. Usually Flipkart runs Payday sales during the first 5 days each month. The only way beat Flipkart's prices is via CashKaro. CashKaro gives you extra Cashback by visiting Flipkart though CashKaro"

  const toggleExpanded = () => {
    setIsExpanded((previous) => !previous)
  }

  return (
    <section className="flex w-full flex-col items-start gap-1 md:max-w-160 md:gap-0.5">
      <h2 className="text-[18px] leading-7 font-semibold tracking-[-0.45px] text-ck-heading md:text-[20px]">
        About Myntra
      </h2>

      {isExpanded && (
        <p className="text-[14px] leading-5 font-medium text-ck-dark">
          <span>{content}</span>
          <button
            type="button"
            onClick={toggleExpanded}
            className="cursor-pointer font-bold text-black"
          >
            ...less
          </button>
        </p>
      )}

      {!isExpanded && (
        <div className="flex w-full items-baseline text-[14px] leading-5 font-medium text-ck-dark">
          <span className="truncate">{content}</span>

          <button
            type="button"
            onClick={toggleExpanded}
            className="shrink-0 cursor-pointer font-bold text-black"
          >
            ...more
          </button>
        </div>
      )}
    </section>
  )
}
