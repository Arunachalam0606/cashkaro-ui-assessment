import { forwardRef, useState } from "react"
import type { ComponentPropsWithRef } from "react"

import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon"

import FbIcon from "@/assets/svgs/social/fb.svg"
import XIcon from "@/assets/svgs/social/x.svg"
import InstagramIcon from "@/assets/svgs/social/instagram.svg"
import YoutubeIcon from "@/assets/svgs/social/youtube.svg"
import LinkedinIcon from "@/assets/svgs/social/linkedin.svg"

import PlayStoreImg from "@/assets/pngs/platform/play-store.png"
import AppStoreImg from "@/assets/pngs/platform/app-store.png"

interface FooterLink {
  label: string
  href: string
}

interface FooterSectionData {
  id: string
  title: string
  mobileTitle: string
  links: FooterLink[]
}

const footerData: FooterSectionData[] = [
  {
    id: "about",
    title: "About CashKaro",
    mobileTitle: "CashKaro",
    links: [
      { label: "About Us", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Testimonials", href: "#" },
    ],
  },
  {
    id: "policy",
    title: "Useful Reads",
    mobileTitle: "Policy",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy & Cookie Policy", href: "#" },
      { label: "Anti-Spam Policy", href: "#" },
    ],
  },
  {
    id: "special",
    title: "Special Pages",
    mobileTitle: "Special Pages",
    links: [
      { label: "Refer & Earn", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Become our Partner", href: "#" },
    ],
  },
  {
    id: "connect",
    title: "Connect With Us",
    mobileTitle: "Get in Touch",
    links: [
      { label: "Help", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
]

const socialIcons = [
  { name: "Facebook", icon: FbIcon, href: "#" },
  { name: "X", icon: XIcon, href: "#" },
  { name: "Instagram", icon: InstagramIcon, href: "#" },
  { name: "YouTube", icon: YoutubeIcon, href: "#" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
]

export const Footer = forwardRef<HTMLElement, ComponentPropsWithRef<"footer">>(
  (props, ref) => {
    const { className = "", ...footerProps } = props

    const defaultOpenSection: string | null = "about"
    const [openSection, setOpenSection] = useState<string | null>(
      defaultOpenSection
    )

    const handleToggle = (id: string) => {
      setOpenSection((previous) => (previous === id ? null : id))
    }

    return (
      <footer
        ref={ref}
        className={`w-full bg-ck-gray text-white ${className}`}
        {...footerProps}
      >
        <div className="hidden w-full max-w-7xl px-6 pt-8 pb-12 md:mx-auto md:block">
          <div className="flex flex-row items-start justify-between gap-8 lg:gap-16">
            {footerData.map((section) => (
              <div key={section.id} className="flex flex-col items-start gap-4">
                <h3 className="text-base leading-6 font-semibold text-white">
                  <span>{section.title}</span>
                </h3>

                <div className="flex flex-col items-start gap-4">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm leading-5 font-medium text-white/90 transition-colors hover:text-white"
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-base leading-3 font-semibold text-white">
                  <span>Let’s Get Social</span>
                </h3>

                <div className="flex flex-row items-center gap-2.5">
                  {socialIcons.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="flex size-7.5 items-center justify-center rounded-full transition-transform hover:scale-105"
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="size-7.5 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <h3 className="text-base leading-6 font-semibold text-white">
                  <span>Download App</span>
                </h3>

                <div className="flex flex-row items-center gap-4">
                  <a href="#" className="transition-opacity hover:opacity-90">
                    <img
                      src={PlayStoreImg}
                      alt="Get it on Google Play"
                      className="h-10.5 w-[139.5px] rounded-[6px] object-contain"
                    />
                  </a>

                  <a href="#" className="transition-opacity hover:opacity-90">
                    <img
                      src={AppStoreImg}
                      alt="Download on the App Store"
                      className="h-10.5 w-[139.5px] rounded-[6px] object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-33.5 text-center">
            <p className="text-sm font-medium text-white">
              <span>(©) Copyright 2023 CashKaro. All Rights Reserved.</span>
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col py-6 md:hidden">
          <div className="flex w-full flex-col">
            {footerData.map((section) => {
              const isOpen = openSection === section.id

              return (
                <div key={section.id} className="flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => handleToggle(section.id)}
                    className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="text-sm leading-4.5 font-semibold text-white">
                      {section.mobileTitle}
                    </span>

                    <ChevronDownIcon
                      className={`size-5 text-white transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="flex w-full flex-col bg-ck-dark">
                      {section.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="flex w-full items-center border-b border-white/5 px-6 py-2 text-xs leading-4 font-semibold text-white last:border-b-0"
                        >
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-start gap-6 px-4 pt-4">
            <h3 className="text-sm leading-4.5 font-semibold text-white">
              <span>Download App</span>
            </h3>

            <div className="flex flex-row items-center gap-4">
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt="Get it on Google Play"
                  className="h-7.5 w-25.25 rounded-[5px] object-contain"
                />
              </a>

              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="Download on the App Store"
                  className="h-7.5 w-25.25 rounded-[5px] object-contain"
                />
              </a>
            </div>
          </div>

          <div className="pt-6 text-center">
            <p className="text-[10px] font-normal text-white">
              <span>(©) Copyright 2024 CashKaro. All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    )
  }
)

Footer.displayName = "Footer"

export default Footer
