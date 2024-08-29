import React from 'react';
import styles from './Hiring.module.css'
import bar from '../../Assets/hiring-bar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Hiring = () => {
    return (
        <div className={styles.formobileview} style={{ margin: '130px' }}>
            <div className={styles.HiringDiv}>
                <div className={styles.heading}>
                    <div className={`row col-md-5 offset-3 ${styles.headingformobile}`}>
                        <p className={styles.Hiring}>HIRING</p>
                        <p className={styles.build}>Let's build something great together!</p>
                    </div>
                </div>
                <div className='container'  >
                    <div className='row'>
                        <div className={`col-md-12 ${styles.flexRow}`}>
                            <img src={bar} alt='bar' className={styles.barImage} />
                            <div className={styles.textDiv}>
                                <p>Software Developer <span>2</span></p>
                                <p>India · 7-10 years</p>
                            </div>
                            <div className={styles.iconDiv}>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: 'white', fontSize: '30px', fontWeight: '500' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={`col-md-12 ${styles.flexRow}`}>
                            <img src={bar} alt='bar' className={styles.barImage} />
                            <div className={styles.textDiv}>
                                <p>Junior Developer<span>2</span></p>
                                <p style={{paddingLeft:'15px'}}>India · 1-3 years </p>
                            </div>
                            <div className={styles.iconDiv}>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: 'white', fontSize: '30px', fontWeight: '500' }}
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

export default Hiring;