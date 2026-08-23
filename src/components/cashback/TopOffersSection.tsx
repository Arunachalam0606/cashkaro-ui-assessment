import { CouponCard } from "@/components/coupon/coupon-card"

export const TopOffersSection = () => {
  return (
    <section className="flex w-full flex-col items-start gap-2 md:max-w-160 md:gap-4">
      <h2 className="hidden text-xl font-semibold tracking-[-0.45px] text-ck-heading md:block">
        Top Myntra Offers
      </h2>

      <h2 className="block text-base font-semibold tracking-tight text-ck-dark md:hidden">
        Deals & Offers
      </h2>

      <div className="flex w-full flex-col items-center gap-3 md:gap-6">
        <CouponCard />
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <div className="h-1.5 w-6 rounded-full bg-ck-dot-active md:w-7" />
          <div className="h-1.5 w-3.5 rounded-full bg-ck-dot-inactive md:w-4" />
          <div className="h-1.5 w-3.5 rounded-full bg-ck-dot-inactive md:w-4" />
          <div className="h-1.5 w-3.5 rounded-full bg-ck-dot-inactive md:w-4" />
        </div>
      </div>
    </section>
  )
}

export default TopOffersSection
