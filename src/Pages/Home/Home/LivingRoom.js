import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import AllProductsCard from './AllProductsCard';
import BookNowModal from './BookNowModal';

const LivingRoom = () => {
    const [modalData, setModalData]=useState('')

    const {data:livingRoomData=[], isLoading} = useQuery({
        queryKey: ['livingRoom'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/livingRoom')
            const data = result.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    };
    
    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                 livingRoomData?.map(product=><AllProductsCard
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

export default LivingRoom;