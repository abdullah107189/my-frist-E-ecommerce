import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const Arrivals = ({ arrivalsData }) => {
    return (
        <div className='xl:my-[50px] lg:my-[20px] my-5'>
            <div className='flex items-center gap-3'>
                <img src="/public/images/arrivals/new.png" alt="" />
                <h1 className='text-3xl font-bold'>New Arrivals</h1>
            </div>
            <Swiper className='border border-slate-200 shadow-xl mx-auto rounded-lg mt-3'
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                autoplay={{ delay: 2000 }}

                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                        grabCursor: true
                    },
                    780: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        grabCursor: true
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                        grabCursor: true
                    },
                    1440: {
                        spaceBetween: 30,
                        slidesPerView: 6
                    }
                }}
                loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                {
                    arrivalsData.map(data =>
                        <SwiperSlide className='p-4' key={data.picture}>
                            <div className='flex justify-center items-center lg:items-start flex-col mx-auto'>
                                <img className='
                                lg:w-[400px] lg:h-[200px]
                            md:w-[200px] md:h-[200px] text-center
                            w-[150px] h-[150px]
                            rounded-lg
                             ' src={data.picture} alt="" />
                                <div className='flex ml-0 flex-col'>
                                    <h1 className='lg:text-start text-center font-semibold'>{data.name}</h1>
                                    <p className='lg:text-start text-center'>${data.rate}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Arrivals;