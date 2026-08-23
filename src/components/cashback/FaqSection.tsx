import { useState } from "react"
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon"

interface FaqItem {
  question: string
  answer: string
}

const defaultAnswer =
  "Myntra provides a diverse array of exclusive deals and discounts, making it easier for you to save on every order! To discover Myntra coupons, create an account on their website or subscribe to their newsletter. Keeping your Flipkart app updated is another effective strategy to stay informed about the newest offers, coupons, and promotions. If you're looking to enhance your shopping experience on Myntra, exploring CashKaro is also a worthwhile option."

const faqList: FaqItem[] = [
  {
    question: "Why do I see multiple Rewards entries for a Single order ?",
    answer: defaultAnswer,
  },
  {
    question: "Why is my reward tracked at lower amount than I expected ?",
    answer: defaultAnswer,
  },
  {
    question:
      "Do all Myntra categories have the same Reward rates on CashKaro?",
    answer: defaultAnswer,
  },
  {
    question: "Will I get CashKaro Rewards if I use a bank discount on Myntra?",
    answer: defaultAnswer,
  },
  {
    question: "Can I transfer my rewards to another account?",
    answer: defaultAnswer,
  },
]

export const FaqSection = () => {
  const defaultOpenIndex: number | null = 0
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  const handleToggle = (index: number) => {
    setOpenIndex((previousIndex) => (previousIndex === index ? null : index))
  }

  return (
    <section className="flex w-full flex-col items-start gap-3 md:max-w-160 md:gap-4">
      <div className="w-full">
        <h2 className="hidden text-xl leading-7 font-semibold tracking-[-0.45px] text-ck-heading md:block">
          <span>Frequently Asked Questions</span>
        </h2>

        <h2 className="block text-base leading-6 font-semibold tracking-tight text-ck-dark md:hidden">
          <span>Frequently Asked Questions</span>
        </h2>
      </div>

      <div className="flex w-full flex-col border-t border-ck-border-subtle md:border-t-0">
        {faqList.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={item.question}
              className="flex w-full flex-col border-b border-ck-border-subtle"
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left md:py-4 md:pr-5"
              >
                <span className="text-sm leading-5 font-medium text-ck-dark md:text-base md:leading-5 md:tracking-[-0.15px]">
                  {item.question}
                </span>

                <ChevronDownIcon
                  className={`size-5 shrink-0 text-ck-icon-inactive transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-3 md:pr-5 md:pb-4">
                  <p className="max-w-142.5 text-xs leading-5 font-medium tracking-[-0.15px] text-ck-gray md:text-sm">
                    <span>{item.answer}</span>
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FaqSection
