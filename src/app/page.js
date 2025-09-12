import React from 'react'
import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import Featured from '@/app/components/featured';
import HowItWorks from '@/app/components/howitworks';
import EarnBanner from '@/app/components/earn_banner';
import Latest from '@/app/components/latest';
import BenefitsBanner from '@/app/components/benefits_banner';
import Promo from '@/app/components/promo';

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
    </div>
  )
}

export default page