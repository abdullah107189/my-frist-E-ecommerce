import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'

const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-5'>
                <img src="../../../public/images/banner/banner-1.png" alt="" />
                <img className='col-span-2 w-full' src="../../../public/images/banner/banner-2.png" alt="" />
            </div>
            <div className='my-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='border space-y-4 rounded-xl hover:shadow-xl shadow-sm flex flex-col justify-center items-center p-7'>
                    <HeartIcon className="w-14 rounded-full bg-slate-200 p-3 text-center text-black"></HeartIcon>
                    <h1 className='text-xl font-semibold'>Worldwide Delivery</h1>
                    <h1 className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nam?</h1>
                </div>
                <div className='border space-y-4 rounded-xl hover:shadow-xl shadow-sm flex flex-col justify-center items-center p-7'>
                    <HeartIcon className="w-14 rounded-full bg-slate-200 p-3 text-center text-black"></HeartIcon>
                    <h1 className='text-xl font-semibold'>Safe Paymant</h1>
                    <h1 className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nam?</h1>
                </div>
                <div className='border space-y-4 rounded-xl hover:shadow-xl shadow-sm flex flex-col justify-center items-center p-7'>
                    <HeartIcon className="w-14 rounded-full bg-slate-200 p-3 text-center text-black"></HeartIcon>
                    <h1 className='text-xl font-semibold'>Stop with Confidence</h1>
                    <h1 className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nam?</h1>
                </div>
                <div className='border space-y-4 rounded-xl hover:shadow-xl shadow-sm flex flex-col justify-center items-center p-7'>
                    <HeartIcon className="w-14 rounded-full bg-slate-200 p-3 text-center text-black"></HeartIcon>
                    <h1 className='text-xl font-semibold'>24/7 Support</h1>
                    <h1 className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nam?</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;