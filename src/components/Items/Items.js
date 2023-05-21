import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import Loading from '../Shared/Loading';

const Items = () => {
    const [items, setItems] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        fetch('https://perfumania-server.onrender.com/items')
            .then(res => res.json())
            .then(data => {
                setDataLoaded(true)
                setItems(data)
            })
    }, [])
    if (!dataLoaded) {
        return <Loading></Loading>
    }

    return (
        <div className=' container mx-auto'>
            <div className='row g-5 mt-5'>
                {

                    items.map(item => <Item key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Link to='/manageItems' className='btn btn-primary w-25  my-5'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Items;