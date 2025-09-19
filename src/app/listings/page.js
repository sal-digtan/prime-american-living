import React from 'react'
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import ListingsHero from '@/app/components/listings_hero';
import ListingsForm from '@/app/components/listings_form';

const page = () => {
    return (
        <div>
            <Header />
            <ListingsHero />
            <ListingsForm />
            <Footer />
        </div>
    )
}

export default page