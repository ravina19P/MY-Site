import React from 'react';
import Styles from './ToolSet.module.css'
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../../Assets/Shopify_logo_PNG2.png'
import logo2 from '../../Assets/googlecloud.png'
import logo3 from '../../Assets/aws.png'
import logo4 from '../../Assets/WordPress-logotype-wordmark-white.png'

const ToolSet = () => {
    return (
        <div className='container' >
            <div className={Styles.ToolSetdiv}>
                <div className={Styles.heading}>
                    <div className='row col-md-5'>
                        <p className={Styles.ToolSet}>TECHNICAL TOOLSET</p>
                        <p className={Styles.Development}>We assure Quality Development</p>
                    </div>
                    <div className={Styles.headingBorder}></div>
                </div>
                <div className='container' style={{ padding: '10px 100px' }} >
                    <div className='row'>
                        <div className={`${Styles.Carouseldiv}`}>
                            <Carousel>
                                <Carousel.Item>
                                    <div className={`text-start ${Styles.Item}`}>
                                        <img src={logo1} alt='logo1' />
                                        <img src={logo2} alt='logo2' />
                                        <img src={logo3} alt='logo3' />
                                        <img src={logo4} alt='logo4' />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`text-start ${Styles.Item}`}>
                                        <img src={logo1} alt='logo1' />
                                        <img src={logo2} alt='logo2' />
                                        <img src={logo3} alt='logo3' />
                                        <img src={logo4} alt='logo4' />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolSet;

