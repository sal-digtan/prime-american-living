'use client';

import React, { useRef, useState, useContext, useEffect } from 'react'
import agent_dashboardStyles from '@/app/components/agent_dashboard.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import navLogo from '../../../public/dashboard-logo.png';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import userImg from '../../../public/user-avatar.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import dynamic from 'next/dynamic';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import { LocationContext } from '@/app/context/LocationContext';
import formImg1 from '../../../public/listings-form-img1.png';
import formImg2 from '../../../public/listings-form-img2.png';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import boostingImg1 from '../../../public/boosting-img1.png';
import boostingImg2 from '../../../public/boosting-img2.png';
import boostingImg3 from '../../../public/boosting-img3.png';
import boostingImg4 from '../../../public/boosting-img4.png';
import boostingImg5 from '../../../public/boosting-img5.png';
import boostingImg6 from '../../../public/boosting-img6.png';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import profileImg from '../../../public/profile-img.png';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Chart = dynamic(() => import('../components/Chart'), {
    ssr: false,
});

const CustomEditor = dynamic(() => import('../components/custom-editor'), {
    ssr: false
});

const LocationSearch = dynamic(() => import('../components/LocationSearch'), {
    ssr: false
});

const agent_dashboard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const topNavLinks = [
        {
            id: 1,
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_109_607)">
<g clip-path="url(#clip1_109_607)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.71105C1 2.18683 1.02811 1.3457 4.49997 1.3457C7.97182 1.3457 7.99993 2.18683 7.99993 4.71105C7.99993 7.23527 8.01101 8.07641 4.49997 8.07641C0.988927 8.07641 1 7.23527 1 4.71105Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.71105C12 2.18683 12.0281 1.3457 15.5 1.3457C18.9718 1.3457 18.9999 2.18683 18.9999 4.71105C18.9999 7.23527 19.011 8.07641 15.5 8.07641C11.9889 8.07641 12 7.23527 12 4.71105Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.2891C1 12.7649 1.02811 11.9238 4.49997 11.9238C7.97182 11.9238 7.99993 12.7649 7.99993 15.2891C7.99993 17.8133 8.01101 18.6545 4.49997 18.6545C0.988927 18.6545 1 17.8133 1 15.2891Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.2891C12 12.7649 12.0281 11.9238 15.5 11.9238C18.9718 11.9238 18.9999 12.7649 18.9999 15.2891C18.9999 17.8133 19.011 18.6545 15.5 18.6545C11.9889 18.6545 12 17.8133 12 15.2891Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_109_607">
<rect width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip1_109_607">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`,
            title: 'Dashboard',
        },
        {
            id: 2,
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_109_616)">
<path d="M9.9974 1.66602C5.4024 1.66602 1.66406 5.40435 1.66406 9.99935V13.4518C1.66406 14.3052 2.41156 14.9993 3.33073 14.9993H4.16406C4.38508 14.9993 4.59704 14.9116 4.75332 14.7553C4.9096 14.599 4.9974 14.387 4.9974 14.166V9.88018C4.9974 9.65917 4.9096 9.44721 4.75332 9.29093C4.59704 9.13465 4.38508 9.04685 4.16406 9.04685H3.4074C3.87073 5.82185 6.64573 3.33268 9.9974 3.33268C13.3491 3.33268 16.1241 5.82185 16.5874 9.04685H15.8307C15.6097 9.04685 15.3978 9.13465 15.2415 9.29093C15.0852 9.44721 14.9974 9.65917 14.9974 9.88018V14.9993C14.9974 15.9185 14.2499 16.666 13.3307 16.666H11.6641V15.8327H8.33073V18.3327H13.3307C15.1691 18.3327 16.6641 16.8377 16.6641 14.9993C17.5832 14.9993 18.3307 14.3052 18.3307 13.4518V9.99935C18.3307 5.40435 14.5924 1.66602 9.9974 1.66602Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_109_616">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`,
            title: 'Support Team',
        },
    ]

    const midNavLinks = [
        {
            id: 1,
            icon: `<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_109_626)">
<g clip-path="url(#clip1_109_626)">
<path d="M13.3498 15.4043H5.89844" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3498 11.084H5.89844" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.74173 6.77344H5.89844" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5476 1.5C13.5476 1.5 5.62461 1.50413 5.61222 1.50413C2.76377 1.52167 1 3.39587 1 6.25464V15.7454C1 18.6186 2.77719 20.5 5.65041 20.5C5.65041 20.5 13.5724 20.4969 13.5858 20.4969C16.4343 20.4794 18.1991 18.6041 18.1991 15.7454V6.25464C18.1991 3.38142 16.4209 1.5 13.5476 1.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_109_626">
<rect width="19" height="21" fill="white" transform="translate(0 0.5)"/>
</clipPath>
<clipPath id="clip1_109_626">
<rect width="19" height="21" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>`,
            title: 'My Properties',
        },
        {
            id: 2,
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_109_635)">
<g clip-path="url(#clip1_109_635)">
<g clip-path="url(#clip2_109_635)">
<path d="M8 0V16" stroke="black" stroke-width="1.5"/>
<path d="M0 8H16" stroke="black" stroke-width="1.5"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_109_635">
<rect width="16" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_109_635">
<rect width="16" height="16" fill="white"/>
</clipPath>
<clipPath id="clip2_109_635">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`,
            title: 'Add New Property',
        },
        {
            id: 3,
            icon: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_192_3164)">
