import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';

const AllReport = () => {
    const {data:allReport=[], isLoading, refetch} = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const result = await fetch('https://home-store-server.vercel.app/allReport')
            const data = result.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    };
    const handleDelete = dlt => {
        const agree = window.confirm(`Are you sure you want to delete?${dlt.product_name}`)
        if (agree) {
            fetch(`https://home-store-server.vercel.app/allReport/${dlt._id}`, {
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
                        <th>message</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allReport?.map((report, i) => <tr key={report._id}>
                            <th>{i + 1}</th>
                            <td>{report?.message}</td>
                            <td>{report?.email}</td>
                            <td>
                                
                                <button onClick={()=>handleDelete(report)} className='btn bg-red-600 btn-sm border-0'>delete</button>
                                
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllReport;