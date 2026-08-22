import HamburgerIcon from "@/assets/svgs/icons/hamburger-icon.svg"
import AvatarIcon from "@/assets/svgs/icons/avatar-icon.svg"
import SearchIcon from "@/assets/svgs/icons/search-icon.svg"
import AppLogo from "@/assets/svgs/logos/app-logo.svg"

export const Header = () => {
  const onHamburgerClick = () => {
    console.log("Hamburger Clicked")
  }

  const onAppLogoClick = () => {
    console.log("App Logo Clicked")
  }

  const onHelpClick = () => {
    console.log("Help Clicked")
  }

  const onLoginClick = () => {
    console.log("Login Clicked")
  }

  return (
    <header className="hidden h-20.5 w-full items-center justify-between p-4 shadow-[0px_4px_4px_0px_#0000000A] md:flex">
      <div className="mx-auto flex w-full max-w-324 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <img
            src={HamburgerIcon}
            alt="hamburger-icon"
            onClick={onHamburgerClick}
            className="cursor-pointer"
          />

          <img
            src={AppLogo}
            alt="app-logo"
            onClick={onAppLogoClick}
            className="cursor-pointer"
          />
        </div>

        <div className="relative flex h-12.5 w-full max-w-146 min-w-75 flex-1 items-center">
          <img
            src={SearchIcon}
            alt="search-icon"
            className="pointer-events-none absolute left-6.75 size-4.5"
          />

          <input
            type="text"
            placeholder="Search for any brand or product"
            className="h-full w-full rounded-xl bg-input pr-3 pl-16 text-[14px] font-medium outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-6.5">
          <span
            className="cursor-pointer text-base leading-6 font-semibold text-black"
            onClick={onHelpClick}
          >
            Help
          </span>

          <span className="h-6 border-l-2 border-border" />

          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={onLoginClick}
          >
            <img src={AvatarIcon} alt="avatar-icon" />

            <span className="text-base leading-6 font-semibold text-black">
              Login / Sign up
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
