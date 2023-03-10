import { Button } from 'antd';
import Container from 'components/Container';
import Image from 'next/image';
import React from 'react';

function AppCtaSection() {
    return (
        <Container
            sectionClass="pb-10"
            containerClass="flex justify-between realtive flex-col-reverse lg:flex-row bg-[#FAF0EF] rounded-[30px]   md:p-[70px]"
        >
            <div className="w-full ">
                <h1
                    data-wow-duration=".5s"
                    className="animate__fadeInUp wow animate__animated text-left text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[70px] font-extrabold md:leading-[75.6px]"
                >
                    Request a <span className="text-primary">service </span> today.
                </h1>

                <p
                    data-wow-duration=".5s"
                    data-wow-delay=".5s"
                    className="  wow animate__fadeInUp  animate__animated text-left text-para text-lg  leading-[30px] max-w-[465px] mt-5 md:mt-10 mb-10"
                >
                    Download Bridge and get access to over 6000 professionals and servicemen near you at the tap of a
                    button
                </p>
                <div
                    data-wow-duration=".5s"
                    data-wow-delay="1s"
                    className="   wow animate__fadeInUp animate__animated  space-x-6 flex items-center justify-center md:justify-start"
                >
                    <Button
                        icon={
                            <Image
                                src={'https://cdn.bridge.africa/static-assets/app/appstore.png'}
                                width={23}
                                height={28}
                                alt={'app store button'}
                            />
                        }
                        href="/#services"
                        className="space-x-2 rounded-md flex items-center justify-center py-0 max-w-[186px] w-full h-[56px]  bg-secondary text-white hover:bg-primary hover:text-white"
                    >
                        <span className="leading-[10px]">
                            <small className="block opacity-90 mb-[2px]">Available on</small>
                            App Store
                        </span>
                    </Button>
                    <Button
                        icon={
                            <Image
                                src={'https://cdn.bridge.africa/static-assets/app/playstore.png'}
                                width={23}
                                height={28}
                                alt={'app store button'}
                            />
                        }
                        className="space-x-2 rounded-md flex items-center justify-center py-0 h-[56px] max-w-[186px] w-full text-white bg-secondary"
                    >
                        <span className="leading-[10px]">
                            <small className="block opacity-90 mb-[2px]">Available on</small>
                            Play Store
                        </span>
                    </Button>
                </div>
            </div>
            <div className="justify-start items-center flex w-full lg:max-w-[425px]">
                <div className=" animated w-full max-w-[415px] lg:absolute">
                    <Image
                        className="animate__animated wow animate__rotateInUpRight"
                        layout="responsive"
                        src={'https://cdn.bridge.africa/static-assets/app/app-preview.png'}
                        alt="app preview"
                        width={1660}
                        height={2460}
                    />
                </div>
            </div>
        </Container>
    );
}

AppCtaSection.propTypes = {};

export default AppCtaSection;
