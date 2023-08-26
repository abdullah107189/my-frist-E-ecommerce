import { BoltIcon, PlusIcon, StarIcon, } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Shops = ({ shopData }) => {
    console.log(shopData);
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3'>
            {/* left side  */}
            <div>
                <div className='border border-slate-200 shadow-xl rounded-lg p-4 w-full'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl text-slate-900 font-bold'>Brands</h1>
                        <h1 className='text-3xl text-slate-400 font-bold'>|</h1>
                        <h1 className='text-2xl text-slate-400 font-bold'>Shops</h1>
                    </div>
                    <div className='flex flex-col items-start gap-4 my-3'>
                        <button className='w-full text-start p-4 bg-slate-100 rounded-lg hover:bg-white shadow-sm hover:shadow-xl font-semibold'>Apple</button>
                        <button className='w-full text-start p-4 bg-slate-100 rounded-lg hover:bg-white shadow-sm hover:shadow-xl font-semibold'>Samasung</button>
                        <button className='w-full text-start p-4 bg-slate-100 rounded-lg hover:bg-white shadow-sm hover:shadow-xl font-semibold'>Oppo</button>
                        <button className='w-full text-start p-4 bg-slate-100 rounded-lg hover:bg-white shadow-sm hover:shadow-xl font-semibold'>Vivo</button>
                        <button className='w-full text-start p-4 bg-slate-100 rounded-lg hover:bg-white shadow-sm hover:shadow-xl font-semibold'>Redimi</button>
                        <button className='w-full text-start p-4 bg-slate-100 rounded-lg hover:bg-white shadow-sm hover:shadow-xl font-semibold'>Sony</button>
                        <button className='w-3/4 mx-auto my-5 text-start p-4 bg-slate-100 rounded-lg hover:bg-white shadow-sm hover:shadow-xl font-semibold'>All phones</button>

                    </div>
                </div>
            </div>

            {/* rigth side  */}
            <div className='col-span-2 grid gap-5 lg:grid-cols-3 grid-cols-2'>
                <div className='flex justify-between mb-2 lg:col-span-3  col-span-2'>
                    <h1 className='text-3xl font-bold flex'>Discount</h1>
                    <Link to={'/'}><button className='border border-red-400 hover:bg-red-400 rounded-lg px-4 hover:text-white font-semibold py-2 duration-500 '>View All</button></Link>
                </div>
                {
                    shopData.map(pd =>
                        <div key={pd.picture} className='hover:shadow-xl rounded-lg  border border-slate-200'>
                            <div className='p-4'>
                                <div className="">
                                    <img className='relative md:w-64 w-32' src={pd.picture} alt="" />

                                    <p className='absolute top-2 bg-red-400 md:px-3 px-2  rounded-full text-white font-semibold'>50% off</p>
                                </div>
                                <div className='flex justify-between items-end pb-2'>
                                    <div>
                                        <h1 className='md:text-xl text-[14px]'>{pd.name}</h1>
                                        <h1 className='text-2xl flex'>
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                        </h1>
                                        <h1 className='text-red-400 font-bold'>Price : {pd.rate}</h1>
                                    </div>
                                    <button><PlusIcon className='w-6 text-red-400 border border-red-400 hover:bg-red-400 hover:text-white duration-500 rounded font-bold'></PlusIcon></button>
                                </div>
                            </div>
                            {/* --------- wish-lish ------- */}

                            <button className='wish-list opacity-0 duration-1000 absolute top-2 right-2'><StarIcon className='w-10 text-yellow-400 border border-red-400' /></button>
                            {/* <h1 className=''>love</h1> */}

                        </div>)
                }
            </div>
        </div>
    );
};

export default Shops;