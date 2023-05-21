import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import './ItemDetails.css'

const ItemDetails = () => {
    const quantityRef = useRef('')
    const { itemId } = useParams()
    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `https://perfumania-server.onrender.com/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])

    const handleDelivered = (id) => {
        const itemQuantity = item.quantity
        const updateQuantity = parseInt(itemQuantity) - 1
        const quantity = { ...item, quantity: updateQuantity }
        const url = `https://perfumania-server.onrender.com/item/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product Delivered', { id: 'Sajid' })
            })
    }
    const addQuantity = (e) => {
        e.preventDefault()
        const newQuantity = quantityRef.current.value
        const itemQuantity = item.quantity
        const updateQuantity = parseInt(itemQuantity) + parseInt(newQuantity)
        const quantity = { ...item, quantity: updateQuantity }
        const url = `https://perfumania-server.onrender.com/item/${item._id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Added Quantity', { id: 'Sajid' })
                e.target.reset()
            })

    }
    return (
        <div className='container d-flex mt-5 justify-content-center align-items-center'>
            <div className=''>
                <img src={item.picture} alt="" />
            </div>
            <div className='p-5 '>
                <h3>Name: {item.name}</h3>
                <div className='d-flex'>
                    <div className=''>
                        <h5 className='text-center'>Supplier</h5>
                        <h4 className=' especial-text'>{item.supplierName}</h4>
                    </div>
                    <div className='ms-3'>
                        <h5>Quantity</h5>
                        <h4 className='text-center especial-text'>{item?.quantity}</h4>
                    </div>
                </div>
                <button onClick={() => handleDelivered(item._id)} className='btn btn-primary mt-3'>Delivered</button>
                {
                    item?.quantity === 0 && <h4 className='text-primary d-inline border rounded p-1 fw-5 ms-3 mt-3'>Sold !!</h4>
                }
                <form className=' ' onSubmit={addQuantity}>
                    <br />
                    <input className='rounded p-2' ref={quantityRef} type="number" name="quantity" placeholder='Enter Quantity' />
                    <br />
                    <input className='my-2' type="submit" value="ADD" />
                </form>
            </div>
        </div>
    );
};

export default ItemDetails;