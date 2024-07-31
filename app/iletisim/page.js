"use client"
import Image from "next/image";
import {useState} from "react";
import urunlertop from '@/public/urunlertop.svg'
import mapsvg from '@/public/map.svg'

import KampanyaAlert from "@/components/KampanyaAlert";
import topbanner from '@/public/topbanner.svg'
import iletisimsvg from '@/public/iletisim.svg'
import Link from "next/link";
import phonesvg from '@/public/phone.svg'
import arrow from "@/public/arrow.svg";
export default function Home() {
    const selecthizmet = (e) => {
        setGeneral({...general, hizmetadi: `${e.target.textContent}`,hizmetmenu: false})

    }
    const [general,setGeneral] = useState({
        "hizmetmenu": true,
        "hizmetadi": "",

    })
  return (
      <div className={'w-full h-full'}>
          <main className="flex   w-full flex-col h-full relative justify-center  items-center   ">
              <div className={'w-full h-full pb-16 lg:pb-0 lg:h-[400px]  relative'}>
                  <div className={'z-0 flex flex-col items-center gap-6 lg:flex-row w-full justify-between px-[103px] mt-[169px]'}>
                      <div className={'flex flex-col gap-[20px]'}>
                          <h2 className={'rubiksbold text-[45px] sm:text-[60px] text-white'}>
                              İLETİŞİM
                          </h2>
                          <h3 className={'rubikm text-white text-[18px]'}>
                              ANASAYFA / <span className={'text-[#FFA412]'}>
                              İLETİŞİM
                          </span>
                          </h3>
                      </div>
                      <div>

                      </div>
                      <Image className={''} src={iletisimsvg} width={305} height={242} alt={''}/>
                      <div>

                      </div>

                  </div>
                  <Image className={'w-full -z-10 absolute top-0 left-0 h-full object-cover'} src={topbanner} width={1440} height={400} alt={''}/>
              </div>
              <div className={'w-full flex flex-col items-center justify-start min-h-screen px-[120px] gap-4 bg-main2 py-[70px]'}>
                  <div className={'flex flex-col items-center lg:flex-row gap-4'}>
                      <div className={'flex flex-col items-center mt-[21px]'}>
                          <h4 className={'dmsansbold tracking-wide text-[55px] w-[380px] sm:w-[400px]'}>
                              Uzmanlarla İletişime Geçin!
                          </h4>
                          <div className={'mt-[38px] flex flex-col gap-[20px]'}>
                              <div className={'flex flex-row  items-center gap-[9px]'}>
                                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M43.3333 35.8333C41.3333 35.8333 39.1667 35.5 37.3333 34.8333H36.8333C36.3333 34.8333 36 35 35.6667 35.3333L32 39C27.3333 36.5 23.3333 32.6667 21 28L24.6667 24.3333C25.1667 23.8333 25.3333 23.1667 25 22.6667C24.5 20.8333 24.1667 18.6667 24.1667 16.6667C24.1667 15.8333 23.3333 15 22.5 15H16.6667C15.8333 15 15 15.8333 15 16.6667C15 32.3333 27.6667 45 43.3333 45C44.1667 45 45 44.1667 45 43.3333V37.5C45 36.6667 44.1667 35.8333 43.3333 35.8333ZM18.3333 18.3333H20.8333C21 19.8333 21.3333 21.3333 21.6667 22.6667L19.6667 24.6667C19 22.6667 18.5 20.5 18.3333 18.3333ZM41.6667 41.6667C39.5 41.5 37.3333 41 35.3333 40.3333L37.3333 38.3333C38.6667 38.6667 40.1667 39 41.6667 39V41.6667ZM35 30H38.3333C38.3333 27.7899 37.4554 25.6702 35.8926 24.1074C34.3298 22.5446 32.2101 21.6667 30 21.6667V25C31.3261 25 32.5979 25.5268 33.5355 26.4645C34.4732 27.4021 35 28.6739 35 30ZM41.6667 30H45C45 21.6667 38.2833 15 30 15V18.3333C36.4333 18.3333 41.6667 23.55 41.6667 30Z"
                                          fill="#F4F4F4"/>
                                      <circle cx="30" cy="30" r="28.5" stroke="white" stroke-width="3"/>
                                  </svg>
                                  <h5 className={'dmsansbold  text-[20px] lg:text-[25px]  text-black'}>
                                      +90 555 55 55
                                  </h5>

                              </div>
                              <div className={'flex flex-row items-center gap-[9px]'}>
                                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M16.6666 41.3334C15.7499 41.3334 14.9655 41.0073 14.3133 40.3551C13.661 39.7029 13.3344 38.9179 13.3333 38.0001V18.0001C13.3333 17.0834 13.6599 16.299 14.3133 15.6467C14.9666 14.9945 15.751 14.6679 16.6666 14.6667H43.3333C44.2499 14.6667 45.0349 14.9934 45.6883 15.6467C46.3416 16.3001 46.6677 17.0845 46.6666 18.0001V38.0001C46.6666 38.9167 46.3405 39.7017 45.6883 40.3551C45.036 41.0084 44.251 41.3345 43.3333 41.3334H16.6666ZM29.9999 29.6667L16.6666 21.3334V38.0001H43.3333V21.3334L29.9999 29.6667ZM29.9999 26.3334L43.3333 18.0001H16.6666L29.9999 26.3334ZM16.6666 21.3334V18.0001V38.0001V21.3334Z"
                                          fill="#F4F4F4"/>
                                      <circle cx="30" cy="30" r="28.5" stroke="white" stroke-width="3"/>
                                  </svg>

                                  <h5 className={'dmsansbold  text-[20px] lg:text-[25px] text-black'}>
                                      deneme@sigorta.com
                                  </h5>

                              </div>
                              <div className={'flex flex-row  gap-[9px]'}>
                                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M30 13.75C23.7891 13.75 18.75 18.5461 18.75 24.4531C18.75 31.25 26.25 42.0211 29.0039 45.7414C29.1182 45.8985 29.268 46.0262 29.4412 46.1144C29.6143 46.2025 29.8058 46.2484 30 46.2484C30.1942 46.2484 30.3857 46.2025 30.5588 46.1144C30.732 46.0262 30.8818 45.8985 30.9961 45.7414C33.75 42.0227 41.25 31.2555 41.25 24.4531C41.25 18.5461 36.2109 13.75 30 13.75Z"
                                          stroke="#F4F4F4" stroke-width="2.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                      <path
                                          d="M30 28.75C32.0711 28.75 33.75 27.0711 33.75 25C33.75 22.9289 32.0711 21.25 30 21.25C27.9289 21.25 26.25 22.9289 26.25 25C26.25 27.0711 27.9289 28.75 30 28.75Z"
                                          stroke="#F4F4F4" stroke-width="2.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                      <circle cx="30" cy="30" r="28.5" stroke="white" stroke-width="3"/>
                                  </svg>

                                  <h5 className={'dmsansbold mt-2 w-[300px] sm:w-[350px]  text-[20px] lg:text-[25px]  text-black'}>
                                      30 Commecial Broklyn Road Fratton, Australia
                                  </h5>

                              </div>
                          </div>
                      </div>
                      <Image className={'sm:w-[500px] w-[350px] md:w-[600px]  h-auto lg:w-[450px] xl:w-[550px] 2xl:w-[745px] object-cover l:h-[520px]'} src={phonesvg} width={745} height={489}
                             alt={''}/>
                  </div>
                  <div className={'mt-[52px] flex flex-col'}>
                      <h4 className={'dmsansm tracking-wide text-[48px]'}>
                          İLETİŞİM FORMU
                      </h4>
                      <div className={'mt-[75px] flex flex-col gap-[8px]'}>
                          <div className={'flex flex-wrap flex-col lg:flex-row gap-[41px]'}>
                              <div className={'flex flex-wrap flex-col gap-[8px]'}>
                                  <h5 className={'dmsansbold text-[#171827] text-[22px]'}>
                                      İsim
                                  </h5>
                                  <div className={'w-[367px] h-[60px] rounded-[10px] bg-white bg-opacity-[61%]'}>
                                      <input className={'outline-none w-full h-full rounded-[10px] bg-transparent p-2'}
                                             type="text"/>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[8px]'}>
                                  <h5 className={'dmsansbold text-[#171827] text-[22px]'}>
                                      Soyisim
                                  </h5>
                                  <div className={'w-[367px] h-[60px] rounded-[10px] bg-white bg-opacity-[61%]'}>
                                      <input className={'outline-none w-full h-full rounded-[10px] bg-transparent p-2'}
                                             type="text"/>
                                  </div>
                              </div>
                          </div>
                          <div className={'flex flex-row flex-col lg:flex-row gap-[41px]'}>
                              <div className={'flex flex-col gap-[8px]'}>
                                  <h5 className={'dmsansbold text-[#171827] text-[22px]'}>
                                      Telefon
                                  </h5>
                                  <div className={'w-[367px] h-[60px] rounded-[10px] bg-white bg-opacity-[61%]'}>
                                      <input className={'outline-none w-full h-full rounded-[10px] bg-transparent p-2'}
                                             type="text"/>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[8px]'}>
                                  <h5 className={'dmsansbold text-[#171827] text-[22px]'}>
                                      Hizmet Türü
                                  </h5>
                                  <div className={'w-[367px] h-[60px] rounded-[10px] bg-white bg-opacity-[61%]'}>
                                      <input className={'outline-none w-full h-full rounded-[10px] bg-transparent p-2'}
                                             type="text"/>
                                  </div>
                              </div>
                          </div>
                          <div className={'flex flex-col mt-[39px] gap-[8px]'}>
                              <h5 className={'dmsansbold text-[#171827] text-[22px]'}>
                                  Mesaj
                              </h5>
                                  <textarea className={'outline-none w-full h-[137px] rounded-[10px] bg-white bg-opacity-[61%] min-h-[60px] max-h-[200px] overflow-hidden w-full h-full rounded-[10px] p-2'}
                                         type="text"/>
                          </div>
                          <div className={'w-full mb-24 mt-[40px] flex justify-center'}>
                              <div className={'h-[80px]'}>
                                  <button
                                      className={'w-[296px]  active:mt-1 h-[76px] bg-white bg-opacity-[61%] rounded-[10px]'}>
                                      <h5 className={'text-[#171827] dmsansbold text-[25px]'}>GÖNDER</h5>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </main>

          <div className={' w-full min-h-[400px]  flex '}>
              <div className={'w-full flex -mt-24 justify-center'}>
                  <div
                      className={'w-[80%]   h-fit sm:py-[50px] gap-12 py-[150px]   lg:py-0 lg:h-[168px] px-12 lg:flex-row flex-col flex items-center justify-around    relative bg-main1 rounded-[10px]'}>
                      <Image className={'absolute top-4 md:top-10 lg:-top-2 left-0'} src={arrow} width={273} height={62}
                             alt={''}/>
                      <div className={'flex flex-col gap-4 w-fit'}>
                          <h4 className={'dmsansbold text-white lg:text-start text-center break-words w-fit text-[30px]'}>
                              Hiçbir Yeniliği ve Kampanyayı Kaçırmayın !
                          </h4>
                          <h5 className={'dmsansbold text-[14px] text-[#C0BFBF] lg:w-[594px]'}>
                              Sigortex e-bülten aboneliği ile firmamız bünyesinde gerçekleşen tüm gelişmelerden anında
                              haberdar olabilirsiniz.
                          </h5>
                      </div>
                      <div className={'w-[254px] h-[78px] group bg4 cursor-pointer flex justify-center items-center'}>
                          <h4 className={'dmsansbold select-none text-main2 group-hover:text-main1 text-[30px]'}>
                              KAYIT OL
                          </h4>
                      </div>
                  </div>

              </div>
              <Image className={'w-full h-full max-h-[800px] sm:h-[400px] sm:min-h-[400px] object-cover absolute -z-10'} src={mapsvg} width={1438} height={520}
                     alt={''}/>
          </div>
      </div>
  );
}
