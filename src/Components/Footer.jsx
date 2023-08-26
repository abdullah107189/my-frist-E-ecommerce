import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-sky-900 text-slate-400'>
            <div className='grid grid-cols-4 lg:py-9 md:py-5 py-3 lg:mx-15 md:10 mx-5'>
                <div className='lg:col-span-1 col-span-2'>
                    <Link to={'/'} className='md:text-3xl text-white text-2xl font-bold'><span className=' text-red-400'>A</span>bdullah</Link>
                    <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam velit, ea possimus quae maxime.
                    </p>
                    <div className='my-4 space-x-3'>
                        <button className='py-2 px-4 bg-slate-800 text-white font-semibold rounded-lg '>Google Play</button>
                        <button className='py-2 px-4 bg-slate-800 text-white font-semibold rounded-lg lg:block hidden'> App Store</button>
                    </div>
                </div>
                <div className='lg:col-span-1 col-span-2'>
                    <h1 className="mb-4 text-3xl text-white font-semibold">About Us</h1>
                    <p>Careers</p>
                    <p>Our Stores</p>
                    <p>Our Cares</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <button className='py-2 px-4 bg-slate-800 text-white font-semibold rounded-lg lg:hidden mt-2 block'> App Store</button>
                </div>
                <div className='lg:col-span-1 col-span-2'>
                    <h1 className="mb-4 text-3xl text-white font-semibold"> Customer Care</h1>
                    <p>Help Center</p>
                    <p>How to Buy</p>
                    <p>Track Your Order</p>
                    <p>Corporate & Bulk Purchasing</p>
                    <p>Returns & Refunds
                    </p>
                </div>
                <div className='lg:col-span-1 col-span-2'>
                    <h1 className="mb-4 text-3xl text-white font-semibold">Contact Us</h1>
                    <p>70 Washington Square South, New York</p>
                    <p>NY 10012, United States</p>
                    <p>Email: <a className='text-white' href="uilib.help@gmail.com">uilib.help@gmail.com</a></p>
                    <p>Phone: +1 1123 456 780</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;