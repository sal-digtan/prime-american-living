'use client';

import React, { useState } from 'react'
import listings_formStyles from '@/app/components/listings_form.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import formImg1 from '../../../public/listings-form-img1.png';
import formImg2 from '../../../public/listings-form-img2.png';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Link from 'next/link'

const listings_form = () => {

    const listingsData = [
        {
            id: 1,
            title: 'Serendipity Gardens',
            address: '60, Jln 6D, NP 27570',
            img: formImg1,
            amenities: [
                {
                    area: '2500 Sq',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_298)">
<path d="M13.9478 6.70054H14.4878V3.55054H11.3378V4.09054H13.5878L4.04781 13.6305V11.3805H3.50781V14.5305H6.65781V13.9905H4.40781L13.9478 4.45054V6.70054Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 6.43067H1.43844V1.48067H6.38844V0.940674H0.898438V6.43067Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 0.940674H11.6094V1.48067H16.5594V6.43067H17.0994V0.940674Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 11.6506H16.5594V16.6006H11.6094V17.1406H17.0994V11.6506Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 17.1406H6.38844V16.6006H1.43844V11.6506H0.898438V17.1406Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
</g>
<defs>
<clipPath id="clip0_1_298">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>
`},
                {
                    beds: '2 Beds',
                    icon: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_309)">
<path d="M16.9665 12.8862V16.4044H14.5937V14.6044H3.46648V16.4044H1.09375V12.8862" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.54688 1.67725H14.5105" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5156 1.67725C15.0884 1.67725 15.5793 2.16816 15.5793 2.74088" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5781 2.74072V7.32254" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1862 7.15867V6.42231C14.1862 5.76776 13.6135 5.27686 13.0408 5.27686H10.3408C9.68622 5.27686 9.19531 5.84958 9.19531 6.42231V6.91322" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.94773 6.91322V6.42231C8.94773 5.76776 8.375 5.27686 7.80227 5.27686H5.10227C4.44773 5.27686 3.875 5.76776 3.875 6.42231V7.07686" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 7.32254V2.74072" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 2.74088C2.48438 2.16816 2.97528 1.67725 3.54801 1.67725" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48466 7.6497C6.65739 6.99516 13.0392 7.07698 15.6574 7.6497L17.0483 12.6406H1.09375L2.48466 7.6497Z" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_309">
<rect width="18" height="16.3636" fill="white" transform="translate(0.03125 0.858887)"/>
</clipPath>
</defs>
</svg>`

                },
                {
                    baths: '4 Baths',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_324)">
<path d="M2.07031 10.8406C2.07031 13.7206 3.33031 16.1506 5.94031 16.1506H12.0603C14.7603 16.1506 15.9303 13.7206 15.9303 10.8406" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9181 10.7507H1.07812" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6728 17.1406L14.1328 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.32812 17.1406L3.86813 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.20625 2.92067C6.20625 1.84067 5.21625 0.940674 4.13625 0.940674C3.05625 0.940674 2.15625 1.84067 2.15625 2.92067V10.1207" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.73175 4.18091C8.37175 3.28091 7.56175 2.74091 6.93175 3.01091L5.67175 3.37091C5.04175 3.64091 4.77175 4.63091 5.04175 5.53091" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 5.80082L9.18 4.09082M11.61 15.1608C13.41 15.1608 14.4 13.8108 14.67 12.1008" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_324">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>`
                }
            ],
            price: '$166,000'
        },
        {
            id: 2,
            title: 'Panorama Place',
            address: 'Pál útja ,25, HU 0321',
            img: formImg2,
            amenities: [
                {
                    area: '2598 Sq',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_298)">
<path d="M13.9478 6.70054H14.4878V3.55054H11.3378V4.09054H13.5878L4.04781 13.6305V11.3805H3.50781V14.5305H6.65781V13.9905H4.40781L13.9478 4.45054V6.70054Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 6.43067H1.43844V1.48067H6.38844V0.940674H0.898438V6.43067Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 0.940674H11.6094V1.48067H16.5594V6.43067H17.0994V0.940674Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 11.6506H16.5594V16.6006H11.6094V17.1406H17.0994V11.6506Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 17.1406H6.38844V16.6006H1.43844V11.6506H0.898438V17.1406Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
</g>
<defs>
<clipPath id="clip0_1_298">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>
`},
                {
                    beds: '3 Beds',
                    icon: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_309)">
<path d="M16.9665 12.8862V16.4044H14.5937V14.6044H3.46648V16.4044H1.09375V12.8862" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.54688 1.67725H14.5105" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5156 1.67725C15.0884 1.67725 15.5793 2.16816 15.5793 2.74088" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5781 2.74072V7.32254" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1862 7.15867V6.42231C14.1862 5.76776 13.6135 5.27686 13.0408 5.27686H10.3408C9.68622 5.27686 9.19531 5.84958 9.19531 6.42231V6.91322" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.94773 6.91322V6.42231C8.94773 5.76776 8.375 5.27686 7.80227 5.27686H5.10227C4.44773 5.27686 3.875 5.76776 3.875 6.42231V7.07686" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 7.32254V2.74072" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 2.74088C2.48438 2.16816 2.97528 1.67725 3.54801 1.67725" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48466 7.6497C6.65739 6.99516 13.0392 7.07698 15.6574 7.6497L17.0483 12.6406H1.09375L2.48466 7.6497Z" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_309">
<rect width="18" height="16.3636" fill="white" transform="translate(0.03125 0.858887)"/>
</clipPath>
</defs>
</svg>`

                },
                {
                    baths: '4 Baths',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_324)">
<path d="M2.07031 10.8406C2.07031 13.7206 3.33031 16.1506 5.94031 16.1506H12.0603C14.7603 16.1506 15.9303 13.7206 15.9303 10.8406" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9181 10.7507H1.07812" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6728 17.1406L14.1328 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.32812 17.1406L3.86813 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.20625 2.92067C6.20625 1.84067 5.21625 0.940674 4.13625 0.940674C3.05625 0.940674 2.15625 1.84067 2.15625 2.92067V10.1207" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.73175 4.18091C8.37175 3.28091 7.56175 2.74091 6.93175 3.01091L5.67175 3.37091C5.04175 3.64091 4.77175 4.63091 5.04175 5.53091" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 5.80082L9.18 4.09082M11.61 15.1608C13.41 15.1608 14.4 13.8108 14.67 12.1008" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_324">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>`
                }
            ],
            price: '$128,000'
        },
        {
            id: 3,
            title: 'Serendipity Gardens',
            address: '60, Jln 6D, NP 27570',
            img: formImg1,
            amenities: [
                {
                    area: '2500 Sq',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_298)">
<path d="M13.9478 6.70054H14.4878V3.55054H11.3378V4.09054H13.5878L4.04781 13.6305V11.3805H3.50781V14.5305H6.65781V13.9905H4.40781L13.9478 4.45054V6.70054Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 6.43067H1.43844V1.48067H6.38844V0.940674H0.898438V6.43067Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 0.940674H11.6094V1.48067H16.5594V6.43067H17.0994V0.940674Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 11.6506H16.5594V16.6006H11.6094V17.1406H17.0994V11.6506Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 17.1406H6.38844V16.6006H1.43844V11.6506H0.898438V17.1406Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
</g>
<defs>
<clipPath id="clip0_1_298">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>
`},
                {
                    beds: '2 Beds',
                    icon: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_309)">
<path d="M16.9665 12.8862V16.4044H14.5937V14.6044H3.46648V16.4044H1.09375V12.8862" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.54688 1.67725H14.5105" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5156 1.67725C15.0884 1.67725 15.5793 2.16816 15.5793 2.74088" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5781 2.74072V7.32254" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1862 7.15867V6.42231C14.1862 5.76776 13.6135 5.27686 13.0408 5.27686H10.3408C9.68622 5.27686 9.19531 5.84958 9.19531 6.42231V6.91322" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.94773 6.91322V6.42231C8.94773 5.76776 8.375 5.27686 7.80227 5.27686H5.10227C4.44773 5.27686 3.875 5.76776 3.875 6.42231V7.07686" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 7.32254V2.74072" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 2.74088C2.48438 2.16816 2.97528 1.67725 3.54801 1.67725" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48466 7.6497C6.65739 6.99516 13.0392 7.07698 15.6574 7.6497L17.0483 12.6406H1.09375L2.48466 7.6497Z" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_309">
<rect width="18" height="16.3636" fill="white" transform="translate(0.03125 0.858887)"/>
</clipPath>
</defs>
</svg>`

                },
                {
                    baths: '4 Baths',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_324)">
<path d="M2.07031 10.8406C2.07031 13.7206 3.33031 16.1506 5.94031 16.1506H12.0603C14.7603 16.1506 15.9303 13.7206 15.9303 10.8406" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9181 10.7507H1.07812" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6728 17.1406L14.1328 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.32812 17.1406L3.86813 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.20625 2.92067C6.20625 1.84067 5.21625 0.940674 4.13625 0.940674C3.05625 0.940674 2.15625 1.84067 2.15625 2.92067V10.1207" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.73175 4.18091C8.37175 3.28091 7.56175 2.74091 6.93175 3.01091L5.67175 3.37091C5.04175 3.64091 4.77175 4.63091 5.04175 5.53091" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 5.80082L9.18 4.09082M11.61 15.1608C13.41 15.1608 14.4 13.8108 14.67 12.1008" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_324">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>`
                }
            ],
            price: '$166,000'
        },
        {
            id: 4,
            title: 'Panorama Place',
            address: 'Pál útja ,25, HU 0321',
            img: formImg2,
            amenities: [
                {
                    area: '2598 Sq',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_298)">
<path d="M13.9478 6.70054H14.4878V3.55054H11.3378V4.09054H13.5878L4.04781 13.6305V11.3805H3.50781V14.5305H6.65781V13.9905H4.40781L13.9478 4.45054V6.70054Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 6.43067H1.43844V1.48067H6.38844V0.940674H0.898438V6.43067Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 0.940674H11.6094V1.48067H16.5594V6.43067H17.0994V0.940674Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M17.0994 11.6506H16.5594V16.6006H11.6094V17.1406H17.0994V11.6506Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
<path d="M0.898438 17.1406H6.38844V16.6006H1.43844V11.6506H0.898438V17.1406Z" fill="#0D263C" stroke="#0D263C" stroke-width="0.9"/>
</g>
<defs>
<clipPath id="clip0_1_298">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>
`},
                {
                    beds: '3 Beds',
                    icon: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_309)">
<path d="M16.9665 12.8862V16.4044H14.5937V14.6044H3.46648V16.4044H1.09375V12.8862" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.54688 1.67725H14.5105" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5156 1.67725C15.0884 1.67725 15.5793 2.16816 15.5793 2.74088" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5781 2.74072V7.32254" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1862 7.15867V6.42231C14.1862 5.76776 13.6135 5.27686 13.0408 5.27686H10.3408C9.68622 5.27686 9.19531 5.84958 9.19531 6.42231V6.91322" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.94773 6.91322V6.42231C8.94773 5.76776 8.375 5.27686 7.80227 5.27686H5.10227C4.44773 5.27686 3.875 5.76776 3.875 6.42231V7.07686" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 7.32254V2.74072" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48438 2.74088C2.48438 2.16816 2.97528 1.67725 3.54801 1.67725" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.48466 7.6497C6.65739 6.99516 13.0392 7.07698 15.6574 7.6497L17.0483 12.6406H1.09375L2.48466 7.6497Z" stroke="#0D263C" stroke-width="1.22727" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_309">
<rect width="18" height="16.3636" fill="white" transform="translate(0.03125 0.858887)"/>
</clipPath>
</defs>
</svg>`

                },
                {
                    baths: '4 Baths',
                    icon: `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_324)">
<path d="M2.07031 10.8406C2.07031 13.7206 3.33031 16.1506 5.94031 16.1506H12.0603C14.7603 16.1506 15.9303 13.7206 15.9303 10.8406" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9181 10.7507H1.07812" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6728 17.1406L14.1328 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.32812 17.1406L3.86813 16.1506" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.20625 2.92067C6.20625 1.84067 5.21625 0.940674 4.13625 0.940674C3.05625 0.940674 2.15625 1.84067 2.15625 2.92067V10.1207" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.73175 4.18091C8.37175 3.28091 7.56175 2.74091 6.93175 3.01091L5.67175 3.37091C5.04175 3.64091 4.77175 4.63091 5.04175 5.53091" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 5.80082L9.18 4.09082M11.61 15.1608C13.41 15.1608 14.4 13.8108 14.67 12.1008" stroke="#0D263C" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_324">
<rect width="18" height="18" fill="white" transform="translate(0 0.0407715)"/>
</clipPath>
</defs>
</svg>`
                }
            ],
            price: '$128,000'
        },

    ]

    const [active, setActive] = useState(1)
    // let active = 1;
    let items = [];
    for (let number = 1; number <= 4; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => setActive(number)} active={number === active} className='me-3'>
                {number === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" fill={active === number ? '#fff' : '#000'} />
                </svg>
                    : number}
            </Pagination.Item>,
        );
    }

    const bedBathData = [
        '1 Beds / 1 Bath',
        '2 Beds / 1 bath',
        '3 Beds /1 bath',
        '3 Beds / 2 Bath',
        '4 Beds / 2 Bath',
        '4 Beds / 3 Bath'
    ]

    const formFields = [
        {
            id: 1,
            label: 'First Name*',
            placeholder: 'John',
            type: 'text',
            icon: `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50016 7.66667C7.446 7.66667 6.54357 7.29132 5.79287 6.54062C5.04218 5.78993 4.66683 4.8875 4.66683 3.83333C4.66683 2.77917 5.04218 1.87674 5.79287 1.12604C6.54357 0.375347 7.446 0 8.50016 0C9.55433 0 10.4568 0.375347 11.2075 1.12604C11.9581 1.87674 12.3335 2.77917 12.3335 3.83333C12.3335 4.8875 11.9581 5.78993 11.2075 6.54062C10.4568 7.29132 9.55433 7.66667 8.50016 7.66667ZM0.833496 15.3333V12.65C0.833496 12.1069 0.973413 11.608 1.25325 11.1531C1.53308 10.6982 1.90427 10.3506 2.36683 10.1104C3.35711 9.61528 4.36336 9.24408 5.38558 8.99683C6.4078 8.74958 7.446 8.62564 8.50016 8.625C9.55433 8.62436 10.5925 8.74831 11.6147 8.99683C12.637 9.24536 13.6432 9.61656 14.6335 10.1104C15.0967 10.35 15.4682 10.6976 15.748 11.1531C16.0279 11.6086 16.1675 12.1076 16.1668 12.65V15.3333H0.833496Z" fill="black"/>
</svg>`
        },
        {
            id: 2,
            label: 'Last Name*',
            placeholder: 'Flex',
            type: 'text',
            icon: `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50016 7.66667C7.446 7.66667 6.54357 7.29132 5.79287 6.54062C5.04218 5.78993 4.66683 4.8875 4.66683 3.83333C4.66683 2.77917 5.04218 1.87674 5.79287 1.12604C6.54357 0.375347 7.446 0 8.50016 0C9.55433 0 10.4568 0.375347 11.2075 1.12604C11.9581 1.87674 12.3335 2.77917 12.3335 3.83333C12.3335 4.8875 11.9581 5.78993 11.2075 6.54062C10.4568 7.29132 9.55433 7.66667 8.50016 7.66667ZM0.833496 15.3333V12.65C0.833496 12.1069 0.973413 11.608 1.25325 11.1531C1.53308 10.6982 1.90427 10.3506 2.36683 10.1104C3.35711 9.61528 4.36336 9.24408 5.38558 8.99683C6.4078 8.74958 7.446 8.62564 8.50016 8.625C9.55433 8.62436 10.5925 8.74831 11.6147 8.99683C12.637 9.24536 13.6432 9.61656 14.6335 10.1104C15.0967 10.35 15.4682 10.6976 15.748 11.1531C16.0279 11.6086 16.1675 12.1076 16.1668 12.65V15.3333H0.833496Z" fill="black"/>
</svg>`
        },
        {
            id: 3,
            label: 'Email*',
            placeholder: '@gmail.com*',
            type: 'email',
            icon: `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1665 4.16671L10.4998 8.95837L2.83317 4.16671V2.25004L10.4998 7.04171L18.1665 2.25004M18.1665 0.333374H2.83317C1.76942 0.333374 0.916504 1.18629 0.916504 2.25004V13.75C0.916504 14.2584 1.11844 14.7459 1.47788 15.1053C1.83733 15.4648 2.32484 15.6667 2.83317 15.6667H18.1665C18.6748 15.6667 19.1623 15.4648 19.5218 15.1053C19.8812 14.7459 20.0832 14.2584 20.0832 13.75V2.25004C20.0832 1.74171 19.8812 1.2542 19.5218 0.894753C19.1623 0.535308 18.6748 0.333374 18.1665 0.333374Z" fill="black"/>
</svg>`
        },
        {
            id: 4,
            label: 'Phone*',
            placeholder: '+1',
            type: 'text',
            icon: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.34417 7.84042C5.72417 10.5525 7.9475 12.7758 10.6596 14.1558L12.7679 12.0475C13.0362 11.7792 13.41 11.7025 13.7454 11.8079C14.8188 12.1625 15.9688 12.3542 17.1667 12.3542C17.4208 12.3542 17.6646 12.4551 17.8443 12.6349C18.024 12.8146 18.125 13.0583 18.125 13.3125V16.6667C18.125 16.9208 18.024 17.1646 17.8443 17.3443C17.6646 17.524 17.4208 17.625 17.1667 17.625C12.8458 17.625 8.702 15.9086 5.64672 12.8533C2.59144 9.798 0.875 5.65415 0.875 1.33333C0.875 1.07917 0.975967 0.835412 1.15569 0.655689C1.33541 0.475967 1.57917 0.375 1.83333 0.375H5.1875C5.44167 0.375 5.68542 0.475967 5.86514 0.655689C6.04487 0.835412 6.14583 1.07917 6.14583 1.33333C6.14583 2.53125 6.3375 3.68125 6.69208 4.75458C6.7975 5.09 6.72083 5.46375 6.4525 5.73208L4.34417 7.84042Z" fill="black"/>
</svg>`
        },
    ]

    const [showFormFields, setshowFormField] = useState(false)
    const [firstForm, setFirstForm] = useState(true)

    return (
        <section className={listings_formStyles.listings_form_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={6} className='mb-lg-0 mb-3'>
                        <Row>
                            {listingsData.map((item, index) =>
                                <Col key={index} lg={6} md={6} className='mb-3'>
                                    <Link href="/listings/details" className='text-decoration-none'>
                                        <Card className={listings_formStyles.slidercard}>
                                            <Card.Body>
                                                <div className={`${listings_formStyles.sliderimg_container} position-relative`}>
                                                    <Image
                                                        src={item.img}
                                                        width='100%'
                                                        height='100%'
                                                        alt="featured properties image"
                                                        className={`${listings_formStyles.sliderimg} img-fluid`}
                                                    />
                                                    <div className='position-absolute start-0 bottom-0 translate-middle-y ps-3 z-1'>
                                                        <h4 className='text-white'>{item.price}</h4>
                                                    </div>
                                                </div>
                                                <Card.Title className='pt-3'>{item.title}</Card.Title>
                                                <Card.Text>
                                                    <span>
                                                        <svg className='me-2' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.68156 0.350771C6.56156 0.414771 5.53223 0.734771 4.59356 1.31077C3.67623 1.86544 2.9509 2.60144 2.41756 3.51877C1.87356 4.45744 1.60156 5.47077 1.60156 6.55877C1.60156 7.26277 1.7109 7.92944 1.92956 8.55877C2.14823 9.1881 2.46556 9.75877 2.88156 10.2708L7.23356 15.9028C7.36156 16.0734 7.52156 16.1881 7.71356 16.2468C7.90556 16.3054 8.1029 16.3054 8.30556 16.2468C8.50823 16.1881 8.68423 16.0734 8.83356 15.9028L13.1856 10.2708C13.9749 9.27877 14.4016 8.1481 14.4656 6.87877C14.4976 5.98277 14.3376 5.11877 13.9856 4.28677C13.6549 3.48677 13.1722 2.7801 12.5376 2.16677C11.9029 1.55344 11.1749 1.0921 10.3536 0.782771C9.50023 0.452104 8.60956 0.308105 7.68156 0.350771ZM12.2896 6.75077C12.2896 7.52944 12.0976 8.24677 11.7136 8.90277C11.3296 9.55877 10.8096 10.0788 10.1536 10.4628C9.49756 10.8468 8.78023 11.0388 8.00156 11.0388C7.2229 11.0388 6.50556 10.8468 5.84956 10.4628C5.19356 10.0788 4.67356 9.55877 4.28956 8.90277C3.90556 8.24677 3.71356 7.52944 3.71356 6.75077C3.71356 5.9721 3.90556 5.25477 4.28956 4.59877C4.67356 3.94277 5.19356 3.42277 5.84956 3.03877C6.50556 2.65477 7.2229 2.46277 8.00156 2.46277C8.78023 2.46277 9.49756 2.65477 10.1536 3.03877C10.8096 3.42277 11.3296 3.94277 11.7136 4.59877C12.0976 5.25477 12.2896 5.9721 12.2896 6.75077Z" fill="#EC6325" />
                                                        </svg>
                                                        {item.address}
                                                    </span>
                                                </Card.Text>
                                                <div className='d-flex'>
                                                    {item.amenities.map((amenity, index) => <span className='d-flex align-items-center me-2' key={index}>
                                                        <Image
                                                            src={`data:image/svg+xml;utf8,${encodeURIComponent(amenity.icon)}`}
                                                            width={16}
                                                            height={16}
                                                            alt="amenities icon"
                                                            className='me-2'
                                                        />
                                                        {amenity.area}{amenity.beds}{amenity.baths}</span>)}
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            )}
                        </Row>
                        <div className='d-flex justify-content-center mt-3'>
                            <Pagination>{items}</Pagination>
                        </div>
                    </Col>
                    <Col lg={6}>
                        {firstForm &&
                            <Form className={listings_formStyles.form_container}>
                                <div className='text-center mb-4'>
                                    <h4 className={listings_formStyles.form_title}>
                                        <span>
                                            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_753_161)">
                                                    <path d="M17.4352 12.3456V15.8638H15.0625V14.0638H3.93523V15.8638H1.5625V12.3456" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.01953 1.1366H14.9832" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.9805 1.1366C15.5532 1.1366 16.0441 1.62751 16.0441 2.20023" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.0469 2.20007V6.78189" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.655 6.61802V5.88166C14.655 5.22712 14.0822 4.73621 13.5095 4.73621H10.8095C10.155 4.73621 9.66406 5.30893 9.66406 5.88166V6.37257" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.41648 6.37257V5.88166C9.41648 5.22712 8.84375 4.73621 8.27102 4.73621H5.57102C4.91648 4.73621 4.34375 5.22712 4.34375 5.88166V6.53621" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.95312 6.78189V2.20007" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.95312 2.20023C2.95312 1.62751 3.44403 1.1366 4.01676 1.1366" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.95341 7.10905C7.12614 6.45451 13.508 6.53633 16.1261 7.10905L17.517 12.1H1.5625L2.95341 7.10905Z" stroke="#0D263C" strokeWidth="1.22727" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_753_161">
                                                        <rect width="18" height="16.3636" fill="white" transform="translate(0.5 0.318237)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span> How many Bedrooms/Bathrooms?</h4>
                                </div>
                                <Row>
                                    {bedBathData.map((item) =>
                                        <Col lg={6} md={6} key={item} className='radio-buttons'>
                                            <Form.Check type="radio" aria-label="radio 1" label={item} name='group' id={item} value={item} className={listings_formStyles.form_check} />
                                        </Col>
                                    )}
                                </Row>
                                <div className='mt-3'>
                                    <Button variant='primary' onClick={() => { setshowFormField(true); setFirstForm(false) }} className={`${listings_formStyles.form_btn} d-block w-100`}>Next</Button>
                                </div>
                            </Form>
                        }
                        {showFormFields &&
                            <Form className={listings_formStyles.form_container}>
                                <div className='text-center mb-4'>
                                    <h4 className={listings_formStyles.form_title}>
                                        <span>
                                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.662 17.1659C7.918 17.3273 8.19733 17.4069 8.5 17.4049C8.80267 17.4029 9.08233 17.3209 9.339 17.1589L13.619 14.5389C12.8503 14.0449 12.0327 13.6649 11.166 13.3989C10.2993 13.1329 9.41067 12.9999 8.5 12.9999C7.58933 12.9999 6.7 13.1363 5.832 13.4089C4.96333 13.6809 4.136 14.0556 3.35 14.5329L7.662 17.1659ZM8.5 9.99994C9.33867 9.99994 10.0483 9.70961 10.629 9.12894C11.2097 8.54827 11.5 7.83861 11.5 6.99994C11.5 6.16127 11.2097 5.45161 10.629 4.87094C10.0483 4.29027 9.33867 3.99994 8.5 3.99994C7.66133 3.99994 6.95167 4.29027 6.371 4.87094C5.79033 5.45161 5.5 6.16127 5.5 6.99994C5.5 7.83861 5.79033 8.54827 6.371 9.12894C6.95167 9.70961 7.66133 9.99994 8.5 9.99994ZM7.662 18.3169L1.277 14.4209C1.02833 14.2763 0.836667 14.0796 0.702 13.8309C0.567333 13.5823 0.5 13.3149 0.5 13.0289V5.96994C0.5 5.68394 0.567333 5.41661 0.702 5.16794C0.836667 4.91927 1.02833 4.72261 1.277 4.57794L7.662 0.681941C7.918 0.520608 8.19733 0.439941 8.5 0.439941C8.80267 0.439941 9.08233 0.520608 9.339 0.681941L15.723 4.57794C15.9717 4.72261 16.1633 4.91927 16.298 5.16794C16.4327 5.41661 16.5 5.68394 16.5 5.96994V13.0279C16.5 13.3139 16.4327 13.5813 16.298 13.8299C16.1633 14.0786 15.9717 14.2753 15.723 14.4199L9.339 18.3159C9.08233 18.4779 8.80267 18.5589 8.5 18.5589C8.19733 18.5589 7.918 18.4789 7.662 18.3169Z" fill="black" />
                                            </svg>
                                        </span> Join Our Platform</h4>
                                </div>
                                <Row>
                                    {formFields.map((item, index) =>
                                        <Col lg={6} md={6} key={index}>
                                            <Form.Label className={listings_formStyles.form_label}>{item.label}</Form.Label>
                                            <InputGroup className={`${listings_formStyles.input_container} mb-3`}>
                                                <Form.Control type={item.type} placeholder={item.placeholder} className={`${listings_formStyles.form_control} border-0`} />
                                                <InputGroup.Text className='border-0 bg-transparent'>
                                                    <Image
                                                        src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                        width={16}
                                                        height={16}
                                                        alt="form-icon"
                                                    />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                    )}
                                </Row>
                                <div className='mt-3'>
                                    <Link href='/listings/details' className='text-decoration-none'>
                                        <Button variant='primary' className={`${listings_formStyles.form_btn} d-block w-100`}>View Listing</Button>
                                    </Link>
                                </div>
                            </Form>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default listings_form