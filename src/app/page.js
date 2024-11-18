import AboutSection from '@/components/aboutUs'
import CallToAction from '@/components/CTA'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ReviewsSection from '@/components/Reviews'
import ServicesSection from '@/components/Service'
import Image from 'next/image'

export default function Home() {
  return (
    <>
     <Navbar></Navbar>
     <HeroSection></HeroSection>
     <AboutSection></AboutSection>
     <ServicesSection></ServicesSection>
     <ReviewsSection></ReviewsSection>
     <CallToAction></CallToAction>
     <Footer></Footer>
    </>
  )
}
