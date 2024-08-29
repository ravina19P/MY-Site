import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Styles from './Progress.module.css';
import img1 from '../../Assets/our-process.jpg';
import img2 from '../../Assets/our-process-2.jpg';
import img3 from '../../Assets/our-process-3.jpg';
import img4 from '../../Assets/our-process-4.jpg';

const Progress = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const captions = [
        {
            number: '01',
            title: 'We bring your ideas to life through discovery',
            description: 'We shape and elevate brands with rigorous research, constantly challenging IT consulting assumptions',
        },
        {
            number: '02',
            title: 'We bring your ideas to life through design',
            description: 'We create visual and interactive experiences that captivate and engage your audience',
        },
        {
            number: '03',
            title: 'We bring your ideas to life through build',
            description: 'We develop robust and scalable solutions to turn your vision into reality',
        },
        {
            number: '04',
            title: 'We bring your ideas to life through delivery',
            description: 'We ensure a smooth and timely delivery, with ongoing support for continued success',
        },
    ];

    return (
        <div className='container'style={{marginTop:'150px'}}>
            <div className='row mt-5' style={{padding:'40px'}}>
                <div className='col-md-6'>
                    <div className={`${Styles.Carouseldiv}`}>
                        <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <img src={img1} alt='img1' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <img src={img2} alt='img2' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <img src={img3} alt='img3' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={`text-start ${Styles.Item}`}>
                                    <img src={img4} alt='img4' />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className={`${Styles.Carouselcaptions}`}>
                        <div>
                            <div className={`${Styles.heading}`}>
                                <p className={`${Styles.process}`}>OUR PROCESS</p>
                                <p className={`${Styles.ideas}`}>{captions[activeIndex].title}</p>
                            </div>
                            <div className={`${Styles.subheading}`}>
                                <p>
                                    <span className={`${Styles.number}`}>{captions[activeIndex].number}</span>
                                    <span>/4</span>
                                </p>
                                <p className={`${Styles.belowcarousalnumber}`}>{captions[activeIndex].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
