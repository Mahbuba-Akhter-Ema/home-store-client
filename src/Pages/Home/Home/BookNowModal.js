import React from 'react';

const BookNowModal = ({modalData}) => {
    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address, verification } = modalData;
    return (
        <div>
        <input type="checkbox" id="Furniture" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="Furniture" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{product_name}</h3>

                <form  className='grid grid-cols-1 gap-3 mt-10'>
                    

                    <input type="email" name='price' disabled defaultValue={sell_price} className="input input-bordered input-black w-full" />

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