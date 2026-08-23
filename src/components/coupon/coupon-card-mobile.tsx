import type { SVGProps } from "react"

export interface CouponCardMobileSvgProps extends SVGProps<SVGSVGElement> {
  timer?: string
}

export const CouponCardMobileSvg = (props: CouponCardMobileSvgProps) => {
  const { timer = "10h:00m", className = "", ...svgProps } = props

  return (
    <svg
      width="348"
      height="175"
      viewBox="0 0 348 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-full w-full ${className}`}
      {...svgProps}
    >
      <g filter="url(#filter0_d_mobile_default)">
        <path d="M54 6H22C15.3726 6 10 11.3726 10 18V68H54V6Z" fill="#9D2EDD" />
        <path
          d="M54 6H22C15.3726 6 10 11.3726 10 18V68H54V6Z"
          fill="url(#paint0_linear_mobile_default)"
        />
        <path
          d="M10 78.6536C10 80.8053 11.7694 82.4966 13.7311 83.3808C17.2061 84.9471 19.625 88.4406 19.625 92.5C19.625 96.5594 17.2061 100.052 13.7311 101.618C11.7693 102.502 10 104.194 10 106.345V112H54V68H10V78.6536Z"
          fill="#9D2EDD"
        />
        <path
          d="M10 78.6536C10 80.8053 11.7694 82.4966 13.7311 83.3808C17.2061 84.9471 19.625 88.4406 19.625 92.5C19.625 96.5594 17.2061 100.052 13.7311 101.618C11.7693 102.502 10 104.194 10 106.345V112H54V68H10V78.6536Z"
          fill="url(#paint1_linear_mobile_default)"
        />
        <path
          d="M54 112H10V162C10 168.627 15.3726 174 22 174H54V112Z"
          fill="url(#paint2_linear_mobile_default)"
        />
        <path
          d="M40.216 123.592C40.216 124.84 39.94 125.944 39.388 126.904C38.824 127.852 38.056 128.602 37.084 129.154C36.1 129.694 34.972 129.964 33.7 129.964C32.428 129.964 31.306 129.694 30.334 129.154C29.35 128.602 28.582 127.852 28.03 126.904C27.466 125.944 27.184 124.84 27.184 123.592C27.184 122.68 27.346 121.846 27.67 121.09C27.982 120.322 28.426 119.662 29.002 119.11C29.578 118.546 30.244 118.114 31 117.814L31.918 120.532C31.498 120.712 31.132 120.958 30.82 121.27C30.508 121.57 30.268 121.918 30.1 122.314C29.932 122.698 29.848 123.124 29.848 123.592C29.848 124.252 30.01 124.84 30.334 125.356C30.658 125.872 31.114 126.274 31.702 126.562C32.278 126.85 32.944 126.994 33.7 126.994C34.456 126.994 35.128 126.85 35.716 126.562C36.292 126.262 36.748 125.854 37.084 125.338C37.408 124.81 37.57 124.21 37.57 123.538C37.57 123.046 37.48 122.608 37.3 122.224C37.12 121.84 36.868 121.51 36.544 121.234C36.22 120.946 35.848 120.7 35.428 120.496L36.346 117.778C37.114 118.066 37.792 118.492 38.38 119.056C38.956 119.62 39.406 120.286 39.73 121.054C40.054 121.822 40.216 122.668 40.216 123.592ZM40.216 109.901C40.216 111.197 39.94 112.343 39.388 113.339C38.824 114.335 38.056 115.115 37.084 115.679C36.1 116.243 34.978 116.525 33.718 116.525C32.446 116.525 31.324 116.243 30.352 115.679C29.368 115.115 28.6 114.341 28.048 113.357C27.484 112.361 27.202 111.221 27.202 109.937C27.202 108.653 27.484 107.519 28.048 106.535C28.6 105.539 29.368 104.759 30.352 104.195C31.324 103.631 32.446 103.349 33.718 103.349C34.978 103.349 36.1 103.631 37.084 104.195C38.056 104.747 38.824 105.515 39.388 106.499C39.94 107.483 40.216 108.617 40.216 109.901ZM37.552 109.901C37.552 109.193 37.39 108.569 37.066 108.029C36.742 107.489 36.292 107.069 35.716 106.769C35.128 106.469 34.462 106.319 33.718 106.319C32.962 106.319 32.296 106.475 31.72 106.787C31.132 107.099 30.676 107.525 30.352 108.065C30.016 108.605 29.848 109.229 29.848 109.937C29.848 110.645 30.016 111.269 30.352 111.809C30.676 112.349 31.132 112.775 31.72 113.087C32.296 113.399 32.962 113.555 33.718 113.555C34.462 113.555 35.128 113.399 35.716 113.087C36.292 112.775 36.742 112.343 37.066 111.791C37.39 111.239 37.552 110.609 37.552 109.901ZM40.234 96.1675C40.234 97.2475 40.03 98.1835 39.622 98.9755C39.214 99.7555 38.638 100.356 37.894 100.776C37.138 101.196 36.244 101.406 35.212 101.406H27.4V98.5075H35.212C35.692 98.5075 36.106 98.4115 36.454 98.2195C36.802 98.0275 37.072 97.7575 37.264 97.4095C37.456 97.0495 37.552 96.6235 37.552 96.1315C37.552 95.6515 37.456 95.2315 37.264 94.8715C37.072 94.5115 36.802 94.2355 36.454 94.0435C36.106 93.8515 35.692 93.7555 35.212 93.7555H27.4V90.8575H35.212C36.244 90.8575 37.138 91.0735 37.894 91.5055C38.638 91.9255 39.214 92.5375 39.622 93.3415C40.03 94.1335 40.234 95.0755 40.234 96.1675ZM40 88.2269H27.4L27.4 83.2769C27.4 82.3649 27.586 81.5549 27.958 80.8469C28.318 80.1389 28.822 79.5869 29.47 79.1909C30.106 78.7829 30.85 78.5789 31.702 78.5789C32.53 78.5789 33.274 78.7769 33.934 79.1729C34.582 79.5569 35.092 80.0969 35.464 80.7929C35.836 81.4889 36.022 82.2869 36.022 83.1869V85.3289H40V88.2269ZM33.358 85.3289V83.2589C33.358 82.7429 33.208 82.3289 32.908 82.0169C32.596 81.7049 32.194 81.5489 31.702 81.5489C31.21 81.5489 30.814 81.7169 30.514 82.0529C30.202 82.3769 30.046 82.8089 30.046 83.3489V85.3289H33.358ZM40.216 70.8702C40.216 72.1662 39.94 73.3122 39.388 74.3082C38.824 75.3042 38.056 76.0842 37.084 76.6482C36.1 77.2122 34.978 77.4942 33.718 77.4942C32.446 77.4942 31.324 77.2122 30.352 76.6482C29.368 76.0842 28.6 75.3102 28.048 74.3262C27.484 73.3302 27.202 72.1902 27.202 70.9062C27.202 69.6222 27.484 68.4882 28.048 67.5042C28.6 66.5082 29.368 65.7282 30.352 65.1642C31.324 64.6002 32.446 64.3182 33.718 64.3182C34.978 64.3182 36.1 64.6002 37.084 65.1642C38.056 65.7162 38.824 66.4842 39.388 67.4682C39.94 68.4522 40.216 69.5862 40.216 70.8702ZM37.552 70.8702C37.552 70.1622 37.39 69.5382 37.066 68.9982C36.742 68.4582 36.292 68.0382 35.716 67.7382C35.128 67.4382 34.462 67.2882 33.718 67.2882C32.962 67.2882 32.296 67.4442 31.72 67.7562C31.132 68.0682 30.676 68.4942 30.352 69.0342C30.016 69.5742 29.848 70.1982 29.848 70.9062C29.848 71.6142 30.016 72.2382 30.352 72.7782C30.676 73.3182 31.132 73.7442 31.72 74.0562C32.296 74.3682 32.962 74.5242 33.718 74.5242C34.462 74.5242 35.128 74.3682 35.716 74.0562C36.292 73.7442 36.742 73.3122 37.066 72.7602C37.39 72.2082 37.552 71.5782 37.552 70.8702ZM40 62.1944H27.4V59.1524L35.086 53.6264H27.4V50.7284H40V53.6264L32.098 59.2964H40V62.1944Z"
          fill="white"
        />
        <g clipPath="url(#clip0_mobile_default)">
          <g filter="url(#filter1_d_mobile_default)">
            <path
              d="M63 -63V243H54L54.1992 242.646C55.932 239.578 55.8559 235.809 54 232.812L54.1992 232.459C55.932 229.39 55.8559 225.621 54 222.625L54.1992 222.271C55.932 219.203 55.8559 215.434 54 212.438L54.1992 212.084C55.932 209.015 55.8559 205.246 54 202.25L54.1992 201.896C55.932 198.828 55.8559 195.059 54 192.062L54.1992 191.709C55.932 188.64 55.8559 184.871 54 181.875L54.1992 181.521C55.9319 178.453 55.8559 174.683 54 171.688L54.1992 171.334C55.9319 168.265 55.8559 164.496 54 161.5L54.1992 161.146C55.9319 158.078 55.8559 154.308 54 151.312L54.1992 150.959C55.9319 147.89 55.8559 144.121 54 141.125L54.1992 140.771C55.9319 137.703 55.8559 133.933 54 130.938L54.1992 130.584C55.9319 127.515 55.8559 123.746 54 120.75L54.1992 120.396C55.9319 117.328 55.8559 113.558 54 110.562L54.1992 110.209C55.9319 107.14 55.8559 103.371 54 100.375L54.1992 100.021C54.2032 100.014 54.207 100.007 54.2109 100H54L54.1992 99.6465C55.0034 98.2222 55.4166 96.647 55.4443 95.0684C55.4083 93.371 54.9263 91.6829 54 90.1875L54.1084 89.9941C54.0726 89.9335 54.0372 89.8725 54 89.8125L54.1992 89.459C55.0034 88.0347 55.4166 86.4595 55.4443 84.8809C55.4083 83.1835 54.9263 81.4954 54 80H54.2197C54.1492 79.8739 54.0765 79.7486 54 79.625L54.1992 79.2715C55.932 76.2026 55.8559 72.4335 54 69.4375L54.1992 69.084C55.932 66.0151 55.8559 62.246 54 59.25L54.1992 58.8965C55.932 55.8276 55.8559 52.0585 54 49.0625L54.1992 48.709C55.932 45.6401 55.8559 41.871 54 38.875L54.1992 38.5215C55.9319 35.4526 55.8559 31.6835 54 28.6875L54.1992 28.334C55.9319 25.2651 55.8559 21.496 54 18.5L54.1992 18.1465C55.9319 15.0776 55.8559 11.3085 54 8.3125L54.1992 7.95898C55.9319 4.89014 55.8559 1.12099 54 -1.875L54.1992 -2.22852C55.9319 -5.29736 55.8559 -9.06651 54 -12.0625L54.1992 -12.416C55.9319 -15.4849 55.8559 -19.254 54 -22.25L54.1992 -22.6035C55.9319 -25.6724 55.8559 -29.4415 54 -32.4375L54.1992 -32.791C55.9319 -35.8599 55.8559 -39.629 54 -42.625L54.1992 -42.9785C55.9319 -46.0474 55.8559 -49.8165 54 -52.8125L54.1992 -53.166C55.9319 -56.2349 55.8559 -60.004 54 -63H63Z"
              fill="white"
            />
          </g>
        </g>
        <rect
          width="252"
          height="168"
          transform="translate(63 6)"
          fill="white"
        />
        <rect
          width="252"
          height="150"
          transform="translate(63 24)"
          fill="white"
        />
        <rect
          width="252"
          height="18"
          transform="translate(63 6)"
          fill="white"
        />
        <path
          d="M63.75 6C63.75 6 63.75 4 67.9239 4H75.75V6H63.75Z"
          fill="#580202"
        />
        <path
          d="M171.75 6C171.75 6 171.75 4 167.576 4H159.75V6H171.75Z"
          fill="#580202"
        />
        <g filter="url(#filter2_d_mobile_default)">
          <path
            d="M67 4L168.5 4H168.371C165.122 4 162.196 5.96434 160.966 8.97094L157.869 16.5436C156.024 21.0535 151.635 24 146.762 24H87.6229C82.5592 24 78.0404 20.8214 76.329 16.0555L73.6898 8.7058C72.6761 5.88283 69.9995 4 67 4Z"
            fill="#D9D9D9"
          />
          <path
            d="M67 4L168.5 4H168.371C165.122 4 162.196 5.96434 160.966 8.97094L157.869 16.5436C156.024 21.0535 151.635 24 146.762 24H87.6229C82.5592 24 78.0404 20.8214 76.329 16.0555L73.6898 8.7058C72.6761 5.88283 69.9995 4 67 4Z"
            fill="url(#paint3_linear_mobile_default)"
          />
        </g>
        <g clipPath="url(#clip1_mobile_default)">
          <path
            d="M93 9.74988C95.3472 9.74988 97.25 11.6527 97.25 13.9999C97.25 16.3471 95.3472 18.2499 93 18.2499C90.6528 18.2499 88.75 16.3471 88.75 13.9999C88.75 11.6527 90.6528 9.74988 93 9.74988Z"
            stroke="#FFF9F9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M93 11.916V13.9993H95.0833"
            stroke="#FFF9F9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x="102"
          y="17.5"
          fill="#FFF9F9"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.2px"
        >
          {timer}
        </text>
        <mask id="path-13-inside-1_mobile_default" fill="white">
          <path d="M315 68H338V29C338 18.6557 338 13.4835 335.022 10.0879C334.677 9.69405 334.306 9.32328 333.912 8.97792C330.516 6 325.344 6 315 6V6V68Z" />
        </mask>
        <path
          d="M315 68H338V29C338 18.6557 338 13.4835 335.022 10.0879C334.677 9.69405 334.306 9.32328 333.912 8.97792C330.516 6 325.344 6 315 6V6V68Z"
          fill="white"
        />
        <path
          d="M315 68H338H315M339 18C339 10.8203 333.18 5 326 5H315V7H326C332.075 7 337 11.9249 337 18H339ZM337 18M315 6V68V6M339 68V18C339 10.8203 333.18 5 326 5V7C332.075 7 337 11.9249 337 18V68H339Z"
          fill="url(#paint4_linear_mobile_default)"
          mask="url(#path-13-inside-1_mobile_default)"
        />
        <path
          d="M338 78.5637C338 80.749 336.178 82.4552 334.174 83.326C330.632 84.8647 328.156 88.3927 328.156 92.5C328.156 96.6073 330.632 100.135 334.173 101.673C336.178 102.544 338 104.25 338 106.435V112H315V68H338V78.5637Z"
          fill="white"
        />
        <mask id="path-16-inside-2_mobile_default" fill="white">
          <path d="M315 112H338V151C338 161.344 338 166.516 335.022 169.912C334.677 170.306 334.306 170.677 333.912 171.022C330.516 174 325.344 174 315 174V174V112Z" />
        </mask>
        <path
          d="M315 112H338V151C338 161.344 338 166.516 335.022 169.912C334.677 170.306 334.306 170.677 333.912 171.022C330.516 174 325.344 174 315 174V174V112Z"
          fill="white"
        />
        <path
          d="M315 112H338H315M339 162C339 169.18 333.18 175 326 175H315V173H326C332.075 173 337 168.075 337 162H339ZM337 162M315 174V112V174M339 112V162C339 169.18 333.18 175 326 175V173C332.075 173 337 168.075 337 162V112H339Z"
          fill="url(#paint5_linear_mobile_default)"
          mask="url(#path-16-inside-2_mobile_default)"
        />
        <mask id="path-18-inside-3_mobile_default" fill="white">
          <path d="M10 60H338V18C338 11.3726 332.627 6 326 6H22C15.3726 6 10 11.3726 10 18V60Z" />
        </mask>
        <path
          d="M10 60H338H10M338 18C338 10.8203 332.18 5 325 5H23C15.8203 5 10 10.8203 10 18C10 11.9249 15.3726 7 22 7H326C332.627 7 338 11.9249 338 18ZM338 18M10 6V60V6M10 6M338 60V6V60"
          fill="url(#paint6_linear_mobile_default)"
          mask="url(#path-18-inside-3_mobile_default)"
        />
        <mask id="path-20-inside-4_mobile_default" fill="white">
          <path d="M10 120H338V162C338 168.627 332.627 174 326 174H22C15.3726 174 10 168.627 10 162V120Z" />
        </mask>
        <path
          d="M10 120H338H10M338 162C338 169.18 332.18 175 325 175H23C15.8203 175 10 169.18 10 162C10 168.075 15.3726 173 22 173H326C332.627 173 338 168.075 338 162ZM338 162M10 174V120V174M10 174M338 120V174V120"
          fill="#C1C1C1"
          mask="url(#path-20-inside-4_mobile_default)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_mobile_default"
          x="0"
          y="0"
          width="348"
          height="190"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0268056 0 0 0 0 0.164733 0 0 0 0 0.304143 0 0 0 0.17 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_mobile_default"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_mobile_default"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_mobile_default"
          x="45"
          y="-67"
          width="18"
          height="314"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.823529 0 0 0 0 0.341176 0 0 0 0 0.937255 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_mobile_default"
          x="63"
          y="4"
          width="109.5"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.979154 0 0 0 0 0.520874 0 0 0 0 0.679399 0 0 0 0.33 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_mobile_default"
          x1="54"
          y1="37"
          x2="10"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D457EF" />
          <stop offset="0.495192" stopColor="#B548E7" />
          <stop offset="1" stopColor="#A040E1" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_mobile_default"
          x1="54"
          y1="90"
          x2="10"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D457EF" />
          <stop offset="0.495192" stopColor="#B548E7" />
          <stop offset="1" stopColor="#A040E1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_mobile_default"
          x1="54"
          y1="143"
          x2="10"
          y2="143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D457EF" />
          <stop offset="0.495192" stopColor="#BA43E6" />
          <stop offset="1" stopColor="#A241E2" />
        </linearGradient>

        <linearGradient
          id="paint3_linear_mobile_default"
          x1="67"
          y1="14"
          x2="199.5"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC6197" />
          <stop offset="1" stopColor="#D90952" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_mobile_default"
          x1="346"
          y1="72.0185"
          x2="321.111"
          y2="8.09824"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C1C1C1" stopOpacity="0" />
          <stop offset="1" stopColor="#C1C1C1" />
        </linearGradient>

        <linearGradient
          id="paint5_linear_mobile_default"
          x1="346"
          y1="107.981"
          x2="321.111"
          y2="171.902"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C1C1C1" stopOpacity="0" />
          <stop offset="1" stopColor="#C1C1C1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_mobile_default"
          x1="338"
          y1="33"
          x2="10"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.442308" stopColor="#C1C1C1" />
          <stop offset="0.557692" stopColor="#C1C1C1" stopOpacity="0" />
          <stop offset="0.817308" stopColor="#C1C1C1" stopOpacity="0" />
          <stop offset="0.899038" stopColor="#C1C1C1" />
        </linearGradient>
        <clipPath id="clip0_mobile_default">
          <rect
            width="9"
            height="168"
            fill="white"
            transform="translate(54 6)"
          />
        </clipPath>
        <clipPath id="clip1_mobile_default">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(88 9)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CouponCardMobileSvg
