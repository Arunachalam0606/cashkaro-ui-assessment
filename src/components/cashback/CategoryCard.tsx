import type { HTMLAttributes } from "react"

interface CategoryCardProps extends HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  rate: string
}

export const CategoryCard = (props: CategoryCardProps) => {
  const { image, title, rate, className = "", ...viewProps } = props

  return (
    <div
      className={`relative flex h-37 w-24 shrink-0 flex-col items-start justify-between rounded-2xl p-3 md:h-55.5 md:w-36 md:items-center md:rounded-3xl md:p-4.5 ${className}`}
      {...viewProps}
    >
      <div className="bg-glass-card pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl" />

      <div className="relative z-10 flex h-16.5 w-full items-center justify-center md:h-27">
        <img
          src={image}
          alt={title}
          className="max-h-12 max-w-15 object-contain md:max-h-20 md:max-w-22"
        />
      </div>

      <div className="relative z-10 flex h-12.5 w-full flex-col items-start gap-0.5 pl-0.5 md:h-19 md:justify-center md:pb-1 md:pl-1">
        <span className="text-[12px] leading-4 font-medium tracking-tight text-white/80 md:text-[18px] md:leading-6">
          {title}
        </span>

        <span className="text-[12px] leading-4 font-semibold tracking-tight text-white md:text-[18px] md:leading-6">
          {rate}
        </span>
      </div>
    </div>
  )
}
