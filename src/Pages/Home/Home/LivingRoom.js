import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import AllProductsCard from './AllProductsCard';
import BookNowModal from './BookNowModal';
import ReportModal from './ReportModal';

const LivingRoom = () => {
    const [modalData, setModalData]=useState('')
    const [reportData, setReportData]=useState('')

    const {data:livingRoomData=[], isLoading} = useQuery({
        queryKey: ['livingRoom'],
        queryFn: async () => {
            const result = await fetch('https://home-store-server.vercel.app/livingRoom')
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

export default LivingRoom;