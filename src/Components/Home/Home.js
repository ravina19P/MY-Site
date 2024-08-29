import React from 'react';
import styles from './Home.module.css'
import burger from '../../Assets/hamburgerOurServices.png'
import photo from '../../Assets/ceo.png'
import Progress from '../Progress/Progress';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../BLOG/Blog';
import ToolSet from '../ToolSet/ToolSet';
import Hiring from '../Hiring/Hiring';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <div className={`row ${styles.rowcontainer}`}>
                <div className='col-md-8'>
                    <div className={`${styles.leftblock}`}>
                        <p className={`${styles.LogoPara}`}>AT SACHHSOFT</p>
                        <p className={`${styles.heading}`}>We revolutionise your</p>
                        <p className={`${styles.heading}`}>technological ideas into reality</p>
                        <p className={`${styles.subheading}`}>Expert IT consulting tailored just for empowering</p>
                        <p className={`${styles.subheading}`}>your technical needs</p>
                        <div className='mt-5'>
                            <button className={`btn ${styles.Btn}`}>Get in touch   →</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={`${styles.rightblock}`}>
                        <div>
                            <img src={burger} alt='menu' /> <span className={`${styles.services}`}>Our Services</span>
                        </div>
                        <div className='mt-3'>
                            <div>
                                <button className={`${styles.serviceBTN}`}>E-Commerce</button>
                                <button className={`${styles.serviceBTN}`}>Marketing</button>
                                <button className={`${styles.serviceBTN}`}>Enterprise</button>
                            </div>
                            <div>
                                <button className={`${styles.serviceBTN}`}>Development</button>
                                <button className={`${styles.serviceBTN}`}>Digital</button>
                                <button className={`${styles.serviceBTN}`}>Automation</button>
                            </div>
                            <div>
                                <button className={`${styles.serviceBTN}`}>UI/UX Design</button>
                                <button className={`${styles.serviceBTN}`}>Modern Web Services</button>
                            </div>
                            <div>
                                <button className={`${styles.serviceBTN}`}>SEO</button>
                                <button className={`${styles.serviceBTN}`}>Mobility</button>
                                <button className={`${styles.serviceBTN}`}>Project Management</button>
                            </div>
                            <div>
                                <button className={`${styles.serviceBTN}`}>Cloud</button>
                                <span>+ many other IT Services</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row container g-0 ${styles.cardContainer}`} style={{ marginRight: '15px', marginTop: '-100px', marginLeft: '-30px', display:'flex' }}>
                <div className='col-12 col-sm-6 col-md-3 ms-auto'>
                    <div className={`${styles.card1}`}>
                        <div style={{ marginLeft: '50px', }}>
                            <p>You <span className={`${styles.dreambuild}`}>dream</span> it,</p>
                            <p>We <span className={`${styles.dreambuild}`}>build</span> it.</p>
                            <p className={`${styles.team}`}>- Team Sachhsoft</p>
                        </div>
                        <div>
                            <img src={photo} alt='ceo' />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-3'  style={{ marginLeft: '20px' }}>
                    <div className={`${styles.card2}`}>
                        <div>
                            <p className={`${styles.ten}`}>10+</p>
                            <p className={` ${styles.industry}`}>INDUSTRY YEARS</p>
                        </div>
                        <div>
                            <p className={`${styles.ten}`}>$10M</p>
                            <p className={` ${styles.industry}`}>REVENUE GENERATED FOR CLIENTS </p>
                        </div>
                    </div>
                </div>
            </div>
            <Progress></Progress>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <ToolSet></ToolSet>
            <Hiring></Hiring>
            <Footer></Footer>
        </div>
    );
};
export default Home;