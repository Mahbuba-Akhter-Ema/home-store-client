import React, { useEffect, useState } from 'react';
import AllProductsCard from './AllProductsCard';
import BookNowModal from './BookNowModal';

const BedRoom = () => {
    const [products, setProducts]=useState([])
    const [modalData, setModalData]=useState('')
    useEffect(()=>{
        fetch('Bedroom.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
             <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                 products?.map(product=><AllProductsCard
                 key={product._id}
                product={product}
                setModalData={setModalData}
                 ></AllProductsCard>)
               }
            </div>
            <div>
                <BookNowModal modalData={modalData}></BookNowModal>
            </div>
        </div>
    );
};

export default BedRoom;