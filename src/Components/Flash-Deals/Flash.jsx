import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { BoltIcon, StarIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Flash = ({ flashData }) => {
    return (
        <div className='my-20'>
            <div className='flex justify-between mb-4'>
                <h1 className='text-3xl font-bold flex'><BoltIcon className='w-8 text-red-400'></BoltIcon>Flash Deals</h1>
            </div>
            <Swiper className=''
                style={{
                    "--swiper-navigation-padding": "30px",
                    "--swiper-navigation-bullet-size": "10px"
                }}
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                loop={true}
                // autoplay={{ delay: 1000 }}
                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 1
                    },
                    480: {
                        spaceBetween: 15,
                        slidesPerView: 2
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    },
                    1024: {
                        spaceBetween: 25,
                        slidesPerView: 4
                    },
                    1440: {
                        spaceBetween: 30,
                        slidesPerView: 4
                    },
                }}
            >
                {
                    flashData.map(pd =>

                        <SwiperSlide key={pd.id} className=' rounded-lg hover:shadow-xl border border-slate-200'>
                            <div className='p-4 flash-div'>
                                <div className="">
                                    <img className='relative w-64' src={pd.picture} alt={pd.name} />

                                    <p className='absolute top-2 bg-red-400 px-3 text-[14px] rounded-full text-white font-semibold'>{pd.discount}% off</p>
                                </div>
                                <div className='flex justify-between items-end pb-2'>
                                    <div>
                                        <h1 className='text-xl'>{pd.name}</h1>
                                        <h1 className='text-2xl flex'>
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                            <StarIcon className='w-4 text-yellow-400' />
                                        </h1>
                                        <h1 className='text-red-400 font-bold'>Price : {pd.price}</h1>
                                    </div>
                                    <button><PlusIcon className='w-6 text-red-400 border border-red-400 hover:bg-red-400 hover:text-white duration-500 rounded font-bold'></PlusIcon></button>
                                </div>
                            </div>
                            {/* --------- wish-lish ------- */}

                            <button className='wish-list opacity-0 duration-1000 absolute top-2 right-2'><StarIcon className='w-10 text-yellow-400 border border-red-400' /></button>
                            {/* <h1 className=''>love</h1> */}

                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Flash;

