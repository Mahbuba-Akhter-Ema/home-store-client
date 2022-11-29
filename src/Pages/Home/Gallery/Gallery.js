import React from 'react';
import img1 from '../../../assets/images/gallery-img-12.jpg';
import img2 from '../../../assets/images/gallery-img-2.jpg';
import img3 from '../../../assets/images/gallery-img-3.jpg';
import img4 from '../../../assets/images/gallery-img-4.jpg';
import img5 from '../../../assets/images/gallery-img-11.jpg';
import img6 from '../../../assets/images/gallery-img-6.jpg';
import img7 from '../../../assets/images/gallery-img-7.jpg';
import img8 from '../../../assets/images/gallery-img-8.jpg';
import img9 from '../../../assets/images/gallery-img-9.jpg';
import img10 from '../../../assets/images/gallery-img-10.jpg';

const Gallery = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-neutral uppercase rounded-full bg-teal-accent-400">
             <div className='flex justify-center items-center gap-1'>
             Advertisement <span></span> Products
             </div>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img2} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img3} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img4} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img5} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img6} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img7} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img8} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img9} />
            <img src={img10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
        </div>
    </section>
    );
};

export default Gallery;