import React from 'react';
import footerbg from '@/public/footerbg.svg'
import Image from "next/image";
import logoexamp from '@/public/logoexamp.svg'
const Footer = () => {
    return (
        <div className={'relative flex justify-center py-[50px] sm:py-[20px] min-h-[500px]'}>
            <div className={'z-20 text-white w-full juıst items-center flex flex-col'}>
                <div className={'flex flex-row gap-[135px] justify-center items-center flex-wrap text-white py-[60px]'}>
                    <div className={'flex flex-col gap-[33px]'}>
                        <Image src={logoexamp} width={204} height={85} alt={''}/>
                        <p className={'text-[14px] text-white font-normal w-[258px]'}>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...
                        </p>
                        <div className={'flex flex-row gap-[11px]'}>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.7472 10.1841H26.2525C29.8736 10.1841 32.8157 13.1262 32.8157 16.7472V26.2525C32.8157 27.9932 32.1242 29.6625 30.8934 30.8934C29.6625 32.1242 27.9932 32.8157 26.2525 32.8157H16.7472C13.1262 32.8157 10.1841 29.8736 10.1841 26.2525V16.7472C10.1841 15.0066 10.8756 13.3372 12.1064 12.1064C13.3372 10.8756 15.0066 10.1841 16.7472 10.1841ZM16.5209 12.4472C15.4405 12.4472 14.4044 12.8764 13.6404 13.6404C12.8764 14.4044 12.4472 15.4405 12.4472 16.5209V26.4788C12.4472 28.7307 14.2691 30.5525 16.5209 30.5525H26.4788C27.5592 30.5525 28.5954 30.1233 29.3594 29.3593C30.1233 28.5954 30.5525 27.5592 30.5525 26.4788V16.5209C30.5525 14.2691 28.7307 12.4472 26.4788 12.4472H16.5209ZM27.4407 14.1446C27.8158 14.1446 28.1756 14.2936 28.4408 14.5589C28.7061 14.8242 28.8551 15.1839 28.8551 15.5591C28.8551 15.9342 28.7061 16.294 28.4408 16.5593C28.1756 16.8245 27.8158 16.9736 27.4407 16.9736C27.0655 16.9736 26.7057 16.8245 26.4405 16.5593C26.1752 16.294 26.0262 15.9342 26.0262 15.5591C26.0262 15.1839 26.1752 14.8242 26.4405 14.5589C26.7057 14.2936 27.0655 14.1446 27.4407 14.1446ZM21.4999 15.842C23.0004 15.842 24.4395 16.4381 25.5006 17.4991C26.5617 18.5602 27.1578 19.9993 27.1578 21.4999C27.1578 23.0004 26.5617 24.4395 25.5006 25.5006C24.4395 26.5617 23.0004 27.1578 21.4999 27.1578C19.9993 27.1578 18.5602 26.5617 17.4991 25.5006C16.4381 24.4395 15.842 23.0004 15.842 21.4999C15.842 19.9993 16.4381 18.5602 17.4991 17.4991C18.5602 16.4381 19.9993 15.842 21.4999 15.842ZM21.4999 18.1051C20.5995 18.1051 19.7361 18.4628 19.0994 19.0994C18.4628 19.7361 18.1051 20.5995 18.1051 21.4999C18.1051 22.4002 18.4628 23.2637 19.0994 23.9003C19.7361 24.537 20.5995 24.8946 21.4999 24.8946C22.4002 24.8946 23.2637 24.537 23.9003 23.9003C24.537 23.2637 24.8946 22.4002 24.8946 21.4999C24.8946 20.5995 24.537 19.7361 23.9003 19.0994C23.2637 18.4628 22.4002 18.1051 21.4999 18.1051Z"
                                    fill="white"/>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="19.5" stroke="white"/>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="19.5" stroke="white"/>
                            </svg>

                            <svg width="44" height="43" viewBox="0 0 44 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_124_475)">
                                    <path
                                        d="M11.7197 14.7104C11.7197 14.1102 11.9582 13.5346 12.3826 13.1101C12.807 12.6857 13.3827 12.4473 13.9829 12.4473H29.825C30.4252 12.4473 31.0009 12.6857 31.4253 13.1101C31.8497 13.5346 32.0881 14.1102 32.0881 14.7104V26.0262C32.0881 26.6264 31.8497 27.2021 31.4253 27.6265C31.0009 28.0509 30.4252 28.2894 29.825 28.2894H13.9829C13.3827 28.2894 12.807 28.0509 12.3826 27.6265C11.9582 27.2021 11.7197 26.6264 11.7197 26.0262V14.7104Z"
                                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.7197 14.7104L21.9039 21.4999L32.0881 14.7104" stroke="white"
                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <rect x="0.904297" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.904297" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.904297" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.904297" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.904297" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.904297" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.904297" y="0.5" width="42" height="42" rx="19.5" stroke="white"/>
                                <defs>
                                    <clipPath id="clip0_124_475">
                                        <rect width="27.1579" height="27.1579" fill="white"
                                              transform="translate(8.3252 6.78955)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg width="44" height="43" viewBox="0 0 44 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M13.6286 21.4999C13.6288 19.7578 14.1323 18.0527 15.0788 16.5893C16.0253 15.1258 17.3745 13.9662 18.9646 13.2495C20.5547 12.5329 22.3181 12.2896 24.0432 12.5489C25.7683 12.8083 27.3819 13.5592 28.6902 14.7115C29.9986 15.8639 30.9462 17.3688 31.4193 19.0456C31.8924 20.7224 31.871 22.5 31.3576 24.1649C30.8441 25.8299 29.8605 27.3116 28.5248 28.4321C27.189 29.5527 25.5578 30.2646 23.827 30.4823V23.763H26.0933C26.3938 23.763 26.682 23.6438 26.8946 23.4316C27.1071 23.2194 27.2264 22.9316 27.2264 22.6315C27.2264 22.3313 27.1071 22.0435 26.8946 21.8313C26.682 21.6191 26.3938 21.4999 26.0933 21.4999H23.827V19.2367C23.827 18.9366 23.9464 18.6488 24.1589 18.4366C24.3714 18.2244 24.6596 18.1051 24.9601 18.1051H25.5267C25.8272 18.1051 26.1155 17.9859 26.328 17.7737C26.5405 17.5615 26.6599 17.2737 26.6599 16.9736C26.6599 16.6734 26.5405 16.3856 26.328 16.1734C26.1155 15.9612 25.8272 15.842 25.5267 15.842H24.9601C24.0585 15.842 23.1939 16.1996 22.5564 16.8363C21.9188 17.4729 21.5607 18.3364 21.5607 19.2367V21.4999H19.2944C18.9938 21.4999 18.7056 21.6191 18.4931 21.8313C18.2806 22.0435 18.1612 22.3313 18.1612 22.6315C18.1612 22.9316 18.2806 23.2194 18.4931 23.4316C18.7056 23.6438 18.9938 23.763 19.2944 23.763H21.5607V30.4823C19.37 30.2065 17.3553 29.1417 15.8949 27.4879C14.4345 25.8341 13.6286 23.7049 13.6286 21.4999ZM22.6938 32.8157C28.9522 32.8157 34.0254 27.7496 34.0254 21.4999C34.0254 15.2502 28.9522 10.1841 22.6938 10.1841C16.4354 10.1841 11.3623 15.2502 11.3623 21.4999C11.3623 27.7496 16.4354 32.8157 22.6938 32.8157Z"
                                      fill="white"/>
                                <rect x="1.30811" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="1.30811" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="1.30811" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="1.30811" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="1.30811" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="1.30811" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="1.30811" y="0.5" width="42" height="42" rx="19.5" stroke="white"/>
                            </svg>

                            <svg width="44" height="43" viewBox="0 0 44 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_124_461)">
                                    <mask id="mask0_124_461" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse"
                                          x="10" y="9" width="24" height="24">
                                        <path d="M10.3965 9.69873H33.0281V32.3303H10.3965V9.69873Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_124_461)">
                                        <path
                                            d="M28.2189 10.7593H31.6896L24.108 19.4466L33.0281 31.27H26.0446L20.571 24.1006L14.315 31.27H10.841L18.9496 21.9748L10.3965 10.7609H17.5578L22.4979 17.3127L28.2189 10.7593ZM26.9984 29.1878H28.9221L16.507 12.7331H14.4443L26.9984 29.1878Z"
                                            fill="white"/>
                                    </g>
                                </g>
                                <rect x="0.712402" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.712402" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.712402" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.712402" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.712402" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.712402" y="0.5" width="42" height="42" rx="19.5" stroke="#D99BFF"/>
                                <rect x="0.712402" y="0.5" width="42" height="42" rx="19.5" stroke="white"/>
                                <defs>
                                    <clipPath id="clip0_124_461">
                                        <rect width="22.6316" height="22.6316" fill="white"
                                              transform="translate(10.3965 11.3154)"/>
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>
                    </div>
                    <div className={'flex flex-col gap-[17px]'}>
                        <h3 className={'dmsansbold text-[20px] text-white'}>
                            MENÜ
                        </h3>
                        <ul className={'flex gap-[19px] flex-col'}>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.089 11.2931C13.2452 11.4807 13.333 11.735 13.333 12.0001C13.333 12.2653 13.2452 12.5196 13.089 12.7071L8.37485 18.3641C8.29798 18.4597 8.20603 18.5358 8.10436 18.5882C8.00269 18.6407 7.89334 18.6682 7.78269 18.6694C7.67204 18.6705 7.5623 18.6452 7.45989 18.595C7.35748 18.5447 7.26443 18.4704 7.18619 18.3765C7.10795 18.2826 7.04607 18.171 7.00417 18.0481C6.96227 17.9252 6.94118 17.7935 6.94214 17.6607C6.94311 17.528 6.96609 17.3967 7.00977 17.2747C7.05344 17.1527 7.11693 17.0424 7.19652 16.9501L11.3215 12.0001L7.19652 7.05014C7.04472 6.86154 6.96073 6.60894 6.96262 6.34674C6.96452 6.08455 7.05216 5.83373 7.20667 5.64833C7.36118 5.46292 7.57019 5.35775 7.78868 5.35547C8.00718 5.35319 8.21768 5.45399 8.37485 5.63614L13.089 11.2931Z"
                                          fill="#FFA412"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    Aydınlatma Metni
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.089 11.2931C13.2452 11.4807 13.333 11.735 13.333 12.0001C13.333 12.2653 13.2452 12.5196 13.089 12.7071L8.37485 18.3641C8.29798 18.4597 8.20603 18.5358 8.10436 18.5882C8.00269 18.6407 7.89334 18.6682 7.78269 18.6694C7.67204 18.6705 7.5623 18.6452 7.45989 18.595C7.35748 18.5447 7.26443 18.4704 7.18619 18.3765C7.10795 18.2826 7.04607 18.171 7.00417 18.0481C6.96227 17.9252 6.94118 17.7935 6.94214 17.6607C6.94311 17.528 6.96609 17.3967 7.00977 17.2747C7.05344 17.1527 7.11693 17.0424 7.19652 16.9501L11.3215 12.0001L7.19652 7.05014C7.04472 6.86154 6.96073 6.60894 6.96262 6.34674C6.96452 6.08455 7.05216 5.83373 7.20667 5.64833C7.36118 5.46292 7.57019 5.35775 7.78868 5.35547C8.00718 5.35319 8.21768 5.45399 8.37485 5.63614L13.089 11.2931Z"
                                          fill="#FFA412"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    Kişisel Verilen Korunması
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.089 11.2931C13.2452 11.4807 13.333 11.735 13.333 12.0001C13.333 12.2653 13.2452 12.5196 13.089 12.7071L8.37485 18.3641C8.29798 18.4597 8.20603 18.5358 8.10436 18.5882C8.00269 18.6407 7.89334 18.6682 7.78269 18.6694C7.67204 18.6705 7.5623 18.6452 7.45989 18.595C7.35748 18.5447 7.26443 18.4704 7.18619 18.3765C7.10795 18.2826 7.04607 18.171 7.00417 18.0481C6.96227 17.9252 6.94118 17.7935 6.94214 17.6607C6.94311 17.528 6.96609 17.3967 7.00977 17.2747C7.05344 17.1527 7.11693 17.0424 7.19652 16.9501L11.3215 12.0001L7.19652 7.05014C7.04472 6.86154 6.96073 6.60894 6.96262 6.34674C6.96452 6.08455 7.05216 5.83373 7.20667 5.64833C7.36118 5.46292 7.57019 5.35775 7.78868 5.35547C8.00718 5.35319 8.21768 5.45399 8.37485 5.63614L13.089 11.2931Z"
                                          fill="#FFA412"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    Kullanıcı Sözleşmesi
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.089 11.2931C13.2452 11.4807 13.333 11.735 13.333 12.0001C13.333 12.2653 13.2452 12.5196 13.089 12.7071L8.37485 18.3641C8.29798 18.4597 8.20603 18.5358 8.10436 18.5882C8.00269 18.6407 7.89334 18.6682 7.78269 18.6694C7.67204 18.6705 7.5623 18.6452 7.45989 18.595C7.35748 18.5447 7.26443 18.4704 7.18619 18.3765C7.10795 18.2826 7.04607 18.171 7.00417 18.0481C6.96227 17.9252 6.94118 17.7935 6.94214 17.6607C6.94311 17.528 6.96609 17.3967 7.00977 17.2747C7.05344 17.1527 7.11693 17.0424 7.19652 16.9501L11.3215 12.0001L7.19652 7.05014C7.04472 6.86154 6.96073 6.60894 6.96262 6.34674C6.96452 6.08455 7.05216 5.83373 7.20667 5.64833C7.36118 5.46292 7.57019 5.35775 7.78868 5.35547C8.00718 5.35319 8.21768 5.45399 8.37485 5.63614L13.089 11.2931Z"
                                          fill="#FFA412"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    Gizlilik Sözleşmesi
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.089 11.2931C13.2452 11.4807 13.333 11.735 13.333 12.0001C13.333 12.2653 13.2452 12.5196 13.089 12.7071L8.37485 18.3641C8.29798 18.4597 8.20603 18.5358 8.10436 18.5882C8.00269 18.6407 7.89334 18.6682 7.78269 18.6694C7.67204 18.6705 7.5623 18.6452 7.45989 18.595C7.35748 18.5447 7.26443 18.4704 7.18619 18.3765C7.10795 18.2826 7.04607 18.171 7.00417 18.0481C6.96227 17.9252 6.94118 17.7935 6.94214 17.6607C6.94311 17.528 6.96609 17.3967 7.00977 17.2747C7.05344 17.1527 7.11693 17.0424 7.19652 16.9501L11.3215 12.0001L7.19652 7.05014C7.04472 6.86154 6.96073 6.60894 6.96262 6.34674C6.96452 6.08455 7.05216 5.83373 7.20667 5.64833C7.36118 5.46292 7.57019 5.35775 7.78868 5.35547C8.00718 5.35319 8.21768 5.45399 8.37485 5.63614L13.089 11.2931Z"
                                          fill="#FFA412"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    Sigortalar
                                </p>
                            </li>

                        </ul>
                    </div>
                    <div className={'flex flex-col gap-[17px]'}>
                        <h3 className={'dmsansbold text-[20px] text-white'}>
                            İLETİŞİM
                        </h3>
                        <ul className={'flex gap-[19px] flex-col'}>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M15.6 14.5221C13.205 17.0421 7.09603 10.9881 9.50003 8.45811C10.968 6.91311 9.31003 5.14811 8.39203 3.84911C6.66903 1.41411 2.88803 4.77611 3.00203 6.91511C3.36503 13.6611 10.662 21.6551 17.728 20.9571C19.938 20.7391 22.478 16.7471 19.942 15.2881C18.675 14.5581 16.934 13.1181 15.6 14.5211"
                                        stroke="#FFA412" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    +90 555 555 55 55
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M4.615 19C4.155 19 3.771 18.846 3.463 18.538C3.15433 18.2293 3 17.845 3 17.385V6.615C3 6.155 3.15433 5.771 3.463 5.463C3.771 5.15433 4.155 5 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.8457 5.771 21 6.155 21 6.615V17.385C21 17.845 20.846 18.229 20.538 18.537C20.2293 18.8457 19.845 19 19.385 19H4.615ZM12 12.115L20 6.885L19.692 6L12 11L4.308 6L4 6.885L12 12.115Z"
                                        fill="#F5A526"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    admin@deneme.com
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M12 22C12 22 19.5 16 19.5 9.5C19.5 5.358 16.142 2 12 2C7.858 2 4.5 5.358 4.5 9.5C4.5 16 12 22 12 22Z"
                                        stroke="#FFA412" stroke-width="2" stroke-linejoin="round"/>
                                    <path
                                        d="M12 12.5C12.394 12.5 12.7841 12.4224 13.1481 12.2716C13.512 12.1209 13.8427 11.8999 14.1213 11.6213C14.3999 11.3427 14.6209 11.012 14.7716 10.6481C14.9224 10.2841 15 9.89397 15 9.5C15 9.10603 14.9224 8.71593 14.7716 8.35195C14.6209 7.98797 14.3999 7.65726 14.1213 7.37868C13.8427 7.1001 13.512 6.87913 13.1481 6.72836C12.7841 6.5776 12.394 6.5 12 6.5C11.2044 6.5 10.4413 6.81607 9.87868 7.37868C9.31607 7.94129 9 8.70435 9 9.5C9 10.2956 9.31607 11.0587 9.87868 11.6213C10.4413 12.1839 11.2044 12.5 12 12.5Z"
                                        stroke="#FFA412" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    Gölköy, 14020 Bolu Merkez/Bolu
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                        stroke="#FFA412" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M11 8V13H16" stroke="#FFA412" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                                <p className={'dmsansbold w-[250px] text-[15px] text-[#BCBCBC]'}>
                                    Mon – Sat: 8:00 am to 6:00 pm Sunday:Closed
                                </p>
                            </li>
                            <li className={'flex flex-row items-center gap-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.089 11.2931C13.2452 11.4807 13.333 11.735 13.333 12.0001C13.333 12.2653 13.2452 12.5196 13.089 12.7071L8.37485 18.3641C8.29798 18.4597 8.20603 18.5358 8.10436 18.5882C8.00269 18.6407 7.89334 18.6682 7.78269 18.6694C7.67204 18.6705 7.5623 18.6452 7.45989 18.595C7.35748 18.5447 7.26443 18.4704 7.18619 18.3765C7.10795 18.2826 7.04607 18.171 7.00417 18.0481C6.96227 17.9252 6.94118 17.7935 6.94214 17.6607C6.94311 17.528 6.96609 17.3967 7.00977 17.2747C7.05344 17.1527 7.11693 17.0424 7.19652 16.9501L11.3215 12.0001L7.19652 7.05014C7.04472 6.86154 6.96073 6.60894 6.96262 6.34674C6.96452 6.08455 7.05216 5.83373 7.20667 5.64833C7.36118 5.46292 7.57019 5.35775 7.78868 5.35547C8.00718 5.35319 8.21768 5.45399 8.37485 5.63614L13.089 11.2931Z"
                                          fill="#FFA412"/>
                                </svg>
                                <p className={'dmsansbold text-[15px] text-[#BCBCBC]'}>
                                    Sigortalar
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={'sm:px-40 w-full'}>
                    <div className={'mt-[41px] w-full h-[1px] bg-main2'}></div>
                </div>
                <h5 className={'mt-[30px]'}>
                © All Copyright 2023 by Sümeyye Cengiz
                </h5>
            </div>
            <Image className={'absolute top-0 object-cover left-0 h-full w-full -z-10 '} src={footerbg} width={1440} height={500} alt={''}/>
        </div>
    );
};

export default Footer;
