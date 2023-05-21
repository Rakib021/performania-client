import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Facebook, Google, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    const date = new Date()
    const currentDate = date.getFullYear()
    return (

        <footer className='text-center mt-5 p-3 text-dark w-100'>
            <div>
                <p>Follow us: </p>
                <Facebook className='text-dark m-2 fs-5'></Facebook>
                <Twitter className='text-dark m-2 fs-5'></Twitter>
                <Instagram className='text-dark m-2 fs-5'></Instagram>
                <Linkedin className='text-dark m-2 fs-5'></Linkedin>
            </div>
            <div>
                <small className='me-2'>copyright</small>
                <FontAwesomeIcon className='me-2' icon={faCopyright}></FontAwesomeIcon>
                <p className='d-inline'>{currentDate} PERFUMANIA. All Rights Reserved</p>
            </div>
        </footer>


    );
};

export default Footer;