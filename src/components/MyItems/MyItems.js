import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Item from '../Item/Item';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [userItem, setUserItem] = useState([])

    useEffect(() => {
        const email = user?.email
        const url = `https://perfumania-server.onrender.com/myitems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserItem(data))
    })
    return (
        <div>
            <h3 className='text-center my-5'>Your Item</h3>
            <div className='row container g-5 mx-auto'>
                {
                    userItem.length === 0 ? <h2 className='text-center text-info'>Please Add Something !!</h2> : userItem.map(item => <Item key={item?._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default MyItems;