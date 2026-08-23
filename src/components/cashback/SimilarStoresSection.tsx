import { StoreCard } from "@/components/cashback/StoreCard"

import AjioLogo from "@/assets/pngs/logos/ajio.png"
import RelianceDigitalLogo from "@/assets/pngs/logos/reliance-digital.png"
import NykaaLogo from "@/assets/pngs/logos/nykaa.png"

interface StoreData {
  id: string
  name: string
  logo: string
  tag: string
  rewardText: string
}

const storeList: StoreData[] = [
  {
    id: "ajio",
    name: "AJIO",
    logo: AjioLogo,
    tag: "Upto 80% Off",
    rewardText: "Flat 4% Rewards",
  },
  {
    id: "reliance-digital",
    name: "Reliance Digital",
    logo: RelianceDigitalLogo,
    tag: "Live Now",
    rewardText: "Upto 7% Cashback",
  },
  {
    id: "nykaa-1",
    name: "NYKAA",
    logo: NykaaLogo,
    tag: "Live Now",
    rewardText: "Flat 6% Rewards",
  },
  {
    id: "nykaa-2",
    name: "NYKAA",
    logo: NykaaLogo,
    tag: "Live Now",
    rewardText: "Flat 6% Rewards",
  },
]

export const SimilarStoresSection = () => {
  return (
    <section className="flex w-full flex-col items-start gap-3 md:max-w-160 md:gap-4">
      <div className="w-full">
        <h2 className="hidden text-xl leading-7 font-semibold tracking-[-0.45px] text-ck-heading md:block">
          <span>Similar Stores</span>
        </h2>

        <h2 className="block text-base leading-6 font-semibold tracking-tight text-ck-dark md:hidden">
          <span>Similar Stores</span>
        </h2>
      </div>

      <div className="-mx-4 no-scrollbar flex w-[calc(100%+2rem)] flex-row items-center gap-2 overflow-x-auto px-4 py-1 md:mx-0 md:w-full md:gap-6 md:overflow-visible md:px-0">
        {storeList.map((store) => (
          <StoreCard
            key={store.id}
            name={store.name}
            logo={store.logo}
            tag={store.tag}
            rewardText={store.rewardText}
          />
        ))}
      </div>
    </section>
  )
}

export default SimilarStoresSection
