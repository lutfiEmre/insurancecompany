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
import ServiceFiles from "@/components/ServiceFiles";
import Blogs from "@/components/Blogs";
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
          <main className="flex  w-full flex-col h-full relative justify-center  items-center   ">
              <div className={'w-full h-full pb-16 lg:pb-0 lg:h-[400px]  relative'}>
                  <div className={'z-0 flex flex-col items-center gap-6 lg:flex-row w-full justify-between px-[103px] mt-[169px]'}>
                      <div className={'flex flex-col gap-[20px]'}>
                          <h2 className={'rubiksbold text-[45px] sm:text-[60px] text-white'}>
                              Blog
                          </h2>
                          <h3 className={'rubikm text-white text-[18px]'}>
                              ANASAYFA / <span className={'text-[#EEEF20]'}>
                              BLOG
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

              <Blogs/>
               </main>

          <KampanyaAlert/>
      </div>
  );
}
