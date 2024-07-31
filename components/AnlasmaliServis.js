import React, {useState} from 'react';

const AnasmaliServis = () => {
    const [detay,setDetay] = useState({
        saglik: '',
        saglikp: false,
        otoservisp: false,
        otoservis: '',
    })
    return (
        <div className={'w-full  bg-main3 h-fit py-[49px] pb-[110px] px-[37px]'}>
            <div className={'flex flex-row flex-wrap items-center justify-center gap-[90px]'}>
                <div className={'flex flex-col mt-[23px]'}>
                    <h3 className={'font-bold text-[16px] text-main2'}>
                        Anlaşmalı
                        <br/>
                        <span className={'text-black text-[25px]'}>
                            Sağlık Kurumları
                        </span>
                    </h3>
                    <div className={'mt-[28px]'}>
                        <div className={'flex flex-col gap-1'}>
                            <h5 className={'rubiklight select-none text-white text-sm'}>
                                Kurum Seçiniz

                            </h5>
                            <div className={'flex flex-col curs gap-[23px]'}>
                                <div className={'relative'}>
                                    <div onClick={() => {setDetay({...detay, saglikp: !detay.saglikp})}} className={'w-[316px] rounded-t-[4px] relative cursor-pointer px-[17px] py-[11px] flex justify-between items-center h-[40px] bg-white'}>
                                        <h5 className={'text-black rubiklight text-[13px]'}>
                                            {detay.saglik === "" ? 'Kurum Seçiniz': detay.saglik}
                                        </h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_124_600)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7068 15.7069C12.5193 15.8943 12.265 15.9996 11.9998 15.9996C11.7347 15.9996 11.4803 15.8943 11.2928 15.7069L5.63582 10.0499C5.54031 9.95761 5.46413 9.84726 5.41172 9.72526C5.35931 9.60326 5.33172 9.47204 5.33057 9.33926C5.32942 9.20648 5.35472 9.0748 5.405 8.9519C5.45528 8.829 5.52953 8.71735 5.62343 8.62346C5.71732 8.52957 5.82897 8.45531 5.95187 8.40503C6.07476 8.35475 6.20644 8.32945 6.33922 8.3306C6.472 8.33176 6.60322 8.35934 6.72522 8.41175C6.84723 8.46416 6.95757 8.54034 7.04982 8.63585L11.9998 13.5859L16.9498 8.63585C17.1384 8.4537 17.391 8.3529 17.6532 8.35518C17.9154 8.35746 18.1662 8.46263 18.3516 8.64804C18.537 8.83344 18.6422 9.08426 18.6445 9.34645C18.6468 9.60865 18.546 9.86125 18.3638 10.0499L12.7068 15.7069Z" fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_124_600">
                                                    <rect width="24" height="24" fill="white" transform="matrix(0 1 -1 0 24 0)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className={`${detay.saglikp == true ? 'flex' : 'hidden'} flex-col flex  transition-all duration-400 absolute rounded-b-[4px] bottom-0 top-[35px] left-0 w-full h-12 bg-white`}>
                                        <div onClick={(e) => {setDetay({...detay, saglik: e.target.textContent, saglikp: false})}} className={'py-[2px] cursor-pointer hover:text-[#FFA412] select-none text-[#333333] pl-[16px] hover:bg-main1 w-full h-fit rubiklight text-[12px]'}>
                                            Allianz Sigorta Anlaşmalı Sağlık Kurumları
                                        </div>
                                        <div onClick={(e) => {
                                            setDetay({...detay, saglik: e.target.textContent, saglikp: false})}

                                        } className={'py-[2px] cursor-pointer hover:text-[#FFA412] select-none text-[#333333] pl-[16px] hover:bg-main1 w-full h-fit rubiklight text-[12px]'}>
                                            Demir Hayat Anlaşmalı Sağlık Kurumları
                                        </div>
                                    </div>

                                </div>
                                <div className={`w-[163px] cursor-pointer px-[17px] py-[11px] flex justify-center gap-1 items-center h-[40px] ${detay.saglikp == true ? 'bg-main1 text-white' : ' bg-white text-black'}`}>
                                    <h5 className={' rubiklight select-none  text-[15px]'}>
                                        Detayları Gör
                                    </h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path d="M13.5 14.5L17.5 10.5M17.5 10.5L13.5 6.5M17.5 10.5H6.5M3.5 3.5V17.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className={'flex flex-col mt-[23px]'}>
                    <h3 className={'font-bold text-[16px] text-main2'}>
                        Anlaşmalı
                        <br/>
                        <span className={'text-black text-[25px]'}>
                            Oto Servisleri
                        </span>
                    </h3>
                    <div className={'mt-[28px]'}>
                        <div className={'flex flex-col gap-1'}>
                            <h5 className={'rubiklight select-none text-white text-sm'}>
                             Kurum Seçiniz
                            </h5>
                            <div className={'flex flex-col curs gap-[23px]'}>
                                <div className={'relative'}>
                                    <div onClick={() => {setDetay({...detay, otoservisp: !detay.otoservisp})}} className={'w-[316px] rounded-t-[4px] relative cursor-pointer px-[17px] py-[11px] flex justify-between items-center h-[40px] bg-white'}>
                                        <h5 className={'text-black rubiklight text-[13px]'}>
                                            {detay.otoservis === "" ? 'Kurum Seçiniz': detay.otoservis}
                                        </h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_124_600)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7068 15.7069C12.5193 15.8943 12.265 15.9996 11.9998 15.9996C11.7347 15.9996 11.4803 15.8943 11.2928 15.7069L5.63582 10.0499C5.54031 9.95761 5.46413 9.84726 5.41172 9.72526C5.35931 9.60326 5.33172 9.47204 5.33057 9.33926C5.32942 9.20648 5.35472 9.0748 5.405 8.9519C5.45528 8.829 5.52953 8.71735 5.62343 8.62346C5.71732 8.52957 5.82897 8.45531 5.95187 8.40503C6.07476 8.35475 6.20644 8.32945 6.33922 8.3306C6.472 8.33176 6.60322 8.35934 6.72522 8.41175C6.84723 8.46416 6.95757 8.54034 7.04982 8.63585L11.9998 13.5859L16.9498 8.63585C17.1384 8.4537 17.391 8.3529 17.6532 8.35518C17.9154 8.35746 18.1662 8.46263 18.3516 8.64804C18.537 8.83344 18.6422 9.08426 18.6445 9.34645C18.6468 9.60865 18.546 9.86125 18.3638 10.0499L12.7068 15.7069Z" fill="black"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_124_600">
                                                    <rect width="24" height="24" fill="white" transform="matrix(0 1 -1 0 24 0)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className={`${detay.otoservisp == true ? 'flex' : 'hidden'} flex-col flex  transition-all duration-400 absolute rounded-b-[4px] bottom-0 top-[35px] left-0 w-full h-12 bg-white`}>
                                        <div onClick={(e) => {setDetay({...detay, otoservis: e.target.textContent, otoservisp: false})}} className={'py-[2px] cursor-pointer hover:text-[#FFA412] select-none text-[#333333] pl-[16px] hover:bg-main1 w-full h-fit rubiklight text-[12px]'}>
                                            Allianz Sigorta Anlaşmalı Sağlık Kurumları
                                        </div>
                                        <div onClick={(e) => {setDetay({...detay, otoservis: e.target.textContent, otoservisp: false})}} className={'py-[2px] cursor-pointer hover:text-[#FFA412] select-none text-[#333333] pl-[16px] hover:bg-main1 w-full h-fit rubiklight text-[12px]'}>
                                            Demir Hayat Anlaşmalı Sağlık Kurumları
                                        </div>
                                    </div>

                                </div>
                                <div className={`w-[163px] cursor-pointer px-[17px] py-[11px] flex justify-center gap-1 items-center h-[40px] ${detay.otoservisp == true ? 'bg-main1 text-white' : ' bg-white text-black'}`}>
                                    <h5 className={' rubiklight select-none text-[15px]'}>
                                        Detayları Gör
                                    </h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path d="M13.5 14.5L17.5 10.5M17.5 10.5L13.5 6.5M17.5 10.5H6.5M3.5 3.5V17.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className={'flex flex-col items-center sm:items-start'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                        <path d="M14 14.2426C14 12.6237 14.6321 11.0712 15.7574 9.92647C16.8826 8.78176 18.4087 8.13867 20 8.13867H29C30.5913 8.13867 32.1174 8.78176 33.2426 9.92647C34.3679 11.0712 35 12.6237 35 14.2426V16.2772H14V14.2426Z" stroke="#171827" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 25.4331L23.515 30.3966C23.833 30.478 24.167 30.478 24.485 30.3966L44 25.4331V38.6583C44 39.1979 43.7893 39.7154 43.4142 40.097C43.0391 40.4786 42.5304 40.6929 42 40.6929H6C5.46957 40.6929 4.96086 40.4786 4.58579 40.097C4.21071 39.7154 4 39.1979 4 38.6583V25.4331Z" stroke="#171827" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M44 27.4679V18.312C44 17.7724 43.7893 17.2548 43.4142 16.8733C43.0391 16.4917 42.5304 16.2773 42 16.2773H6C5.46957 16.2773 4.96086 16.4917 4.58579 16.8733C4.21071 17.2548 4 17.7724 4 18.312V27.4679" stroke="#171827" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 className={'text-main1 font-bold text-[25px]'}>
                        KURUMSAL ANLAŞMALAR
                    </h4>
                    <p className={'mt-[35px] rubiklight text-[18px] text-white w-[359px]'}>
                        Sigortex ile daima güvendesiniz, anlaşmalı sağlık kuruluşları ve oto servislerine anında erişim sağlayın.
                    </p>
                    <div className={'bg3 cursor-pointer active:bg-main2 group group2 w-[192px] flex justify-center mt-[21px] items-center  h-[52px]'}>
                        <h4 className={'font-semibold select-none text-[16px] group-active:text-main1 text-main2'}>
                            Tümünü Görüntüle
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AnasmaliServis;
