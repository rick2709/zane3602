import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import StatsBand from './_components/StatsBand'
import About from './_components/About'
import Services from './_components/Services'
import BannerStrip from './_components/BannerStrip'
import WhyUs from './_components/WhyUs'
import CyberShowcase from './_components/CyberShowcase'
import Gallery from './_components/Gallery'
import Testimonials from './_components/Testimonials'
import FAQ from './_components/FAQ'
import CTABand from './_components/CTABand'
import Footer from './_components/Footer'
import MobileBottomNav from './_components/MobileBottomNav'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <StatsBand />
        <About />
        <Services />
        <BannerStrip />
        <WhyUs />
        <CyberShowcase />
        <BannerStrip />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  )
}
