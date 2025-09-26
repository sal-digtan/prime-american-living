import React from 'react'
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import BlogDetailsHero from '@/app/components/blog_details_hero';
import BlogDetailsItem from '@/app/components/blog_details_item';

const page = () => {
    return (
        <div>
            <Header />
            <BlogDetailsHero />
            <BlogDetailsItem />
            <Footer />
        </div>
    )
}

export default page