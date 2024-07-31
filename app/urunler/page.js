"use client"
import Image from "next/image";
import {useState} from "react";
import urunlertop from '@/public/urunlertop.svg'

import KampanyaAlert from "@/components/KampanyaAlert";
import topbanner from '@/public/topbanner.svg'
import seyehatsvg from "@/public/seyehatsvg.svg";
import arachover from '@/public/arachover.png'
import konuthover from '@/public/konuthover.png'
import saglikhover from '@/public/saglikhover.png'
import depremhover from '@/public/depremhover.png'
import trafikhover from '@/public/trafikhover.png'
import isyerihover from '@/public/isyerihover.png'
import yanginhover from '@/public/yanginhover.png'
import evcilhover from '@/public/evcilhover.png'
import Link from "next/link";
export default function Home() {
    const selecthizmet = (e) => {
        setGeneral({...general, hizmetadi: `${e.target.textContent}`,hizmetmenu: false})

    }
    const [general,setGeneral] = useState({
        "hizmetmenu": true,
        "hizmetadi": "",

    })
  return (
      <div className={'w-full h-ful'}>
          <main className="flex   flex-col h-full relative justify-center  items-center   ">
              <div className={'w-full h-full pb-16 lg:pb-0 lg:h-[400px]  relative'}>
                  <div className={'z-0 flex flex-col items-center gap-6 lg:flex-row w-full justify-between px-[103px] mt-[169px]'}>
                      <div className={'flex flex-col gap-[20px]'}>
                          <h2 className={'rubiksbold text-[45px] sm:text-[60px] text-white'}>
                              ÜRÜNLERİMİZ
                          </h2>
                          <h3 className={'rubikm text-white text-[18px]'}>
                              ANASAYFA / <span className={'text-main2'}>
                              ÜRÜNLER
                          </span>
                          </h3>
                      </div>
                      <div>

                      </div>
                      <Image className={''} src={urunlertop} width={305} height={242} alt={''}/>
                      <div>

                      </div>

                  </div>
                  <Image className={'w-full -z-10 absolute top-0 left-0 h-full object-cover'} src={topbanner} width={1440} height={400} alt={''}/>
              </div>
              <div
                  className={'grid  pt-[113px] pb-[87px] xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 grid-rows-auto gap-[25px] gap-y-[50px]    bg-white'}>
                  <Link href={'/urunler/detay'} className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>
                              <svg className={'group-hover:hidden flex'} width="85" height="85" viewBox="0 0 85 85"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_92_4732)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                      <path
                                          d="M47.0333 35.5001L49.6667 41.3334H36.3333L38.7 35.5001H47.0333ZM38 43.0001C37.0833 43.0001 36.3333 43.7501 36.3333 44.6667C36.3333 45.5834 37.0833 46.3334 38 46.3334C38.9167 46.3334 39.6667 45.5834 39.6667 44.6667C39.6667 43.7501 38.9167 43.0001 38 43.0001ZM48 43.0001C47.0833 43.0001 46.3333 43.7501 46.3333 44.6667C46.3333 45.5834 47.0833 46.3334 48 46.3334C48.9167 46.3334 49.6667 45.5834 49.6667 44.6667C49.6667 43.7501 48.9167 43.0001 48 43.0001ZM58 31.3334V41.3334C58 50.5834 51.6 59.2334 43 61.3334C34.4 59.2334 28 50.5834 28 41.3334V31.3334L43 24.6667L58 31.3334ZM53 43.0001L49.4 34.6667C49.0667 33.7001 48.1333 33.0001 47.0333 33.0001H38.7C37.6 33.0001 36.6667 33.7001 36.3333 34.6667L33 43.0001V49.6667C33 50.5834 33.75 51.3334 34.6667 51.3334H36.3333C37.25 51.3334 38 50.5834 38 49.6667V48.0001H48V49.6667C48 50.5834 48.75 51.3334 49.6667 51.3334H51.3333C52.25 51.3334 53 50.5834 53 49.6667V43.0001Z"
                                          fill="#FFA412"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_92_4732">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>
                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={arachover} width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              Araç Sigortaları
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </Link>
                  <div className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>

                              <svg className={'group-hover:hidden flex'} width="85" height="85" viewBox="0 0 85 85" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                  <path
                                      d="M29.6667 56.3333V40.7083L26.6667 42.9999L24.7083 40.3749L43 26.3333L61.3333 40.3333L59.3333 42.9999L43 30.4999L33 38.1666V52.9999H38V56.3333H29.6667ZM47.875 59.6666L40.8333 52.5833L43.1667 50.2083L47.875 54.9166L57.3333 45.4999L59.6667 47.8749L47.875 59.6666Z"
                                      fill="#FFA412"/>
                              </svg>

                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={konuthover} width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              Konut Sigortaları
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </div>
                  <div className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>

                              <svg  className={'group-hover:hidden flex'} width="85" height="85" viewBox="0 0 85 85" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_92_4748)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M41.0592 28.6667C41.7801 28.2301 42.6068 27.9993 43.4496 27.9993C44.2924 27.9993 45.1191 28.2301 45.84 28.6667L47.5375 29.7051C49.9192 31.1609 52.6317 31.4851 55.3567 31.8117C56.2375 31.9176 57.1192 32.0226 57.9917 32.1667C57.9917 32.1667 58.0108 33.6951 57.9908 34.3884L57.8167 40.3476C57.6667 45.4584 55.3942 50.3042 51.4958 53.8259C49.6567 55.4867 47.7542 56.9876 45.5683 58.2342C44.9242 58.5987 44.2019 58.803 43.4623 58.8301C42.7227 58.8573 41.9874 58.7063 41.3183 58.3901C38.7942 57.1901 36.5592 55.6684 34.5183 53.8259C30.62 50.3042 28.3475 45.4584 28.1983 40.3476L28.025 34.4076C28.0042 33.7042 28.025 32.1667 28.025 32.1667C28.7333 32.0834 29.455 32.0142 30.1825 31.9451C33.3933 31.6401 36.7108 31.3251 39.4325 29.6617L41.0592 28.6667ZM41.3333 41.3334V35.5001H44.6667V41.3334H50.5V44.6667H44.6667V50.5001H41.3333V44.6667H35.5V41.3334H41.3333Z"
                                            fill="#FFA412"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_92_4748">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>

                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={saglikhover} width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              Sağlık Sigortaları
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </div>
                  <div className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>

                              <svg className={'group-hover:hidden flex'} width="85" height="85" viewBox="0 0 85 85" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_92_4756)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                      <path
                                          d="M31.3333 58C30.9251 58 30.5311 57.8501 30.2261 57.5788C29.921 57.3076 29.7261 56.9338 29.6783 56.5284L29.6667 56.3334V41.3334H24.6667L41.8783 25.6867C42.158 25.4322 42.5159 25.2803 42.8933 25.2561C43.2707 25.2319 43.6451 25.3367 43.955 25.5534L44.1217 25.6867L61.3333 41.3334H56.3333V56.3334C56.3333 56.7416 56.1834 57.1356 55.9121 57.4406C55.6409 57.7457 55.2671 57.9406 54.8617 57.9884L54.6667 58H31.3333ZM43 29.17L33 38.26V54.6667H40.2617L42.5833 52.1667L36.3333 46.3334L44.6667 41.3334L40.5 38L45.5 33L44.6667 38L48.8333 41.3334L42.1667 46.3334L48 51.3334L45.9167 54.6667H53V38.2617L43 29.17Z"
                                          fill="#FFA412"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_92_4756">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>

                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={depremhover}
                                     width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              Deprem Sigortası
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </div>
                  <div className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>

                              <svg className={'group-hover:hidden flex'} width="85" height="85" viewBox="0 0 85 85" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_130_111)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                  </g>
                                  <g clip-path="url(#clip1_130_111)">
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M49.2733 29.6667C50.2017 29.6668 51.1118 29.9253 51.9016 30.4134C52.6914 30.9014 53.3297 31.5997 53.745 32.4301L56.055 37.0484C56.4616 36.8817 56.8616 36.7017 57.255 36.5084C57.6506 36.3108 58.1085 36.2785 58.528 36.4185C58.9474 36.5585 59.2941 36.8595 59.4916 37.2551C59.6892 37.6507 59.7216 38.1086 59.5815 38.5281C59.4415 38.9475 59.1406 39.2942 58.745 39.4917C58.3444 39.6701 57.9416 39.8434 57.5366 40.0117L59.1383 43.2167C59.486 43.9117 59.6669 44.6781 59.6666 45.4551V49.6667C59.6677 50.3704 59.5197 51.0663 59.2324 51.7086C58.9452 52.3509 58.5251 52.9251 58 53.3934V55.5001C58 56.1631 57.7366 56.799 57.2677 57.2678C56.7989 57.7367 56.163 58.0001 55.5 58.0001C54.8369 58.0001 54.2011 57.7367 53.7322 57.2678C53.2634 56.799 53 56.1631 53 55.5001V54.6667H33V55.5001C33 56.1631 32.7366 56.799 32.2677 57.2678C31.7989 57.7367 31.163 58.0001 30.5 58.0001C29.8369 58.0001 29.2011 57.7367 28.7322 57.2678C28.2634 56.799 28 56.1631 28 55.5001V53.3934C26.9766 52.4767 26.3333 51.1467 26.3333 49.6667V45.4534C26.3336 44.6775 26.5145 43.9123 26.8616 43.2184L28.45 40.0384C28.0483 39.8684 27.65 39.6884 27.2583 39.4934C26.8647 39.2933 26.5655 38.9465 26.4252 38.5277C26.2849 38.109 26.3148 37.652 26.5083 37.2551C26.6061 37.0591 26.7415 36.8844 26.9068 36.7408C27.0722 36.5972 27.2642 36.4876 27.4719 36.4182C27.6796 36.3489 27.899 36.3212 28.1174 36.3366C28.3359 36.3521 28.5491 36.4105 28.745 36.5084C29.1383 36.7034 29.54 36.8817 29.945 37.0484L32.255 32.4317C32.6701 31.6011 33.3083 30.9024 34.0981 30.4141C34.8879 29.9257 35.7981 29.6669 36.7266 29.6667H49.2733ZM35.5 44.6667C34.8369 44.6667 34.2011 44.9301 33.7322 45.399C33.2634 45.8678 33 46.5037 33 47.1667C33 47.8298 33.2634 48.4657 33.7322 48.9345C34.2011 49.4034 34.8369 49.6667 35.5 49.6667C36.163 49.6667 36.7989 49.4034 37.2677 48.9345C37.7366 48.4657 38 47.8298 38 47.1667C38 46.5037 37.7366 45.8678 37.2677 45.399C36.7989 44.9301 36.163 44.6667 35.5 44.6667ZM50.5 44.6667C49.8369 44.6667 49.2011 44.9301 48.7322 45.399C48.2634 45.8678 48 46.5037 48 47.1667C48 47.8298 48.2634 48.4657 48.7322 48.9345C49.2011 49.4034 49.8369 49.6667 50.5 49.6667C51.163 49.6667 51.7989 49.4034 52.2677 48.9345C52.7366 48.4657 53 47.8298 53 47.1667C53 46.5037 52.7366 45.8678 52.2677 45.399C51.7989 44.9301 51.163 44.6667 50.5 44.6667ZM49.2733 33.0001H36.7266C36.4523 33 36.1822 33.0677 35.9403 33.1971C35.6984 33.3265 35.4922 33.5136 35.34 33.7417L35.2366 33.9217L33.12 38.1517C35.7 38.9251 39.1766 39.6667 43 39.6667C46.57 39.6667 49.835 39.0201 52.35 38.3051L52.8783 38.1517L50.7633 33.9217C50.6407 33.6764 50.4594 33.4652 50.2355 33.3067C50.0116 33.1483 49.7521 33.0475 49.48 33.0134L49.275 33.0001H49.2733Z"
                                            fill="#F5A526"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_130_111">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                      <clipPath id="clip1_130_111">
                                          <rect width="40" height="40" fill="white" transform="translate(23 23)"/>
                                      </clipPath>
                                  </defs>
                              </svg>

                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={trafikhover} width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              Trafik Sigortası
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </div>
                  <div className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>

                              <svg className={'group-hover:hidden flex'}  width="85" height="85" viewBox="0 0 85 85" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_92_4707)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                      <g clip-path="url(#clip1_92_4707)">
                                          <path
                                              d="M50.5 30.5V23H28V58H23V60.5H40.5V48H45.5V43H58V30.5H50.5ZM38 48H33V43H38V48ZM38 40.5H33V35.5H38V40.5ZM38 33H33V28H38V33ZM45.5 40.5H40.5V35.5H45.5V40.5ZM45.5 33H40.5V28H45.5V33ZM55.5 40.5H50.5V35.5H55.5V40.5ZM58 50.5H63V63H43V50.5H48V45.5H58V50.5Z"
                                              fill="#F5A526"/>
                                      </g>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_92_4707">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                      <clipPath id="clip1_92_4707">
                                          <rect width="40" height="40" fill="white" transform="translate(23 23)"/>
                                      </clipPath>
                                  </defs>
                              </svg>

                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={isyerihover} width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              İşyeri Sigortaları
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </div>
                  <div className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>

                              <svg className={'group-hover:hidden flex'}  width="85" height="85" viewBox="0 0 85 85" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_92_4715)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                      <path
                                          d="M43 63C51.285 63 58 58 58 49.25C58 45.5 56.75 39.25 51.75 34.25C52.375 38 48.625 39.25 48.625 39.25C50.5 33 45.5 24.25 38 23C38.8925 28 39.25 33 33 38C29.875 40.5 28 44.8225 28 49.25C28 58 34.715 63 43 63ZM43 60.5C38.8575 60.5 35.5 58 35.5 53.625C35.5 51.75 36.125 48.625 38.625 46.125C38.3125 48 40.5 49.25 40.5 49.25C39.5625 46.125 41.75 41.125 45.5 40.5C45.0525 43 44.875 45.5 48 48C49.5625 49.25 50.5 51.41 50.5 53.625C50.5 58 47.1425 60.5 43 60.5Z"
                                          fill="#FFA412"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_92_4715">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>

                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={yanginhover} width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              Yangın Sigortası
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </div>
                  <div className={'h-[300px]'}>
                      <div
                          className={'px-[36px] py-[36px] group asd pb-[58px] hover:border-b-[2px] hover:border-b-main2 gap-[22px] hover:-mt-2 transition-all duration-100 ease-in flex justify-start items-center flex-col h-fit bg-white hover:border-[#C1C1C1] cursor-pointer  border-main2 rounded-[10px] border-[2px]'}>
                          <div className={'h-[90px]'}>


                              <svg className={'group-hover:hidden flex'} width="85" height="85" viewBox="0 0 85 85" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_92_4723)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#DDDDDD"/>
                                      <path
                                          d="M52.9082 46.7949C52.31 44.6263 51.0168 42.7138 49.227 41.3509C47.4372 39.988 45.2497 39.2499 43 39.2499C40.7504 39.2499 38.5628 39.988 36.773 41.3509C34.9832 42.7138 33.69 44.6263 33.0918 46.7949L31.6662 51.9629C31.4102 52.8908 31.372 53.8653 31.5546 54.8104C31.7372 55.7554 32.1355 56.6456 32.7187 57.4114C33.3018 58.1772 34.054 58.7979 34.9165 59.2253C35.779 59.6526 36.7285 59.8749 37.6911 59.8749H48.3089C49.2715 59.8749 50.221 59.6526 51.0835 59.2253C51.946 58.7979 52.6982 58.1772 53.2813 57.4114C53.8645 56.6456 54.2629 55.7554 54.4454 54.8104C54.628 53.8653 54.5898 52.8908 54.3338 51.9629L52.9082 46.7949ZM51.2924 55.8965C50.9441 56.3577 50.4931 56.7314 49.9752 56.988C49.4574 57.2446 48.8869 57.3771 48.3089 57.3749H37.6911C37.1136 57.3749 36.5438 57.2415 36.0263 56.9851C35.5088 56.7288 35.0575 56.3563 34.7076 55.8968C34.3577 55.4373 34.1187 54.9032 34.0091 54.3362C33.8996 53.7691 33.9225 53.1844 34.0761 52.6277L35.5017 47.4598C35.9545 45.8186 36.9331 44.3713 38.2876 43.3399C39.6421 42.3085 41.2975 41.7499 43 41.7499C44.7025 41.7499 46.3579 42.3085 47.7124 43.3399C49.0669 44.3713 50.0455 45.8186 50.4983 47.4598L51.9239 52.6277C52.0797 53.1842 52.1038 53.7694 51.9942 54.3368C51.8845 54.9042 51.6443 55.4383 51.2924 55.8968V55.8965ZM34.4141 40.9929C34.6316 39.6335 34.3431 38.1783 33.6016 36.8942C32.86 35.6102 31.7438 34.6327 30.4581 34.1414C29.0812 33.6155 27.6768 33.6993 26.5023 34.3771C24.1673 35.7252 23.5529 39.0478 25.1328 41.7838C25.8741 43.0678 26.9905 44.0455 28.2762 44.5366C28.8457 44.7585 29.4511 44.8743 30.0623 44.878C30.8239 44.8808 31.5725 44.6816 32.232 44.3008C33.4058 43.6229 34.1808 42.4481 34.4141 40.9929ZM31.9453 40.5977C31.8336 41.2953 31.4914 41.8415 30.9818 42.1357C30.4722 42.4299 29.8281 42.453 29.168 42.2011C28.417 41.9143 27.7527 41.3221 27.2976 40.5338C26.4226 39.0181 26.6306 37.19 27.7523 36.5422C28.0343 36.3822 28.3536 36.2997 28.6778 36.3033C28.9819 36.3064 29.2829 36.3651 29.5659 36.4765C30.317 36.7634 30.9812 37.3555 31.4363 38.1439C31.8915 38.9323 32.0722 39.8039 31.9453 40.5977ZM34.6848 35.8137C35.5725 36.5234 36.5862 36.8929 37.6113 36.8928C37.9183 36.8927 38.2245 36.8597 38.5245 36.7943C41.1591 36.2216 42.7565 33.2441 42.0854 30.157C41.7705 28.708 41.0051 27.4369 39.9301 26.5774C38.7789 25.6571 37.4153 25.3087 36.0905 25.5969C33.4559 26.1695 31.8585 29.147 32.5295 32.2341C32.8445 33.6831 33.6099 34.9543 34.6848 35.8137ZM36.6214 28.0398C36.7429 28.0136 36.8668 28.0006 36.9911 28.0008C37.4558 28.0008 37.9338 28.1826 38.369 28.5305C38.9969 29.0325 39.4491 29.7988 39.6424 30.6884C40.0143 32.399 39.2591 34.0766 37.9934 34.3517C37.4184 34.4767 36.7977 34.3027 36.246 33.8615C35.6181 33.3595 35.1659 32.5931 34.9726 31.7036C34.6006 29.9926 35.3558 28.315 36.6214 28.0398ZM59.4977 34.3771C58.3237 33.6993 56.9186 33.6155 55.542 34.1414C54.2563 34.6326 53.1399 35.6102 52.3986 36.8942C51.6573 38.1783 51.3688 39.6338 51.5861 40.9929C51.8191 42.4481 52.5939 43.6229 53.7682 44.3008C54.4277 44.6816 55.1763 44.8808 55.9378 44.878C56.5491 44.8743 57.1544 44.7585 57.724 44.5366C59.0097 44.0455 60.126 43.0678 60.8673 41.7838C62.4471 39.0478 61.8327 35.7252 59.4977 34.3771ZM58.7024 40.5338C58.2473 41.3221 57.583 41.9143 56.832 42.2011C56.1722 42.4533 55.528 42.4301 55.0184 42.1357C54.5088 41.8413 54.1668 41.2953 54.0548 40.5977C53.9278 39.8039 54.1084 38.9326 54.5637 38.1446C55.0189 37.3566 55.6831 36.7641 56.4341 36.4772C56.7171 36.3657 57.0181 36.3069 57.3222 36.3037C57.6464 36.3001 57.9658 36.3826 58.2477 36.5426C59.3695 37.1898 59.5777 39.0177 58.7024 40.5338ZM47.4755 36.7943C47.7756 36.8597 48.0817 36.8927 48.3888 36.8928C49.4138 36.8928 50.4278 36.5234 51.3152 35.8137C52.3901 34.9544 53.1556 33.6831 53.4705 32.2342C54.1415 29.1471 52.5441 26.1696 49.9095 25.597C48.5848 25.309 47.2211 25.6571 46.0699 26.5775C44.9949 27.4369 44.2295 28.7081 43.9146 30.157C43.2435 33.2441 44.8409 36.2216 47.4755 36.7943ZM46.3576 30.688C46.5509 29.7984 47.0031 29.0318 47.631 28.5302C48.0663 28.1822 48.5442 28.0004 49.0089 28.0004C49.1332 28.0002 49.2571 28.0133 49.3786 28.0395C50.6442 28.3146 51.3994 29.9926 51.0276 31.7027C50.8341 32.5923 50.3819 33.359 49.7541 33.8607C49.2025 34.3018 48.5823 34.4759 48.0067 34.3509C46.7409 34.0762 45.9857 32.3984 46.3576 30.688Z"
                                          fill="#FFA412"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_92_4723">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>

                              <Image className={'group-hover:flex w-[85px] h-[92px] hidden'} src={evcilhover} width={85}
                                     height={92} alt={''}/>


                          </div>

                          <h2 className={'font-semibold group-hover:text-main2 text-[20px] text-black'}>
                              Evcil Hayvan
                          </h2>
                          <h5 className={' font-semibold text-[14px] text-[#A1A0A0] flex w-[200px] flex-row gap-[5px]'}>
                              Lorem ipsum dolor sit amet, sed consectetur adipiscing rutru metus et elit.
                          </h5>
                      </div>

                  </div>
              </div>
          </main>

          <KampanyaAlert/>
      </div>
  );
}
