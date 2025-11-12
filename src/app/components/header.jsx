'use client'

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import headerStyles from '@/app/components/header.module.css';
import Image from 'next/image'
import headerLogo from '../../../public/prime-american-logo.png';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const header = () => {

    const pathname = usePathname()

    const navLinks = [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'Our Story',
            link: '/about',
        },
        {
            id: 3,
            title: 'Listings',
            link: '/listings',
        },
        {
            id: 4,
            title: 'Blog',
            link: '/blog',
        },
        {
            id: 5,
            title: 'Contact Us',
            link: '/contact',
        },
    ]

    return (
        <div>
            <Navbar expand="lg" className={`${headerStyles.headerbg} fixed-top`}>
                <Container fluid className='px-lg-4'>
                    <Navbar.Brand href="#home">
                        <Image
                            src={headerLogo}
                            width='auto'
                            height='auto'
                            alt="Prime American Living Logo"
                            className='img-fluid'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            {navLinks.map((item, index) => <div key={index} className='py-2 py-lg-0'>
                                <Link href={item.link} className={`${pathname === item.link ? headerStyles.navlink_active : ''} text-white px-4 text-decoration-none`} >{item.title}</Link>
                            </div>
                            )}
                        </Nav>
                        <Nav>
                            <Link href='/signin'>
                                <Button variant="danger" className={headerStyles.headerbtn}>Login/Register</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default header