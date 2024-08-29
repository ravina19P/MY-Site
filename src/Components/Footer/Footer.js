import React from 'react';
import styles from './Footer.module.css'
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperclip   } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className={`${styles.mainfooter}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6' style={{ marginLeft: '70px' }}>
                        <div className={styles.logodiv}>
                            <img src={logo} alt='logo' />
                        </div>
                        <div>
                            <div className={styles.heading}>
                                <div className='row col-md-9'>
                                    <p className={styles.TOUCH}>GET IN TOUCH </p>
                                    <p className={styles.help}>Have a project? <br /> We would love to help</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.addressDiv}>
                            <p>Chicago, USA</p>
                            <p>+1 (805) 427-3883</p>
                            <p>ceo@sachhsoft.com</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={styles.formBackground}>
                            <div className={styles.form}>
                                <p>I'm interested in...</p>
                                <div>
                                    <button className={`${styles.footerBTN}`}>Development</button>
                                    <button className={`${styles.footerBTN}`}>Web/Product Design</button>
                                    <button className={`${styles.footerBTN}`}>E-Commerce</button>
                                </div>
                                <form className="row g-4 col-10 mt-3">
                                    <div className="col-md-12">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" aria-label="name" />

                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Work E-mail</label>
                                        <input type="email" className="form-control" />

                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Contact</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Tell us about your project</label>
                                        <textarea id="inputAddress" className="form-control" rows="4"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="myfile" className={styles.attachmentLabel}>
                                            <FontAwesomeIcon icon={faPaperclip} style={{ color: '5f01bd' }} />
                                            <span>Add Attachment</span>
                                        </label>
                                        <input type="file" id="myfile" name="myfile" className={styles.fileInput} />
                                    </div>
                                    <div className="col-12">
                                        <button className={`btn ${styles.submitBtn}`}>Submit   →</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;