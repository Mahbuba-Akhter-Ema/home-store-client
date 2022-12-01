import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/UseContext';
import UseAdmin from '../Pages/Hooks/UseAdmin';
import UseSeller from '../Pages/Hooks/UseSeller';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Dashboardlayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const { seller } = UseSeller(user?.email)

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
                        {
                            !isAdmin && !seller && <>
                                <li><Link to='/dashboardLayout/myorder'>My Orders</Link></li>

                            </>
                        }

                        {
                            seller && !isAdmin && <>
                                <li><Link to='/dashboardLayout/addproduct'>Add Products</Link></li>
                                <li><Link to='/dashboardLayout/myproduct'>My Products</Link></li>

                            </>
                        }

                        {
                            isAdmin && <>

                                <li><Link to='/dashboardlayout/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboardLayout/allBuyer'>All Buyers</Link></li>
                                <li><Link to='/dashboardLayout/Report'>All Report</Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboardlayout;