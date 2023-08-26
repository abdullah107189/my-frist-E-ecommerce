import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const Discount = ({ discountData }) => {
    return (
        <div className='xl:my-[50px] lg:my-[20px] mt-3'>
            <div className='flex items-center gap-3'>
                <img src="/public/images/discount/gift.png" alt="" />
                <h1 className='text-3xl font-bold'>Big Discounts</h1>
            </div>
            <Swiper className='md:px-4' style={{
                "--swiper-pagination-color": "red",
                "--swiper-pagination-bullet-size": "10px",
            }}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                autoplay={{ delay: 2000 }}
                navigation
                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },
                    1440: {
                        spaceBetween: 30,
                        slidesPerView: 6
                    }
                }}
            // loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                {
                    discountData.map(data =>
                        <SwiperSlide className='shadow-xl my-9' key={data.picture} >
                            <div className='p-4 border border-slate-200  rounded-lg flex justify-center items-center lg:items-start flex-col mx-auto'>
                                <img className='
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

export default Discount;