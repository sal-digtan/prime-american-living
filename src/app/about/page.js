import React from 'react'
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import AboutHero from '@/app/components/about_hero';
import AboutStats from '@/app/components/about_stats';
import AboutMission from '@/app/components/about_mission';
import AboutAgent from '@/app/components/about_agent';

const page = () => {
    return (
        <div>
            <Header />
            <AboutHero />
            <AboutStats />
            <AboutMission />
            <AboutAgent />
            <Footer />
        </div>
    )
}

export default page