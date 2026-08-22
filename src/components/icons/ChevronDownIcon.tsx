import type { SVGProps } from "react"

interface ChevronDownIconProps extends SVGProps<SVGSVGElement> {
  color?: string
}

export const ChevronDownIcon = (props: ChevronDownIconProps) => {
  const { color = "currentColor", className, ...otherProps } = props

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...otherProps}
    >
      <path
        d="M5 7.49988L10 12.4999L15 7.49988"
        stroke={color}
        strokeWidth="1.69406"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
