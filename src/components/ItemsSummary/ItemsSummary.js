import { faBottleDroplet, faFireFlameCurved, faMoneyBill, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ItemsSummary.css'

const ItemsSummary = () => {
    return (
        <div className='row items-summary w-100 mx-auto'>
            <div className='p-4 col-lg-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon className=' font-icon text-white' icon={faBottleDroplet}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>2,000</h1>
                <p className='text-white text-center'>Perfume Delivered</p>
            </div>
            <div className='p-4 col-lg-3'>
                <div className='d-flex justify-content-center align-items-center' >
                    <FontAwesomeIcon className=' font-icon text-white' icon={faMoneyBill}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>7,50,000</h1>
                <p className='text-white text-center'>Amount Sold</p>

            </div>
            <div className='p-4 col-lg-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon className=' font-icon text-white' icon={faUsers}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>100%</h1>
                <p className='text-white text-center'>Customer Satisfaction</p>
            </div>
            <div className='p-4 col-lg-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon className=' font-icon text-white' icon={faFireFlameCurved}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>10+ Products</h1>
                <p className='text-center text-white'>Hot Deals</p>
            </div>

        </div>
    );
};

export default ItemsSummary;