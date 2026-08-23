import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroBanner } from "@/components/cashback/HeroBanner"
import { AboutSection } from "@/components/cashback/AboutSection"
import { CashbackActionCard } from "@/components/cashback/CashbackActionCard"
import { TimelinesSection } from "@/components/cashback/TimelinesSection"
import { ImportantTermsSection } from "@/components/cashback/ImportantTermsSection"
import { ExcludedCasesSection } from "@/components/cashback/ExcludedCasesSection"
import { TopOffersSection } from "@/components/cashback/TopOffersSection"
import { FaqSection } from "@/components/cashback/FaqSection"
import { SimilarStoresSection } from "@/components/cashback/SimilarStoresSection"

export const App = () => {
  return (
    <section>
      <Header />

      <div className="relative mx-auto w-full max-w-324">
        <div className="relative z-10 md:mx-7 md:my-7.5">
          <HeroBanner />
        </div>

        <div className="relative z-0 m-4 md:m-7">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-6 md:w-auto md:max-w-160 md:min-w-100">
              <AboutSection />
              <TimelinesSection />
              <ImportantTermsSection />
              <ExcludedCasesSection />
              <TopOffersSection />
              <FaqSection />
              <SimilarStoresSection />
            </div>

            <div className="relative z-0 mb-37.5 hidden md:sticky md:top-6 md:-mt-34 md:block md:w-132">
              <CashbackActionCard />
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 z-40 w-full md:hidden">
          <CashbackActionCard isMobileSticky={true} />
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default App
