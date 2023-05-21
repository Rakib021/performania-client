import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'
import AOS from 'aos';
AOS.init();
const Item = ({ item }) => {
    const { name, picture, price, quantity, supplierName, about, _id } = item
    const navigate = useNavigate()

    const handleUpdate = (id) => {
        navigate(`/item/${id}`)

    }

    return (
        <div data-aos="flip-down" className='col-lg-4 col-md-6 col-sm-12'>
            <div className='row border rounded item'>
                <div className='col-6 p-3'>
                    <img className='w-100 rounded' height='386' src={picture} alt="" />

                </div>
                <div className='col-6 p-3'>
                    <h5>{name.slice(0, 20)}</h5>
                    <p className='fw-bold'>Price:${price}</p>
                    <p className='fw-bold'>Quantity:{quantity}</p>
                    <p>Supplier:{supplierName}</p>
                    <p>About:{about.slice(0, 100)}</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='btn btn-primary' onClick={() => handleUpdate(_id)}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;