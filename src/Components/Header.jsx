import React, { useState } from 'react';
import { Bars3Icon, ChevronDownIcon, ChevronUpIcon, SquaresPlusIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Header = () => {

    let [isOpen, setIsOpen] = useState(false);
    let [homeOpen, setHomeOpne] = useState(false)

    return (
        <div className='bg-white border-b shadow-lg sticky z-10 top-0 pt-3'>
            {/* header top */}
            <div className='lg:mx-20 md:mx-12 mx-5 flex justify-between items-center '>
                <Link to={'/'} className='md:text-3xl text-2xl font-bold'><span className='text-red-400'>A</span>bdullah</Link>
                <div className=' lg:w-[75%] md:w-[50%] lg:flex hidden justify-between mx-auto'>
                    <form className='w-full rounded-l-full border border-slate-500 relative flex items-center  '>
                        <MagnifyingGlassIcon className="h-5 w-5 ml-3 text-slate-500 relative" />

                        <input className='p-4 w-full focus:placeholder:text-green-500 focus:outline-none' type="search" name="search" id="serch" placeholder='Search and hit enter...' />
                    </form>
                    <button className='hover:bg-slate-300 duration-300 border border-slate-500 border-l-0 font-bold px-5 rounded-r-full'>Search</button>
                </div>

                <div className='flex justify-between gap-5'>
                    <button>
                        <UserIcon className="h-12 w-12 p-3 bg-slate-200 rounded-full text-slate-800 hover:bg-slate-300" />
                    </button>
                    <button >
                        <ShoppingBagIcon className="h-12 w-12 p-3 bg-slate-200 rounded-full text-slate-800 relative hover:bg-slate-300 " />
                        <div className='absolute w-6 h-6 rounded-full flex items-center justify-center bg-red-400 top-3 '>

                            <span className='font-bold text-white'>
                                0
                            </span>
                        </div >
                    </button>
                </div>
            </div>

            {/* header down */}
            <div className='lg:mx-20 md:mx-12 mx-5 flex justify-between my-2 items-center '>
                {/* dropdown */}
                <div className=''>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className=' px-4 py-2 rounded-lg bg-slate-200 font-semibold flex inline-blocke relative gap-2 items-center'>
                        <SquaresPlusIcon className='h-5 w-5 font-bold text-black'></SquaresPlusIcon> <span className='hidden md:block'>Categories</span> <span> {
                            isOpen ? <ChevronUpIcon className='h-5 w-5 text-black'></ChevronUpIcon> : <ChevronDownIcon className='h-5 w-5 text-black'></ChevronDownIcon>
                        }</span>
                    </button>
                </div>

                <button className='lg:hidden' onClick={() => setHomeOpne(!homeOpen)}>
                    {
                        homeOpen ?
                            <XMarkIcon className='h-10 w-10 p-2 text-black border border-black rounded-full'></XMarkIcon> : <Bars3Icon className='h-10 w-10 p-2 text-black border border-black rounded-full'></Bars3Icon>
                    }
                </button>

                {/* navber */}
                <div className='lg:flex-row lg:block hidden lg:space-x-5'>
                    <Link className='hover: hover:text-red-400 duration-300 font-semibold' to={'/'}>
                        <button>Home</button>
                    </Link>

                    <Link className='hover:text-red-400 duration-300 font-semibold' to={'/page'}>
                        <button>Page</button>
                    </Link>

                    <Link className='hover:text-red-400 duration-300 font-semibold' to={'/u-account'}>
                        <button>User Account</button>
                    </Link>

                    <Link className='hover:text-red-400 duration-300 font-semibold' to={'/v-account'}>
                        <button>Vendor Account</button>
                    </Link>

                    <Link className='hover:text-red-400 duration-300 font-semibold' to={'/order'}>
                        <button>Order</button>
                    </Link>

                    <Link className='hover:text-red-400 duration-300 font-semibold' to={'/contact'}>
                        <button>Contact</button>
                    </Link>
                </div>
            </div>
            <div>
                {
                    isOpen && (
                        <div className='z-10 bg-white absolute lg:mx-20 md:mx-12 mx-5 mt-2 '>
                            <ul className='border border-slate-200 shadow-xl  rounded-br-lg rounded-tl-lg w-48'>
                                <li className='hover:bg-slate-300 duration-300  rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat1.png" alt="" />
                                        Fashion
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat2.png" alt="" />
                                        Electronic
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat3.png" alt="" />
                                        Cars
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat4.png" alt="" />
                                        Home & Garden
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat5.png" alt="" />
                                        Gifts
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat6.png" alt="" />
                                        Music
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat7.png" alt="" />
                                        Health & Beauty
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat8.png" alt="" />
                                        Pets
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat9.png" alt="" />
                                        Baby Toys
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat10.png" alt="" />
                                        Groceries
                                    </Link>
                                </li>
                                <li className='hover:bg-slate-300 duration-300 rounded-br-lg rounded-tl-lg'>
                                    <Link to={'/fashion'} className='flex gap-3 p-2'>
                                        <img className='w-6' src="images/category/cat11.png" alt="" />
                                        Books
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )
                }
                {
                    homeOpen && (
                        <div className='z-10 flex flex-col absolute lg:mx-20 rounded-br-lg rounded-tl-lg md:mx-12 mx-5 right-0 border shadow-xl border-slate-200 w-40 bg-slate-50 mt-2'>
                            <button className='hover:bg-slate-300 duration-300  rounded-br-lg rounded-tl-lg p-2 w-full items-end flex'>
                                <Link className='hover: hover:text-red-400 duration-300' to={'/'}>
                                    Home
                                </Link>
                            </button>

                            <button className='hover:bg-slate-300 duration-300  rounded-br-lg rounded-tl-lg p-2 w-full items-end flex'>
                                <Link className='hover:text-red-400 duration-300' to={'/page'}>
                                    Page
                                </Link>
                            </button>



                            <button className='hover:bg-slate-300 duration-300  rounded-br-lg rounded-tl-lg p-2 w-full items-end flex'>
                                <Link className='hover:text-red-400 duration-300' to={'/u-account'}>
                                    User Account
                                </Link>
                            </button>


                            <button className='hover:bg-slate-300 duration-300  rounded-br-lg rounded-tl-lg p-2 w-full items-end flex'>
                                <Link className='hover:text-red-400 duration-300' to={'/v-account'}>Vendor Account
                                </Link>
                            </button>


                            <button className='hover:bg-slate-300 duration-300  rounded-br-lg rounded-tl-lg p-2 w-full items-end flex'>
                                <Link className='hover:text-red-400 duration-300' to={'/order'}>Order
                                </Link>
                            </button>


                            <button className='hover:bg-slate-300 duration-300  rounded-br-lg rounded-tl-lg p-2 w-full items-end flex'>
                                <Link className='hover:text-red-400 duration-300' to={'/contact'}>
                                    Contact
                                </Link>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Header;