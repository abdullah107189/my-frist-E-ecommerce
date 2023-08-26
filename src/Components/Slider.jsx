import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
const Slider = () => {
    return (
        <div className='xl:mt-[20px] lg:my-[0px]'>
            <Swiper className='' style={{
                "--swiper-pagination-color": "red",
                "--swiper-pagination-bullet-size": "20px",
                "--swiper-pagination-bullet-border": "red"
            }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                // virtual
                loop={true}
                // navigation
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className=''>
                    <div className='flex md:items-center md:flex-row flex-col lg:justify-around md:justify-between'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>50% Off For Your First Shopping</h1>
                            <p className='md:my-4 my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                            <button className='shadow-slate-900 bg-red-400 lg:px-8 md:px-4 lg:py-4 md:py-2 px-2 rounded-lg text-white md:font-bold lg:text-xl'>Visits Collections</button>
                        </div>
                        <img className='lg:w-[500px] lg:h-[600px] md:w-[400px] md:h-[400px] w-[500px] h-[300px] pb-10' src="images/SlideCard/slide-1.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className='flex md:items-center md:flex-row flex-col lg:justify-around md:justify-between'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>50% Off For Your First Shopping</h1>
                            <p className='md:my-4 my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                            <button className='shadow-slate-900 bg-red-400 lg:px-8 md:px-4 lg:py-4 md:py-2 px-2 rounded-lg text-white md:font-bold lg:text-xl'>Visits Collections</button>
                        </div>
                        <img className='lg:w-[500px] lg:h-[600px] md:w-[400px] md:h-[400px] w-[500px] h-[300px] pb-10' src="images/SlideCard/slide-2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex md:items-center md:flex-row flex-col lg:justify-around md:justify-between'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>50% Off For Your First Shopping</h1>
                            <p className='md:my-4 my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                            <button className='shadow-slate-900 bg-red-400 lg:px-8 md:px-4 lg:py-4 md:py-2 px-2 rounded-lg text-white md:font-bold lg:text-xl'>Visits Collections</button>
                        </div>
                        <img className='lg:w-[500px] lg:h-[600px] md:w-[400px] md:h-[400px] w-[500px] h-[300px] pb-10' src="images/SlideCard/slide-3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex md:items-center md:flex-row flex-col lg:justify-around md:justify-between'>
                        <div>
                            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'>50% Off For Your First Shopping</h1>
                            <p className='md:my-4 my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                            <button className='shadow-slate-900 bg-red-400 lg:px-8 md:px-4 lg:py-4 md:py-2 px-2 rounded-lg text-white md:font-bold lg:text-xl'>Visits Collections</button>
                        </div>
                        <img className='lg:w-[500px] lg:h-[600px] md:w-[400px] md:h-[400px] w-[500px] h-[300px] pb-10' src="images/SlideCard/slide-4.png" alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Slider;