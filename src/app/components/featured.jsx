'use client';

import React, { useRef } from 'react';
import featuredStyles from '@/app/components/featured.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import featuredimg1 from '../../../public/featuredimg1.png';
import featuredimg2 from '../../../public/featuredimg2.png';
import featuredimg3 from '../../../public/featuredimg3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';


const featured = () => {

    const slidesData = [
        {
            id: 1,
            title: 'Oakwood Manor Estates',
            address: '25945 Washington Street, ID 1651612',
            img: featuredimg1,
            amenities: [
                {
                    area: '2468 Sq',
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
                    beds: '5 Beds',
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
                    baths: '3 Baths',
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
            price: '$148,000'
        },
        {
            id: 2,
            title: 'Willowbrook Grey Estate',
            address: '75835 Herta Walks, indonesia, ID 796326',
            img: featuredimg2,
            amenities: [
                {
                    area: '2468 Sq',
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
                    baths: '3 Baths',
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
            price: '$148,000'
        },
        {
            id: 3,
            title: 'Timberland Interior Legacy',
            address: '6621 Sammy Gateway, Japan, JP 65651',
            img: featuredimg3,
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
            price: '$128,000'
        },
        {
            id: 4,
            title: 'Timberland Interior Legacy',
            address: '6621 Sammy Gateway, Japan, JP 65651',
            img: featuredimg3,
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
            price: '$128,000'
        },
        {
            id: 5,
            title: 'Oakwood Manor Estates',
            address: '25945 Washington Street, ID 1651612',
            img: featuredimg1,
            amenities: [
                {
                    area: '2468 Sq',
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
                    beds: '5 Beds',
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
                    baths: '3 Baths',
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
            price: '$148,000'
        },
        {
            id: 6,
            title: 'Willowbrook Grey Estate',
            address: '75835 Herta Walks, indonesia, ID 796326',
            img: featuredimg2,
            amenities: [
                {
                    area: '2468 Sq',
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
                    baths: '3 Baths',
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
            price: '$148,000'
        },
        {
            id: 7,
            title: 'Timberland Interior Legacy',
            address: '6621 Sammy Gateway, Japan, JP 65651',
            img: featuredimg3,
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
            price: '$128,000'
        },
        {
            id: 8,
            title: 'Timberland Interior Legacy',
            address: '6621 Sammy Gateway, Japan, JP 65651',
            img: featuredimg3,
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
            price: '$128,000'
        },
    ]

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section>
            <Container fluid className={`${featuredStyles.featured_container} px-lg-4`}>
                <Row>
                    <Col>
                        <div className='text-center mb-lg-0 mb-3'>
                            <p className={`${featuredStyles.trending_title} text-uppercase fw-semibold`}>Trending properties</p>
                            <h2>Featured & Trending Properties</h2>
                            <div className={featuredStyles.marquee}>
                                <div className={featuredStyles['marquee-content']}>
                                    <h2>
                                        <span>
                                            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.1216 11.7791L20.138 11.0737L16.0066 0.694777L11.8752 11.0737L0.891602 11.7791L9.356 18.9335L6.53453 29.7156L16.0066 23.7703L25.4787 29.7156L22.6572 18.9335L31.1216 11.7791Z" fill="#ED1C24" />
                                            </svg>
                                            Featured Properties <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.1216 11.7791L20.138 11.0737L16.0066 0.694777L11.8752 11.0737L0.891602 11.7791L9.356 18.9335L6.53453 29.7156L16.0066 23.7703L25.4787 29.7156L22.6572 18.9335L31.1216 11.7791Z" fill="#ED1C24" />
                                            </svg>
                                            Featured Properties <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.1216 11.7791L20.138 11.0737L16.0066 0.694777L11.8752 11.0737L0.891602 11.7791L9.356 18.9335L6.53453 29.7156L16.0066 23.7703L25.4787 29.7156L22.6572 18.9335L31.1216 11.7791Z" fill="#ED1C24" />
                                            </svg>
                                            Featured Properties <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.1216 11.7791L20.138 11.0737L16.0066 0.694777L11.8752 11.0737L0.891602 11.7791L9.356 18.9335L6.53453 29.7156L16.0066 23.7703L25.4787 29.7156L22.6572 18.9335L31.1216 11.7791Z" fill="#ED1C24" />
                                            </svg>
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="slider-container position-relative">
                            <Slider ref={slider => {
                                sliderRef = slider;
                            }} {...settings}>
                                {slidesData.map((item, index) =>
                                    <Card key={index} className={featuredStyles.slidercard}>
                                        <Card.Body>
                                            <div className='position-relative'>
                                                <Image
                                                    src={item.img}
                                                    width='100%'
                                                    height='100%'
                                                    alt="featured properties image"
                                                    className={`${featuredStyles.sliderimg} img-fluid`}
                                                />
                                                <div className='position-absolute start-0 bottom-0 translate-middle-y ps-3'>
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
                                            <div className='pt-3'>
                                                <Button variant='primary' className={`${featuredStyles.sliderbtn} d-block w-100`}>Explore properties</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )}
                            </Slider>
                            <div className='d-flex align-items-baseline pt-3'>
                                <button className={`${featuredStyles.slider_left_arrow} border-0 bg-transparent me-3`} onClick={previous}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8062 6.63657V8.44097H3.67912L8.79159 13.5964L7.50273 14.8853L0.15625 7.53877L7.50273 0.19229L8.79159 1.48115L3.67912 6.63657H14.8062Z" fill="#2665B0" />
                                    </svg>
                                </button>
                                <button className={`${featuredStyles.slider_right_arrow} border-0 bg-transparent`} onClick={next}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.196192 6.63657V8.44097H11.3233L6.21085 13.5964L7.49971 14.8853L14.8462 7.53877L7.49971 0.19229L6.21085 1.48115L11.3233 6.63657H0.196192Z" fill="#2665B0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default featured