import React from 'react';
import styles from './Blog.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bgImg1 from '../../Assets/mobilityserviceimage.png'
import bgImg2 from '../../Assets/SEO..avif'
import bgImg3 from '../../Assets/e-commerce1.jpeg'

const Blog = () => {
    return (
        <div className='container'>
            <div className={styles.blogDiv}>
                <div className={styles.heading}>
                    <div className={`row col-md-5 offset-3 ${styles.headingformobile}`}>
                        <p className={styles.BLOG}>BLOG</p>
                        <p className={styles.Explore}>Explore insights through our knowledge-share blogs</p>
                    </div>
                    <div>
                        <a className={`${styles.carouselControlPrev}`} href="#carouselExampleControls" role="button" data-slide="prev">
                            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
                        </a>
                        <a className={`${styles.carouselControlNext}`} href="#carouselExampleControls" role="button" data-slide="next">
                            <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} />
                        </a>
                    </div>
                </div>
                <div className={`container ${styles.cardcontainer}`} style={{ padding: '10px 100px' }} >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={`card ${styles.card}`} style={{ width: '22rem', padding: '20px', backgroundImage: `url(${bgImg1})` }}>
                                <div className="card-body" style={{ padding: '0px', position: 'relative' }}>
                                    <div style={{ marginBottom: '50px' }}>
                                        <div >
                                            <div className={styles.blogdate}>
                                                <span className={styles.blogdatespan}>March 20, 2023 • 2 min read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.cardheading}>Navigating the future with mobility services</p>
                                </div>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: 'white', fontSize: '30px', fontWeight: '500', position: 'absolute', bottom: '10px', right: '10px' }}
                                />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={`card ${styles.card}`} style={{ width: '22rem', padding: '20px', backgroundImage: `url(${bgImg2})` }}>
                                <div className="card-body" style={{ padding: '0px', position: 'relative' }}>
                                    <div style={{ marginBottom: '50px' }}>
                                        <div >
                                            <div className={styles.blogdate}>
                                                <span className={styles.blogdatespan}>March 20, 2023 • 2 min read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.cardheading}>Maximising business success: The Power of SEO</p>
                                </div>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: 'white', fontSize: '30px', fontWeight: '500', position: 'absolute', bottom: '10px', right: '10px' }}
                                />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={`card ${styles.card}`} style={{ width: '22rem', padding: '20px', backgroundImage: `url(${bgImg3})` }}>
                                <div className="card-body" style={{ padding: '0px', position: 'relative' }}>
                                    <div style={{ marginBottom: '50px' }}>
                                        <div >
                                            <div className={styles.blogdate}>
                                                <span className={styles.blogdatespan}>March 20, 2023 • 2 min read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.cardheading}>The Impact of IT Industry 
                                    on E-Commerce</p>
                                </div>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: 'white', fontSize: '30px', fontWeight: '500', position: 'absolute', bottom: '10px', right: '10px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                <button className={`btn mt-5 ${styles.Btn}`}>VIEW ALL   →</button>                 
                </div>
            </div>
        </div>
    );
};

export default Blog;