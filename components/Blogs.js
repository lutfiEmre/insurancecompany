"use client"
import React, {useCallback, useRef} from 'react';
import servicebg from '@/public/service.svg'
import Image from "next/image";
import servicefiles from '@/public/servicefiles1.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import konutsigortasvg from "@/public/konutsigorta.svg";

const Blogs = () => {
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
        <div className={'w-full pb-[200px] bg-main3  relative px-[25px]  '}>
            <div className={'flex flex-col 0 items-center'}>

                <div className={''}>


                    <div className={'mt-[150px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[130px] grid-rows-auto gap-[44px] flex-wrap'}>
                        <div
                            className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                            <div className={'w-fit h-fit z-20 items '}>
                                <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'}
                                       src={servicefiles} width={290} height={188} alt={''}/>
                                <div className={'w-full h-fit  z-10 flex flex-row'}>
                                    <div
                                        className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                        <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44"
                                             height="41" viewBox="0 0 44 41" fill="none">
                                            <path
                                                d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z"
                                                fill="#171827"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                        <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                            Ev Sigortarınız ile Güvende Kalın!
                                        </h3>
                                    </div>
                                </div>
                                <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                    <p className={'text-base text-black manroper'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum....
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div
                            className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                            <div className={'w-fit h-fit z-20 items '}>
                                <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'}
                                       src={servicefiles} width={290} height={188} alt={''}/>
                                <div className={'w-full h-fit  z-10 flex flex-row'}>
                                    <div
                                        className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                        <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44"
                                             height="41" viewBox="0 0 44 41" fill="none">
                                            <path
                                                d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z"
                                                fill="#171827"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                        <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                            Ev Sigortarınız ile Güvende Kalın!
                                        </h3>
                                    </div>
                                </div>
                                <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                    <p className={'text-base text-black manroper'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum....
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div
                            className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                            <div className={'w-fit h-fit z-20 items '}>
                                <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'}
                                       src={servicefiles} width={290} height={188} alt={''}/>
                                <div className={'w-full h-fit  z-10 flex flex-row'}>
                                    <div
                                        className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                        <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44"
                                             height="41" viewBox="0 0 44 41" fill="none">
                                            <path
                                                d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z"
                                                fill="#171827"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                        <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                            Ev Sigortarınız ile Güvende Kalın!
                                        </h3>
                                    </div>
                                </div>
                                <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                    <p className={'text-base text-black manroper'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum....
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div
                            className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                            <div className={'w-fit h-fit z-20 items '}>
                                <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'}
                                       src={servicefiles} width={290} height={188} alt={''}/>
                                <div className={'w-full h-fit  z-10 flex flex-row'}>
                                    <div
                                        className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                        <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44"
                                             height="41" viewBox="0 0 44 41" fill="none">
                                            <path
                                                d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z"
                                                fill="#171827"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                        <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                            Ev Sigortarınız ile Güvende Kalın!
                                        </h3>
                                    </div>
                                </div>
                                <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                    <p className={'text-base text-black manroper'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum....
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div
                            className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                            <div className={'w-fit h-fit z-20 items '}>
                                <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'}
                                       src={servicefiles} width={290} height={188} alt={''}/>
                                <div className={'w-full h-fit  z-10 flex flex-row'}>
                                    <div
                                        className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                        <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44"
                                             height="41" viewBox="0 0 44 41" fill="none">
                                            <path
                                                d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z"
                                                fill="#171827"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                        <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                            Ev Sigortarınız ile Güvende Kalın!
                                        </h3>
                                    </div>
                                </div>
                                <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                    <p className={'text-base text-black manroper'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum....
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div
                            className={'w-[373px] flex justify-start items-center flex-col h-[393px] bg-[#F5A526] rounded-[20px]'}>
                            <div className={'w-fit h-fit z-20 items '}>
                                <Image className={'-mt-6 w-[290x] h-[188px] object-cover -z-20'}
                                       src={servicefiles} width={290} height={188} alt={''}/>
                                <div className={'w-full h-fit  z-10 flex flex-row'}>
                                    <div
                                        className={'w-[78px] p-[16px] flex justify-center items-center rounded-bl-3xl -z-10 h-[88px] bg-main4 -mt-4'}>
                                        <svg className={'mt-1'} xmlns="http://www.w3.org/2000/svg" width="44"
                                             height="41" viewBox="0 0 44 41" fill="none">
                                            <path
                                                d="M21.9598 0.602783L0.141113 18.7H5.29991V40.3H37.6999V18.7H43.3411L21.9598 0.602783ZM26.8477 34H16.6336L18.7756 24.3601C17.4805 23.4601 16.6336 22.1047 16.6336 20.4451C16.6336 17.7109 18.9205 15.55 21.7402 15.55C24.5617 15.55 26.8477 17.7937 26.8477 20.5279C26.8477 22.1884 26.0008 23.4484 24.7066 24.3457L26.8477 34Z"
                                                fill="#171827"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={'items-center border-b-[1px] border-white w-full h-[70px] flex justify-center'}>
                                        <h3 className={'manropem ml-4 text-xl w-[170px]'}>
                                            Ev Sigortarınız ile Güvende Kalın!
                                        </h3>
                                    </div>
                                </div>
                                <div className={'mt-[26px]  w-[300px]  flex justify-center items-center'}>
                                    <p className={'text-base text-black manroper'}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum....
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
