import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import AllProductsCard from './AllProductsCard';
import BookNowModal from './BookNowModal';
import ReportModal from './ReportModal';

const DiningRoom = () => {
    const [modalData, setModalData]=useState('')
    const [reportData, setReportData]=useState('')

    const {data:dinningRoomData=[], isLoading} = useQuery({
        queryKey:['dinningRoom'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/dinningRoom')
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    };

    return (
        <div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                 dinningRoomData?.map(product=><AllProductsCard
                 key={product._id}
                product={product}
                setModalData={setModalData}
                setReportData={setReportData}
                 ></AllProductsCard>)
               }
            </div>
            <div>
                <BookNowModal modalData={modalData}></BookNowModal>
                <ReportModal reportData={reportData}></ReportModal>
            </div>
        </div>
    );
};

export default DiningRoom;