import React, {useState} from 'react';
import dijitalsigortasvg from '@/public/dijitals.svg'
import mustermemnuniyetisvg from '@/public/musterimemn.svg'
import dogrusigortasvg from '@/public/dogrusigorta.svg'
import onlinesigortasvg from '@/public/onlinesigorta.svg'
import Image from "next/image";
const Hizmetler = () => {
    const [hizmet,setHizmet] = useState({
        dijitalsigorta: true,
        musterimemnuniyeti: true,
        dogrusigorta: true,
        onlinesigorta: true,

    })
    return (
        <div className={'w-full bg-main4 pb-24  pt-[68px] '}>
            <div className={'flex flex-col 2xl:pl-0 pl-[30px] lg:pl-[86px] 2xl:items-center gap-[14px]'}>
                <h3 className={'rubiksbold text-main1 2xl:text-[50px] text-[35px]'}>
                    HİZMETLERİMİZ
                </h3>
                <div className={'w-[172px] 2xl:w-[450px] m-[16px] h-[2px] bg-main2 rotate-1'}></div>
                <h4 className={'text-[16px] lg:text-[20px] 2xl:text-[25px] rubiksbold pr-10  text-[#969696] 2xl:max-w-full max-w-[750px]'}>
                    Yüzlerce sigorta firması arasından neden mi bizi seçmelisiniz? Yeni nesil dijital sigortacılık ile tanışın.
                </h4>
            </div>
            <div
                className={'mt-[69px] 2xl:justify-center pl-[0px] 2xl:pl-0 justify-center items-center w-full flex gap-[32px] lg:gap-[16px] flex-wrap flex-row'}>
                <div
                    onClick={() => {
                        setHizmet({...hizmet, dijitalsigorta: !hizmet.dijitalsigorta})
                    }}
                    className={'w-[313px] gap-8 flex items items-center  flex-col rounded-[10px]  h-[343px]'}>
                    <div
                        className={`w-full h-full  gap-8 ${hizmet.dijitalsigorta && "!flex"} hidden cursor-pointer items items-center p-[20px] flex-col rounded-[10px] bg-white`}>
                        <Image src={dijitalsigortasvg} width={273} height={196} alt={''}/>
                        <h4 className={'rubikm text-[20px] select-none text-main1'}>
                            DİJİTAL SİGORTACILIK
                        </h4>
                    </div>
                    <div
                        className={`${hizmet.dijitalsigorta && "!hidden"} flex flex-col justify-start gap-[25px] items-center  cursor-pointer pt-[40px] bg-main5 w-full h-full rounded-[10px]`}>
                        <h4 className={'rubikm text-[20px] select-none text-main2'}>
                            DİJİTAL SİGORTACILIK
                        </h4>
                        <p className={'text-[14px] text-white rubiklight text-center px-[26px]'}>
                            Ülkemizin dijital olarak gelişen gerekliliklerine ayak uydurmak ve toplumun hızlı bir
                            şekilde entegre olduğu dijital satış yöntemleriyle, bireylerin ihtiyaçlarını karşılamak
                            için, kendine özgü farklılıklarıyla sigortacılık kanunu ve mesafeli satış yönetmeliği
                            çerçevesinde, tüm sigortacılık işlemlerini dijital kanallar üzerinden yürüten Türkiye’nin
                            yeni nesil dijital sigorta acentesidir.
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setHizmet({...hizmet, musterimemnuniyeti: !hizmet.musterimemnuniyeti})
                    }}
                    className={'w-[313px] gap-8 flex items items-center  flex-col rounded-[10px]  h-[343px]'}>
                    <div
                        className={`w-full h-full  gap-8 ${hizmet.musterimemnuniyeti && "!flex"} hidden cursor-pointer items items-center p-[20px] flex-col rounded-[10px] bg-white`}>
                        <Image src={mustermemnuniyetisvg} width={273} height={196} alt={''}/>
                        <h4 className={'rubikm text-[20px] select-none text-main1'}>
                            MÜŞTERİ MEMNUNİYETİ
                        </h4>
                    </div>
                    <div
                        className={`${hizmet.musterimemnuniyeti && "!hidden"} flex flex-col justify-start gap-[25px] items-center  cursor-pointer pt-[40px]  bg-main5 w-full h-full rounded-[10px]`}>
                        <h4 className={'rubikm text-[20px] select-none text-main2'}>
                            MÜŞTERİ MEMNUNİYETİ
                        </h4>
                        <p className={'text-[14px] text-white rubiklight text-center px-[26px]'}>
                            Sigorta ürünü almış olsanız da olmasanız da tek tuşla “dijital operasyon merkezimiz
                            çalışanları olan sigortacılık alanında uzman müşteri temsilcisi teknik personellerimize”
                            dakikalarca telefonda beklemek zorunda kalmadan 7/24 ulaşabilir mevcut sigorta ürününüz veya
                            almak istediğiniz sigorta ürününüzle ile ilgili tüm talep, istek, sorun ve şikayetlerinize
                            en hızlı bir şekilde çözüm bulabilirsiniz.
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setHizmet({...hizmet, dogrusigorta: !hizmet.dogrusigorta    })
                    }}
                    className={'w-[313px] gap-8 flex items items-center  flex-col rounded-[10px]  h-[343px]'}>
                    <div
                        className={`w-full h-full  gap-8 ${hizmet.dogrusigorta && "!flex"} hidden cursor-pointer items items-center p-[20px] flex-col rounded-[10px] bg-white`}>
                        <Image src={dogrusigortasvg} width={273} height={196} alt={''}/>
                        <h4 className={'rubikm text-[20px] select-none text-main1'}>
                            DOĞRU SİGORTA SATIN ALMA
                        </h4>
                    </div>
                    <div
                        className={`${hizmet.dogrusigorta && "!hidden"} flex flex-col justify-start gap-[25px] items-center  cursor-pointer pt-[40px]   bg-main5 w-full h-full rounded-[10px]`}>
                        <h4 className={'rubikm text-[20px] select-none text-main2'}>
                            DOĞRU SİGORTA SATIN ALMA
                        </h4>
                        <p className={'text-[14px] text-white rubiklight px-[26px] text-center'}>
                            “Dijital operasyon merkezimiz çalışanları olan sigortacılık alanında uzman müşteri temsilcisi teknik personellerimiz vasıtasıyla” ihtiyacınız olan sigorta ürünü hakkında net, doyurucu ve açıklayıcı bilgi sahibi yapıp, beklentilerinize ve risklerinize yönelik doğru analiz ve doğru planlama yapmak için önce sigorta danışmanlığı hizmeti veriyor sonra doğru sigorta ürününü doğru fiyata satın almanızı sağlıyoruz.
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setHizmet({...hizmet, onlinesigorta: !hizmet.onlinesigorta})
                    }}
                    className={'w-[313px] gap-8 flex items items-center  flex-col rounded-[10px]  h-[343px]'}>
                    <div
                        className={`w-full h-full  gap-8 ${hizmet.onlinesigorta && "!flex"} hidden cursor-pointer items items-center p-[20px] flex-col rounded-[10px] bg-white`}>
                        <Image src={onlinesigortasvg} width={273} height={196} alt={''}/>
                        <h4 className={'rubikm text-[20px] select-none text-main1'}>
                            ONLİNE SİGORTA SATIN ALMA
                        </h4>
                    </div>
                    <div
                        className={`${hizmet.onlinesigorta && "!hidden"} flex flex-col justify-start gap-[25px] items-center  cursor-pointer pt-[40px]   bg-main5 w-full h-full rounded-[10px]`}>
                        <h4 className={'rubikm text-[20px] select-none text-main2'}>
                            ONLİNE SİGORTA SATIN ALMA
                        </h4>
                        <p className={'text-[14px] text-white rubiklight text-center px-[26px]'}>
                            Uygun fiyat ve teminat bulmak için birden fazla sigorta acentesini arayıp zaman kaybetmek zorunda kalmadan, tek tıkla adresimizden ihtiyacınız olan sigorta ürününe dair teminatları siz belirleyerek ihtiyacınız olmayan teminatlara fazla para vermeden fiyatları ve teminatları karşılaştırdıktan sonra sizin için en uygun olan sigortayı en uygun fiyata online olarak satın alabiliyorsunuz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hizmetler;
