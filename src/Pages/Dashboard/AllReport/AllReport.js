import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';

const AllReport = () => {
    const {data:allReport=[], isLoading} = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/allReport')
            const data = result.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1>All Report: {allReport.length}</h1>
        </div>
    );
};

export default AllReport;