import React from 'react';
import arrow from '@/public/arrow.svg'
import Image from "next/image";

const KampanyaAlert = () => {
    return (
        <div className={'py-[70px] lg:px-[65px] md:px-[130px] xl:px-[130px] w-full h-full flex '}>
            <div className={'w-full  h-fit sm:py-[50px] gap-12 py-[150px]   lg:py-0 lg:h-[168px] px-12 lg:flex-row flex-col flex items-center justify-around    relative bg-main1 rounded-[10px]'}>
                <Image className={'absolute top-4 md:top-10 lg:-top-2 left-0'} src={arrow} width={273} height={62} alt={''}/>
                <div className={'flex flex-col gap-4 w-fit'}>
                    <h4 className={'dmsansbold text-white lg:text-start text-center break-words w-fit text-[30px]'}>
                        Hiçbir Yeniliği ve Kampanyayı Kaçırmayın !
                    </h4>
                    <h5 className={'dmsansbold text-[14px] text-[#C0BFBF] lg:w-[594px]'}>
                        Sigortex e-bülten aboneliği ile firmamız bünyesinde gerçekleşen tüm gelişmelerden anında haberdar olabilirsiniz.
                    </h5>
                </div>
                <div className={'w-[254px] h-[78px] group bg4 cursor-pointer flex justify-center items-center'}>
                    <h4 className={'dmsansbold select-none text-main2 group-hover:text-main1 text-[30px]'}>
                        KAYIT OL
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default KampanyaAlert;
