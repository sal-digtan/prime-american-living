'use client';

import React, { useState, } from 'react'
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

const Chart = dynamic(() => import('../components/Chart'), {
    ssr: false,
});

const CustomEditor = dynamic(() => import('../components/custom-editor'), {
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