<path d="M14.6459 7.73345C14.7473 7.60563 14.7947 7.44323 14.778 7.28092C14.7613 7.11862 14.6818 6.96929 14.5564 6.86483C14.4311 6.76038 14.2699 6.70908 14.1072 6.7219C13.9445 6.73473 13.7934 6.81065 13.6859 6.93345L12.1884 8.73012C11.8801 9.10095 11.6893 9.32678 11.5334 9.46762C11.4927 9.50715 11.447 9.54132 11.3976 9.56928L11.3884 9.57345L11.3793 9.56928C11.3295 9.54138 11.2836 9.50721 11.2426 9.46762C11.0868 9.32595 10.8968 9.10095 10.5876 8.73012L10.3443 8.43845C10.0709 8.10928 9.82342 7.81345 9.59342 7.60512C9.34259 7.37845 9.02675 7.17678 8.61009 7.17678C8.19342 7.17678 7.87842 7.37845 7.62675 7.60512C7.39675 7.81345 7.15009 8.10928 6.87675 8.43845L5.35175 10.2668C5.29923 10.3299 5.25964 10.4027 5.23525 10.4811C5.21086 10.5595 5.20216 10.6419 5.20962 10.7236C5.2247 10.8888 5.30476 11.0411 5.43217 11.1472C5.55959 11.2533 5.72392 11.3044 5.88903 11.2893C6.05414 11.2743 6.2065 11.1942 6.31259 11.0668L7.81009 9.27012C8.11842 8.89928 8.30925 8.67345 8.46509 8.53262C8.50585 8.49308 8.5515 8.45891 8.60092 8.43095L8.61009 8.42678L8.61925 8.43095C8.66897 8.45886 8.7149 8.49302 8.75592 8.53262C8.91175 8.67428 9.10175 8.89928 9.41092 9.27012L9.65425 9.56178C9.92842 9.89095 10.1751 10.1868 10.4051 10.3951C10.6559 10.6218 10.9718 10.8234 11.3884 10.8234C11.8051 10.8234 12.1201 10.6218 12.3718 10.3951C12.6018 10.1868 12.8484 9.89095 13.1218 9.56178L14.6459 7.73345Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.95185 0.041748C8.02768 0.041748 6.52018 0.0417481 5.34352 0.200081C4.14018 0.361748 3.19018 0.700081 2.44435 1.44508C1.69852 2.19091 1.36102 3.14091 1.19935 4.34508C1.04102 5.52091 1.04102 7.02841 1.04102 8.95258V9.04758C1.04102 10.9717 1.04102 12.4792 1.19935 13.6559C1.36102 14.8592 1.69935 15.8092 2.44435 16.5551C3.19018 17.3009 4.14018 17.6384 5.34435 17.8001C6.52018 17.9584 8.02768 17.9584 9.95185 17.9584H10.0468C11.971 17.9584 13.4785 17.9584 14.6552 17.8001C15.8585 17.6384 16.8085 17.3001 17.5543 16.5551C18.3002 15.8092 18.6377 14.8592 18.7993 13.6551C18.9577 12.4792 18.9577 10.9717 18.9577 9.04758V8.95258C18.9577 7.02841 18.9577 5.52091 18.7993 4.34425C18.6377 3.14091 18.2993 2.19091 17.5543 1.44508C16.8085 0.699248 15.8585 0.361748 14.6543 0.200081C13.4785 0.0417481 11.971 0.041748 10.0468 0.041748H9.95185ZM3.32852 2.32925C3.80352 1.85425 4.44518 1.58175 5.51102 1.43841C6.59435 1.29341 8.01768 1.29175 9.99935 1.29175C11.981 1.29175 13.4043 1.29341 14.4877 1.43841C15.5535 1.58175 16.196 1.85508 16.671 2.32925C17.1452 2.80425 17.4177 3.44591 17.561 4.51175C17.706 5.59508 17.7077 7.01841 17.7077 9.00008C17.7077 10.9817 17.706 12.4051 17.561 13.4884C17.4177 14.5542 17.1443 15.1967 16.6702 15.6717C16.1952 16.1459 15.5535 16.4184 14.4877 16.5617C13.4043 16.7067 11.981 16.7084 9.99935 16.7084C8.01768 16.7084 6.59435 16.7067 5.51102 16.5617C4.44518 16.4184 3.80268 16.1451 3.32768 15.6709C2.85352 15.1959 2.58102 14.5542 2.43768 13.4884C2.29268 12.4051 2.29102 10.9817 2.29102 9.00008C2.29102 7.01841 2.29268 5.59508 2.43768 4.51175C2.58102 3.44591 2.85435 2.80425 3.32852 2.32925Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_192_3164">
<rect width="20" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`,
            title: 'Boosting',
        },
        {
            id: 4,
            icon: `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8125 21C19.1274 21 19.4295 20.8796 19.6522 20.6653C19.8749 20.4509 20 20.1602 20 19.8571V18.4331C20.0047 15.2263 15.2809 12.7143 10.5 12.7143C5.71912 12.7143 1 15.2263 1 18.4331V19.8571C1 20.1602 1.12511 20.4509 1.34781 20.6653C1.57051 20.8796 1.87256 21 2.1875 21H18.8125ZM14.7797 5.11886C14.7797 5.65975 14.669 6.19535 14.454 6.69508C14.2389 7.1948 13.9236 7.64886 13.5262 8.03133C13.1288 8.4138 12.657 8.71719 12.1378 8.92418C11.6185 9.13118 11.062 9.23771 10.5 9.23771C9.93797 9.23771 9.38145 9.13118 8.86221 8.92418C8.34297 8.71719 7.87117 8.4138 7.47376 8.03133C7.07635 7.64886 6.7611 7.1948 6.54602 6.69508C6.33095 6.19535 6.22025 5.65975 6.22025 5.11886C6.22025 4.02647 6.67115 2.97882 7.47376 2.20639C8.27637 1.43395 9.36494 1 10.5 1C11.6351 1 12.7236 1.43395 13.5262 2.20639C14.3288 2.97882 14.7797 4.02647 14.7797 5.11886Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            title: 'Profile',
        },
    ]

    const statsData = [
        {
            id: 1,
            text: 'All Properties',
            title: '1.7k+',
            icon: `<svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_97_18)">
<g clip-path="url(#clip1_97_18)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8522 24.5702C23.8522 29.4082 17.2175 29.9674 12.2283 29.9674L11.8713 29.9671C8.69263 29.9594 0.601562 29.7587 0.601562 24.5408C0.601562 19.8015 6.96959 19.1682 11.9208 19.1443L12.5853 19.1439C15.7638 19.1516 23.8522 19.3523 23.8522 24.5702ZM12.2283 21.3453C5.97388 21.3453 2.80333 22.4198 2.80333 24.5408C2.80333 26.6809 5.97388 27.7657 12.2283 27.7657C18.4813 27.7657 21.6504 26.6912 21.6504 24.5702C21.6504 22.4301 18.4813 21.3453 12.2283 21.3453ZM12.2283 0.800781C16.5262 0.800781 20.0211 4.29719 20.0211 8.59504C20.0211 12.8929 16.5262 16.3878 12.2283 16.3878H12.1814C7.89235 16.3746 4.41796 12.8767 4.4326 8.59063C4.4326 4.29719 7.92905 0.800781 12.2283 0.800781ZM12.2283 2.89686C9.0857 2.89686 6.52869 5.45238 6.52869 8.59504C6.51845 11.7274 9.05634 14.2815 12.1858 14.2932L12.2283 15.3412V14.2932C15.3695 14.2932 17.925 11.7362 17.925 8.59504C17.925 5.45238 15.3695 2.89686 12.2283 2.89686Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_97_18">
<rect width="24" height="30" fill="white" transform="translate(0 0.75)"/>
</clipPath>
<clipPath id="clip1_97_18">
<rect width="24" height="30" fill="white" transform="translate(0 0.75)"/>
</clipPath>
</defs>
</svg>`
        },
        {
            id: 2,
            text: 'Total Pending',
            title: '03',
            icon: `<svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_97_30)">
<g clip-path="url(#clip1_97_30)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6866 0.800781C19.8921 0.800781 22.3047 2.88241 22.3047 6.50883V24.5306C22.3047 25.2869 21.9154 25.9675 21.2608 26.3481C20.6087 26.73 19.8226 26.7374 19.163 26.3655L11.7738 22.1911L4.31638 26.3742C3.99403 26.5552 3.64069 26.6469 3.28611 26.6469C2.92036 26.6469 2.55462 26.549 2.22236 26.3531C1.56898 25.9725 1.17969 25.2918 1.17969 24.5368V6.28194C1.17969 2.7981 3.59358 0.800781 7.8027 0.800781H15.6866ZM15.6866 2.66048H7.8027C4.64245 2.66048 3.03939 3.87797 3.03939 6.28194V24.5368C3.03939 24.6533 3.10633 24.7166 3.16213 24.7488C3.21792 24.7835 3.30594 24.8083 3.40761 24.7513L11.3201 20.3128C11.6027 20.1553 11.9486 20.1541 12.2326 20.314L20.0768 24.7451C20.1797 24.8046 20.2677 24.7773 20.3235 24.7438C20.3793 24.7104 20.445 24.6471 20.445 24.5306L20.4446 6.36755C20.4352 5.30048 20.2287 2.66048 15.6866 2.66048ZM16.2307 9.14279C16.7439 9.14279 17.1605 9.55936 17.1605 10.0726C17.1605 10.5859 16.7439 11.0025 16.2307 11.0025H7.15776C6.64448 11.0025 6.22791 10.5859 6.22791 10.0726C6.22791 9.55936 6.64448 9.14279 7.15776 9.14279H16.2307Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_97_30">
<rect width="22" height="27" fill="white" transform="translate(0.5 0.25)"/>
</clipPath>
<clipPath id="clip1_97_30">
<rect width="22" height="27" fill="white" transform="translate(0.5 0.25)"/>
</clipPath>
</defs>
</svg>`
        },
        {
            id: 3,
            text: 'Total Views',
            title: '4.8k',
            icon: `<svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_97_42)">
<g clip-path="url(#clip1_97_42)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7876 1.39062C23.9043 1.39062 30.2596 10.0337 30.5263 10.4017C30.7793 10.7504 30.7793 11.2243 30.5263 11.5734C30.2596 11.941 23.9043 20.5841 15.7876 20.5841C7.67079 20.5841 1.31527 11.9411 1.04884 11.5731C0.796221 11.2239 0.796221 10.7504 1.04884 10.4013C1.31527 10.0337 7.67079 1.39062 15.7876 1.39062ZM3.09326 10.9865C4.62616 12.8619 9.80449 18.5985 15.7834 18.5985C21.7751 18.5985 26.9426 12.8648 28.4735 10.9879C26.9399 9.11157 21.7619 3.37601 15.7834 3.37601C9.79166 3.37601 4.62418 9.10957 3.09326 10.9865Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8125 10.3666C10.8125 7.47537 13.1648 5.12305 16.0561 5.12305C18.9473 5.12305 21.2996 7.47537 21.2996 10.3666C21.2996 13.2579 18.9473 15.6102 16.0561 15.6102C13.1648 15.6102 10.8125 13.2579 10.8125 10.3666ZM12.5613 10.3659C12.5613 12.2934 14.1293 13.8616 16.0569 13.8616C17.9845 13.8616 19.5526 12.2934 19.5526 10.3659C19.5526 8.43833 17.9845 6.8702 16.0569 6.8702C14.1294 6.8702 12.5613 8.43833 12.5613 10.3659Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_97_42">
<rect width="31" height="20" fill="white" transform="translate(0.5 0.75)"/>
</clipPath>
<clipPath id="clip1_97_42">
<rect width="31" height="20" fill="white" transform="translate(0.5 0.75)"/>
</clipPath>
</defs>
</svg>`
        },
        {
            id: 4,
            text: 'Active Listing',
            title: '07',
            icon: `<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.1686 3.70527C25.532 3.07239 24.7761 2.57034 23.9441 2.22781C23.1122 1.88528 22.2205 1.70898 21.3199 1.70898C20.4194 1.70898 19.5277 1.88528 18.6957 2.22781C17.8638 2.57034 17.1079 3.07239 16.4713 3.70527L15.15 5.01811L13.8288 3.70527C12.5428 2.42749 10.7987 1.70964 8.9801 1.70964C7.1615 1.70964 5.41738 2.42749 4.13143 3.70527C2.84548 4.98305 2.12305 6.71609 2.12305 8.52315C2.12305 10.3302 2.84548 12.0633 4.13143 13.3411L5.45266 14.6539L15.15 24.2897L24.8474 14.6539L26.1686 13.3411C26.8055 12.7085 27.3108 11.9574 27.6555 11.1307C28.0002 10.3041 28.1777 9.41797 28.1777 8.52315C28.1777 7.62833 28.0002 6.74227 27.6555 5.9156C27.3108 5.08894 26.8055 4.33786 26.1686 3.70527Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
        },
    ]

    const messages = [
        {
            id: 1,
            name: 'Jenny Rio.',
            date: 'Aug 22',
            title: 'Work inquiry from google.',
            text: 'Hello, This is Jenny from google. We\'re the largest online platform offer...',
            fileIcon: `<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_97_145)">
<g clip-path="url(#clip1_97_145)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.68258 1.00757H4.33532C2.98991 1.00757 1.83008 2.09815 1.83008 3.44421V10.4443C1.83008 11.8662 2.91412 12.9999 4.33532 12.9999H9.55556C10.9016 12.9999 11.9922 11.7911 11.9922 10.4443V4.45506L8.68258 1.00757Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.51172 1V2.90082C8.51172 3.82869 9.26251 4.58144 10.1897 4.5834C11.0503 4.58536 11.9305 4.58601 11.9899 4.58209" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M8.38788 9.3689H4.86133" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M7.05228 6.13281H4.85938" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_97_145">
<rect width="12" height="14" fill="white" transform="translate(0.830078)"/>
</clipPath>
<clipPath id="clip1_97_145">
<rect width="12" height="14" fill="white" transform="translate(0.830078)"/>
</clipPath>
</defs>
</svg>
`,
            fileName: 'details.pdf',
            dotIcon: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.830078" width="8" height="8" rx="4" fill="#ED1C24"/>
</svg>`,
        },
        {
            id: 2,
            name: 'Hasan Islam.',
            date: 'May 22',
            title: 'Product Designer Opportunities',
            text: 'Hello, Greeting from Uber. Hope you doing great. I am approcing to you for..',
            fileIcon: '',
            fileName: '',
            dotIcon: `<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.830078" y="0.5" width="8" height="8" rx="4" fill="#52C1FF"/>
</svg>`,
        },
        {
            id: 3,
            name: 'Jakie Chan',
            date: 'July 22',
            title: 'Hunting Marketing Specialist',
            text: 'Hello, This is Jannat from HuntX. We offer business solution to our client..',
            fileIcon: '',
            fileName: '',
            dotIcon: `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.830078" width="8" height="8" rx="4" fill="#3BDA84"/>
</svg>`,
        },
    ]

    const [dynamicTitle, setDynamicTitle] = useState('Dashboard')

    const overviewFields = [
        {
            id: 1,
            label: 'Property Title*',
            placeholder: 'Your Property Name',
            type: 'text'
        },
        {
            id: 2,
            label: 'Category*',
            placeholder: 'Select Category',
            type: 'text'
        },
        {
            id: 3,
            label: 'Description*',
            placeholder: 'Write about property...',
            type: 'text'
        },
        {
            id: 4,
            label: 'Listing Status*',
            placeholder: 'Select Status',
            type: 'text'
        },
        {
            id: 5,
            label: 'Availability Date*',
            placeholder: '',
            type: 'date'
        },
    ]

    const pricingFields = [
        {
            id: 1,
            label: 'Monthly Rent*',
            placeholder: '$2,500',
            type: 'text'
        },
        {
            id: 2,
            label: 'Monthly Rent*',
            placeholder: '$2,500',
            type: 'text'
        },
        {
            id: 3,
            label: 'Lease Length (Months)*',
            placeholder: 'Select Duration',
            type: 'text'
        },
        {
            id: 4,
            label: 'Application Fee*',
            placeholder: '$50',
            type: 'text'
        },
    ]

    const floorFields = [
        {
            id: 1,
            label: 'Square Footage*',
            placeholder: '500',
            type: 'text'
        },
        {
            id: 2,
            label: 'Bedrooms*',
            placeholder: 'Select',
            type: 'text'
        },
        {
            id: 3,
            label: 'Units Available',
            placeholder: '1',
            type: 'text'
        },
        {
            id: 4,
            label: 'Floor Level*',
            placeholder: 'Select Floor',
            type: 'text'
        },
    ]

    const policiesFields = [
        {
            id: 1,
            label: 'Pet Policy*',
            placeholder: 'No Pets Allowed',
            type: 'text'
        },
        {
            id: 2,
            label: 'Pet Deposit*',
            placeholder: '$500',
            type: 'text'
        },
        {
            id: 3,
            label: 'Pet Rent (Monthly)',
            placeholder: '$500',
            type: 'text'
        },
        {
            id: 4,
            label: 'Smoking Policy*',
            placeholder: 'No Smoking',
            type: 'text'
        },
    ]

    const utilitiesFields = [
        {
            id: 1,
            label: 'Water',
            type: 'text'
        },
        {
            id: 2,
            label: 'Electricity',
            type: 'text'
        },
        {
            id: 3,
            label: 'Gas',
            type: 'text'
        },
        {
            id: 4,
            label: 'Internet',
            type: 'text'
        },
        {
            id: 5,
            label: 'Cable TV',
            type: 'text'
        },
        {
            id: 6,
            label: 'Trash',
            type: 'text'
        },
        {
            id: 7,
            label: 'Parking Availability',
            placeholder: 'No Smoking',
            type: 'text'
        },
        {
            id: 8,
            label: 'Parking Cost (Monthly)*',
            placeholder: '$500',
            type: 'text'
        },
        {
            id: 9,
            label: 'Add option ',
            placeholder: 'Select option or write...',
            type: 'text'
        },
    ]

    const amenitiesFields = [
        {
            id: 1,
            label: 'A/C & Heating',
            type: 'text'
        },
        {
            id: 2,
            label: 'Garages',
            type: 'text'
        },
        {
            id: 3,
            label: 'Swimming Pool',
            type: 'text'
        },
        {
            id: 4,
            label: 'Parking',
            type: 'text'
        },
        {
            id: 5,
            label: 'Lake View',
            type: 'text'
        },
        {
            id: 6,
            label: 'Garden',
            type: 'text'
        },
        {
            id: 7,
            label: 'Disabled Access',
            type: 'text'
        },
        {
            id: 8,
            label: 'Pet Friendly',
            type: 'text'
        },
        {
            id: 9,
            label: 'Ceiling Height',
            type: 'text'
        },
        {
            id: 10,
            label: 'Outdoor Shower',
            type: 'text'
        },
        {
            id: 11,
            label: 'Refrigerator',
            type: 'text'
        },
        {
            id: 12,
            label: 'Fireplace',
            type: 'text'
        },
        {
            id: 13,
            label: 'Wifi',
            type: 'text'
        },
        {
            id: 14,
            label: 'TV Cable',
            type: 'text'
        },
        {
            id: 15,
            label: 'Barbeque',
            type: 'text'
        },
        {
            id: 16,
            label: 'Laundry',
            type: 'text'
        },
        {
            id: 17,
            label: 'Dryer',
            type: 'text'
        },
        {
            id: 18,
            label: 'Lawn',
            type: 'text'
        },
        {
            id: 19,
            label: 'Elevator',
            type: 'text'
        },
    ]

    const addressFields = [
        {
            id: 1,
            label: 'Address*',
            placeholder: '145/A, Ranchview',
            type: 'text'
        },
        {
            id: 2,
            label: 'State*',
            placeholder: 'Select State',
            type: 'text'
        },
        {
            id: 3,
            label: 'City*',
            placeholder: 'Select City',
            type: 'text'
        },
        {
            id: 4,
            label: 'Zipcode*',
            placeholder: 'Enter Zip code',
            type: 'text'
        },
        {
            id: 5,
            label: 'Map Location*',
            placeholder: '3911 Firestone Blvd, South Gate, CA 90280, United States',
            type: 'text'
        },
    ]

    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setSelectedFiles([...selectedFiles, ...newFiles]);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    const [selectedFiles1, setSelectedFiles1] = useState([]);
    const fileInputRef1 = useRef(null);

    const handleFileChange1 = (event) => {
        const newFiles1 = Array.from(event.target.files);
        setSelectedFiles1([...selectedFiles1, ...newFiles1]);
    };

    const handleButtonClick1 = () => {
        fileInputRef1.current.click();
    };

    const handleRemoveFile1 = (index) => {
        const updatedFiles1 = [...selectedFiles1];
        updatedFiles1.splice(index, 1);
        setSelectedFiles1(updatedFiles1);
    };

    const { locationSearch, setLocationSearch } = useContext(LocationContext)

    console.log(locationSearch);

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
        {
            id: 5,
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
            id: 6,
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
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => setActive(number)} active={number === active} className='me-3'>
                {number === 5 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" fill={active === number ? '#fff' : '#000'} />
                </svg>
                    : number}
            </Pagination.Item>,
        );
    }

    const boostingData = [
        {
            id: 1,
            title: 'Listing Name',
            img: boostingImg1,
            listing_name: 'Panorama Place',
            views: '3890',
            reach: '+16.24 %',
            spent: '$49.95',
            status: 'INACTIVE',
            action: 'Boost +',
            icon: `<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.16986 8.7561C0.826233 8.40601 0.826233 7.84497 1.16986 7.49512L6.73785 1.87817H3.56488C3.07208 1.87817 2.67279 1.47852 2.67279 0.98584C2.67279 0.493164 3.0722 0.0935059 3.56494 0.0932617H8.8739C8.96558 0.0930176 9.05664 0.107178 9.14392 0.135254H9.15094H9.15991C9.2879 0.178955 9.40399 0.251953 9.4989 0.348145C9.55841 0.407471 9.60919 0.474854 9.6499 0.54834V0.556152V0.563232C9.71594 0.690918 9.75024 0.832764 9.74988 0.976318V6.33032C9.74988 6.64648 9.58118 6.93872 9.30737 7.09668C9.03357 7.25488 8.69617 7.25488 8.42236 7.09668C8.14856 6.93872 7.97986 6.64648 7.97986 6.33032V3.13037L2.41187 8.74634C2.24658 8.91357 2.02136 9.00732 1.78638 9.00732C1.55139 9.00732 1.32617 8.91357 1.16089 8.74634L1.16986 8.7561Z" fill="#1AD598"/>
</svg>`
        },
        {
            id: 2,
            title: 'Views',
            img: boostingImg2,
            listing_name: 'Panorama Place',
            views: '4785',
            reach: '+19.33 %',
            spent: '$59.95',
            status: 'ACTIVE',
            action: 'Boost +',
            icon: `<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.16986 8.7561C0.826233 8.40601 0.826233 7.84497 1.16986 7.49512L6.73785 1.87817H3.56488C3.07208 1.87817 2.67279 1.47852 2.67279 0.98584C2.67279 0.493164 3.0722 0.0935059 3.56494 0.0932617H8.8739C8.96558 0.0930176 9.05664 0.107178 9.14392 0.135254H9.15094H9.15991C9.2879 0.178955 9.40399 0.251953 9.4989 0.348145C9.55841 0.407471 9.60919 0.474854 9.6499 0.54834V0.556152V0.563232C9.71594 0.690918 9.75024 0.832764 9.74988 0.976318V6.33032C9.74988 6.64648 9.58118 6.93872 9.30737 7.09668C9.03357 7.25488 8.69617 7.25488 8.42236 7.09668C8.14856 6.93872 7.97986 6.64648 7.97986 6.33032V3.13037L2.41187 8.74634C2.24658 8.91357 2.02136 9.00732 1.78638 9.00732C1.55139 9.00732 1.32617 8.91357 1.16089 8.74634L1.16986 8.7561Z" fill="#1AD598"/>
</svg>`
        },
        {
            id: 3,
            title: 'Reach',
            img: boostingImg3,
            listing_name: 'Panorama Place',
            views: '9712',
            reach: '-2.07 %',
            spent: '$18.99',
            status: 'INACTIVE',
            action: 'Boost +',
            icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.56335 9.90698C3.07056 9.90698 2.67126 9.50732 2.67126 9.01465C2.67126 8.52197 3.07068 8.12231 3.56342 8.12207H6.73737L1.1684 2.50513C0.824097 2.15479 0.824097 1.59326 1.1684 1.24316C1.33368 1.07593 1.5589 0.982178 1.79388 0.982178C2.02887 0.982178 2.25409 1.07593 2.41937 1.24316L7.98737 6.85913V3.65918C7.98737 3.34302 8.15607 3.05078 8.42987 2.89282C8.70367 2.73462 9.04108 2.73462 9.31488 2.89282C9.58868 3.05078 9.75739 3.34302 9.75739 3.65918V9.01318C9.75757 9.28052 9.63794 9.53418 9.4314 9.7041L9.42542 9.70898L9.41644 9.71704L9.40442 9.72607L9.3894 9.73706L9.37341 9.74805L9.35638 9.75903L9.33936 9.77002L9.32336 9.78003L9.31036 9.78711H9.30237H9.2934L9.2804 9.79419C9.159 9.85498 9.02515 9.88648 8.8894 9.88648L3.56335 9.90698Z" fill="#EA3A3D"/>
</svg>`
        },
        {
            id: 4,
            title: 'Spent',
            img: boostingImg4,
            listing_name: 'Panorama Place',
            views: '3993',
            reach: '+64.24 %',
            spent: '$29.05',
            status: 'INACTIVE',
            action: 'Boost +',
            icon: `<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.1684 8.7561C0.824097 8.40576 0.824097 7.84424 1.1684 7.49414L6.73737 1.8772H3.56335C3.07367 1.87305 2.67896 1.4751 2.67889 0.985352C2.67889 0.495605 3.07367 0.0976562 3.56335 0.0932617H8.87238C8.96442 0.0932617 9.05585 0.107666 9.14337 0.13623H9.14935H9.16034C9.28796 0.180176 9.40363 0.253174 9.49835 0.349121C9.54358 0.394775 9.5838 0.445068 9.61835 0.499023L9.62634 0.511963L9.63232 0.521973V0.528076C9.7124 0.664795 9.75452 0.820312 9.75433 0.979004V6.33301C9.75433 6.64917 9.58563 6.94141 9.31183 7.09936C9.03802 7.25757 8.70062 7.25757 8.42682 7.09936C8.15302 6.94141 7.98431 6.64917 7.98431 6.33301V3.13306L2.41632 8.74902C2.25104 8.91626 2.02582 9.01001 1.79083 9.01001C1.55585 9.01001 1.33063 8.91626 1.16534 8.74902L1.1684 8.7561Z" fill="#1AD598"/>
</svg>`
        },
        {
            id: 5,
            title: 'Status',
            img: boostingImg5,
            listing_name: 'Panorama Place',
            views: '1972',
            reach: '-23.10 %',
            spent: '$99.95',
            status: 'INACTIVE',
            action: 'Boost +',
            icon: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.56335 9.90698C3.07056 9.90698 2.67126 9.50732 2.67126 9.01465C2.67126 8.52197 3.07068 8.12231 3.56342 8.12207H6.73737L1.1684 2.50513C0.824097 2.15479 0.824097 1.59326 1.1684 1.24316C1.33368 1.07593 1.5589 0.982178 1.79388 0.982178C2.02887 0.982178 2.25409 1.07593 2.41937 1.24316L7.98737 6.85913V3.65918C7.98737 3.34302 8.15607 3.05078 8.42987 2.89282C8.70367 2.73462 9.04108 2.73462 9.31488 2.89282C9.58868 3.05078 9.75739 3.34302 9.75739 3.65918V9.01318C9.75757 9.28052 9.63794 9.53418 9.4314 9.7041L9.42542 9.70898L9.41644 9.71704L9.40442 9.72607L9.3894 9.73706L9.37341 9.74805L9.35638 9.75903L9.33936 9.77002L9.32336 9.78003L9.31036 9.78711H9.30237H9.2934L9.2804 9.79419C9.159 9.85498 9.02515 9.88648 8.8894 9.88648L3.56335 9.90698Z" fill="#EA3A3D"/>
</svg>`
        },
        {
            id: 6,
            title: 'Action',
            img: boostingImg6,
            listing_name: 'Panorama Place',
            views: '3449',
            reach: '0.00 %',
            spent: '$49.95',
            status: 'INACTIVE',
            action: 'Boost +',
            icon: `<svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.95178 9.94604C6.60669 9.59741 6.60895 9.0354 6.95679 8.6897L9.21979 6.427L1.31079 6.46094C1.07568 6.4624 0.849792 6.36963 0.683533 6.20337C0.517273 6.03711 0.424438 5.81128 0.425781 5.57593C0.429504 5.08472 0.826538 4.68726 1.31781 4.68286L9.22681 4.64893L6.98383 2.40503C6.75836 2.17944 6.67035 1.85083 6.75287 1.54297C6.83539 1.23511 7.07593 0.994385 7.38385 0.911865C7.69183 0.829346 8.02039 0.91748 8.24579 1.14307L12.0008 4.8999C12.0662 4.96509 12.1209 5.04028 12.1628 5.12256V5.1228L12.1698 5.13672V5.14673V5.15283C12.2234 5.26929 12.2507 5.396 12.2498 5.52393C12.2496 5.60938 12.2372 5.69434 12.2128 5.77612V5.77588V5.79077V5.7998V5.80884L12.2068 5.82495C12.1622 5.94653 12.0916 6.05713 11.9999 6.14868L8.21387 9.93481C8.0462 10.103 7.81836 10.1973 7.58093 10.197C7.34613 10.2007 7.11963 10.1104 6.95178 9.94604Z" fill="#809FB8"/>
</svg>`
        },
    ]

    const [activeBoostingBtn, setActiveBoostingBtn] = useState('')

    const boostingModalCards = [
        {
            id: 1,
            title: 'Basic',
            price: '$34',
            features: [
                'Enhanced Analytics',
                'Custom Domain',
                'E-commerce Integration',
                'Priority Support',
                'Advanced Security',
            ],
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4M22.6667 16C22.6667 19.6819 19.6819 22.6667 16 22.6667C12.3181 22.6667 9.33333 19.6819 9.33333 16C9.33333 12.3181 12.3181 9.33333 16 9.33333M19.6772 12.4688L24.9558 13.0232L27.8172 9.01723L24.3835 7.87266L23.239 4.43895L19.233 7.30038L19.6772 12.4688ZM19.6772 12.4688L16 15.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            tagText: '',
        },
        {
            id: 2,
            title: 'Business',
            price: '$56',
            features: [
                'All Basic features',
                'Property gets a "Featured Badge"',
                'Highlighted listing',
                'Priority placement in homepage',
                'Wider Reach Audience',
            ],
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.15078 12.0002H27.8507M9.39893 4.06753L16.0007 12.0003L22.6137 4.07309M27.5821 11.3723L22.984 4.47521C22.8683 4.30155 22.8104 4.21472 22.7339 4.15186C22.6662 4.09621 22.5882 4.05446 22.5043 4.02899C22.4096 4.00022 22.3052 4.00022 22.0965 4.00022H9.90491C9.6962 4.00022 9.59184 4.00022 9.49712 4.02899C9.41326 4.05446 9.33524 4.09621 9.26753 4.15186C9.19105 4.21472 9.13317 4.30155 9.01739 4.47521L4.41934 11.3723C4.26862 11.5984 4.19326 11.7114 4.16625 11.833C4.14239 11.9404 4.14549 12.0521 4.17527 12.158C4.20898 12.2779 4.2905 12.3866 4.45353 12.604L15.1474 26.8624C15.4369 27.2484 15.5816 27.4414 15.7591 27.5104C15.9145 27.5709 16.0869 27.5709 16.2424 27.5104C16.4198 27.4414 16.5646 27.2484 16.8541 26.8624L27.5479 12.604C27.7109 12.3866 27.7925 12.2779 27.8262 12.158C27.8559 12.0521 27.859 11.9404 27.8352 11.833C27.8082 11.7114 27.7328 11.5984 27.5821 11.3723Z" stroke="#1B223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            tagText: 'Best offer',
        },
        {
            id: 3,
            title: 'Pro',
            price: '$34',
            features: [
                'All Premium features',
                'Listing shown in homepage banner',
                'Social media promotion (option)',
                'Top priority in search section',
                'Maximum visibility to potential buyers/renters',
            ],
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4M22.6667 16C22.6667 19.6819 19.6819 22.6667 16 22.6667C12.3181 22.6667 9.33333 19.6819 9.33333 16C9.33333 12.3181 12.3181 9.33333 16 9.33333M19.6772 12.4688L24.9558 13.0232L27.8172 9.01723L24.3835 7.87266L23.239 4.43895L19.233 7.30038L19.6772 12.4688ZM19.6772 12.4688L16 15.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            tagText: '',
        },
        {
            id: 4,
            title: 'Premium',
            price: '$34',
            features: [
                'All Premium features',
                'Listing shown in homepage banner',
                'Social media promotion (option)',
                'Top priority in search section',
                'Maximum visibility to potential buyers/renters',
            ],
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4M22.6667 16C22.6667 19.6819 19.6819 22.6667 16 22.6667C12.3181 22.6667 9.33333 19.6819 9.33333 16C9.33333 12.3181 12.3181 9.33333 16 9.33333M19.6772 12.4688L24.9558 13.0232L27.8172 9.01723L24.3835 7.87266L23.239 4.43895L19.233 7.30038L19.6772 12.4688ZM19.6772 12.4688L16 15.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            tagText: '',
        },
    ]

    const [modalShow, setModalShow] = useState(false);

    const [imgFile, setImgFile] = useState(null);
    const [ImgPreview, setImgPreview] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');
    const [error, setError] = useState('');

    const fileImgRef = useRef(null)

    const handleUploadClick = () => {
        fileImgRef.current.click()
    }

    const handleImgFileChange = (e) => {
        const selectedImgFile = e.target.files[0];
        if (!selectedImgFile) return;

        if (!['image/jpeg', 'image/png', 'image/gif'].includes(selectedImgFile.type)) {
            setError('Only JPEG, PNG, and GIF images are allowed.');
            return;
        }

        setImgFile(selectedImgFile);
        setImgPreview(URL.createObjectURL(selectedImgFile));
        setError('');
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!imgFile) {
    //         setError('Please select a file to upload.');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('image', imgFile);

    //     try {
    //         const response = await fetch('/api/upload', {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             setUploadedImage(data.url);
    //             setImgFile(null);
    //             setImgPreview('');
    //             console.log('File uploaded successfully');
    //         } else {
    //             setError('Error uploading file');
    //         }
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // const handleDelete = async () => {
    //     if (!uploadedImage) return;

    //     try {
    //         const response = await fetch('/api/delete', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ url: uploadedImage }),
    //         });

    //         if (response.ok) {
    //             setUploadedImage('');
    //             console.log('File deleted successfully');
    //         } else {
    //             setError('Error deleting file');
    //         }
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const handleDelete = () => {
        setImgPreview('');
        setImgFile('');
    }

    const profileFormFields = [
        {
            id: 1,
            label: 'Full Name*',
            placeholder: 'Alex Mike',
            type: 'text'
        },
        {
            id: 2,
            label: 'Agency Name*',
            placeholder: 'Alex Mike',
            type: 'text'
        },
        {
            id: 3,
            label: 'Email*',
            placeholder: 'abc@gmail.com',
            type: 'email'
        },
        {
            id: 4,
            label: 'Phone Number*',
            placeholder: '+1 232 1231 1233',
            type: 'text'
        },
    ]

    // agent licensce file attachments

    const [selectedFiles2, setSelectedFiles2] = useState([]);
    const fileInputRef2 = useRef(null);

    const handleFileChange2 = (event) => {
        const newFiles2 = Array.from(event.target.files);
        setSelectedFiles2([...selectedFiles2, ...newFiles2]);
    };

    const handleButtonClick2 = () => {
        fileInputRef2.current.click();
    };

    const handleRemoveFile2 = (index) => {
        const updatedFiles2 = [...selectedFiles2];
        updatedFiles2.splice(index, 1);
        setSelectedFiles2(updatedFiles2);
    };

    const router = useRouter();

    const handleLogout = async () => {
        await signOut({ redirect: false });
        // Perform some action after logout
        router.push('/');
    };

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/signin");
        }
    }, [status, router]);

    if (status === "loading" || status === "unauthenticated") {
        return null;
    }

    // if (session) {
    //     // Render dashboard content
    //     return <div>Welcome to the dashboard!</div>;
    // }

    return (
        <section className={agent_dashboardStyles.container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col>
                        <Tab.Container id="dashboard-tabs" defaultActiveKey="Dashboard">
                            <Row>
                                <Col sm={3} className='d-lg-block d-md-block d-none'>
                                    <div className='mb-5'>
                                        <Image src={navLogo} width='100%' height='100%' className='img-fluid' alt='nav-logo' />
                                    </div>
                                    <Nav id='dash-nav' variant="pills" className="flex-column mb-5">
                                        {topNavLinks.map((item, index) =>
                                            <Nav.Item key={index} onClick={() => setDynamicTitle(item.title)}>
                                                <Nav.Link eventKey={item.title}>
                                                    <span>
                                                        <Image
                                                            src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                            width={20}
                                                            height={20}
                                                            alt="nav-icon"
                                                            className='me-2'
                                                        />
                                                        {item.title}
                                                    </span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        )}
                                    </Nav>
                                    <Nav id='dash-nav' variant="pills" className="flex-column mb-5">
                                        {midNavLinks.map((item, index) =>
                                            <Nav.Item key={index} onClick={() => setDynamicTitle(item.title)}>
                                                <Nav.Link eventKey={item.title}>
                                                    <span>
                                                        <Image
                                                            src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                            width={20}
                                                            height={20}
                                                            alt="nav-icon"
                                                            className='me-2'
                                                        />
                                                        {item.title}
                                                    </span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        )}
                                    </Nav>
                                    <Nav id='dash-nav' variant="pills" className="flex-column mb-5">
                                        <Nav.Item>
                                            <Nav.Link eventKey='Logout' onClick={handleLogout}>
                                                <span>
                                                    <svg className='me-2' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_109_664)">
                                                            <g clipPath="url(#clip1_109_664)">
                                                                <path d="M8.22656 14.5068V15.4146C8.22656 17.3946 9.83197 19 11.812 19H16.5552C18.5342 19 20.1396 17.3946 20.1396 15.4146V4.5854C20.1396 2.6054 18.5342 1 16.5552 1H11.8022C9.82808 1 8.22656 2.60054 8.22656 4.5747V5.49221" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M1.61719 10H13.3327" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M4.46606 12.8355L1.61719 9.99929L4.46606 7.16211" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_109_664">
                                                                <rect width="21" height="20" fill="white" transform="translate(0.5)" />
                                                            </clipPath>
                                                            <clipPath id="clip1_109_664">
                                                                <rect width="21" height="20" fill="white" transform="translate(0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Logout
                                                </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={3} className='d-lg-none d-md-none d-block'>
                                    <>
                                        <a href="#" onClick={handleShow}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" className="bi bi-list" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                            </svg>
                                        </a>

                                        <Offcanvas show={show} onHide={handleClose} className='w-75'>
                                            <Offcanvas.Header>
                                                <Offcanvas.Title>
                                                    <div className='mb-5'>
                                                        <Image src={navLogo} width='100%' height='100%' className='img-fluid' alt='nav-logo' />
                                                    </div>
                                                </Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <Nav id='dash-nav' variant="pills" className="flex-column mb-5">
                                                    {topNavLinks.map((item, index) =>
                                                        <Nav.Item key={index} onClick={() => setDynamicTitle(item.title)}>
                                                            <Nav.Link eventKey={item.title}>
                                                                <span>
                                                                    <Image
                                                                        src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                                        width={20}
                                                                        height={20}
                                                                        alt="nav-icon"
                                                                        className='me-2'
                                                                    />
                                                                    {item.title}
                                                                </span>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    )}
                                                </Nav>
                                                <Nav id='dash-nav' variant="pills" className="flex-column mb-5">
                                                    {midNavLinks.map((item, index) =>
                                                        <Nav.Item key={index} onClick={() => setDynamicTitle(item.title)}>
                                                            <Nav.Link eventKey={item.title}>
                                                                <span>
                                                                    <Image
                                                                        src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                                        width={20}
                                                                        height={20}
                                                                        alt="nav-icon"
                                                                        className='me-2'
                                                                    />
                                                                    {item.title}
                                                                </span>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    )}
                                                </Nav>
                                                <Nav id='dash-nav' variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey='Logout'>
                                                            <span>
                                                                <svg className='me-2' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0_109_664)">
                                                                        <g clipPath="url(#clip1_109_664)">
                                                                            <path d="M8.22656 14.5068V15.4146C8.22656 17.3946 9.83197 19 11.812 19H16.5552C18.5342 19 20.1396 17.3946 20.1396 15.4146V4.5854C20.1396 2.6054 18.5342 1 16.5552 1H11.8022C9.82808 1 8.22656 2.60054 8.22656 4.5747V5.49221" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M1.61719 10H13.3327" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M4.46606 12.8355L1.61719 9.99929L4.46606 7.16211" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </g>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_109_664">
                                                                            <rect width="21" height="20" fill="white" transform="translate(0.5)" />
                                                                        </clipPath>
                                                                        <clipPath id="clip1_109_664">
                                                                            <rect width="21" height="20" fill="white" transform="translate(0.5)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                Logout
                                                            </span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </>
                                </Col>
                                <Col sm={9} className={agent_dashboardStyles.tab_content_container}>
                                    <div className='mb-5 d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h2 className={agent_dashboardStyles.dynamic_title}>{dynamicTitle}</h2>
                                        </div>
                                        <div>
                                            <a href="#" className='me-2'>
                                                <svg width="95" height="45" viewBox="0 0 95 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_97_183)">
                                                        <g clipPath="url(#clip1_97_183)">
                                                            <g clipPath="url(#clip2_97_183)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M59.7233 29.5167C66.34 29.5167 69.401 28.6679 69.6967 25.2608C69.6967 21.8562 67.5626 22.0751 67.5626 17.8977C67.5626 14.6347 64.4697 10.9221 59.7233 10.9221C54.9769 10.9221 51.8841 14.6347 51.8841 17.8977C51.8841 22.0751 49.75 21.8562 49.75 25.2608C50.0468 28.6807 53.1078 29.5167 59.7233 29.5167Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M62.5258 33.0479C60.9253 34.8251 58.4284 34.8462 56.8125 33.0479" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <rect x="70.75" y="4" width="7" height="7" rx="3.5" fill="#FF2730" />
                                                    <defs>
                                                        <clipPath id="clip0_97_183">
                                                            <rect width="22" height="26" fill="white" transform="translate(48.75 9.5)" />
                                                        </clipPath>
                                                        <clipPath id="clip1_97_183">
                                                            <rect width="22" height="26" fill="white" transform="translate(48.75 9.5)" />
                                                        </clipPath>
                                                        <clipPath id="clip2_97_183">
                                                            <rect width="22" height="26" fill="white" transform="translate(48.75 9.5)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                            <Button variant='danger' className={`${agent_dashboardStyles.addlisting_btn} d-lg-inline-flex d-none me-2`}>
                                                Add Listing
                                                <svg className='ms-2' width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.8906 5.0625C19.1367 5.09766 19.2773 5.23828 19.3125 5.48438V18.1406C19.2773 18.3867 19.1367 18.5273 18.8906 18.5625C18.6445 18.5273 18.5039 18.3867 18.4688 18.1406V6.48633L3.17578 21.832C2.96484 21.9727 2.75391 21.9727 2.54297 21.832C2.40234 21.6211 2.40234 21.4102 2.54297 21.1992L17.8887 5.90625H6.23438C5.98828 5.87109 5.84766 5.73047 5.8125 5.48438C5.84766 5.23828 5.98828 5.09766 6.23438 5.0625H18.8906Z" fill="white" />
                                                </svg>
                                            </Button>
                                            <a href="#">
                                                <Image src={userImg} width='100%' height='100%' alt='avatar' className='img-fluid' />
                                            </a>
                                        </div>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Dashboard">
                                            <div className={`${agent_dashboardStyles.stats_container} d-flex justify-content-between mb-5`}>
                                                {statsData.map((item, index) =>
                                                    <div key={index}>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <div className='me-lg-3'>
                                                                <span className={agent_dashboardStyles.stats_text}>{item.text}</span>
                                                                <h2 className={agent_dashboardStyles.stats_title}>{item.title}</h2>
                                                            </div>
                                                            <div className={agent_dashboardStyles.stats_icon_container}>
                                                                <Image
                                                                    src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                                    width={30}
                                                                    height={30}
                                                                    alt="nav-icon"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <Row>
                                                <Col lg={7}>
                                                    <div>
                                                        <Chart />
                                                    </div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className={agent_dashboardStyles.messages_container}>
                                                        <div className='mb-4'>
                                                            <h4 className={agent_dashboardStyles.messages_heading}>Recent Message</h4>
                                                        </div>
                                                        {messages.map((item, index) =>
                                                            <div key={index} className='d-flex justify-content-between mb-4'>
                                                                <div className='d-flex align-items-baseline'>
                                                                    <Image
                                                                        src={`data:image/svg+xml;utf8,${encodeURIComponent(item.dotIcon)}`}
                                                                        width={8}
                                                                        height={8}
                                                                        alt="dot-icon"
                                                                        className='me-3'
                                                                    />
                                                                    <div>
                                                                        <span className={`${agent_dashboardStyles.messages_name} d-block mb-2`}>{item.name}</span>
                                                                        <h5 className={agent_dashboardStyles.messages_title}>{item.title}</h5>
                                                                        <p className={agent_dashboardStyles.messages_text}>{item.text}</p>
                                                                        {item.id === 1 ?
                                                                            <span className={`${agent_dashboardStyles.attachment_container} d-flex align-items-center`}>
                                                                                <a href="#">
                                                                                    <Image
                                                                                        src={`data:image/svg+xml;utf8,${encodeURIComponent(item.fileIcon)}`}
                                                                                        width={13}
                                                                                        height={14}
                                                                                        alt="dot-icon"
                                                                                        className='me-2'
                                                                                    />
                                                                                    {item.fileName}
                                                                                </a>
                                                                            </span>
                                                                            : ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <span className={agent_dashboardStyles.messages_date}>{item.date}</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Support Team">
                                            <div className={agent_dashboardStyles.support_container}>
                                                <div className={agent_dashboardStyles.support_icon_container}>
                                                    <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 20.4281C8.37125 20.4282 7.76216 20.2019 7.27779 19.7883C6.79343 19.3746 6.46417 18.7995 6.3468 18.1621C4.58123 17.5991 3.02643 16.4889 1.8936 14.9824C1.03839 13.8461 0.450763 12.5202 0.177061 11.1095C-0.09664 9.69873 -0.0489265 8.24165 0.316438 6.85318C0.681803 5.46471 1.35483 4.18283 2.28242 3.10864C3.21001 2.03445 4.36681 1.19734 5.66155 0.663342C6.9563 0.129343 8.35358 -0.0869417 9.74318 0.0315495C11.1328 0.150041 12.4767 0.600066 13.6689 1.34613C14.8612 2.09219 15.8691 3.11388 16.6132 4.33062C17.3573 5.54735 17.8173 6.92585 17.9568 8.35737C18.0054 8.86813 17.5968 9.28417 17.1 9.28417C16.6032 9.28417 16.2054 8.86627 16.146 8.35737C15.9854 7.04393 15.4875 5.79865 14.7039 4.75036C13.9204 3.70208 12.8796 2.88888 11.6892 2.3949C10.4989 1.90093 9.20226 1.74412 7.93348 1.94071C6.66471 2.1373 5.46989 2.68014 4.47265 3.51307C3.47541 4.34599 2.71199 5.43875 2.26137 6.67826C1.81075 7.91777 1.6893 9.25902 1.90959 10.5632C2.12988 11.8674 2.68391 13.0872 3.51435 14.0963C4.34479 15.1054 5.42148 15.8673 6.633 16.303C6.86204 15.8718 7.1976 15.5109 7.60558 15.2568C8.01356 15.0028 8.47943 14.8646 8.95588 14.8565C9.43233 14.8483 9.90238 14.9704 10.3183 15.2104C10.7342 15.4504 11.0812 15.7996 11.324 16.2227C11.5667 16.6458 11.6967 17.1276 11.7005 17.6193C11.7044 18.111 11.5822 18.595 11.3461 19.0221C11.1101 19.4492 10.7687 19.8043 10.3566 20.0512C9.94457 20.2982 9.47651 20.4282 9 20.4281ZM1.8 17.6421V17.5919C1.30782 17.1371 0.857132 16.6366 0.4536 16.0968C0.157888 16.5544 5.80857e-05 17.0921 0 17.6421V18.5707C0 22.2315 3.348 26 9 26C14.652 26 18 22.2315 18 18.5707V17.6421C18 16.9032 17.7155 16.1946 17.2092 15.6721C16.7028 15.1496 16.0161 14.8561 15.3 14.8561H12.6C12.9942 15.3947 13.275 16.0262 13.41 16.7134H15.3C15.5387 16.7134 15.7676 16.8113 15.9364 16.9854C16.1052 17.1596 16.2 17.3958 16.2 17.6421V18.5707C16.2 21.2416 13.6224 24.1427 9 24.1427C4.3776 24.1427 1.8 21.2416 1.8 18.5707V17.6421ZM9 12.9988C7.97006 12.9988 6.97128 13.3633 6.1704 14.0315C5.38343 13.534 4.73366 12.836 4.28353 12.0047C3.83339 11.1733 3.59801 10.2365 3.6 9.28417C3.60027 8.31275 3.84665 7.35829 4.31472 6.51544C4.78279 5.6726 5.45628 4.97067 6.26838 4.47927C7.08048 3.98788 8.00298 3.7241 8.94437 3.71409C9.88576 3.70408 10.8133 3.9482 11.6351 4.42222C12.4568 4.89625 13.1442 5.58371 13.629 6.41643C14.1138 7.24914 14.3792 8.19817 14.3988 9.16937C14.4185 10.1406 14.1917 11.1002 13.7411 11.9531C13.2904 12.806 12.6314 13.5224 11.8296 14.0315C11.0287 13.3633 10.0299 12.9988 9 12.9988ZM5.4 9.28417C5.4 10.2693 5.77928 11.2142 6.45442 11.9108C7.12955 12.6074 8.04522 12.9988 9 12.9988C9.95478 12.9988 10.8705 12.6074 11.5456 11.9108C12.2207 11.2142 12.6 10.2693 12.6 9.28417C12.6 8.29899 12.2207 7.35415 11.5456 6.65753C10.8705 5.9609 9.95478 5.56954 9 5.56954C8.04522 5.56954 7.12955 5.9609 6.45442 6.65753C5.77928 7.35415 5.4 8.29899 5.4 9.28417Z" fill="#2665B0" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h5 className={agent_dashboardStyles.support_request_title}>Killwake</h5>
                                                    <span className={agent_dashboardStyles.support_request_subtitle}>Team Support</span>
                                                </div>
                                            </div>
                                            <Row className={agent_dashboardStyles.support_text_container}>
                                                <Col lg={7}>
                                                    <div>
                                                        <h4 className={`${agent_dashboardStyles.support_text_title} mb-3`}>Payment Verification</h4>
                                                        <p className={agent_dashboardStyles.support_text}>Hello, Greeting from Prime Living. Hope you doing great. I am approaching to you for as our company need a great & talented account manager.</p>
                                                        <p className={agent_dashboardStyles.support_text}>What we need from you to start:</p>
                                                        <ul className='list-unstyled'>
                                                            <li className={agent_dashboardStyles.support_text}>- Your CV</li>
                                                            <li className={agent_dashboardStyles.support_text}>- Verified Gov ID</li>
                                                        </ul>
                                                        <p className={agent_dashboardStyles.support_text}>After that we need to redesign our landing page because the current one doesn't
                                                            carry any information. If you have any question don’t hesitate to contact us.</p>
                                                        <p className={agent_dashboardStyles.support_text}>Our Telegram
                                                            <span className='d-block'>Thank you!</span>
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className={agent_dashboardStyles.file_container}>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <p className={agent_dashboardStyles.attachment_title}>2 Attachment</p>
                                                    </div>
                                                    <div>
                                                        <a href="#" className={agent_dashboardStyles.download_text}>Download All</a>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className={agent_dashboardStyles.file_box}>
                                                        <a href="#" className='text-decoration-none'>
                                                            <div className='d-flex align-items-center'>
                                                                <span className={`${agent_dashboardStyles.file_icon_container} me-2`}>
                                                                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g clipPath="url(#clip0_97_466)">
                                                                            <g clipPath="url(#clip1_97_466)">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2787 1.75732H4.75786C2.73975 1.75732 1 3.39196 1 5.40955V15.902C1 18.0332 2.62605 19.7324 4.75786 19.7324H12.5882C14.6073 19.7324 16.2431 17.9205 16.2431 15.902V6.9247L11.2787 1.75732Z" fill="#F1F1F1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0234 1.74609V4.5952C11.0234 5.98596 12.1496 7.11425 13.5404 7.11718C14.8313 7.12012 16.1515 7.1211 16.2407 7.11522" fill="#F1F1F1" />
                                                                                <path d="M11.0234 1.74609V4.5952C11.0234 5.98596 12.1496 7.11425 13.5404 7.11718C14.8313 7.12012 16.1515 7.1211 16.2407 7.11522" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M10.8367 14.2898H5.54688" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M8.83623 9.4397H5.54688" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </g>
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_97_466">
                                                                                <rect width="17" height="21" fill="white" transform="translate(0 0.410156)" />
                                                                            </clipPath>
                                                                            <clipPath id="clip1_97_466">
                                                                                <rect width="17" height="21" fill="white" transform="translate(0 0.410156)" />
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <span className={agent_dashboardStyles.file_title}>project-details.pdf</span>
                                                                    <span className={agent_dashboardStyles.file_size}>2.3mb</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className={agent_dashboardStyles.file_box}>
                                                        <a href="#" className='text-decoration-none'>
                                                            <div className='d-flex align-items-center'>
                                                                <span className={`${agent_dashboardStyles.file_icon_container} me-2`}>
                                                                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g clipPath="url(#clip0_97_466)">
                                                                            <g clipPath="url(#clip1_97_466)">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2787 1.75732H4.75786C2.73975 1.75732 1 3.39196 1 5.40955V15.902C1 18.0332 2.62605 19.7324 4.75786 19.7324H12.5882C14.6073 19.7324 16.2431 17.9205 16.2431 15.902V6.9247L11.2787 1.75732Z" fill="#F1F1F1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0234 1.74609V4.5952C11.0234 5.98596 12.1496 7.11425 13.5404 7.11718C14.8313 7.12012 16.1515 7.1211 16.2407 7.11522" fill="#F1F1F1" />
                                                                                <path d="M11.0234 1.74609V4.5952C11.0234 5.98596 12.1496 7.11425 13.5404 7.11718C14.8313 7.12012 16.1515 7.1211 16.2407 7.11522" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M10.8367 14.2898H5.54688" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M8.83623 9.4397H5.54688" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </g>
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_97_466">
                                                                                <rect width="17" height="21" fill="white" transform="translate(0 0.410156)" />
                                                                            </clipPath>
                                                                            <clipPath id="clip1_97_466">
                                                                                <rect width="17" height="21" fill="white" transform="translate(0 0.410156)" />
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    <span className={agent_dashboardStyles.file_title}>form.pdf</span>
                                                                    <span className={agent_dashboardStyles.file_size}>1.3mb</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={agent_dashboardStyles.custom_editor_container}>
                                                <div className={`${agent_dashboardStyles.email_input_container} d-flex align-items-baseline mb-3`}>
                                                    <span className='me-3'>To</span>
                                                    <Form className='w-100'>
                                                        <Form.Group className="position-relative" controlId="exampleForm.ControlInput1">
                                                            <Form.Control type="email" placeholder="rainbowsales@inquiry.com" className='border-0' />
                                                            <div className='position-absolute top-0 end-0 py-1'>
                                                                <a href="#" className='me-3 text-decoration-none text-dark'>Cc</a>
                                                                <a href="#" className='text-decoration-none text-dark'>Bcc</a>
                                                            </div>
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                                <CustomEditor />
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <span>
                                                            <a href="#" className='me-3'>
                                                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0_97_527)">
                                                                        <g clipPath="url(#clip1_97_527)">
                                                                            <g clipPath="url(#clip2_97_527)">
                                                                                <path d="M17.8646 9.7363L10.2063 17.3889C9.2681 18.3264 7.99562 18.8531 6.6688 18.8531C5.34198 18.8531 4.06951 18.3264 3.1313 17.3889C2.1931 16.4514 1.66602 15.1799 1.66602 13.854C1.66602 12.5282 2.1931 11.2567 3.1313 10.3192L10.7896 2.66655C11.4151 2.04155 12.2634 1.69043 13.148 1.69043C14.0325 1.69043 14.8808 2.04155 15.5063 2.66655C16.1318 3.29156 16.4831 4.13924 16.4831 5.02313C16.4831 5.90702 16.1318 6.75471 15.5063 7.37971L7.83964 15.0323C7.68479 15.1871 7.50095 15.3098 7.29863 15.3935C7.09631 15.4773 6.87946 15.5204 6.66047 15.5204C6.44148 15.5204 6.22463 15.4773 6.02231 15.3935C5.81999 15.3098 5.63615 15.1871 5.4813 15.0323C5.32645 14.8776 5.20362 14.6939 5.11982 14.4917C5.03601 14.2896 4.99288 14.0729 4.99288 13.854C4.99288 13.6352 5.03601 13.4185 5.11982 13.2164C5.20362 13.0142 5.32645 12.8305 5.4813 12.6757L12.5563 5.61436" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_97_527">
                                                                            <rect width="19" height="19" fill="white" transform="translate(0 0.910156)" />
                                                                        </clipPath>
                                                                        <clipPath id="clip1_97_527">
                                                                            <rect width="19" height="19" fill="white" transform="translate(0 0.910156)" />
                                                                        </clipPath>
                                                                        <clipPath id="clip2_97_527">
                                                                            <rect width="19" height="19" fill="white" transform="translate(0 0.910156)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </a>
                                                            <a href="#" className='me-3'>
                                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0_97_519)">
                                                                        <g clipPath="url(#clip1_97_519)">
                                                                            <g clipPath="url(#clip2_97_519)">
                                                                                <path d="M9 17.6602C13.5563 17.6602 17.25 13.9665 17.25 9.41016C17.25 4.85381 13.5563 1.16016 9 1.16016C4.44365 1.16016 0.75 4.85381 0.75 9.41016C0.75 13.9665 4.44365 17.6602 9 17.6602Z" stroke="black" strokeWidth="1.5" />
                                                                                <path d="M5.23387 10.6816C4.99402 10.8201 4.90987 11.1286 5.0716 11.3534C5.47007 11.9073 5.97849 12.3756 6.56699 12.7278C7.29932 13.1662 8.13141 13.4104 8.98447 13.4373C9.83754 13.4641 10.6834 13.2729 11.4419 12.8815C12.0514 12.5671 12.5883 12.1318 13.0209 11.604C13.1965 11.3899 13.1319 11.0767 12.9013 10.9234C12.6706 10.7701 12.3615 10.8353 12.1807 11.045C11.8463 11.4327 11.4398 11.7541 10.982 11.9902C10.3752 12.3033 9.69854 12.4563 9.01608 12.4348C8.33363 12.4133 7.66796 12.2179 7.08209 11.8673C6.64014 11.6027 6.25464 11.2564 5.94537 10.8484C5.77806 10.6277 5.47373 10.5431 5.23387 10.6816Z" fill="black" />
                                                                                <path d="M6 8.41016C6.55228 8.41016 7 7.96244 7 7.41016C7 6.85787 6.55228 6.41016 6 6.41016C5.44772 6.41016 5 6.85787 5 7.41016C5 7.96244 5.44772 8.41016 6 8.41016Z" fill="black" />
                                                                                <path d="M12 8.41016C12.5523 8.41016 13 7.96244 13 7.41016C13 6.85787 12.5523 6.41016 12 6.41016C11.4477 6.41016 11 6.85787 11 7.41016C11 7.96244 11.4477 8.41016 12 8.41016Z" fill="black" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_97_519">
                                                                            <rect width="18" height="18" fill="white" transform="translate(0 0.410156)" />
                                                                        </clipPath>
                                                                        <clipPath id="clip1_97_519">
                                                                            <rect width="18" height="18" fill="white" transform="translate(0 0.410156)" />
                                                                        </clipPath>
                                                                        <clipPath id="clip2_97_519">
                                                                            <rect width="18" height="18" fill="white" transform="translate(0 0.410156)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </a>
                                                            <a href="#">
                                                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0_97_532)">
                                                                        <g clipPath="url(#clip1_97_532)">
                                                                            <g clipPath="url(#clip2_97_532)">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M19.0098 6.54484V14.4911C19.0098 17.4352 17.1659 19.5117 14.2195 19.5117H5.78049C2.83415 19.5117 1 17.4352 1 14.4911V6.54484C1 3.60068 2.8439 1.52515 5.78049 1.52515H14.2195C17.1659 1.52515 19.0098 3.60068 19.0098 6.54484Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M3.4707 14.8622L4.96143 13.2898C5.47948 12.7409 6.34289 12.7146 6.89314 13.2313C6.90972 13.2478 7.80728 14.1594 7.80728 14.1594C8.34874 14.7102 9.23362 14.7189 9.78484 14.1789C9.82094 14.1438 12.0619 11.4277 12.0619 11.4277C12.6395 10.7268 13.6766 10.6264 14.379 11.2045C14.4258 11.2435 16.5429 13.4145 16.5429 13.4145" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.37752 7.74778C8.37752 8.69245 7.61167 9.45773 6.6663 9.45773C5.72094 9.45773 4.95508 8.69245 4.95508 7.74778C4.95508 6.80312 5.72094 6.03784 6.6663 6.03784C7.61167 6.03881 8.37752 6.80312 8.37752 7.74778Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_97_532">
                                                                            <rect width="20" height="20" fill="white" transform="translate(0 0.410156)" />
                                                                        </clipPath>
                                                                        <clipPath id="clip1_97_532">
                                                                            <rect width="20" height="20" fill="white" transform="translate(0 0.410156)" />
                                                                        </clipPath>
                                                                        <clipPath id="clip2_97_532">
                                                                            <rect width="20" height="20" fill="white" transform="translate(0 0.410156)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </a>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Button variant='primary' className={agent_dashboardStyles.reply_btn}>Reply</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="My Properties">
                                            <Row>
                                                {listingsData.map((item, index) =>
                                                    <Col key={index} lg={4} md={4} className='mb-3'>
                                                        <Card className={agent_dashboardStyles.slidercard}>
                                                            <Card.Body>
                                                                <div className={`${agent_dashboardStyles.sliderimg_container} position-relative`}>
                                                                    <Image
                                                                        src={item.img}
                                                                        width='100%'
                                                                        height='100%'
                                                                        alt="featured properties image"
                                                                        className={`${agent_dashboardStyles.sliderimg} img-fluid`}
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
                                                                <div className='pt-3'>
                                                                    <Button variant='primary' className={agent_dashboardStyles.edit_btn}>
                                                                        <span className='me-2'>
                                                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.8309 6.27618C21.9259 6.42039 21.9682 6.59296 21.9507 6.76477C21.9332 6.93657 21.857 7.09708 21.7349 7.21918L12.5419 16.4112C12.4478 16.5052 12.3305 16.5725 12.2019 16.6062L8.37287 17.6062C8.2463 17.6392 8.1133 17.6385 7.98706 17.6042C7.86083 17.57 7.74576 17.5033 7.65326 17.4108C7.56077 17.3183 7.49408 17.2032 7.4598 17.077C7.42553 16.9508 7.42486 16.8177 7.45787 16.6912L8.45787 12.8632C8.48777 12.7485 8.54276 12.642 8.61887 12.5512L17.8459 3.33018C17.9865 3.18973 18.1771 3.11084 18.3759 3.11084C18.5746 3.11084 18.7652 3.18973 18.9059 3.33018L21.7349 6.15818C21.7698 6.19502 21.8019 6.23447 21.8309 6.27618ZM20.1439 6.68818L18.3759 4.92118L9.85787 13.4392L9.23287 15.8322L11.6259 15.2072L20.1439 6.68818Z" fill="white" />
                                                                                <path d="M20.016 18.0202C20.2893 15.6841 20.3766 13.3301 20.277 10.9802C20.2747 10.9248 20.2838 10.8695 20.304 10.8179C20.3241 10.7662 20.3548 10.7194 20.394 10.6802L21.378 9.69618C21.4049 9.66914 21.439 9.65044 21.4763 9.64233C21.5135 9.63422 21.5524 9.63703 21.5881 9.65045C21.6238 9.66386 21.6548 9.6873 21.6775 9.71794C21.7002 9.74858 21.7136 9.78513 21.716 9.82318C21.9007 12.6144 21.8304 15.4167 21.506 18.1952C21.27 20.2172 19.646 21.8022 17.633 22.0272C14.1383 22.4139 10.6117 22.4139 7.11701 22.0272C5.10501 21.8022 3.48001 20.2172 3.24401 18.1952C2.83012 14.6506 2.83012 11.0698 3.24401 7.52518C3.48001 5.50318 5.10401 3.91818 7.11701 3.69318C9.76946 3.40023 12.4417 3.32898 15.106 3.48018C15.1441 3.48292 15.1807 3.49653 15.2113 3.5194C15.242 3.54226 15.2654 3.57343 15.2789 3.6092C15.2923 3.64498 15.2953 3.68387 15.2873 3.72126C15.2794 3.75865 15.2609 3.79298 15.234 3.82018L14.241 4.81218C14.2022 4.85103 14.1558 4.88147 14.1047 4.9016C14.0536 4.92172 13.9989 4.93112 13.944 4.92918C11.7208 4.85303 9.49493 4.93826 7.28401 5.18418C6.63795 5.25569 6.03486 5.54291 5.57217 5.99944C5.10947 6.45596 4.81419 7.05514 4.73401 7.70018C4.33287 11.1285 4.33287 14.5919 4.73401 18.0202C4.81419 18.6652 5.10947 19.2644 5.57217 19.7209C6.03486 20.1775 6.63795 20.4647 7.28401 20.5362C10.639 20.9112 14.111 20.9112 17.467 20.5362C18.1131 20.4647 18.7162 20.1775 19.1789 19.7209C19.6416 19.2644 19.9358 18.6652 20.016 18.0202Z" fill="white" />
                                                                            </svg>
                                                                        </span>
                                                                        Edit
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )}
                                            </Row>
                                            <div className='d-flex justify-content-center mt-3'>
                                                <Pagination id='properties-pagination'>{items}</Pagination>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Add New Property">
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Overview</h4>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        {overviewFields.map((item, index) =>
                                                            item.id === 3 ?
                                                                <Col lg={12} key={index}>
                                                                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                                                        <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                        <Form.Control as="textarea" rows={3} placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} />
                                                                    </Form.Group>
                                                                </Col>
                                                                :
                                                                <Col lg={6} key={index}>
                                                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                                        <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                        {item.id === 2 || item.id === 4 ?
                                                                            <Form.Select aria-label="Default select example" className={agent_dashboardStyles.addlisting_input}>
                                                                                <option>{item.placeholder}</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
                                                                            :
                                                                            <Form.Control type={item.type} placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} />
                                                                        }
                                                                    </Form.Group>
                                                                </Col>
                                                        )}
                                                    </Row>
                                                </Form>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Pricing & Lease Information</h4>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        {pricingFields.map((item, index) =>
                                                            <Col lg={6} key={index}>
                                                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                                    <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                    {item.id === 3 ?
                                                                        <Form.Select aria-label="Default select example" className={agent_dashboardStyles.addlisting_input}>
                                                                            <option>{item.placeholder}</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </Form.Select>
                                                                        :
                                                                        <Form.Control type={item.type} placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} />
                                                                    }
                                                                </Form.Group>
                                                            </Col>
                                                        )}
                                                    </Row>
                                                </Form>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Floor Plans</h4>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        {floorFields.map((item, index) =>
                                                            <Col lg={6} key={index}>
                                                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                                    <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                    {item.id === 2 || item.id === 4 ?
                                                                        <Form.Select aria-label="Default select example" className={agent_dashboardStyles.addlisting_input}>
                                                                            <option>{item.placeholder}</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </Form.Select>
                                                                        :
                                                                        <Form.Control type={item.type} placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} />
                                                                    }
                                                                </Form.Group>
                                                            </Col>
                                                        )}
                                                    </Row>
                                                </Form>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Property Policies</h4>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        {policiesFields.map((item, index) =>
                                                            <Col lg={6} key={index}>
                                                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                                    <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                    {item.id === 1 || item.id === 4 ?
                                                                        <Form.Select aria-label="Default select example" className={agent_dashboardStyles.addlisting_input}>
                                                                            <option>{item.placeholder}</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </Form.Select>
                                                                        :
                                                                        <Form.Control type={item.type} placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} />
                                                                    }
                                                                </Form.Group>
                                                            </Col>
                                                        )}
                                                    </Row>
                                                </Form>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Utilities & Parking</h4>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        {utilitiesFields.map((item, index) =>
                                                            item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4 || item.id === 5 || item.id === 6 ?
                                                                <Col lg={2} key={index}>
                                                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1" id='utility-checks'>
                                                                        <Form.Check aria-label="option 1" label={item.label} />
                                                                    </Form.Group>
                                                                </Col>
                                                                :
                                                                item.id === 9 ?
                                                                    <Col lg={12} key={index}>
                                                                        <Form.Group className={`${agent_dashboardStyles.option_select_container} mb-4`} controlId="exampleForm.ControlInput1">
                                                                            <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                            <Form.Select aria-label="Default select example" className={agent_dashboardStyles.addlisting_input}>
                                                                                <option>{item.placeholder}</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </Form.Select>
                                                                            <Button variant='dark' className={agent_dashboardStyles.option_add_btn}>
                                                                                <span className='me-2'>
                                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M6.17984 0.470024C6.3786 0.470024 6.54009 0.532135 6.66431 0.656358C6.78853 0.78058 6.85064 0.942068 6.85064 1.14082V5.38922H11.099C11.2978 5.38922 11.4593 5.45134 11.5835 5.57556C11.7077 5.69978 11.7698 5.86127 11.7698 6.06002C11.7698 6.25878 11.7077 6.42027 11.5835 6.54449C11.4593 6.66871 11.2978 6.73082 11.099 6.73082H6.85064V10.9792C6.85064 11.178 6.78853 11.3395 6.66431 11.4637C6.54009 11.5879 6.3786 11.65 6.17984 11.65C5.98109 11.65 5.8196 11.5879 5.69538 11.4637C5.57116 11.3395 5.50904 11.178 5.50904 10.9792V6.73082H1.26064C1.06189 6.73082 0.900399 6.66871 0.776177 6.54449C0.651955 6.42027 0.589844 6.25878 0.589844 6.06002C0.589844 5.86127 0.651955 5.69978 0.776177 5.57556C0.900399 5.45134 1.06189 5.38922 1.26064 5.38922H5.50904V1.14082C5.50904 0.942068 5.57116 0.78058 5.69538 0.656358C5.8196 0.532135 5.98109 0.470024 6.17984 0.470024Z" fill="white" />
                                                                                    </svg>
                                                                                </span>
                                                                                add more
                                                                            </Button>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    :
                                                                    <Col lg={6} key={index}>
                                                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                                            <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                            {item.id === 7 || item.id === 9 ?
                                                                                <Form.Select aria-label="Default select example" className={agent_dashboardStyles.addlisting_input}>
                                                                                    <option>{item.placeholder}</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </Form.Select>
                                                                                :
                                                                                <Form.Control type={item.type} placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} />
                                                                            }
                                                                        </Form.Group>
                                                                    </Col>
                                                        )}
                                                    </Row>
                                                </Form>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Select Amenities</h4>
                                                </div>
                                                <Form>
                                                    <div className={agent_dashboardStyles.amenities_grid_container}>
                                                        {amenitiesFields.map((item, index) =>
                                                            <div key={index}>
                                                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1" id='utility-checks'>
                                                                    <Form.Check aria-label="option 1" label={item.label} />
                                                                </Form.Group>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Button variant='dark' className={agent_dashboardStyles.option_add_btn}>
                                                        <span className='me-2'>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.17984 0.470024C6.3786 0.470024 6.54009 0.532135 6.66431 0.656358C6.78853 0.78058 6.85064 0.942068 6.85064 1.14082V5.38922H11.099C11.2978 5.38922 11.4593 5.45134 11.5835 5.57556C11.7077 5.69978 11.7698 5.86127 11.7698 6.06002C11.7698 6.25878 11.7077 6.42027 11.5835 6.54449C11.4593 6.66871 11.2978 6.73082 11.099 6.73082H6.85064V10.9792C6.85064 11.178 6.78853 11.3395 6.66431 11.4637C6.54009 11.5879 6.3786 11.65 6.17984 11.65C5.98109 11.65 5.8196 11.5879 5.69538 11.4637C5.57116 11.3395 5.50904 11.178 5.50904 10.9792V6.73082H1.26064C1.06189 6.73082 0.900399 6.66871 0.776177 6.54449C0.651955 6.42027 0.589844 6.25878 0.589844 6.06002C0.589844 5.86127 0.651955 5.69978 0.776177 5.57556C0.900399 5.45134 1.06189 5.38922 1.26064 5.38922H5.50904V1.14082C5.50904 0.942068 5.57116 0.78058 5.69538 0.656358C5.8196 0.532135 5.98109 0.470024 6.17984 0.470024Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        add more
                                                    </Button>
                                                </Form>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Photo & Video Attachment</h4>
                                                </div>
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileChange}
                                                    multiple
                                                />
                                                {selectedFiles.length > 0 && (
                                                    <div>
                                                        <p className={agent_dashboardStyles.file_subtitle}>File Attachment*</p>
                                                        <ul className='list-unstyled'>
                                                            {selectedFiles.map((file, index) => (
                                                                <li key={index} className={`${agent_dashboardStyles.file_list_item} d-flex justify-content-between`}>
                                                                    {file.name}{' '}
                                                                    <CloseButton onClick={() => handleRemoveFile(index)} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className='d-flex align-items-center'>
                                                    <Button variant='dark' className={agent_dashboardStyles.option_add_btn} onClick={handleButtonClick}>
                                                        <span className='me-2'>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.17984 0.470024C6.3786 0.470024 6.54009 0.532135 6.66431 0.656358C6.78853 0.78058 6.85064 0.942068 6.85064 1.14082V5.38922H11.099C11.2978 5.38922 11.4593 5.45134 11.5835 5.57556C11.7077 5.69978 11.7698 5.86127 11.7698 6.06002C11.7698 6.25878 11.7077 6.42027 11.5835 6.54449C11.4593 6.66871 11.2978 6.73082 11.099 6.73082H6.85064V10.9792C6.85064 11.178 6.78853 11.3395 6.66431 11.4637C6.54009 11.5879 6.3786 11.65 6.17984 11.65C5.98109 11.65 5.8196 11.5879 5.69538 11.4637C5.57116 11.3395 5.50904 11.178 5.50904 10.9792V6.73082H1.26064C1.06189 6.73082 0.900399 6.66871 0.776177 6.54449C0.651955 6.42027 0.589844 6.25878 0.589844 6.06002C0.589844 5.86127 0.651955 5.69978 0.776177 5.57556C0.900399 5.45134 1.06189 5.38922 1.26064 5.38922H5.50904V1.14082C5.50904 0.942068 5.57116 0.78058 5.69538 0.656358C5.8196 0.532135 5.98109 0.470024 6.17984 0.470024Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        Upload File
                                                    </Button>
                                                    <span className={`${agent_dashboardStyles.file_type_text} ms-3 pt-3`}>Upload file .jpg, .png, .mp4</span>
                                                </div>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Attach 3d Plans</h4>
                                                </div>
                                                <input
                                                    type="file"
                                                    ref={fileInputRef1}
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileChange1}
                                                    multiple
                                                />
                                                {selectedFiles1.length > 0 && (
                                                    <div>
                                                        <p className={agent_dashboardStyles.file_subtitle}>File Attachment*</p>
                                                        <ul className='list-unstyled'>
                                                            {selectedFiles1.map((file, index) => (
                                                                <li key={index} className={`${agent_dashboardStyles.file_list_item} d-flex justify-content-between`}>
                                                                    {file.name}{' '}
                                                                    <CloseButton onClick={() => handleRemoveFile1(index)} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className='d-flex align-items-center'>
                                                    <Button variant='dark' className={agent_dashboardStyles.option_add_btn} onClick={handleButtonClick1}>
                                                        <span className='me-2'>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.17984 0.470024C6.3786 0.470024 6.54009 0.532135 6.66431 0.656358C6.78853 0.78058 6.85064 0.942068 6.85064 1.14082V5.38922H11.099C11.2978 5.38922 11.4593 5.45134 11.5835 5.57556C11.7077 5.69978 11.7698 5.86127 11.7698 6.06002C11.7698 6.25878 11.7077 6.42027 11.5835 6.54449C11.4593 6.66871 11.2978 6.73082 11.099 6.73082H6.85064V10.9792C6.85064 11.178 6.78853 11.3395 6.66431 11.4637C6.54009 11.5879 6.3786 11.65 6.17984 11.65C5.98109 11.65 5.8196 11.5879 5.69538 11.4637C5.57116 11.3395 5.50904 11.178 5.50904 10.9792V6.73082H1.26064C1.06189 6.73082 0.900399 6.66871 0.776177 6.54449C0.651955 6.42027 0.589844 6.25878 0.589844 6.06002C0.589844 5.86127 0.651955 5.69978 0.776177 5.57556C0.900399 5.45134 1.06189 5.38922 1.26064 5.38922H5.50904V1.14082C5.50904 0.942068 5.57116 0.78058 5.69538 0.656358C5.8196 0.532135 5.98109 0.470024 6.17984 0.470024Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        Upload File
                                                    </Button>
                                                    <span className={`${agent_dashboardStyles.file_type_text} ms-3 pt-3`}>Upload file .mp4, .mov</span>
                                                </div>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Address & Location</h4>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        {addressFields.map((item, index) =>
                                                            item.id === 1 || item.id === 5 ?
                                                                <Col lg={12} key={index}>
                                                                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                                                        <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                        <Form.Control placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} onChange={(e) => setLocationSearch(e.target.value)} />
                                                                    </Form.Group>
                                                                </Col>
                                                                :
                                                                <Col lg={4} key={index}>
                                                                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                                                        <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                        <Form.Select aria-label="Default select example" className={agent_dashboardStyles.addlisting_input}>
                                                                            <option>{item.placeholder}</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </Col>
                                                        )}
                                                    </Row>
                                                </Form>
                                                <div>
                                                    <LocationSearch locationSearch={locationSearch} />
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end'>
                                                <div className='me-4'>
                                                    <a href="#" className={agent_dashboardStyles.cancel_link}>Cancel</a>
                                                </div>
                                                <div>
                                                    <Button variant='danger' className={agent_dashboardStyles.submit_listing_btn}>Submit Property</Button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='Boosting'>
                                            <div className={agent_dashboardStyles.boosting_container}>
                                                <div className='mb-4 d-flex justify-content-between align-items-center'>
                                                    <h4 className={agent_dashboardStyles.boosting_title}>Listings</h4>
                                                    <a href="#">
                                                        <svg width="28" height="6" viewBox="0 0 28 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M22 3C22 1.34326 23.3431 0 25 0C26.6569 0 28 1.34302 28 3C28 4.65674 26.6569 6 25 6C23.3431 6 22 4.65674 22 3ZM11 3C11 1.34326 12.3431 0 14 0C15.6569 0 17 1.34302 17 3C17 4.65674 15.6569 6 14 6C12.3431 6 11 4.65674 11 3ZM0 3C0 1.34326 1.34314 0 3 0C4.65686 0 6 1.34302 6 3C6 4.65674 4.65686 6 3 6C1.34314 6 0 4.65674 0 3Z" fill="#99B2C6" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div>
                                                    <Table responsive>
                                                        <thead>
                                                            <tr>
                                                                {boostingData.map((item, index) =>
                                                                    <th key={index} className={`${item.id === 1 ? 'text-start' : 'text-center'} ${agent_dashboardStyles.boosting_table_title}`}>{item.title}</th>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {boostingData.map((item, index) =>
                                                                <tr key={index} className='text-center'>
                                                                    <td>
                                                                        <div className='d-flex align-items-center'>
                                                                            <Image src={item.img} alt='boosting-img' width='100%' height='100%' className='me-3' />
                                                                            <span className={agent_dashboardStyles.boosting_listing_name}>{item.listing_name}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{ verticalAlign: 'middle' }}>
                                                                        <span className={agent_dashboardStyles.views_bg}>
                                                                            {item.views}
                                                                        </span>
                                                                    </td>
                                                                    <td style={{ verticalAlign: 'middle' }}>
                                                                        <div className='d-flex align-items-center'>
                                                                            <div
                                                                                className={
                                                                                    item.id === 3 || item.id === 5 ? agent_dashboardStyles.boosting_icon_failure_container : item.id === 6 ? agent_dashboardStyles.boosting_icon_neutral_container : agent_dashboardStyles.boosting_icon_container
                                                                                }
                                                                            >
                                                                                <Image
                                                                                    src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                                                    width={10}
                                                                                    height={10}
                                                                                    alt="boosting-icon"
                                                                                />
                                                                            </div>
                                                                            <span
                                                                                className={
                                                                                    item.id === 3 || item.id === 5 ? agent_dashboardStyles.reach_failure_text : item.id === 6 ? agent_dashboardStyles.reach_neutral_text : agent_dashboardStyles.reach_success_text
                                                                                }
                                                                            >
                                                                                {item.reach}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{ verticalAlign: 'middle' }}>
                                                                        <span className={agent_dashboardStyles.boosting_spent_text}>{item.spent}</span>
                                                                    </td>
                                                                    <td style={{ verticalAlign: 'middle' }}>
                                                                        <span className={item.id === 2 ? agent_dashboardStyles.boosting_active_status_container : agent_dashboardStyles.boosting_status_container}>
                                                                            {item.status}
                                                                        </span>
                                                                    </td>
                                                                    <td style={{ verticalAlign: 'middle' }}>
                                                                        <Button variant='light' onClick={() => { setActiveBoostingBtn(index); setModalShow(true) }} className={activeBoostingBtn === index ? agent_dashboardStyles.active_boosting_btn : agent_dashboardStyles.boosting_btn}>
                                                                            {item.action}
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </Table>
                                                </div>
                                                <Modal aria-labelledby="contained-modal-title-vcenter"
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    centered
                                                    size="lg"
                                                    id='boosting-modal'
                                                >
                                                    <Modal.Body className="grid-example">
                                                        <Container>
                                                            <Row>
                                                                {boostingModalCards.map((item, index) =>
                                                                    <Col lg={6} key={index} className='mb-4'>
                                                                        <Card className={item.id === 2 ? agent_dashboardStyles.boosting_modal_card2 : agent_dashboardStyles.boosting_modal_card}>
                                                                            <Card.Body className='p-0'>
                                                                                <div className='d-flex align-items-center mb-3'>
                                                                                    <div className={item.id === 2 ? agent_dashboardStyles.boosting_modal_icon_container2 : agent_dashboardStyles.boosting_modal_icon_container}>
                                                                                        <Image
                                                                                            src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`}
                                                                                            width={32}
                                                                                            height={32}
                                                                                            alt="modal-icon"
                                                                                        />
                                                                                    </div>
                                                                                    <div className='d-flex align-items-center'>
                                                                                        <h2 className={`${agent_dashboardStyles.boosting_modal_plan_title} me-2`}>{item.title}</h2>
                                                                                        {item.id === 2 ? <span className={agent_dashboardStyles.boosting_modal_tag_container}>{item.tagText}</span> : ''}
                                                                                    </div>
                                                                                </div>
                                                                                <div className='border-bottom d-flex align-items-center'>
                                                                                    <h2 className={`${agent_dashboardStyles.boosting_modal_price} me-2`}>{item.price}</h2>
                                                                                    <span className={agent_dashboardStyles.boosting_modal_price_text}>per month</span>
                                                                                </div>
                                                                                <ul className='my-4 list-unstyled'>
                                                                                    {item.features.map(item => <li className={`${agent_dashboardStyles.boosting_modal_list_item} py-2`} key={item}>{item}</li>)}
                                                                                </ul>
                                                                                <div>
                                                                                    <Button variant='light' className={agent_dashboardStyles.boosting_modal_btn}>Get Started</Button>
                                                                                </div>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>
                                                                )}
                                                            </Row>
                                                        </Container>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='Profile'>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <input type="file" onChange={handleImgFileChange} ref={fileImgRef} style={{ display: 'none' }} />
                                                    {!ImgPreview && <Image src={profileImg} width={68} height={68} alt='default' className='me-3 rounded-circle' />}
                                                    {ImgPreview && (
                                                        <Image
                                                            src={ImgPreview}
                                                            alt="Preview"
                                                            width={68}
                                                            height={68}
                                                            className='me-3 rounded-circle'
                                                        />
                                                    )}
                                                    <Button variant='primary' type="submit" onClick={handleUploadClick} className={agent_dashboardStyles.profile_upload_btn}>Upload new photo</Button>
                                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                                    <a href='#' className={agent_dashboardStyles.profile_delete_link} onClick={handleDelete}>Delete</a>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        {profileFormFields.map((item, index) =>
                                                            <Col key={index} lg={12}>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <Form.Label className={agent_dashboardStyles.addlisting_label}>{item.label}</Form.Label>
                                                                    <Form.Control type={item.type} placeholder={item.placeholder} className={agent_dashboardStyles.addlisting_input} />
                                                                </Form.Group>
                                                            </Col>
                                                        )}
                                                    </Row>
                                                </Form>
                                            </div>
                                            <div className={agent_dashboardStyles.addlisting_container}>
                                                <div className='mb-4'>
                                                    <h4 className={agent_dashboardStyles.addlisting_title}>Agent License</h4>
                                                </div>
                                                <input
                                                    type="file"
                                                    ref={fileInputRef2}
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileChange2}
                                                    multiple
                                                />
                                                {selectedFiles2.length > 0 && (
                                                    <div>
                                                        <p className={agent_dashboardStyles.file_subtitle}>File Attachment*</p>
                                                        <ul className='list-unstyled'>
                                                            {selectedFiles2.map((file, index) => (
                                                                <li key={index} className={`${agent_dashboardStyles.file_list_item} d-flex justify-content-between`}>
                                                                    {file.name}{' '}
                                                                    <CloseButton onClick={() => handleRemoveFile2(index)} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className='d-flex align-items-center'>
                                                    <Button variant='dark' className={agent_dashboardStyles.option_add_btn} onClick={handleButtonClick2}>
                                                        <span className='me-2'>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.17984 0.470024C6.3786 0.470024 6.54009 0.532135 6.66431 0.656358C6.78853 0.78058 6.85064 0.942068 6.85064 1.14082V5.38922H11.099C11.2978 5.38922 11.4593 5.45134 11.5835 5.57556C11.7077 5.69978 11.7698 5.86127 11.7698 6.06002C11.7698 6.25878 11.7077 6.42027 11.5835 6.54449C11.4593 6.66871 11.2978 6.73082 11.099 6.73082H6.85064V10.9792C6.85064 11.178 6.78853 11.3395 6.66431 11.4637C6.54009 11.5879 6.3786 11.65 6.17984 11.65C5.98109 11.65 5.8196 11.5879 5.69538 11.4637C5.57116 11.3395 5.50904 11.178 5.50904 10.9792V6.73082H1.26064C1.06189 6.73082 0.900399 6.66871 0.776177 6.54449C0.651955 6.42027 0.589844 6.25878 0.589844 6.06002C0.589844 5.86127 0.651955 5.69978 0.776177 5.57556C0.900399 5.45134 1.06189 5.38922 1.26064 5.38922H5.50904V1.14082C5.50904 0.942068 5.57116 0.78058 5.69538 0.656358C5.8196 0.532135 5.98109 0.470024 6.17984 0.470024Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                        Upload File
                                                    </Button>
                                                    <span className={`${agent_dashboardStyles.file_type_text} ms-3 pt-3`}>Upload file .img, .pdf, .Word</span>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end'>
                                                <div className='me-4'>
                                                    <a href="#" className={agent_dashboardStyles.cancel_link}>Cancel</a>
                                                </div>
                                                <div>
                                                    <Button variant='primary' className={agent_dashboardStyles.profile_save_btn}>Save</Button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default agent_dashboard