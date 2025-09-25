import React from 'react'
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import BlogHero from '@/app/components/blog_hero';
import BlogList from '@/app/components/blog_list';

const page = () => {
    return (
        <div>
            <Header />
            <BlogHero />
            <BlogList />
            <Footer />
        </div>
    )
}

export default page