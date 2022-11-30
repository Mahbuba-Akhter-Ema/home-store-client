import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Dashboardlayout = () => {
    return (
        <div className='bg-white'>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content shadow-xl">

                    <Outlet />
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-black my-2 rounded-sm text-lg sm:text-base">
                        
                        <li><Link to='/dashboardlayout/allseller'>All Seller</Link></li>
                        <li><Link to='/dashboardLayout/allBuyer'>All Buyers</Link></li>
                        <li><Link to='/dashboardLayout/Report'>All Report</Link></li>
                        <li><Link to='/dashboardLayout/Report'>My Orders</Link></li>
                        <li><Link to='/dashboardLayout/Report'>Add Products</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboardlayout;