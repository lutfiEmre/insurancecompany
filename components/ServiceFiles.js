"use client"
import React, {useCallback, useRef} from 'react';
import servicebg from '@/public/service.svg'
import Image from "next/image";
import servicefiles from '@/public/servicefiles1.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import konutsigortasvg from "@/public/konutsigorta.svg";

const ServiceFiles = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return(
        <div className={'w-full py-[95px] pb-[150px] relative px-[25px]  sm:px-[121px]'}>
            <div className={'flex flex-col 0 items-center'}>
                <div className={'flex flex-col sm:flex-row w-full items-end justify-between'}>

                    <h4 className={'text-[40px] manropebold text-[#FFA412]'}>

                        We’re Covering All the
                        <br className={'sm:flex hidden'}/> Insurance Services Files
                    </h4>
                    <div className={'flex flex-row items-center'}>
                        <svg onClick={() => {handlePrev()}} className={'cursor-pointer stroke-[#F4F4F4] active:stroke-[#FFA412]'} xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <path d="M27.625 18.0625L20.1875 25.5L27.625 32.9375" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.5 46.75C37.2364 46.75 46.75 37.2364 46.75 25.5C46.75 13.7636 37.2364 4.25 25.5 4.25C13.7636 4.25 4.25 13.7636 4.25 25.5C4.25 37.2364 13.7636 46.75 25.5 46.75Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg onClick={() => {handleNext()}} className={'cursor-pointer stroke-[#F4F4F4] active:stroke-[#FFA412]'} xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <path d="M23.375 32.9375L30.8125 25.5L23.375 18.0625" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.5 4.25C13.7636 4.25 4.25 13.7636 4.25 25.5C4.25 37.2364 13.7636 46.75 25.5 46.75C37.2364 46.75 46.75 37.2364 46.75 25.5C46.75 13.7636 37.2364 4.25 25.5 4.25Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={'w-full h-[1px] bg-[#FFA412] mt-[12px]'}></div>
                <div className={'mt-[83px]'}>


                    <div className={''}>
                        <Swiper
                            ref={sliderRef}
                            className={'xl:w-[1000px]  lg:w-[950px] md:w-[400px] sm:w-[500px] w-[380px] 2xl:w-[1500px] overflow-auto'}
                            spaceBetween={105}
                            breakpoints={{
                                1500: {
                                    width: 1500,
                                    slidesPerView: 3,
                                },
                                1024: {
                                    width: 1024,
                                    slidesPerView: 2,
                                },
                                600: {
                                    width: 600,
                                    slidesPerView: 1,
                                },
                                300: {
                                    width: 300,
                                    slidesPerView: 1,
                                }
                            }}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide >
                                <h1>ㅤㅤㅤㅤㅤㅤ</h1>
                                <div className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                                    <div className={'w-fit h-fit z-20 items '}>
                                        <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'} src={servicefiles} width={290} height={188} alt={''}/>
                                        <div className={'w-full h-fit  z-10 flex flex-row'}>
                                            <div className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                                <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44" height="41" viewBox="0 0 44 41" fill="none">
                                                    <path d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z" fill="#171827"/>
                                                </svg>
                                            </div>
                                            <div className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                                <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                                    Ev Sigortarınız ile Güvende Kalın!
                                                </h3>
                                            </div>
                                        </div>
                                        <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                            <p className={'text-base text-black manroper'}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum....
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <h1>ㅤㅤㅤㅤㅤㅤ</h1>
                                <div className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                                    <div className={'w-fit h-fit z-20 items '}>
                                        <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'} src={servicefiles} width={290} height={188} alt={''}/>
                                        <div className={'w-full h-fit  z-10 flex flex-row'}>
                                            <div className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                                <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44" height="41" viewBox="0 0 44 41" fill="none">
                                                    <path d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z" fill="#171827"/>
                                                </svg>
                                            </div>
                                            <div className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                                <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                                    Ev Sigortarınız ile Güvende Kalın!
                                                </h3>
                                            </div>
                                        </div>
                                        <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                            <p className={'text-base text-black manroper'}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum....
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <h1>ㅤㅤㅤㅤㅤㅤ</h1>
                                <div className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                                    <div className={'w-fit h-fit z-20 items '}>
                                        <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'} src={servicefiles} width={290} height={188} alt={''}/>
                                        <div className={'w-full h-fit  z-10 flex flex-row'}>
                                            <div className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                                <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44" height="41" viewBox="0 0 44 41" fill="none">
                                                    <path d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z" fill="#171827"/>
                                                </svg>
                                            </div>
                                            <div className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                                <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                                    Ev Sigortarınız ile Güvende Kalın!
                                                </h3>
                                            </div>
                                        </div>
                                        <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                            <p className={'text-base text-black manroper'}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum....
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <h1>ㅤㅤㅤㅤㅤㅤ</h1>
                                <div className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                                    <div className={'w-fit h-fit z-20 items '}>
                                        <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'} src={servicefiles} width={290} height={188} alt={''}/>
                                        <div className={'w-full h-fit  z-10 flex flex-row'}>
                                            <div className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                                <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44" height="41" viewBox="0 0 44 41" fill="none">
                                                    <path d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z" fill="#171827"/>
                                                </svg>
                                            </div>
                                            <div className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                                <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                                    Ev Sigortarınız ile Güvende Kalın!
                                                </h3>
                                            </div>
                                        </div>
                                        <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                            <p className={'text-base text-black manroper'}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum....
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
            <Image className={' top-0 -z-10 absolute select-none  left-0 w-full h-full object-cover bg-cover'}
                   src={servicebg} width={1440}
                   height={800} alt={''}/>
        </div>
    );
};

export default ServiceFiles;
