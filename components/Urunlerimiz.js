"use client"
import React, {useCallback, useRef, useState} from 'react';
import urunlerbg from '@/public/urunlerbg.svg'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import konutsigortasvg from '@/public/konutsigorta.svg'
import sagliksigortasvg from '@/public/sagliksigorta.svg'
import evcilhayvansvg from '@/public/evcilhayvan.svg'
import tamamlayicisaglik from '@/public/tamamlayicisaglik.svg'
import seyehatsvg from '@/public/seyehatsvg.svg'

import 'swiper/css';
const Hizmetler = () => {
    const sliderRef = useRef(null);
    const [hizmet,setHizmet] = useState({
        dijitalsigorta: true,
        musterimemnuniyeti: true,
        dogrusigorta: true,
        onlinesigorta: true,

    })

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <div className={'w-full  pb-16 relative  '}>
            <div className={'z-20  w-full flex-col flex justify-center'}>
                <div
                    className={'flex mt-[75px] flex-col z-20 2xl:pl-0 pl-[30px] lg:pl-[86px] 2xl:items-center gap-[14px]'}>
                    <h3 className={'rubiksbold text-main1 2xl:text-[50px] text-[35px]'}>
                        ÜRÜNLERİMİZ
                    </h3>
                    <div className={'w-[172px] 2xl:w-[450px] m-[16px] h-[2px] bg-main2 rotate-1'}></div>
                    <h4 className={'text-[16px] lg:text-[20px] 2xl:text-[25px] rubiksbold pr-10  text-[#9B9595]  xl:max-w-full max-w-[750px]'}>
                        49 farklı alanda risklerinizi üstlenerek sizlere en uygun fiyatlar ile en kapsamlı sigorta
                        poliçesi hazırlıyoruz.
                    </h4>
                </div>
                <div
                    className={'mt-[69px] z-20  pl-[0px] 2xl:pl-0 flex-row justify-center items-center w-full flex gap-[32px] lg:gap-[16px] flex-wrap '}>
                    <div onClick={() => {
                        handlePrev()
                    }} className={'cursor-pointer'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path
                                d="M18.0977 0.939819C19.6992 0.939819 21.2357 1.14815 22.707 1.56482C24.1784 1.98149 25.5651 2.56742 26.8672 3.32263C28.1693 4.07784 29.3411 4.98279 30.3828 6.03748C31.4245 7.09216 32.3359 8.27055 33.1172 9.57263C33.8984 10.8747 34.4844 12.2549 34.875 13.7133C35.2656 15.1716 35.474 16.7146 35.5 18.3422C35.5 19.9437 35.2917 21.4802 34.875 22.9515C34.4583 24.4229 33.8724 25.8096 33.1172 27.1117C32.362 28.4138 31.457 29.5857 30.4023 30.6273C29.3477 31.669 28.1693 32.5804 26.8672 33.3617C25.5651 34.1429 24.1849 34.7289 22.7266 35.1195C21.2682 35.5101 19.7253 35.7185 18.0977 35.7445C16.4961 35.7445 14.9596 35.5362 13.4883 35.1195C12.0169 34.7028 10.6302 34.1169 9.32812 33.3617C8.02604 32.6065 6.85417 31.7015 5.8125 30.6469C4.77083 29.5922 3.85938 28.4138 3.07812 27.1117C2.29688 25.8096 1.71094 24.4294 1.32031 22.9711C0.929688 21.5127 0.721354 19.9698 0.695312 18.3422C0.695312 16.7406 0.903646 15.2041 1.32031 13.7328C1.73698 12.2614 2.32292 10.8747 3.07812 9.57263C3.83333 8.27055 4.73828 7.09867 5.79297 6.05701C6.84766 5.01534 8.02604 4.10388 9.32812 3.32263C10.6302 2.54138 12.0104 1.95544 13.4688 1.56482C14.9271 1.17419 16.4701 0.965861 18.0977 0.939819ZM18.0977 33.2445C19.4648 33.2445 20.7799 33.0687 22.043 32.7172C23.306 32.3656 24.4974 31.8643 25.6172 31.2133C26.737 30.5622 27.7396 29.7875 28.625 28.889C29.5104 27.9906 30.2852 26.9815 30.9492 25.8617C31.6133 24.7419 32.1146 23.557 32.4531 22.307C32.7917 21.057 32.974 19.7354 33 18.3422C33 16.975 32.8242 15.6599 32.4727 14.3969C32.1211 13.1338 31.6198 11.9489 30.9688 10.8422C30.3177 9.73539 29.5365 8.72628 28.625 7.81482C27.7135 6.90336 26.7109 6.12862 25.6172 5.4906C24.5234 4.85258 23.3385 4.35128 22.0625 3.98669C20.7865 3.62211 19.4648 3.43982 18.0977 3.43982C16.7305 3.43982 15.4154 3.6156 14.1523 3.96716C12.8893 4.31873 11.6979 4.82003 10.5781 5.47107C9.45833 6.12211 8.45573 6.89685 7.57031 7.79529C6.6849 8.69373 5.91016 9.70284 5.24609 10.8226C4.58203 11.9424 4.08073 13.1273 3.74219 14.3773C3.40365 15.6273 3.22135 16.9489 3.19531 18.3422C3.19531 19.7094 3.37109 21.0245 3.72266 22.2875C4.07422 23.5505 4.57552 24.7419 5.22656 25.8617C5.8776 26.9815 6.65234 27.9841 7.55078 28.8695C8.44922 29.7549 9.45833 30.5297 10.5781 31.1937C11.6979 31.8578 12.8828 32.3591 14.1328 32.6976C15.3828 33.0362 16.7044 33.2185 18.0977 33.2445ZM22.0039 11.1937L14.7773 18.4398L22.0039 25.6859L20.2461 27.4437L11.2227 18.4398L20.2461 9.43591L22.0039 11.1937Z"
                                fill="#171827"/>
                        </svg>
                    </div>
                    <div className={''}>
                        <Swiper
                            ref={sliderRef}
                            className={'xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[450px] w-[260px] 2xl:w-[1500px] items-center justify-center flex flex-row'}
                            spaceBetween={50}
                            breakpoints={{
                                1500: {
                                    width: 1500,
                                    slidesPerView: 4,
                                },
                                1024: {
                                    width: 1024,
                                    slidesPerView: 3,
                                },
                                600: {
                                    width: 600,
                                    slidesPerView: 2,
                                },
                                300: {
                                    width: 300,
                                    slidesPerView: 1,
                                }
                            }}
                            slidesPerView={4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide className={'flex items-center justify-center'}>
                                <div
                                    className={'w-[246px] pt-[8px] flex justify-start items-center flex-col h-[295px] bg-[#F4F4F4] bg-opacity-50 border-main2 rounded-[10px] border-[2px]'}>
                                    <Image src={konutsigortasvg} width={150} height={150} alt={''}/>
                                    <h4 className={'font-normal text-[25px] text-black'}>
                                        Konut Sigortası
                                    </h4>
                                    <div className={'mt-[20px] flex flex-row gap-[5px]'}>
                                        <div
                                            className={'px-[15px] group flex active:border-main1 active:bg-transparent  justify-center items-center cursor-pointer hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-active:text-main2 group-hover:text-white text-base font-normal'}>
                                                Detaylar
                                            </h3>
                                        </div>
                                        <div
                                            className={'px-[15px] group flex justify-center items-center cursor-pointer active:bg-main1 active:!text-main2 hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-hover:text-white text-base font-normal'}>
                                                Teklif Al
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className={'flex items-center justify-center'}>
                                <div
                                    className={'w-[246px] pt-[8px] flex justify-start items-center flex-col h-[295px] bg-[#F4F4F4] bg-opacity-50 border-main2 rounded-[10px] border-[2px]'}>
                                    <Image src={sagliksigortasvg} width={150} height={150} alt={''}/>
                                    <h4 className={'font-normal text-[25px] text-black'}>
                                        Sağlık Sigortası
                                    </h4>
                                    <div className={'mt-[20px] flex flex-row gap-[5px]'}>
                                        <div
                                            className={'px-[15px] group flex active:border-main1 active:bg-transparent justify-center items-center cursor-pointer hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-active:text-main2 group-hover:text-white text-base font-normal'}>
                                                Detaylar
                                            </h3>
                                        </div>
                                        <div
                                            className={'px-[15px] group flex justify-center items-center cursor-pointer active:bg-main1 active:!text-main2 hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-hover:text-white text-base font-normal'}>
                                                Teklif Al
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className={'flex items-center justify-center'}>
                                <div
                                    className={'w-[246px] pt-[8px] flex justify-start items-center flex-col h-[295px] bg-[#F4F4F4] bg-opacity-50 border-main2 rounded-[10px] border-[2px]'}>
                                    <Image src={evcilhayvansvg} width={150} height={150} alt={''}/>
                                    <h4 className={'font-normal text-[25px] text-black'}>
                                        Evcil Hayvan
                                    </h4>
                                    <div className={'mt-[20px] flex flex-row gap-[5px]'}>
                                        <div
                                            className={'px-[15px] group flex active:border-main1 active:bg-transparent justify-center items-center cursor-pointer hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-active:text-main2 group-hover:text-white text-base font-normal'}>
                                                Detaylar
                                            </h3>
                                        </div>
                                        <div
                                            className={'px-[15px] group flex justify-center items-center cursor-pointer active:bg-main1 active:!text-main2 hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-hover:text-white text-base font-normal'}>
                                                Teklif Al
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className={'flex items-center justify-center'}>
                                <div
                                    className={'w-[246px] pt-[8px] flex justify-start items-center flex-col h-[295px] bg-[#F4F4F4] bg-opacity-50 border-main2 rounded-[10px] border-[2px]'}>
                                    <Image src={tamamlayicisaglik} width={150} height={150} alt={''}/>
                                    <h4 className={'font-normal text-[25px] text-black'}>
                                        Tamamlayıcı Sağlık
                                    </h4>
                                    <div className={'mt-[20px] flex flex-row gap-[5px]'}>
                                        <div
                                            className={'px-[15px] group flex active:border-main1 active:bg-transparent justify-center items-center cursor-pointer hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-active:text-main2 group-hover:text-white text-base font-normal'}>
                                                Detaylar
                                            </h3>
                                        </div>
                                        <div
                                            className={'px-[15px] group flex justify-center items-center cursor-pointer active:bg-main1 active:!text-main2 hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-hover:text-white text-base font-normal'}>
                                                Teklif Al
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className={'flex items-center justify-center'}>
                                <div
                                    className={'w-[246px] pt-[8px] flex justify-start items-center flex-col h-[295px] bg-[#F4F4F4] bg-opacity-50 border-main2 rounded-[10px] border-[2px]'}>
                                    <Image src={seyehatsvg} width={150} height={150} alt={''}/>
                                    <h4 className={'font-normal text-[25px] text-black'}>
                                        Seyehat Sigortası
                                    </h4>
                                    <div className={'mt-[20px] flex flex-row gap-[5px]'}>
                                        <div
                                            className={'px-[15px] group active:border-main1 active:bg-transparent flex justify-center items-center cursor-pointer hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-active:text-main2 group-hover:text-white text-base font-normal'}>
                                                Detaylar
                                            </h3>
                                        </div>
                                        <div
                                            className={'px-[15px] group flex justify-center items-center cursor-pointer active:bg-main1 active:!text-main2 hover:bg-main2 hover:border-opacity-0 py-[5px] border-main2 border-[2px] rounded-[10px]'}>
                                            <h3 className={'text-main1 group-hover:text-white text-base font-normal'}>
                                                Teklif Al
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div onClick={() => {
                        handleNext()
                    }} className={'cursor-pointer -ml-4 '}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path
                                d="M20.0977 5.43982C18.7305 5.43982 17.4154 5.6156 16.1523 5.96716C14.8893 6.31873 13.6979 6.82003 12.5781 7.47107C11.4583 8.12211 10.4557 8.89685 9.57031 9.79529C8.6849 10.6937 7.91016 11.7028 7.24609 12.8226C6.58203 13.9424 6.08073 15.1273 5.74219 16.3773C5.40365 17.6273 5.22135 18.9489 5.19531 20.3422C5.19531 21.7094 5.37109 23.0245 5.72266 24.2875C6.07422 25.5505 6.57552 26.7419 7.22656 27.8617C7.8776 28.9815 8.65234 29.9841 9.55078 30.8695C10.4492 31.7549 11.4583 32.5297 12.5781 33.1937C13.6979 33.8578 14.8828 34.3591 16.1328 34.6976C17.3828 35.0362 18.7044 35.2185 20.0977 35.2445C21.4648 35.2445 22.7799 35.0687 24.043 34.7172C25.306 34.3656 26.4974 33.8643 27.6172 33.2133C28.737 32.5622 29.7396 31.7875 30.625 30.889C31.5104 29.9906 32.2852 28.9815 32.9492 27.8617C33.6133 26.7419 34.1146 25.557 34.4531 24.307C34.7917 23.057 34.974 21.7354 35 20.3422C35 18.975 34.8242 17.6599 34.4727 16.3969C34.1211 15.1338 33.6198 13.9489 32.9688 12.8422C32.3177 11.7354 31.5365 10.7263 30.625 9.81482C29.7135 8.90336 28.7109 8.12862 27.6172 7.4906C26.5234 6.85258 25.3385 6.35128 24.0625 5.98669C22.7865 5.62211 21.4648 5.43982 20.0977 5.43982ZM20.0977 2.93982C21.6992 2.93982 23.2357 3.14815 24.707 3.56482C26.1784 3.98149 27.5651 4.56742 28.8672 5.32263C30.1693 6.07784 31.3411 6.98279 32.3828 8.03748C33.4245 9.09216 34.3359 10.2705 35.1172 11.5726C35.8984 12.8747 36.4844 14.2549 36.875 15.7133C37.2656 17.1716 37.474 18.7146 37.5 20.3422C37.5 21.9437 37.2917 23.4802 36.875 24.9515C36.4583 26.4229 35.8724 27.8096 35.1172 29.1117C34.362 30.4138 33.457 31.5857 32.4023 32.6273C31.3477 33.669 30.1693 34.5804 28.8672 35.3617C27.5651 36.1429 26.1849 36.7289 24.7266 37.1195C23.2682 37.5101 21.7253 37.7185 20.0977 37.7445C18.4961 37.7445 16.9596 37.5362 15.4883 37.1195C14.0169 36.7028 12.6302 36.1169 11.3281 35.3617C10.026 34.6065 8.85417 33.7015 7.8125 32.6469C6.77083 31.5922 5.85938 30.4138 5.07812 29.1117C4.29688 27.8096 3.71094 26.4294 3.32031 24.9711C2.92969 23.5127 2.72135 21.9698 2.69531 20.3422C2.69531 18.7406 2.90365 17.2041 3.32031 15.7328C3.73698 14.2614 4.32292 12.8747 5.07812 11.5726C5.83333 10.2705 6.73828 9.09867 7.79297 8.05701C8.84766 7.01534 10.026 6.10388 11.3281 5.32263C12.6302 4.54138 14.0104 3.95544 15.4688 3.56482C16.9271 3.17419 18.4701 2.96586 20.0977 2.93982ZM18.3789 29.4437L16.6211 27.6859L23.8477 20.4398L16.6211 13.1937L18.3789 11.4359L27.3828 20.4398L18.3789 29.4437Z"
                                fill="#171827"/>
                        </svg>
                    </div>
                </div>
                <div className={'w-full flex justify-center z-20 items-center'}>
                    <div className={'mt-[50px] cursor-pointer flex justify-center items-center w-[384px] h-[84px] rounded-[10px] active:bg-main1 text-black active:text-main2 bg-main2 shdw1'}>
                        <h3 className={'font-semibold select-none text-[28px] uppercase '}>
                            TÜM ÜRÜNLERİMİZ
                        </h3>
                    </div>
                </div>
            </div>
            <Image className={' top-0 z-10 absolute select-none bg-main3 left-0 w-full h-full object-cover bg-cover'}
                   src={urunlerbg} width={1439}
                   height={677} alt={''}/>
        </div>
    );
};

export default Hizmetler;
