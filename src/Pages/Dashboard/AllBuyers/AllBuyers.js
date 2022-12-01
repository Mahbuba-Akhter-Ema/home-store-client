import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';

const AllBuyers = () => {
    const {data:allBuyer=[], isLoading, refetch} = useQuery({
        queryKey:['allBuyer'],
        queryFn: async () => {
            const res = await fetch('https://home-store-server.vercel.app/allBuyer')
            const data = await res.json()
            return data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    };

    const handleDelete = dlt => {
        const agree = window.confirm(`Are you sure you want to delete?${dlt.name}`)
        if (agree) {
            fetch(`https://home-store-server.vercel.app/buyerDelete/${dlt._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                toast.success('Deleted Successfully')
                refetch()
            })
        }
    }

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
                                
                                <button onClick={()=>handleDelete(buyers)} className='btn bg-red-600 btn-sm border-0'>delete</button>
                                
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