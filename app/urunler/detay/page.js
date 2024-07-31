"use client"
import Image from "next/image";
import {useState} from "react";
import urunlertop from '@/public/urunlertop.svg'

import KampanyaAlert from "@/components/KampanyaAlert";
import aracsigortalaridetay from '@/public/aracsigortalaridetay.svg'
import topbanner from '@/public/topbanner.svg'
import bizimleiletisim from '@/public/bizimleiletisim.svg'
import trafikdetay1 from '@/public/trafikdetay1.svg'

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
                              Araç Sigortaları
                          </h2>
                          <h3 className={'rubikm text-white text-[18px]'}>
                              ANASAYFA / <span className={'text-main2'}>
                              ÜRÜNLER
                          </span>
                          </h3>
                      </div>
                      <div>

                      </div>
                      <Image className={''} src={aracsigortalaridetay   } width={305} height={242} alt={''}/>
                      <div>

                      </div>

                  </div>
                  <Image className={'w-full -z-10 absolute top-0 left-0 h-full object-cover'} src={topbanner} width={1440} height={400} alt={''}/>
              </div>
              <div className={'py-[92px] flex gap-[51px] flex-col justify-center items-center lg:flex-row px-[111px] w-full'}>
                  <div className={'flex flex-col md:flex-row  lg:flex-col gap-[77px]'}>
                      <div className={'w-fit flex flex-col gap-[13px] rounded-[10px]  h-fit px-[20px] py-[23px] bg-[#EDEDED]'}>
                          <div
                              className={'bgc group cursor-pointer w-[330px] pl-[25px] pr-[17px] flex justify-between items-center py-[16px]'}>
                              <h4 className={'dmsansbold group-hover:text-main2 text-[16px] text-[#4F4F4F]'}>
                                  Trafik Sigortası
                              </h4>
                              <svg className={'group-hover:fill-main2 fill-[#4F4F4F]'}
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="22" height="18" viewBox="0 0 22 18"
                                   fill="none">
                                  <path
                                      d="M11.155 1.15493C11.0001 1.30958 10.8772 1.49325 10.7934 1.69544C10.7095 1.89763 10.6664 2.11437 10.6664 2.33326C10.6664 2.55215 10.7095 2.76889 10.7934 2.97108C10.8772 3.17328 11.0001 3.35695 11.155 3.51159L14.9767 7.33326H2.33335C1.89133 7.33326 1.4674 7.50886 1.15484 7.82142C0.842282 8.13398 0.666687 8.5579 0.666687 8.99993C0.666687 9.44196 0.842282 9.86588 1.15484 10.1784C1.4674 10.491 1.89133 10.6666 2.33335 10.6666H14.9767L11.155 14.4883C10.8425 14.8008 10.6669 15.2246 10.6669 15.6666C10.6669 16.1086 10.8425 16.5324 11.155 16.8449C11.4675 17.1574 11.8914 17.333 12.3334 17.333C12.7753 17.333 13.1992 17.1574 13.5117 16.8449L21.3567 8.99993L13.5117 1.15493C13.357 1.00002 13.1734 0.877123 12.9712 0.793272C12.769 0.70942 12.5522 0.66626 12.3334 0.66626C12.1145 0.66626 11.8977 0.70942 11.6955 0.793272C11.4933 0.877123 11.3097 1.00002 11.155 1.15493Z"
                                      fill=""/>
                              </svg>
                          </div>
                          <div
                              className={'bgc group cursor-pointer w-[330px] pl-[25px] pr-[17px] flex justify-between items-center py-[16px]'}>
                              <h4 className={'dmsansbold group-hover:text-main2 text-[16px] text-[#4F4F4F]'}>
                                  KASKO Sigortası
                              </h4>
                              <svg className={'group-hover:fill-main2 fill-[#4F4F4F]'}
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="22" height="18" viewBox="0 0 22 18"
                                   fill="none">
                                  <path
                                      d="M11.155 1.15493C11.0001 1.30958 10.8772 1.49325 10.7934 1.69544C10.7095 1.89763 10.6664 2.11437 10.6664 2.33326C10.6664 2.55215 10.7095 2.76889 10.7934 2.97108C10.8772 3.17328 11.0001 3.35695 11.155 3.51159L14.9767 7.33326H2.33335C1.89133 7.33326 1.4674 7.50886 1.15484 7.82142C0.842282 8.13398 0.666687 8.5579 0.666687 8.99993C0.666687 9.44196 0.842282 9.86588 1.15484 10.1784C1.4674 10.491 1.89133 10.6666 2.33335 10.6666H14.9767L11.155 14.4883C10.8425 14.8008 10.6669 15.2246 10.6669 15.6666C10.6669 16.1086 10.8425 16.5324 11.155 16.8449C11.4675 17.1574 11.8914 17.333 12.3334 17.333C12.7753 17.333 13.1992 17.1574 13.5117 16.8449L21.3567 8.99993L13.5117 1.15493C13.357 1.00002 13.1734 0.877123 12.9712 0.793272C12.769 0.70942 12.5522 0.66626 12.3334 0.66626C12.1145 0.66626 11.8977 0.70942 11.6955 0.793272C11.4933 0.877123 11.3097 1.00002 11.155 1.15493Z"
                                      fill=""/>
                              </svg>
                          </div>
                          <div
                              className={'bgc group cursor-pointer w-[330px] pl-[25px] pr-[17px] flex justify-between items-center py-[16px]'}>
                              <h4 className={'dmsansbold group-hover:text-main2 text-[16px] text-[#4F4F4F]'}>
                                  Nakliyat Sigortası
                              </h4>
                              <svg className={'group-hover:fill-main2 fill-[#4F4F4F]'}
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="22" height="18" viewBox="0 0 22 18"
                                   fill="none">
                                  <path
                                      d="M11.155 1.15493C11.0001 1.30958 10.8772 1.49325 10.7934 1.69544C10.7095 1.89763 10.6664 2.11437 10.6664 2.33326C10.6664 2.55215 10.7095 2.76889 10.7934 2.97108C10.8772 3.17328 11.0001 3.35695 11.155 3.51159L14.9767 7.33326H2.33335C1.89133 7.33326 1.4674 7.50886 1.15484 7.82142C0.842282 8.13398 0.666687 8.5579 0.666687 8.99993C0.666687 9.44196 0.842282 9.86588 1.15484 10.1784C1.4674 10.491 1.89133 10.6666 2.33335 10.6666H14.9767L11.155 14.4883C10.8425 14.8008 10.6669 15.2246 10.6669 15.6666C10.6669 16.1086 10.8425 16.5324 11.155 16.8449C11.4675 17.1574 11.8914 17.333 12.3334 17.333C12.7753 17.333 13.1992 17.1574 13.5117 16.8449L21.3567 8.99993L13.5117 1.15493C13.357 1.00002 13.1734 0.877123 12.9712 0.793272C12.769 0.70942 12.5522 0.66626 12.3334 0.66626C12.1145 0.66626 11.8977 0.70942 11.6955 0.793272C11.4933 0.877123 11.3097 1.00002 11.155 1.15493Z"
                                      fill=""/>
                              </svg>
                          </div>
                          <div
                              className={'bgc group cursor-pointer w-[330px] pl-[25px] pr-[17px] flex justify-between items-center py-[16px]'}>
                              <h4 className={'dmsansbold group-hover:text-main2 text-[16px] text-[#4F4F4F]'}>
                                  Karayolu Yolcu Taşımacılığı Zorunlu Koltuk Sigortası
                              </h4>
                              <svg className={'group-hover:fill-main2 fill-[#4F4F4F]'}
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="22" height="18" viewBox="0 0 22 18"
                                   fill="none">
                                  <path
                                      d="M11.155 1.15493C11.0001 1.30958 10.8772 1.49325 10.7934 1.69544C10.7095 1.89763 10.6664 2.11437 10.6664 2.33326C10.6664 2.55215 10.7095 2.76889 10.7934 2.97108C10.8772 3.17328 11.0001 3.35695 11.155 3.51159L14.9767 7.33326H2.33335C1.89133 7.33326 1.4674 7.50886 1.15484 7.82142C0.842282 8.13398 0.666687 8.5579 0.666687 8.99993C0.666687 9.44196 0.842282 9.86588 1.15484 10.1784C1.4674 10.491 1.89133 10.6666 2.33335 10.6666H14.9767L11.155 14.4883C10.8425 14.8008 10.6669 15.2246 10.6669 15.6666C10.6669 16.1086 10.8425 16.5324 11.155 16.8449C11.4675 17.1574 11.8914 17.333 12.3334 17.333C12.7753 17.333 13.1992 17.1574 13.5117 16.8449L21.3567 8.99993L13.5117 1.15493C13.357 1.00002 13.1734 0.877123 12.9712 0.793272C12.769 0.70942 12.5522 0.66626 12.3334 0.66626C12.1145 0.66626 11.8977 0.70942 11.6955 0.793272C11.4933 0.877123 11.3097 1.00002 11.155 1.15493Z"
                                      fill=""/>
                              </svg>
                          </div>
                          <div
                              className={'bgc group cursor-pointer w-[330px] pl-[25px] pr-[17px] flex justify-between items-center py-[16px]'}>
                              <h4 className={'dmsansbold group-hover:text-main2 text-[16px] text-[#4F4F4F]'}>
                                  Motorlu Kara Taşıtları İhtiyari Mali Sorumluluk Sigortası
                              </h4>
                              <svg className={'group-hover:fill-main2 fill-[#4F4F4F]'}
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="22" height="18" viewBox="0 0 22 18"
                                   fill="none">
                                  <path
                                      d="M11.155 1.15493C11.0001 1.30958 10.8772 1.49325 10.7934 1.69544C10.7095 1.89763 10.6664 2.11437 10.6664 2.33326C10.6664 2.55215 10.7095 2.76889 10.7934 2.97108C10.8772 3.17328 11.0001 3.35695 11.155 3.51159L14.9767 7.33326H2.33335C1.89133 7.33326 1.4674 7.50886 1.15484 7.82142C0.842282 8.13398 0.666687 8.5579 0.666687 8.99993C0.666687 9.44196 0.842282 9.86588 1.15484 10.1784C1.4674 10.491 1.89133 10.6666 2.33335 10.6666H14.9767L11.155 14.4883C10.8425 14.8008 10.6669 15.2246 10.6669 15.6666C10.6669 16.1086 10.8425 16.5324 11.155 16.8449C11.4675 17.1574 11.8914 17.333 12.3334 17.333C12.7753 17.333 13.1992 17.1574 13.5117 16.8449L21.3567 8.99993L13.5117 1.15493C13.357 1.00002 13.1734 0.877123 12.9712 0.793272C12.769 0.70942 12.5522 0.66626 12.3334 0.66626C12.1145 0.66626 11.8977 0.70942 11.6955 0.793272C11.4933 0.877123 11.3097 1.00002 11.155 1.15493Z"
                                      fill=""/>
                              </svg>
                          </div>
                      </div>
                      <div className={'relative w-[370px] h-[345px]'}>
                          <div className={'z-10 flex flex-col w-full h-full justify-center items-center'}>
                              <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_133_520)">
                                      <circle cx="42.5" cy="42.5" r="42.5" fill="#BCBCBC"/>
                                      <path d="M47.375 27.375C53.625 27.375 58.625 32.375 58.625 38.625M47.375 33.625C49.875 33.625 52.375 36.125 52.375 38.625M27.375 27.375C27.375 48.625 37.375 58.625 58.625 58.625V48.625L49.875 46.125L47.375 49.875C42.375 49.875 36.125 43.625 36.125 38.625L39.875 36.125L37.375 27.375H27.375Z" stroke="#12131F" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_133_520">
                                          <rect width="85" height="85" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>
                              <div className={'mt-[8px] flex flex-col justify-center items-center'}>
                                  <h4 className={'dmsansbold text-[25px] lg:text-[35px]'}>
                                      +90 555 55 55
                                  </h4>
                                  <h4 className={'dmsansbold w-[250px] text-center text-[25px] lg:text-[35px]'}>
                                      Bizimle İletişime Geçin
                                  </h4>

                              </div>

                          </div>
                          <Image className={'-z-10 w-[370px] h-[345px] top-0 left-0 absolute rounded-[10px]'} src={bizimleiletisim} width={370} height={345} alt={''}/>
                      </div>
                  </div>
                  <div className={'mt-[20px] w-[350px] sm:w-[450px] md:w-[500px] lg:w-[783px]'}>
                      <h2 className={'rubiksbold w-fit text-[40px] text-[#FFA412]'}>
                          TRAFİK SİGORTASI
                      </h2>
                      <div className={'mt-[29px]'}>
                          <Image className={'w-full h-full'} src={trafikdetay1} width={786} height={298} alt={''}/>
                      </div>
                      <div className={'mt-[41px] w-full flex flex-col'}>
                          <h2 className={'dmsansbold text-[#666363] text-[16px]'}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                              a galley of type and scrambled it to make a type specimen book. It has survived not only
                              five centuries, but also the leap into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                              PageMaker including versions of Lorem Ipsum.
                          </h2>
                          <div className={'mt-[25px] max-w-full text-black dmsansbold text-[16px]'}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                              been th
                          </div>
                          <h2 className={'dmsansbold mt-[25px] text-[#666363] text-[16px]'}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                              a galley of type and scrambled it to make a type specimen book. It has survived not only
                              five centuries, but also the leap into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                              PageMaker including versions of Lorem Ipsum.
                          </h2>
                      </div>
                  </div>
              </div>
          </main>

          <KampanyaAlert/>
      </div>
  );
}
