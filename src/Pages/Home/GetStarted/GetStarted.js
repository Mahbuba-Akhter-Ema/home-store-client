import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/welcome.gif';

const GetStarted = () => {
    return (
        <section className="bg-gray-200 text-gray-100 mb-10 mt-10">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img} alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-400">
				<span className="text-xs uppercase text-black">Join, it's free</span>
				<h3 className="text-3xl font-bold">Are You Ready to Sell Your Furniture?</h3>
				<p className="my-6 text-black">Learn more about our process, terms, and payouts.</p>
				<Link to="/categories" className="btn w-40 text-black bg-purple-400 hover:bg-purple-700">Get Started</Link>
			</div>
		</div>
    </section>
    );
};

export default GetStarted;