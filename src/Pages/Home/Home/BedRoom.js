import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import AllProductsCard from './AllProductsCard';
import BookNowModal from './BookNowModal';

const BedRoom = () => {
    const [modalData, setModalData]=useState('')

    const {data:bedRoomData=[], isLoading} = useQuery({
        queryKey: ['bedRoom'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/bedRoom')
            const data = result.json()
            return data
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    };

    return (
        <div>
             <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                 bedRoomData?.map(product=><AllProductsCard
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