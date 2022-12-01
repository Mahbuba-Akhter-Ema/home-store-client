import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { LoaderIcon } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/UseContext';
import Loader from '../../Shared/Loader/Loader';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const {data: myProducts=[], isLoading}=useQuery({
        queryKey:['getMyAddProduct', user?.email],
        queryFn:async()=>{
            const res= await fetch(`https://home-store-server.vercel.app/getMyAddProduct?email=${user?.email}`)
            const data= await res.json()
            return data;
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }

    console.log(myProducts);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            { myProducts[0]?.length?
                myProducts[0]?.map(product=> <MyProductsCard key={product._id} product={product} ></MyProductsCard>)
                :
                ''
            }
            { myProducts[1]?.length?
                myProducts[1]?.map(product=> <MyProductsCard key={product._id} product={product}></MyProductsCard>): ''
            }
            { myProducts[2]?.length?
                myProducts[2]?.map(product=> <MyProductsCard key={product._id} product={product}></MyProductsCard>) : ''
            }
        </div>
    );
};

export default MyProducts;