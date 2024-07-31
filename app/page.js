"use client"
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import anasayfabg from '@/public/anasayfabg.svg'
import familysvg from '@/public/family-insurance-pNaG8Mc84r.svg'
import {useState} from "react";
import Hizmetler from "@/components/Hizmetler";
import Urunlerimiz from "@/components/Urunlerimiz";
import ServiceFiles from "@/components/ServiceFiles";
import AnlasmaliServis from "@/components/AnlasmaliServis";
import KampanyaAlert from "@/components/KampanyaAlert";
import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
    const selecthizmet = (e) => {
        setGeneral({...general, hizmetadi: `${e.target.textContent}`,hizmetmenu: false})

    }
    const [general,setGeneral] = useState({
        "hizmetmenu": true,
        "hizmetadi": "",
        "hizmetcomp": false,

    })

    const hizmetcomp = () => {
        setGeneral({...general,hizmetcomp: true})
        setTimeout(() => {
            setGeneral({...general,hizmetcomp: false, hizmetmenu: true})
        },3000)
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }
  return (
      <div className={'w-full h-ful'}>
          <main className="flex min-h-screen max-h-full bg1  flex-col h-full relative justify-center  items-center   ">
              <div className={'mt-[184px] gap-[39px] items-center  flex flex-col lg:flex-row  xl:ml-[106px] z-10'}>
                  <motion.div
                      variants={container}
                      initial="hidden"
                      animate="visible"
                      className={'w-fit px-[36px] relative  xl:px-[36px] 2xl:py-[50px] py-[32px] h-fit bg-white'}>
                      <motion.div variants={item}
                                      className={`w-full ${general.hizmetmenu === true ? 'flex' : '!hidden'}  flex items-center z-30 justify-center h-full  absolute left-0 top-0`}>
                          <div
                              className={`${general.hizmetmenu === true ? 'flex' : '!hidden'} w-[90%] h-[90%] z-10    p-4 group-hover:flex flex flex-col text-[22px]  justify-between items-center py-[35px] px-[17px]  absolute bg-main1 rounded-[10px] `}>
                              <button
                                  className={'bg-white p-2 rounded-[10px] group duration-200 transition-all hover:border-white bg-opacity-10 border-black border-[2px]'}>
                                  <h2 onClick={(e) => {
                                      selecthizmet(e)
                                  }}
                                      className={'rubiklight  cursor-pointer select-none group-hover:text-white  text-[#FFA412]'}>
                                      Tamamlayıcı Sağlık Sigortası
                                  </h2>
                              </button>

                              <button
                                  className={'bg-white p-2 rounded-[10px] group duration-200 transition-all hover:border-white bg-opacity-10 border-black border-[2px]'}>
                                  <h2 onClick={(e) => {
                                      selecthizmet(e)
                                  }}
                                      className={'rubiklight  cursor-pointer select-none group-hover:text-white  text-[#FFA412]'}>
                                      Özel Sağlık Sigortası
                                  </h2>
                              </button>
                              <button
                                  className={'bg-white p-2 rounded-[10px] group duration-200 transition-all hover:border-white bg-opacity-10 border-black border-[2px]'}>
                                  <h2 onClick={(e) => {
                                      selecthizmet(e)
                                  }}
                                      className={'rubiklight  cursor-pointer select-none group-hover:text-white  text-[#FFA412]'}>
                                      İşyeri Sigortası
                                  </h2>
                              </button>
                              <button
                                  className={'bg-white p-2 rounded-[10px] group duration-200 transition-all hover:border-white bg-opacity-10 border-black border-[2px]'}>
                                  <h2 onClick={(e) => {
                                      selecthizmet(e)
                                  }}
                                      className={'rubiklight  cursor-pointer select-none group-hover:text-white  text-[#FFA412]'}>
                                      Deprem Sigortası
                                  </h2>
                              </button>
                              <button
                                  className={'bg-white p-2 rounded-[10px] group duration-200 transition-all hover:border-white bg-opacity-10 border-black border-[2px]'}>
                                  <h2 onClick={(e) => {
                                      selecthizmet(e)
                                  }}
                                      className={'rubiklight  cursor-pointer select-none group-hover:text-white  text-[#FFA412]'}>
                                      Trafik Sigortası
                                  </h2>
                              </button>
                              <button
                                  className={'bg-white p-2 rounded-[10px] group duration-200 transition-all hover:border-white bg-opacity-10 border-black border-[2px]'}>
                                  <h2 onClick={(e) => {
                                      selecthizmet(e)
                                  }}
                                      className={'rubiklight  cursor-pointer select-none group-hover:text-white  text-[#FFA412]'}>
                                      Kasko Sigortası
                                  </h2>
                              </button>
                              <button
                                  className={'bg-white p-2 rounded-[10px] group duration-200 transition-all hover:border-white bg-opacity-10 border-black border-[2px]'}>
                                  <h2 onClick={(e) => {
                                      selecthizmet(e)
                                  }}
                                      className={'rubiklight  cursor-pointer select-none group-hover:text-white  text-[#FFA412]'}>
                                      Konut Sigortası
                                  </h2>
                              </button>


                          </div>

                      </motion.div>


                      {general.hizmetcomp === true ? (
                          <div className={'w-[320px] flex justify-center items-center h-[500px]'}>
                              <h5 className={'text-2xl'}>completed</h5>
                          </div>
                      ) : (
                          <div
                              className={`w-[320px] h-[500px]   ${general.hizmetmenu === true ? 'opacity-0' : 'opacity-100'}`}>
                              <h2 className={'mplusbold w-fit text-[16px] uppercase 2xl:text-[24px] text-[#FFA412]'}>
                                  TEKLİF al
                              </h2>
                              {/*    onMouseLeave={() => {*/}
                              {/*    setGeneral({...general, hizmetmenu: false})*/}
                              {/*}} onMouseEnter={() => {*/}
                              {/*    setGeneral({...general, hizmetmenu: true})*/}
                              {/*}}*/}
                              <div className={'group   2xl:w-[350px]   flex  '}>
                                  <div className={'flex flex-row z-10 cursor-pointer items-center gap-1'}>
                                      <h2 className={'dmsansbold  leading-9 text-center mt-4 text-[22px] 2xl:text-[25px]  break-words w-fit text-black '}>

                                          {general.hizmetadi === "" ? "Hizmet Türünün Adı" : general.hizmetadi}
                                      </h2>
                                  </div>
                              </div>
                              <div className={'2xl:mt-[30px] z-10 mt-[17px] 2xl:gap-6 gap-4 flex flex-col'}>
                                  <div className={'flex flex-col   gap-1'}>
                                      <h2 className={'dmsansregular   text-[16px]'}>
                                          Adınız Soyadınız
                                      </h2>
                                      <div
                                          className={'w-full h-[50px] flex flex-row items-center gap-2 px-[9px] py-[1px] rounded-[10px] border-[2px] border-[#FFA412]'}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                               viewBox="0 0 30 30"
                                               fill="none">
                                              <path
                                                  d="M19.8019 15.1368C21.6479 16.0093 23.2219 17.3674 24.3554 19.0657C25.4889 20.764 26.1393 22.7385 26.2369 24.778C26.2497 24.9649 26.2252 25.1524 26.1646 25.3296C26.104 25.5068 26.0086 25.6701 25.884 25.81C25.7595 25.9498 25.6082 26.0634 25.4392 26.144C25.2701 26.2246 25.0867 26.2706 24.8996 26.2794C24.7125 26.2881 24.5256 26.2594 24.3497 26.1949C24.1739 26.1304 24.0127 26.0315 23.8757 25.9038C23.7386 25.7762 23.6284 25.6225 23.5515 25.4517C23.4747 25.2809 23.4327 25.0965 23.4281 24.9093C23.3259 22.7428 22.3933 20.6988 20.8239 19.2017C19.2545 17.7046 17.1689 16.8694 15 16.8694C12.8311 16.8694 10.7454 17.7046 9.17607 19.2017C7.60668 20.6988 6.67409 22.7428 6.57187 24.9093C6.54661 25.276 6.37877 25.6182 6.10428 25.8627C5.8298 26.1072 5.47049 26.2345 5.1033 26.2174C4.73612 26.2002 4.39025 26.0399 4.13976 25.7709C3.88927 25.5019 3.75407 25.1455 3.76312 24.778C3.86036 22.7387 4.51037 20.7642 5.64356 19.0659C6.77676 17.3676 8.35047 16.0094 10.1962 15.1368C9.01314 14.1499 8.16274 12.8226 7.76072 11.3353C7.3587 9.84808 7.42457 8.27308 7.94937 6.82458C8.47417 5.37608 9.43243 4.1244 10.6938 3.2398C11.9552 2.35519 13.4584 1.88062 14.9991 1.88062C16.5397 1.88062 18.0429 2.35519 19.3043 3.2398C20.5657 4.1244 21.5239 5.37608 22.0487 6.82458C22.5736 8.27308 22.6394 9.84808 22.2374 11.3353C21.8354 12.8226 20.985 14.1499 19.8019 15.1368ZM19.6875 9.37489C19.6875 8.13169 19.1936 6.93941 18.3146 6.06033C17.4355 5.18125 16.2432 4.68739 15 4.68739C13.7568 4.68739 12.5645 5.18125 11.6854 6.06033C10.8064 6.93941 10.3125 8.13169 10.3125 9.37489C10.3125 10.6181 10.8064 11.8104 11.6854 12.6895C12.5645 13.5685 13.7568 14.0624 15 14.0624C16.2432 14.0624 17.4355 13.5685 18.3146 12.6895C19.1936 11.8104 19.6875 10.6181 19.6875 9.37489Z"
                                                  fill="#FFA412"/>
                                          </svg>
                                          <input
                                              className={'outline-none w-full h-full border-none active:outline-none'}
                                              type="text"/>
                                      </div>
                                  </div>
                                  <div className={'flex flex-col gap-1'}>
                                      <h2 className={'dmsansregular w-fit  text-[16px]'}>
                                          Telefon Numaranız
                                      </h2>
                                      <div
                                          className={'w-full h-[50px] flex flex-row items-center gap-2 px-[9px] py-[1px] rounded-[10px] border-[2px] border-[#FFA412]'}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                               viewBox="0 0 30 30"
                                               fill="none">
                                              <g clip-path="url(#clip0_92_6229)">
                                                  <path
                                                      d="M6.85213 2.49055C6.74145 2.34817 6.60173 2.23096 6.44226 2.14672C6.2828 2.06249 6.10723 2.01314 5.92723 2.00197C5.74723 1.9908 5.56691 2.01805 5.39825 2.08192C5.22959 2.1458 5.07645 2.24482 4.94901 2.37243L3.01026 4.31305C2.10463 5.22055 1.77088 6.50493 2.16651 7.6318C3.81038 12.2951 6.48117 16.5294 9.98151 20.0218C13.4739 23.5221 17.7082 26.1929 22.3715 27.8368C23.4984 28.2324 24.7828 27.8987 25.6903 26.9931L27.629 25.0543C27.7566 24.9269 27.8556 24.7737 27.9195 24.6051C27.9834 24.4364 28.0106 24.2561 27.9995 24.0761C27.9883 23.8961 27.939 23.7205 27.8547 23.561C27.7705 23.4016 27.6533 23.2619 27.5109 23.1512L23.1853 19.7874C23.033 19.6697 22.8561 19.588 22.6677 19.5483C22.4794 19.5087 22.2845 19.5123 22.0978 19.5587L17.9915 20.5843C17.4434 20.7204 16.8694 20.7126 16.3251 20.5619C15.7808 20.4111 15.2846 20.1224 14.8846 19.7237L10.2796 15.1168C9.8806 14.717 9.59154 14.2209 9.44044 13.6766C9.28934 13.1323 9.28131 12.5582 9.41713 12.0099L10.4446 7.90368C10.4911 7.7169 10.4946 7.52203 10.455 7.33369C10.4154 7.14535 10.3336 6.96843 10.2159 6.81618L6.85213 2.49055ZM3.53338 0.958678C3.8615 0.630458 4.25569 0.375798 4.68977 0.211605C5.12385 0.0474133 5.5879 -0.022553 6.0511 0.00635257C6.5143 0.0352581 6.96605 0.162374 7.37635 0.379259C7.78665 0.596145 8.14612 0.897837 8.43088 1.2643L11.7946 5.58805C12.4115 6.38118 12.629 7.4143 12.3853 8.3893L11.3596 12.4956C11.307 12.7083 11.31 12.9309 11.3685 13.1421C11.4269 13.3533 11.5388 13.5458 11.6934 13.7012L16.3003 18.3081C16.4558 18.4629 16.6487 18.575 16.8602 18.6335C17.0717 18.6919 17.2948 18.6948 17.5078 18.6418L21.6121 17.6162C22.0933 17.4966 22.5954 17.4876 23.0806 17.5899C23.5657 17.6922 24.0214 17.9031 24.4134 18.2068L28.7371 21.5706C30.2915 22.7799 30.434 25.0768 29.0428 26.4662L27.104 28.4049C25.7165 29.7924 23.6428 30.4018 21.7096 29.7212C16.7609 27.9823 12.2681 25.1495 8.56588 21.4337C4.85033 17.732 2.01754 13.2399 0.278383 8.2918C-0.400367 6.36055 0.209008 4.28493 1.59651 2.89743L3.53338 0.958678Z"
                                                      fill="#FFA412"/>
                                              </g>
                                              <defs>
                                                  <clipPath id="clip0_92_6229">
                                                      <rect width="30" height="30" fill="white"/>
                                                  </clipPath>
                                              </defs>
                                          </svg>
                                          <input
                                              className={'outline-none w-full h-full border-none active:outline-none'}
                                              type="text"/>
                                      </div>
                                  </div>
                              </div>
                              <div className={'mt-[15px] items-center 2xl:mt-[20px] w-fit gap-[8px] flex flex-row'}>
                                  <div className="checkbox-wrapper-46">
                                      <input className="inp-cbx" id="cbx-46" type="checkbox"/>
                                      <label className="cbx" htmlFor="cbx-46">
                                  <span>
                                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg>
                                  </span>
                                      </label>
                                  </div>
                                  <h2 className={'dmsansregular text-black   text-[12px] w-[230px] '}>
                                      Yasal Bilgilendirmeler, Üyelik Sözleşmesi, okudum ve onaylıyorum
                                  </h2>
                              </div>
                              <div
                                  onClick={() => {
                                      hizmetcomp()
                                  }}
                                  className={' group relative py-[10px]  mt-3 cursor-pointer bg2 flex items-center justify-center'}>
                                  <h2 className={'text-white group-hover:text-[28px] duration-200 transition-all uppercase dmsansbold text-[25px]'}>
                                      TEKLİF AL
                                  </h2>
                                  <div className={'h-full absolute right-4 top-0 flex justify-center items-center'}>
                                      <svg className={''} xmlns="http://www.w3.org/2000/svg" width="40"
                                           height="40" viewBox="0 0 40 40" fill="none">
                                          <path
                                              d="M34.6344 20.8843L23.3844 32.1343C23.1498 32.3689 22.8317 32.5007 22.5 32.5007C22.1683 32.5007 21.8502 32.3689 21.6156 32.1343C21.3811 31.8998 21.2493 31.5817 21.2493 31.25C21.2493 30.9183 21.3811 30.6001 21.6156 30.3656L30.7328 21.25H6.25C5.91848 21.25 5.60054 21.1183 5.36612 20.8838C5.1317 20.6494 5 20.3315 5 20C5 19.6684 5.1317 19.3505 5.36612 19.1161C5.60054 18.8817 5.91848 18.75 6.25 18.75H30.7328L21.6156 9.63434C21.3811 9.39979 21.2493 9.08167 21.2493 8.74996C21.2493 8.41826 21.3811 8.10014 21.6156 7.86559C21.8502 7.63104 22.1683 7.49927 22.5 7.49927C22.8317 7.49927 23.1498 7.63104 23.3844 7.86559L34.6344 19.1156C34.7506 19.2317 34.8428 19.3695 34.9057 19.5213C34.9686 19.673 35.001 19.8357 35.001 20C35.001 20.1642 34.9686 20.3269 34.9057 20.4786C34.8428 20.6304 34.7506 20.7682 34.6344 20.8843Z"
                                              fill="#171827"/>
                                      </svg>
                                  </div>
                              </div>
                              <div onClick={() => {
                                  setGeneral({...general, hizmetmenu: !general.hizmetmenu})
                              }} className={'mt-6 flex flex-row cursor-pointer select-none gap-2'}>
                                  <svg className={'w-[25px] h-auto'} fill="#000000" width="800px" height="800px"
                                       viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                      <title>back</title>
                                      <path d="M15.281 7.188v17.594l-15.281-8.781z"></path>
                                  </svg>
                                  <h2>geri dön</h2>
                              </div>
                          </div>

                      )}

                  </motion.div>
                  <motion.div

                      variants={container}
                      initial="hidden"
                      animate="visible"
                      className={'flex flex-col items-center justify-center xl:gap-0 gap-[50px] xl:flex-row '}>
                      <div className={'flex flex-col items-center z-10 gap-4'}>
                          <h2 className={' text-[45px] sm:text-[60px] lg:text-start text-center  rubiksbold text-white'}>
                              SİGORTADA <br/>
                              <span className={'whitespace-nowrap'}>
                               GÜVENİN ADRESİ
                          </span>
                          </h2>
                          <h3 className={'rubikm 2xl:w-[500px] lg:w-[500px] text-center lg:text-start w-[350px] sm:w-[500px] text-[25px] text-white'}>
                              Tüm Sigorta İhtiyaçlarınızda Olduğu Gibi Her Zaman Yanındayız
                          </h3>
                          <div className={'mt-2 px-[38px] py-[23px] w-fit rounded-[28px] cursor-pointer bg-main2'}>
                              <h3 className={'rubiksbold text-main1 text-[28px]'}>
                                  Hemen Teklif Al
                              </h3>
                          </div>
                      </div>
                      <div className={'w-full flex justify-center'}>
                          <Image className={'lg:w-[400px] lg:flex hidden  2xl:w-[600px] h-auto'} src={familysvg}
                                 width={444} height={442} alt={''}/>

                      </div>
                  </motion.div>
              </div>
              <Image className={'lg:w-[400px] lg:hidden flex     w-[400px]  2xl:w-[600px] h-auto'} src={familysvg}
                     width={444} height={442}
                     alt={''}/>

              <div className={'mt-[100px]'}></div>
          </main>
          <Hizmetler/>
          <Urunlerimiz/>
          <ServiceFiles/>
          <AnlasmaliServis/>
          <KampanyaAlert/>
      </div>
  );
}
