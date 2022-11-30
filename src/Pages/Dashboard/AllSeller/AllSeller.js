import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';

const AllSeller = () => {
    const {data:allSeller=[], isLoading, refetch} = useQuery({
        queryKey: ['allSeller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allSeller')
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    };

    const handleDelete = dlt => {
        const agree = window.confirm(`Are You Sure To Delete?${dlt.name}`);
        if(agree){
            fetch(`http://localhost:5000/sellerDelete/${dlt._id}`,{
                method:'DELETE'
            }
            )
            .then(res => res.json())
            .then(data => {
                toast.success('Deleted Successfully');
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
                        allSeller?.map((sellers, i) => <tr key={sellers._id}>
                            <th>{i + 1}</th>
                            <td>{sellers?.name}</td>
                            <td>{sellers?.email}</td>
                            <td>
                                
                                <button onClick={()=>handleDelete(sellers)} className='btn bg-red-600 btn-sm border-0'>delete</button>
                                
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllSeller;