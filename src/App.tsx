import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroBanner } from "@/components/cashback/HeroBanner"

export const App = () => {
  return (
    <section>
      <Header />

      <div className="mx-auto w-full max-w-324">
        <div className="md:mx-7 md:my-7.5">
          <HeroBanner />
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default App
