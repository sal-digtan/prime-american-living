import React from 'react'
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import DetailsHero from '@/app/components/details_hero';
import Latest from '@/app/components/latest';
import DetailsOverview from '@/app/components/details_overview';

const page = () => {
    return (
        <div>
            <Header />
            <DetailsHero />
            <DetailsOverview />
            <Latest />
            <Footer />
        </div>
    )
}

export default page