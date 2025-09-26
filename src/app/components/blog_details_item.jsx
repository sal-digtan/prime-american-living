'use client';

import React from 'react'
import blog_details_itemStyles from '@/app/components/blog_details_item.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import postimg1 from '../../../public/post-img1.png';
import postimg2 from '../../../public/post-img2.png';
import postimg3 from '../../../public/post-img3.png';
import blogadImg from '../../../public/blog-ad-img.png';
import Image from 'next/image';
import blogdetailsimg from '../../../public/blog-details-item-img.png';
import blogdetailsimg1 from '../../../public/blog-details-item-img1.png';


const blog_details_item = () => {

    const postsData = [
        {
            id: 1,
            img: postimg1,
            datetext: 'March 26, 2024',
            title: 'All The Pre -plans That Need To Ensure Safety & Security Before Buying A Property.'
        },
        {
            id: 2,
            img: postimg2,
            datetext: 'March 26, 2024',
            title: 'Cottage Living Essentials & The Simple Comfort It Gives .'
        },
        {
            id: 3,
            img: postimg3,
            datetext: 'March 26, 2024',
            title: 'The Art of Interiors Over The Years'
        },
    ]

    const tags = ['City Views', 'Concept', 'Rooftop Terrace']

    const listItems = [
        'Pretium vulputate sapien nec sagittis bibendum arcu. aliquam malesuada',
        'Est ultricies integer quis auctor. Nunc sed id semper risus in hendrerit. Arcu bibendum at varius.',
        'Ullamcorper malesuada proin libero nunc consequat interdum. Consequat mauris nunc.',
        'Dapibus ultrices in iaculis nunc sed. Magna fermentum iaculis eu non.',
        'Pellentesque id nibh tortor id. Nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
        'In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.',
        'Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Viverra maecenas accums.'
    ]

    const icons = [
        `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3009 3.97878H11.6065C11.7435 3.97794 11.8745 3.92295 11.971 3.82582C12.0676 3.72869 12.1217 3.59732 12.1217 3.46038V1.25878C12.1215 1.13509 12.0767 1.01562 11.9956 0.922199C11.9145 0.828782 11.8026 0.767654 11.6801 0.749983C11.0266 0.678386 10.3696 0.643664 9.71213 0.645983C7.44013 0.645983 6.03213 2.08598 6.03213 4.41878V5.70998H4.41293C4.276 5.70998 4.14462 5.76416 4.04749 5.86069C3.95037 5.95721 3.89538 6.08825 3.89453 6.22518V8.69398C3.89495 8.83119 3.94976 8.96264 4.04693 9.05951C4.1441 9.15639 4.27572 9.21078 4.41293 9.21078H6.02253V15.0124C6.02253 15.1494 6.07698 15.2809 6.1739 15.3778C6.27082 15.4747 6.40227 15.5292 6.53933 15.5292H9.08173C9.14973 15.5294 9.21711 15.5162 9.27999 15.4903C9.34288 15.4644 9.40004 15.4264 9.4482 15.3784C9.49636 15.3304 9.53457 15.2733 9.56064 15.2105C9.58671 15.1477 9.60013 15.0804 9.60013 15.0124V9.21078H11.2001C11.3259 9.21068 11.4474 9.16485 11.5418 9.08184C11.6363 8.99883 11.6974 8.8843 11.7137 8.75958L12.0337 6.29878C12.0438 6.22591 12.038 6.15173 12.0168 6.08131C11.9955 6.01089 11.9593 5.94589 11.9105 5.89078C11.8623 5.83437 11.8024 5.78902 11.735 5.75783C11.6677 5.72663 11.5944 5.71031 11.5201 5.70998H9.60013V4.65878C9.60013 4.10998 9.66733 3.97878 10.3009 3.97878ZM9.08173 6.74838H10.9313L10.7489 8.17718H9.08173C8.94467 8.17718 8.81322 8.23163 8.7163 8.32855C8.61938 8.42547 8.56493 8.55692 8.56493 8.69398V14.494H7.05613V8.69398C7.05613 8.55692 7.00168 8.42547 6.90476 8.32855C6.80784 8.23163 6.67639 8.17718 6.53933 8.17718H4.92973V6.74838H6.53933C6.67639 6.74838 6.80784 6.69393 6.90476 6.59702C7.00168 6.5001 7.05613 6.36865 7.05613 6.23158V4.41718C7.05613 2.67638 8.01613 1.67958 9.70573 1.67958C10.2705 1.67958 10.7697 1.70678 11.0881 1.72918V2.94358H10.3009C9.14893 2.94358 8.56493 3.52118 8.56493 4.65878V6.23158C8.56472 6.29951 8.57794 6.36681 8.60384 6.4296C8.62974 6.4924 8.6678 6.54946 8.71583 6.59749C8.76386 6.64552 8.82091 6.68358 8.88371 6.70947C8.94651 6.73537 9.0138 6.74859 9.08173 6.74838Z" fill="white"/>
</svg>`,
        `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.112078 0.701965L6.24008 8.87796L0.0800781 15.518H1.47208L6.84808 9.70996L11.2001 15.518H15.9201L9.45608 6.87796L15.1841 0.701965H13.7921L8.83208 6.06196L4.83208 0.701965H0.112078ZM2.16008 1.70997H4.32008L13.8881 14.51H11.7121L2.16008 1.70997Z" fill="white"/>
</svg>`,
        `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.77 6.81876C15.7524 6.33876 15.7316 5.85876 15.7156 5.53876C15.6877 4.82681 15.4009 4.14953 14.9088 3.63422C14.4168 3.11891 13.7535 2.80104 13.0436 2.74036C11.9812 2.65716 10.2516 2.56116 8.03398 2.56116C6.29318 2.56116 4.60518 2.62036 3.01638 2.74036C2.30996 2.79994 1.64943 3.11476 1.15826 3.62595C0.667087 4.13715 0.378902 4.80973 0.347578 5.51796C0.293178 6.72116 0.267578 7.55316 0.267578 8.14036C0.267578 8.72756 0.294778 9.63796 0.349178 10.7964C0.371029 11.5001 0.649901 12.1714 1.13309 12.6835C1.61628 13.1956 2.27031 13.5129 2.97158 13.5756C4.06918 13.6732 5.84038 13.7916 8.03398 13.7916C10.2276 13.7916 11.9876 13.6732 13.0868 13.5756C13.79 13.5118 14.4455 13.1927 14.9296 12.6786C15.4136 12.1645 15.6926 11.4909 15.714 10.7852C15.754 9.94676 15.8004 8.80596 15.8004 8.14036C15.8004 7.78996 15.7876 7.29716 15.77 6.81876ZM8.03398 12.6924C6.31078 12.6924 4.64038 12.6204 3.07398 12.4796C2.63791 12.4394 2.23173 12.2406 1.93242 11.9209C1.6331 11.6013 1.46145 11.1829 1.44998 10.7452C1.39398 9.60596 1.36678 8.72916 1.36678 8.14036C1.36678 7.55156 1.39398 6.70036 1.44678 5.57076C1.45765 5.12734 1.63244 4.70369 1.93739 4.3816C2.24234 4.05951 2.65582 3.86184 3.09798 3.82676C4.64358 3.71156 6.29798 3.65236 8.03398 3.65236C9.76998 3.65236 11.418 3.71156 12.9604 3.82676C13.4056 3.86273 13.8216 4.06265 14.1278 4.3878C14.4341 4.71296 14.6087 5.14019 14.618 5.58676C14.6564 6.40596 14.7012 7.51476 14.7012 8.14676C14.7012 8.46676 14.6884 8.90836 14.6724 9.37396C14.6564 9.83956 14.634 10.334 14.6148 10.742C14.6024 11.1799 14.4306 11.5983 14.1315 11.9185C13.8325 12.2388 13.4269 12.4388 12.9908 12.4812C11.4116 12.6204 9.74278 12.6924 8.03398 12.6924Z" fill="white"/>
<path d="M10.5471 7.69719L6.59345 5.37719C6.50923 5.32966 6.41416 5.30469 6.31745 5.30469C6.22075 5.30469 6.12568 5.32966 6.04145 5.37719C5.95699 5.42557 5.88687 5.49549 5.83825 5.57982C5.78962 5.66414 5.76423 5.75985 5.76465 5.85719V10.4972C5.76423 10.5945 5.78962 10.6902 5.83825 10.7746C5.88687 10.8589 5.95699 10.9288 6.04145 10.9772C6.12563 11.0249 6.22072 11.0499 6.31745 11.0499C6.41419 11.0499 6.50928 11.0249 6.59345 10.9772L10.5471 8.65719C10.6296 8.60837 10.6981 8.53887 10.7456 8.45554C10.7932 8.37221 10.8182 8.27793 10.8182 8.18199C10.8182 8.08605 10.7932 7.99176 10.7456 7.90843C10.6981 7.8251 10.6296 7.7556 10.5471 7.70679V7.69719ZM6.86705 9.53079V6.81079L9.18385 8.16919L6.86705 9.53079Z" fill="white"/>
</svg>`,
        `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2067 5.57393C14.1587 4.56913 13.9299 3.67953 13.1939 2.94513C12.4579 2.21073 11.5699 1.98353 10.5603 1.93393C9.52512 1.87473 6.42272 1.87473 5.38752 1.93393C4.38592 1.98033 3.49633 2.21073 2.75872 2.94353C2.02112 3.67633 1.79872 4.56753 1.74752 5.57073C1.68832 6.60593 1.68832 9.70833 1.74752 10.7435C1.79392 11.7483 2.02432 12.6379 2.75872 13.3707C3.49312 14.1035 4.38272 14.3307 5.38752 14.3835C6.42272 14.4427 9.52512 14.4427 10.5603 14.3835C11.5635 14.3355 12.4531 14.1067 13.1875 13.3707C13.9219 12.6347 14.1475 11.7483 14.2003 10.7435C14.2659 9.70993 14.2659 6.60913 14.2067 5.57393ZM12.8691 11.8539C12.763 12.1235 12.6027 12.3685 12.3983 12.5738C12.1938 12.7791 11.9495 12.9403 11.6803 13.0475C10.8563 13.3675 8.89632 13.2971 7.98432 13.2971C7.07232 13.2971 5.10432 13.3707 4.28992 13.0475C4.01984 12.9409 3.77453 12.78 3.56921 12.5746C3.36389 12.3693 3.20293 12.124 3.09633 11.8539C2.77633 11.0283 2.84513 9.06993 2.84513 8.15793C2.84513 7.24593 2.77313 5.27793 3.09633 4.46353C3.20318 4.19358 3.36422 3.9484 3.56951 3.74311C3.7748 3.53782 4.01998 3.37678 4.28992 3.26993C5.11552 2.94993 7.07232 3.02033 7.98432 3.02033C8.89632 3.02033 10.8643 2.94513 11.6803 3.26993C11.9502 3.37655 12.1953 3.53753 12.4004 3.74286C12.6054 3.94819 12.7661 4.19349 12.8723 4.46353C13.1923 5.28753 13.1235 7.24753 13.1235 8.15793C13.1235 9.06833 13.1971 11.0331 12.8691 11.8539Z" fill="white"/>
<path d="M7.98038 4.9435C7.34438 4.94413 6.72285 5.13332 6.19437 5.48716C5.66589 5.84099 5.25419 6.34358 5.01131 6.93137C4.76844 7.51917 4.7053 8.16578 4.82988 8.78945C4.95446 9.41313 5.26117 9.98586 5.71122 10.4352C6.16127 10.8846 6.73447 11.1905 7.35833 11.3141C7.98219 11.4378 8.6287 11.3737 9.21614 11.1299C9.80357 10.8862 10.3055 10.4737 10.6586 9.94471C11.0116 9.4157 11.1999 8.79389 11.1996 8.1579C11.2002 7.73519 11.1173 7.31653 10.9557 6.92594C10.7941 6.53535 10.5569 6.18053 10.2578 5.88186C9.9587 5.58319 9.60353 5.34654 9.2127 5.18551C8.82187 5.02448 8.40308 4.94223 7.98038 4.9435ZM7.98038 10.2475C7.56751 10.2456 7.16445 10.1214 6.82209 9.89068C6.47972 9.65992 6.21338 9.33291 6.0567 8.95092C5.90001 8.56893 5.86 8.14909 5.94171 7.74438C6.02342 7.33967 6.22318 6.96824 6.5158 6.67696C6.80841 6.38569 7.18076 6.18763 7.58584 6.10777C7.99091 6.02792 8.41057 6.06986 8.79184 6.22829C9.1731 6.38673 9.49889 6.65456 9.72807 6.99798C9.95726 7.3414 10.0796 7.74502 10.0796 8.1579C10.0792 8.433 10.0245 8.70531 9.91875 8.95927C9.81298 9.21323 9.65819 9.44385 9.46322 9.63793C9.26825 9.83201 9.03693 9.98574 8.78249 10.0903C8.52804 10.1949 8.25548 10.2483 7.98038 10.2475Z" fill="white"/>
<path d="M12.0779 4.81241C12.0783 4.96082 12.0346 5.106 11.9524 5.22957C11.8702 5.35315 11.7532 5.44958 11.6162 5.50667C11.4792 5.56376 11.3283 5.57894 11.1827 5.5503C11.0371 5.52165 10.9032 5.45047 10.7981 5.34575C10.6929 5.24103 10.6211 5.10747 10.5919 4.96197C10.5626 4.81647 10.5772 4.66556 10.6337 4.52832C10.6902 4.39108 10.7861 4.27368 10.9093 4.19096C11.0325 4.10824 11.1775 4.06392 11.3259 4.06361C11.4246 4.06318 11.5223 4.08224 11.6135 4.11968C11.7047 4.15713 11.7876 4.21221 11.8575 4.28179C11.9274 4.35136 11.9828 4.43405 12.0206 4.52511C12.0585 4.61617 12.0779 4.7138 12.0779 4.81241Z" fill="white"/>
</svg>`
    ]

    return (
        <section className={blog_details_itemStyles.bloglist_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={8}>
                        <div className='mb-5'>
                            <Image src={blogdetailsimg} width='100%' height='100%' className='img-fluid' alt='details-item-img' />
                        </div>
                        <div>
                            <span className={blog_details_itemStyles.date_text}>February 29, 2024</span>
                            <h2 className={blog_details_itemStyles.item_title}>Lorem ipsum dolor sit amet. Sed mollitia rerum vel vero aspernatur quo consequatur obcaecati.</h2>
                            <p className={blog_details_itemStyles.item_text}>Nibh venenatis cras sed felis. Non arcu risus quis varius quam quisque id. Sapien et ligula ullamcorper malesuada proin libero nunc consequat.
                                Sed nisi lacus sed viverra. Congue eu consequat ac felis donec et odio pellentesque diam. Nisl condimentum id venenatis a condimentum vitae
                                sapien pellentesque habitant. Nullam vehicula ipsum a arcu. Cum sociis natoque penatibus et magnis dis. Urna et pharetra pharetra massa.
                                Ultricies integer quis auctor elit sed. Tempor id eu nisl nunc. Sapien faucibus et molestie ac feugiat sed. Amet nisl purus in mollis nunc. Morbi
                                blandit cursus risus at ultrices mi. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Tincidunt augue interdum velit euismod in
                                pellentesque massa. Vitae aliquet nec ullamcorper sit amet risus nullam.</p>
                        </div>
                        <Row className='py-4'>
                            <Col lg={5} md={6} className='mb-lg-0 mb-3'>
                                <Image src={blogdetailsimg1} width='100%' height='100%' className='img-fluid' alt='details-item-img' />
                            </Col>
                            <Col lg={7} md={6}>
                                {listItems.map((item) =>
                                    <ul key={item}>
                                        <li className={blog_details_itemStyles.item_text}>{item}</li>
                                    </ul>
                                )}
                            </Col>
                        </Row>
                        <div>
                            <h5 className={blog_details_itemStyles.item_subtitle}>Lobortis mattis aliquam faucibus purus in massa tempor.</h5>
                            <p className={blog_details_itemStyles.item_text}>Tellus mauris a diam maecenas sed enim ut sem viverra. Sed blandit libero volutpat sed cras ornare arcu dui. Sed elementum tempus egestas sed
                                sed risus pretium. Vitae turpis massa sed elementum. Nunc sed velit dignissim sodales ut eu sem integer vitae. Et molestie ac feugiat sed lectus
                                vestibulum.Est ultricies integer quis auctor. Convallis aenean et tortor at risus viverra adipiscing at. Proin nibh nisl condimentum id venenatis.
                                Aliquam ultrices sagittis orci a.</p>
                        </div>
                        <div className={blog_details_itemStyles.quote_text_container}>
                            <p className={blog_details_itemStyles.quote_text}>" Cursus metus aliquam eleifend mi. Eu augue ut lectus arcu bibendum at varius.
                                Ullamcorper a lacus vestibulum sed arcu non odio. "</p>
                            <div className='text-end'>
                                <span className={blog_details_itemStyles.quote_author_name}>- Hailey Mccray,</span>
                                <span className={blog_details_itemStyles.quote_author_city}>Los angles</span>
                            </div>
                        </div>
                        <div className='pb-4'>
                            <p className={blog_details_itemStyles.item_text}>Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
                                Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Molestie at elementum eu facilisis sed. Fermentum et sollicitudin ac orci phasellus
                                egestas tellus rutrum tellus. Eget est lorem ipsum dolor. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Amet mauris commodo quis
                                imperdiet massa tincidunt. Congue mauris rhoncus aenean vel elit scelerisque. Vel eros donec ac odio tempor orci. Nisl tincidunt eget nullam non
                                nisi est. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus.
                                Sit amet consectetur adipiscing elit ut aliquam.</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-baseline flex-lg-row flex-md-row flex-column pb-4'>
                            <div className='mb-lg-0 mb-3'>
                                {tags.map((item) => <span className={`${blog_details_itemStyles.tag_container} me-2`} key={item}>{item}</span>)}
                            </div>
                            <div className='d-flex'>
                                {icons.map((item) =>
                                    <div key={item} className={blog_details_itemStyles.icons_container}>
                                        <a href="#">
                                            <Image
                                                src={`data:image/svg+xml;utf8,${encodeURIComponent(item)}`}
                                                width={16}
                                                height={16}
                                                alt="specs-icon"
                                                className='mb-1'
                                            />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={blog_details_itemStyles.right_col}>
                            <div className='mb-3'>
                                <h4 className={blog_details_itemStyles.right_col_title}>Search</h4>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Enter Keyword" className={blog_details_itemStyles.form_input} />
                                </Form.Group>
                            </Form>
                            <div className='py-3'>
                                <div className='mb-3'>
                                    <h4 className={blog_details_itemStyles.right_col_title}>Recent Posts</h4>
                                </div>
                                {postsData.map((item, index) =>
                                    <a href='#' key={index} className='text-decoration-none'>
                                        <div className='mb-3 d-flex'>
                                            <div>
                                                <Image src={item.img} width='100%' height='100%' alt='post-img' className={blog_details_itemStyles.posts_img} />
                                            </div>
                                            <div>
                                                <p className={`${blog_details_itemStyles.date_text} mb-2`}>{item.datetext}</p>
                                                <h5 className={blog_details_itemStyles.posts_title}>{item.title}</h5>
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </div>
                            <div className='py-3'>
                                <div className='mb-3'>
                                    <h4 className={blog_details_itemStyles.right_col_title}>Tags</h4>
                                </div>
                                <div className={blog_details_itemStyles.tags_container}>
                                    {tags.map((item) =>
                                        <div key={item} className={blog_details_itemStyles.tagitem_container}>
                                            <span>{item}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='py-3'>
                                <a href="#">
                                    <Image src={blogadImg} width='100%' height='100%' alt='ad-img' className={blog_details_itemStyles.adimg} />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default blog_details_item