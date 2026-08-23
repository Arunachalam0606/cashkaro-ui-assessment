export interface StoreCardProps {
  id?: string
  name: string
  logo: string
  tag: string
  rewardText: string
  className?: string
  onClick?: () => void
}

export const StoreCard = (props: StoreCardProps) => {
  const {
    id,
    name,
    logo,
    tag,
    rewardText,
    className = "",
    onClick,
    ...viewProps
  } = props

  const handleClick = () => {
    if (!onClick) return
    onClick()
  }

  return (
    <div
      id={id}
      onClick={handleClick}
      className={`group flex h-35 w-26 shrink-0 cursor-pointer flex-col items-center justify-between overflow-hidden rounded-[12px] border border-ck-border-card bg-white pb-2 transition-shadow hover:shadow-md md:h-45.5 md:w-35.5 md:rounded-[16px] md:border-border md:pb-4 ${className}`}
      {...viewProps}
    >
      <div className="flex h-5 w-full items-center justify-center bg-ck-red/12 md:h-7 md:bg-ck-pink-light">
        <span className="text-center text-[10px] leading-3.5 font-medium text-ck-red md:text-xs md:leading-4 md:text-ck-red-alt">
          {tag}
        </span>
      </div>

      <div className="flex h-17 w-full items-center justify-center px-2 md:h-22.5 md:px-4">
        <img
          src={logo}
          alt={name}
          className="max-h-7 max-w-19 object-contain transition-transform group-hover:scale-105 md:max-h-9 md:max-w-27.25"
        />
      </div>

      <div className="flex h-10 w-22 items-center justify-center rounded-[8px] bg-ck-blue px-1 md:h-12 md:w-27.5 md:rounded-[10px] md:bg-ck-royal md:px-2">
        <span className="text-center text-[10px] leading-3.5 font-semibold text-white md:text-xs md:leading-4">
          {rewardText}
        </span>
      </div>
    </div>
  )
}

export default StoreCard
