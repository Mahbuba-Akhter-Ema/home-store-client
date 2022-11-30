import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';

const AllBuyers = () => {
    const {data:allBuyer=[], isLoading} = useQuery({
        queryKey:['allBuyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBuyer')
            const data = await res.json()
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
                        allBuyer?.map((buyers, i) => <tr key={buyers._id}>
                            <th>{i + 1}</th>
                            <td>{buyers?.name}</td>
                            <td>{buyers?.email}</td>
                            <td>
                                
                                <button className='btn bg-red-600 btn-sm border-0'>delete</button>
                                
                            </td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllBuyers;