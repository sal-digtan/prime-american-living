import React from 'react'
import promoStyles from '@/app/components/promo.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import promoimg from '../../../public/promo-img.png';
import Button from 'react-bootstrap/Button';

const promo = () => {

    const promoCards = [
        {
            id: 1,
            icon: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3307 29.8614C17.2568 29.8614 19.164 29.482 20.9434 28.745C22.7229 28.0079 24.3397 26.9276 25.7016 25.5656C27.0636 24.2037 28.1439 22.5869 28.881 20.8074C29.618 19.028 29.9974 17.1208 29.9974 15.1947C29.9974 13.2687 29.618 11.3615 28.881 9.58205C28.1439 7.80261 27.0636 6.18577 25.7016 4.82384C24.3397 3.46192 22.7229 2.38158 20.9434 1.64451C19.164 0.907441 17.2568 0.528076 15.3307 0.528076C11.4409 0.528076 7.71036 2.07331 4.95983 4.82384C2.2093 7.57438 0.664063 11.3049 0.664062 15.1947C0.664063 19.0846 2.2093 22.8151 4.95983 25.5656C7.71036 28.3162 11.4409 29.8614 15.3307 29.8614ZM15.3307 5.88008C15.6843 5.88008 16.0235 6.02055 16.2735 6.2706C16.5236 6.52065 16.6641 6.85979 16.6641 7.21341V13.8614H23.3121C23.6657 13.8614 24.0048 14.0019 24.2549 14.2519C24.5049 14.502 24.6454 14.8411 24.6454 15.1947C24.6454 15.5484 24.5049 15.8875 24.2549 16.1375C24.0048 16.3876 23.6657 16.5281 23.3121 16.5281H16.6641V23.1761C16.6641 23.5297 16.5236 23.8688 16.2735 24.1189C16.0235 24.3689 15.6843 24.5094 15.3307 24.5094C14.9771 24.5094 14.638 24.3689 14.3879 24.1189C14.1379 23.8688 13.9974 23.5297 13.9974 23.1761V16.5281H7.34939C6.99577 16.5281 6.65663 16.3876 6.40659 16.1375C6.15654 15.8875 6.01606 15.5484 6.01606 15.1947C6.01606 14.8411 6.15654 14.502 6.40659 14.2519C6.65663 14.0019 6.99577 13.8614 7.34939 13.8614H13.9974V7.21341C13.9974 6.85979 14.1379 6.52065 14.3879 6.2706C14.638 6.02055 14.9771 5.88008 15.3307 5.88008Z" fill="#ED1C24"/>
<path d="M52.6641 35.1947H48.1307C43.6507 35.1947 41.4107 35.1947 39.6987 36.0667C38.1935 36.8337 36.9697 38.0575 36.2027 39.5627C35.3307 41.2747 35.3307 43.5147 35.3307 47.9947V52.5281M39.3307 19.1947H35.3307M28.6641 29.8614H32.6641M34.6641 8.52808H35.5974C41.5707 8.52808 44.5574 8.52808 46.8401 9.69074C48.847 10.7134 50.4788 12.3451 51.5014 14.3521C52.6641 16.6347 52.6641 19.6214 52.6641 25.5947V34.7921C52.6641 37.4001 52.6641 38.7067 52.3707 39.9334C52.1067 41.0214 51.6774 42.0614 51.0907 43.0161C50.4321 44.0934 49.5094 45.0161 47.6641 46.8614L46.9974 47.5281C45.1521 49.3734 44.2294 50.2961 43.1521 50.9574C42.1979 51.5423 41.1576 51.9733 40.0694 52.2347C38.8427 52.5281 37.5361 52.5281 34.9281 52.5281H25.7307C19.7574 52.5281 16.7707 52.5281 14.4881 51.3654C12.4811 50.3428 10.8494 48.7111 9.82673 46.7041C8.66406 44.4214 8.66406 41.4347 8.66406 35.4614V34.5281" stroke="#ED1C24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            title: 'Add',
            text: 'Upload properties with photos, details, and pricing to attract buyers and renters.'
        },
        {
            id: 2,
            icon: `<svg width="54" height="58" viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4374 55.4244H20.0374C11.3761 55.4244 7.04273 55.4244 4.35206 52.6911C1.6614 49.9577 1.66406 45.5577 1.66406 36.7577V23.4244C1.66406 14.6244 1.66406 10.2244 4.3574 7.49374C7.04273 4.75507 11.3761 4.75507 20.0374 4.75507H27.9121C36.5761 4.75507 41.6374 4.9044 44.3281 7.63507C47.0214 10.3711 46.9947 14.6217 46.9947 23.4217V26.5871M37.5174 2.19507V7.5284M24.1841 2.19507V7.5284M10.8507 2.19507V7.5284M13.6641 36.8617H24.3307M13.6641 23.5284H34.9974" stroke="#ED1C24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.93" d="M50.3601 36.5391C47.9441 33.8324 46.4961 33.9951 44.8881 34.4778C43.7601 34.6378 39.8988 39.1444 38.2881 40.5844C35.6455 43.1924 32.9895 45.8804 32.8161 46.2324C32.3148 47.0458 31.8508 48.4857 31.6241 50.0964C31.2055 52.5124 30.6028 55.2298 31.3655 55.4644C32.1281 55.6991 34.2641 55.2511 36.6775 54.8964C38.2881 54.6031 39.4135 54.2831 40.2188 53.8004C41.3468 53.1231 43.4375 50.7417 47.0455 47.1977C49.3041 44.8164 51.4855 43.1711 52.1308 41.5631C52.7735 39.1471 51.8108 37.8591 50.3601 36.5391Z" stroke="#ED1C24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            title: 'Edit',
            text: 'Update pricing, images, or descriptions anytime.'
        },
        {
            id: 3,
            icon: `<svg width="52" height="57" viewBox="0 0 52 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 22.605V26.0343M12.6667 22.605C11.2172 22.6151 9.78682 22.2735 8.4984 21.6093C7.20997 20.9451 6.10192 19.9782 5.26933 18.7916M12.6667 22.605C14.1162 22.6151 15.5465 22.2708 16.8349 21.6066C18.1234 20.9424 19.2314 19.9756 20.064 18.789M12.6667 5.46097C15.752 5.46097 18.4693 6.97564 20.064 9.2743M5.26933 9.27964C6.10192 8.09305 7.20997 7.12619 8.4984 6.462C9.78682 5.79782 11.2172 5.45615 12.6667 5.4663V2.0343M5.26933 9.27964L2 7.18097M5.26933 9.27964C4.29774 10.6748 3.77689 12.3342 3.77689 14.0343C3.77689 15.7345 4.29774 17.3938 5.26933 18.789M23.3333 7.1783L20.064 9.27964C21.0356 10.6748 21.5564 12.3315 21.5564 14.0316C21.5564 15.7318 21.0356 17.3911 20.064 18.7863L23.3333 20.8876M2 20.8876L5.26933 18.7863" stroke="#ED1C24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.6641 2.0343H29.3921C38.0854 2.0343 42.4374 2.0343 45.4561 4.1623C46.3201 4.7703 47.0881 5.49563 47.7361 6.30897C49.9974 9.15164 49.9974 13.2423 49.9974 21.429V28.2156C49.9974 36.117 49.9974 40.069 48.7467 43.2236C46.7361 48.2983 42.4854 52.2983 37.0934 54.1916C33.7414 55.3676 29.5467 55.3676 21.1467 55.3676C16.3521 55.3676 13.9521 55.3676 12.0374 54.6956C8.9574 53.613 6.52806 51.3276 5.37873 48.429C4.66406 46.6263 4.66406 44.3676 4.66406 39.853V31.3676" stroke="#ED1C24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50.0026 28.7008C50.0026 31.058 49.0662 33.3187 47.3994 34.9856C45.7325 36.6524 43.4718 37.5888 41.1146 37.5888C39.3386 37.5888 37.2453 37.2795 35.5199 37.7408C34.7664 37.9435 34.0793 38.3406 33.5275 38.8924C32.9757 39.4441 32.5786 40.1312 32.3759 40.8848C31.9146 42.6101 32.2239 44.7035 32.2239 46.4795C32.2239 47.6467 31.994 48.8024 31.5474 49.8808C31.1007 50.9591 30.446 51.9389 29.6207 52.7642C28.7954 53.5896 27.8156 54.2442 26.7372 54.6909C25.6589 55.1376 24.5031 55.3675 23.3359 55.3675" stroke="#ED1C24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
            title: 'Manage listings',
            text: 'Track and organize all properties in one place.'
        }
    ]

    return (
        <section className={promoStyles.promo_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={6}>
                        <div>
                            <Image src={promoimg} width='100%' height='100%' className='img-fluid' alt='promo-img' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <p className={promoStyles.promo_subtitle}>Dashboard Promo</p>
                            <h2 className={promoStyles.promo_title}>Grow Your Business with Prime American Living</h2>
                            <p className={promoStyles.promo_text}>Join Prime American Living and take your real estate business to the next level. Our platform empowers agents to showcase their listings, build credibility, and connect with thousands of potential renters and buyers every day.</p>
                        </div>
                        <Row>
                            {promoCards.map((item, index) =>
                                <Col lg={6} md={6} key={index}>
                                    <div className='mb-3'>
                                        <Image src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`} width={50} height={50} alt='icon' />
                                    </div>
                                    <div>
                                        <h5 className={promoStyles.promo_card_title}>{item.title}</h5>
                                        <p className={promoStyles.promo_text}>{item.text}</p>
                                    </div>
                                </Col>
                            )}
                            <div className='d-flex align-items-center mt-3 flex-lg-row flex-md-row flex-column'>
                                <div>
                                    <Button variant="primary" className={promoStyles.promo_btn}>Explore properties</Button>
                                </div>
                                <div className='d-flex align-items-center justify-content-center ms-lg-4 mt-lg-0 ms-md-4 mt-md-0 mt-3'>
                                    <span className={promoStyles.call_icon_container}>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8172 12.9489C9.01722 11.9409 6.78522 8.9169 6.35322 7.0449C7.14522 5.8209 7.79322 6.3969 8.22522 5.1729C8.22522 5.1009 9.37722 -1.0911 4.98522 0.204903C-4.59078 3.0849 11.1772 24.0369 17.1532 16.3329C19.8892 12.8049 13.3372 11.7969 13.2652 11.7969C11.8972 11.8689 12.2572 12.6609 10.8172 12.9489Z" fill="white" />
                                        </svg>
                                    </span>
                                    <div className='ms-2'>
                                        <span className={`${promoStyles.call_title} d-block`}>Call Us Anytime</span>
                                        <span className={`${promoStyles.call_text} d-block`}>+00 123 456789</span>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default promo