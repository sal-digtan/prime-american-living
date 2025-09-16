import React from 'react'
import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import Featured from '@/app/components/featured';
import HowItWorks from '@/app/components/howitworks';
import EarnBanner from '@/app/components/earn_banner';
import Latest from '@/app/components/latest';
import BenefitsBanner from '@/app/components/benefits_banner';
import Promo from '@/app/components/promo';
import HelpForm from '@/app/components/helpform';
import Testimonials from '@/app/components/testimonials';
import Footer from '@/app/components/footer';

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <HowItWorks />
      <EarnBanner />
      <Latest />
      <BenefitsBanner />
      <Promo />
      <HelpForm />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page