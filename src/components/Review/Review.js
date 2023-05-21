import React from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import './Review.css'

const Review = () => {
    return (
        <div className='container mt-5'>
            <h3 className='mb-5'>THE TRUST FROM OUR CLIENTS</h3>
            <div className='row g-5'>
                <div className='col-lg-4 review'>
                    <div className='review-section w-75 p-4'>
                        <div className='d-flex align-items-center mt-3'>
                            <img className='rounded-circle' src="https://i0.wp.com/demo2.fitwp.com/corify/wp-content/uploads/sites/16/2020/04/Layer-5.jpg?w=800&quality=100&ssl=1" alt="" />
                            <div className='ms-3 mt-2'>
                                <h5>ROBERT DOWNER</h5>
                                <p>Director at Envato LLC</p>
                            </div>
                        </div>
                        <div className='d-flex justify-item-center align-items-center'>
                            <h4>Excelent -</h4>
                            <p className='mt-2 ms-3'><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></p>
                        </div>
                        <p>Excellent variety. I would recommend this for anyone who wants to try a perfume without breaking the bank or being stuck with a scent that you cannot stand. You can spray the card and let the scent dry down to get a true scent experience.Well worth the money to try them out. </p>
                    </div>

                </div>
                <div className='col-lg-4'>
                    <div className='review-section w-75 p-4'>
                        <div className='d-flex align-items-center mt-3'>
                            <img className='rounded-circle' src="https://i2.wp.com/demo2.fitwp.com/corify/wp-content/uploads/sites/16/2020/04/Layer-4.jpg?w=800&quality=100&ssl=1" alt="" />
                            <div className='ms-3 mt-2'>
                                <h5 >NATALIE NOYES</h5>
                                <p >Product manager at Spotify</p>
                            </div>
                        </div>
                        <div className='d-flex justify-item-center align-items-center'>
                            <h4>Perfect -</h4>
                            <p className='mt-2 ms-3'><StarFill /><StarFill /><StarFill /><StarFill /><Star /></p>
                        </div>
                        <p>
                            Liked most of the fragrances, some I liked a lot. I would have preferred fewer with a bit more of each. These little vials were barely two doses. Good way to sample fragrances. Good for traveling.Although the samples a fairly small, I like trying them out.
                        </p>
                    </div>

                </div>
                <div className='col-lg-4'>
                    <div className='review-section w-75 p-4'>
                        <div className='d-flex align-items-center mt-3'>
                            <img className='rounded-circle' src="https://i0.wp.com/demo2.fitwp.com/corify/wp-content/uploads/sites/16/2020/04/tes-1.jpg?w=800&quality=100&ssl=1s" alt="" />
                            <div className='ms-3 mt-2'>
                                <h5 >CRIS EVAN</h5>
                                <p>Createive director at Spotify</p>
                            </div>
                        </div>
                        <div className='d-flex justify-item-center align-items-center'>
                            <h4>Amazing -</h4>
                            <p className='mt-2 ms-3'><StarFill /><StarFill /><StarFill /><StarFill /><Star /></p>
                        </div>
                        <p>
                            These just arrived today along with two free gifts, I have not tried them yet but they all smell great. There are perfect sized vials I believe it will be easy to get quite a few doses out of all of these as long as I love them!! I will order more from the same deller thank you
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;