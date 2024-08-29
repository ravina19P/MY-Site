import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Styles from './Testimonials.module.css';
import profile from '../../Assets/john-kegal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className="container">
            <div className={Styles.Carouseldiv}>
                <div className={Styles.heading}>
                    <div className={Styles.headingText}>
                        <p className={Styles.TESTIMONIALS}>TESTIMONIALS</p>
                        <p className={Styles.partners}>Hear from our valued partners</p>
                    </div>
                    <div>
                        <a className={`${Styles.carouselControlPrev}`} href="#carouselExampleControls" role="button" data-slide="prev">
                            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
                        </a>
                        <a className={`${Styles.carouselControlNext}`} href="#carouselExampleControls" role="button" data-slide="next">
                            <FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Carousel controls={false} indicators={false} interval={null} wrap={false}>
                             <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className={`text-start ${Styles.Item}`}>
                                        <p className={Styles.innerHeading}>
                                            Incredible tech solutions
                                        </p>
                                        <p className={Styles.innerPara}>
                                            Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time
                                        </p>
                                        <div className={`${Styles.Profile}`}>
                                            <img src={profile} alt='profile' />
                                            <div>
                                                <p>John Kegel</p>
                                                <p>CEO, RenewRX</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className={`text-start ${Styles.Item}`}>
                                        <p className={Styles.innerHeading}>
                                            Incredible tech solutions
                                        </p>
                                        <p className={Styles.innerPara}>
                                            Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time
                                        </p>
                                        <div className={`${Styles.Profile}`}>
                                            <img src={profile} alt='profile' />
                                            <div>
                                                <p>John Kegel</p>
                                                <p>CEO, RenewRX</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                             
                        </Carousel>
                       
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default Testimonials;
