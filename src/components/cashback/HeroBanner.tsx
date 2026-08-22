import { ChevronDownIcon } from "../icons/ChevronDownIcon"
import ShareIcon from "@/assets/svgs/icons/share-icon.svg"
import HeroGradientOverlay from "@/assets/svgs/hero-gradient-overlay.svg"

import MyntraLogo from "@/assets/pngs/logos/myntra.png"
import CasualShoes from "@/assets/pngs/casual-shoes.png"
import Jacket from "@/assets/pngs/jacket.png"
import Perfume from "@/assets/pngs/perfume.png"
import Mobile from "@/assets/pngs/mobile.png"
import Refrigerator from "@/assets/pngs/refrigerator.png"
import SportShoes from "@/assets/pngs/sport-shoes.png"

import { CategoryCard } from "./CategoryCard"

export const HeroBanner = () => {
  const categories = [
    { image: CasualShoes, title: "Footwear", rate: "Flat 4.80%" },
    { image: Jacket, title: "Apparel", rate: "Flat 1.80%" },
    { image: Perfume, title: "Beauty & Grooming", rate: "Flat 3%" },
    { image: Mobile, title: "Mobiles", rate: "Flat 7%" },
    { image: Refrigerator, title: "Smart Home", rate: "Flat 7%" },
    { image: SportShoes, title: "Footwear", rate: "Flat 7%" },
    { image: Jacket, title: "Apparel", rate: "Flat 7%" },
  ]

  return (
    <section className="bg-hero-radial relative flex h-101 w-full flex-col items-center justify-between overflow-clip rounded-b-[32px] px-4 pt-4 pb-5 md:h-74.5 md:w-auto md:max-w-310 md:flex-row md:overflow-hidden md:rounded-[20px] md:py-8.75 md:pr-0 md:pl-10.5">
      <div className="sticky top-0 z-50 flex w-full items-center justify-between py-1 md:hidden">
        <button
          type="button"
          aria-label="Go back"
          className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
        >
          <ChevronDownIcon className="size-5 rotate-90" />
        </button>

        <div className="flex h-10 w-29.5 items-center justify-center rounded-full bg-white px-5 py-1.5 shadow-xs">
          <img src={MyntraLogo} alt="myntra-logo" className="h-auto w-auto" />
        </div>

        <button
          type="button"
          aria-label="Share"
          className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
        >
          <img src={ShareIcon} alt="share-icon" className="size-5" />
        </button>
      </div>

      <div className="flex w-full flex-col items-center gap-2.5 text-center md:max-w-87.75 md:items-start md:gap-5.5 md:text-left">
        <div className="hidden h-11.5 w-34 items-center justify-center rounded-[10px] border border-white/14 bg-white md:flex">
          <img
            src={MyntraLogo}
            alt="myntra-logo"
            className="hidden max-w-34 md:block"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-[24px] leading-6 font-bold tracking-tight text-white md:text-[40px] md:leading-15">
            Upto 7% Cashback
          </span>

          <span className="text-[14px] leading-5 font-medium tracking-tight text-white/70 md:text-[18px] md:leading-7">
            on following categories
          </span>
        </div>

        <button className="bg-glass-btn hidden h-12.5 w-40 items-center justify-between gap-2 rounded-full border px-6 py-3 whitespace-nowrap md:flex">
          <span className="text-[14px] leading-6.5 font-semibold tracking-tight text-white">
            View All Rates
          </span>

          <span>
            <ChevronDownIcon className="size-6" color="white" />
          </span>
        </button>
      </div>

      <img
        src={HeroGradientOverlay}
        alt="hero-gradient-overlay"
        className="pointer-events-none absolute top-0 left-80 z-10 hidden h-full w-auto md:block"
      />

      <div className="-mx-4 no-scrollbar flex w-[calc(100%+2rem)] gap-3 overflow-x-auto px-4 py-1 md:relative md:mx-0 md:ml-10 md:h-55.5 md:w-auto md:flex-1 md:gap-4.5 md:py-0 md:pr-10.5 md:pl-0">
        {categories.map((card, index) => (
          <CategoryCard key={`${card.title}-${index}`} {...card} />
        ))}
      </div>

      <div className="flex w-full items-center justify-center md:hidden">
        <button className="bg-glass-btn flex h-10 w-35.75 items-center justify-center gap-1.5 rounded-full border px-3 py-2 md:px-4">
          <span className="text-[12px] leading-4 font-semibold text-white">
            View All Rates
          </span>

          <ChevronDownIcon
            className="size-4 -rotate-90 md:rotate-90"
            color="white"
          />
        </button>
      </div>
    </section>
  )
}
