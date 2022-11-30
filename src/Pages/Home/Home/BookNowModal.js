import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/UseContext';

const BookNowModal = ({ modalData }) => {
    const { user } = useContext(AuthContext);
    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address, verification } = modalData;

    const handleModal = (event) => {
        event.preventDefault()
        const form = event.target
        const userName = form.userName.value
        const email = form.email.value
        const number = form.number.value
        const meeting = form.meeting.value

        const bookingData = {
            userName,
            email,
            number,
            meeting,
            purchase_Price,
            sell_price,
            picture,
            age,
            time,
            seller_name,
            product_name,
            phone,
            address,
            verification
        }
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('successfully added')
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <input type="checkbox" id="Furniture" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Furniture" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>

                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-3 mt-10'>


                        <input type="email" name='price' disabled defaultValue={sell_price} className="input input-bordered input-black w-full" />

                        <input type="email" name='userName' disabled defaultValue={user?.displayName} className="input input-bordered input-black w-full" />

                        <input type="email" name='email' disabled defaultValue={user?.email} className="input input-bordered input-black w-full" />

                        <input type="number" name='number' placeholder="PhoneNumber" className="input input-bordered input-black w-full" />

                        <input type="text" name='meeting' placeholder="Type your meeting location" className="input input-bordered input-black w-full" />
                        <br />
                        <input className='btn  w-full btn-primary' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNowModal;