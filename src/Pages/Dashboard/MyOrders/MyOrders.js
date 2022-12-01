import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/UseContext';
import Loader from '../../Shared/Loader/Loader';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const {data:bookingData=[], isLoading} = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`https://home-store-server.vercel.app/booking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    };

    return (
        <div className='my-8'>
        <div className="overflow-x-auto ">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookingData?.map((booking, i) => <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking?.userName}</td>
                            <td>{booking?.email}</td>
                            <td>
                                
                                <button className='btn bg-red-600 btn-sm border-0'>Pay Now</button>
                                
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;