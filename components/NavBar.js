"use client"

import React, {useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavBar = () => {
    const [menu,setMenu] = useState(false)
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className={'w-full h-full  relative  '}>

            <div className={'w-full h-fit absolute px-12 sm:px-24 z-40 left-0 top-0  '}>
                <div
                    className={`${menu ? '!right-0' : 'right-[-500px]'} z-40 lg:!right-[-500px]     gap-[50px] pt-[50px] transition-all duration-300 ease-in fixed top-0 flex items-center flex-col pt[50px] right-[-500px]  bg-white shadow-2xl w-[400px] h-screen`}>
                    <svg onClick={() => {
                        setMenu(prevState => !prevState)
                    }} className={'stroke-black cursor-pointer w-[50px] h-[50px]'} width="800px" height="800px"
                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="" strokeWidth="1.5"
                              strokeLinecap="round"/>
                        <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <h5 className={'integralbold sm:hidden flex text-[36px] text-main2'}>
                        logo
                    </h5>
                    <div className={'flex-col flex uppercase lg:hidden text-black items-center gap-[50px] lg:gap-[20px] xl:gap-[47px]'}>
                        <Link href={'/'} className={`${pathname === "/" ? "text-main2" : "text-black"}  hover:border-b-2 cursor-pointer hover:border-black uppercase `}>
                            ANASAYFA
                        </Link>
                        <Link
                            href={'/iletisim'}
                            className={`${
                                pathname === "/asd" ? "text-main2" : "text-black"
                            } hover:border-b-2 cursor-pointer hover:border-black uppercase`}
                        >
                            Hakkımızda
                        </Link>
                        <Link
                            href={'/urunler'}
                            className={`${
                                pathname === "/urunler" || pathname === "/urunler/detay" ? "text-main2" : "text-black"
                            } hover:border-b-2 cursor-pointer hover:border-black uppercase`}
                        >
                            Ürünler
                        </Link>

                        <Link
                            href={'/blog'}
                            className={`${
                                pathname === "/blog" ? "text-main2" : "text-black"
                            } hover:border-b-2 cursor-pointer hover:border-black uppercase`}
                        >
                            Blog
                        </Link>
                        <Link
                            href={'/iletisim'}
                            className={`${
                                pathname === "/iletisim" ? "text-main2" : "text-black"
                            } hover:border-b-2 cursor-pointer hover:border-black uppercase`}
                        >
                            İletişim
                        </Link>
                    </div>

                    <div className={'flex-col items-center flex  gap-[40px]'}>
                        <div
                            className={'2xl:w-[300px] lg:w-[200px] xl:w-[200px] cursor-pointer h-[50px] border-[2px] bg-[#FFFFFF] px-[20px] py-[14px] flex items-center justify-between border-[#EFEFEF] rounded-[100px]'}>
                            <input
                                className={'outline-none w-full active:outline-none dmsansmedium text-[#C0C0C0] text-[16px]'}
                                placeholder={'Search'} type="text"/>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                                    fill="#757575"/>
                                <path
                                    d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                                    fill="#757575"/>
                            </svg>
                        </div>

                    </div>
                </div>

                <div
                    className={'z-20 justify-around px-[10px] items-center flex  w-full h-[85px]  bg-main2 rounded-[10px]  mt-[26px]'}>
                    <h5 className={'text-[50px]'}>logo</h5>
                    <div className={'hidden lg:flex text-white flex-row font-semibold gap-[21.5px] 2xl:text-[20px] xl:text-[16px]'}>
                        <div className={'h-8'}>

                        </div>
                        <Link href={'/'} className={`${pathname === "/" ? "text-black" : "text-white"}  hover:border-b-2 cursor-pointer hover:border-black uppercase `}>
                            ANASAYFA
                        </Link>
                        <h2 className={`${pathname === "/asd" ? "text-black" : "text-white"}  hover:border-b-2 cursor-pointer hover:border-black uppercase `}>
                            HAKKIMIZDA
                        </h2>
                        <Link href={'/urunler'} className={`${pathname === "/urunler" || pathname === "/urunler/detay" ? "text-black" : "text-white"}  hover:border-b-2 cursor-pointer hover:border-black uppercase `}>
                            Ürünler
                        </Link>
                        <Link href={'/blog'}  className={`${pathname === "/blog" || pathname === "blog" ? "text-black" : "text-white"}  hover:border-b-2 cursor-pointer hover:border-black uppercase `}>
                            Blog
                        </Link>
                        <Link  href={'/iletisim                     '}  className={`${pathname === "/iletisim" || pathname === "iletisim" ? "text-black" : "text-white"}  hover:border-b-2 cursor-pointer hover:border-black uppercase `}>
                            İLETİŞİM
                        </Link>
                        <svg className={'cursor-pointer stroke-2 hover:!stroke-[3px]'}
                             xmlns="http://www.w3.org/2000/svg"
                             width="28" height="26" viewBox="0 0 28 26" fill="none">
                            <path
                                d="M26.335 25L17.9536 17M1.19067 10.3333C1.19067 11.559 1.4436 12.7727 1.93501 13.905C2.42642 15.0374 3.14669 16.0663 4.05469 16.933C4.9627 17.7997 6.04066 18.4872 7.22702 18.9562C8.41339 19.4253 9.68493 19.6667 10.969 19.6667C12.2532 19.6667 13.5247 19.4253 14.7111 18.9562C15.8974 18.4872 16.9754 17.7997 17.8834 16.933C18.7914 16.0663 19.5117 15.0374 20.0031 13.905C20.4945 12.7727 20.7474 11.559 20.7474 10.3333C20.7474 9.10766 20.4945 7.89399 20.0031 6.76162C19.5117 5.62925 18.7914 4.60035 17.8834 3.73367C16.9754 2.86699 15.8974 2.1795 14.7111 1.71046C13.5247 1.24141 12.2532 1 10.969 1C9.68493 1 8.41339 1.24141 7.22702 1.71046C6.04066 2.1795 4.9627 2.86699 4.05469 3.73367C3.14669 4.60035 2.42642 5.62925 1.93501 6.76162C1.4436 7.89399 1.19067 9.10766 1.19067 10.3333Z"
                                stroke="#F4F4F4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                    <div className={'lg:hidden flex'}>

                    </div>
                    <svg onClick={() => {setMenu(!menu)}} className={'w-[64px] lg:hidden cursor-pointer flex h-auto'} width="800px" height="800px"
                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
