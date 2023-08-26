import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom';

const Catagories = () => {
    return (
        <div className='xl:my-[50px] lg:my-[20px]'>
            <div className='my-4 flex justify-between'>
                <h1 className='text-3xl font-bold'>Top Catagories</h1>
                <Link to={'/'}><button className='border border-red-400 hover:bg-red-400 rounded-lg px-4 hover:text-white font-semibold py-2 duration-500'>View All</button></Link>
            </div>
            <Swiper className='' style={{
                "--swiper-pagination-color": "red",
                "--swiper-pagination-bullet-size": "10px",
            }}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                grabCursor={true}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 1

                    },
                    780: {
                        spaceBetween: 30,
                        slidesPerView: 2

                    },
                    1024: {
                        spaceBetween: 50,
                        slidesPerView: 3
                    }
                }}
                loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                <SwiperSlide className=''>
                    <div className=''>
                        <img className='w-full relative bg-white p-4 border border-slate-100 shadow-lg rounded-lg' src="images/top/category-1.png" alt="" />
                        <h1 className='absolute top-6 left-6 px-2 rounded-full text-[12px] bg-blue-500 text-white'>Headphones</h1>
                        <p className='absolute top-6 right-6 px-2 rounded-full text-[12px] bg-sky-400 text-white'>3k Orders This week</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className=''>
                        <img className='w-full relative bg-white p-4 border border-slate-100 shadow-lg rounded-lg' src="images/top/category-2.png" alt="" />
                        <h1 className='absolute top-6 left-6 px-2 rounded-full text-[12px] bg-blue-500 text-white'>Watch</h1>
                        <p className='absolute top-6 right-6 px-2 rounded-full text-[12px] bg-sky-400 text-white'>4k Orders This week</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className=''>
                        <img className='w-full relative bg-white p-4 border border-slate-100 shadow-lg rounded-lg' src="images/top/category-3.png" alt="" />
                        <h1 className='absolute top-6 left-6 px-2 rounded-full text-[12px] bg-blue-500 text-white'>Sunglass</h1>
                        <p className='absolute top-6 right-6 px-2 rounded-full text-[12px] bg-sky-400 text-white'>6k Orders This week</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className=''>
                        <img className='w-full relative bg-white p-4 border border-slate-100 shadow-lg rounded-lg' src="images/top/category-2.png" alt="" />
                        <h1 className='absolute top-6 left-6 px-2 rounded-full text-[12px] bg-blue-500 text-white'>Watch</h1>
                        <p className='absolute top-6 right-6 px-2 rounded-full text-[12px] bg-sky-400 text-white'>4k Orders This week</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className=''>
                        <img className='w-full relative bg-white p-4 border border-slate-100 shadow-lg rounded-lg' src="images/top/category-3.png" alt="" />
                        <h1 className='absolute top-6 left-6 px-2 rounded-full text-[12px] bg-blue-500 text-white'>Sunglass</h1>
                        <p className='absolute top-6 right-6 px-2 rounded-full text-[12px] bg-sky-400 text-white'>6k Orders This week</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Catagories;