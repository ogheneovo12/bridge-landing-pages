import React from 'react';
import Container from 'components/Container';
import { Button, Divider } from 'antd';
import Image from 'next/image';

import playstore from 'images/playstore.png';
import appstore from 'images/appstore.png';
import { MouseIcon } from 'icons';
import { HiArrowRight } from 'react-icons/hi';

function HeroSection() {
    return (
        <Container sectionClass="pt-[140px]  hero_gradient " containerClass="flex justify-between flex-col lg:flex-row">
            <div className="w-full lg:max-w-[50%]">
                <h1 className="animate__fadeInUp  animate__animated text-left text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[70px] font-extrabold md:leading-[75.6px]">
                    Find <span className="text-primary">Electricians</span> | near you.
                </h1>

                <p className="animation-delay-1000 animate__fadeInUp  animate__animated text-left text-para text-lg  leading-[30px] max-w-[465px] mt-5 md:mt-10 mb-10">
                    Bridge allows you connect with people closest to you with the right skills to meet your demands.
                </p>
                <div className=" animation-delay-2000 animate__fadeInUp animate__animated  space-x-6 flex items-center justify-center md:justify-start">
                    <Button
                        icon={<Image src={appstore} width={23} height={28} alt={'app store button'} />}
                        href="/#services"
                        className="space-x-2  flex items-center justify-center py-0 max-w-[186px] w-full h-[56px]  bg-secondary text-white hover:bg-primary hover:text-white"
                    >
                        <span className="leading-[10px]">
                            <small className="block opacity-90 mb-[2px]">Available on</small>
                            App Store
                        </span>
                    </Button>
                    <Button
                        icon={<Image src={playstore} width={23} height={28} alt={'app store button'} />}
                        href="https://drive.google.com/uc?export=download&id=1dref-Gwx0TBBkUQ8HgaiVutUZTc-MJaX"
                        className="space-x-2 flex items-center justify-center py-0 h-[56px] max-w-[186px] w-full text-white bg-secondary"
                    >
                        <span className="leading-[10px]">
                            <small className="block opacity-90 mb-[2px]">Available on</small>
                            Play Store
                        </span>
                    </Button>
                </div>
                <div className="flex items-center">
                    <MouseIcon className="animate__animated animate__bounce animate__slow animate__infinite	" />
                    <Divider className="h-[84px] my-10" orientation="center" type="vertical" />
                    <a className="text-base flex items-center  text-secondary font-bold hover:text-primary">
                        SIGNUP AS A SERVICE PROVIDER <HiArrowRight className="ml-2" />
                    </a>
                </div>
            </div>
            <div className="justify-start items-center flex w-full lg:max-w-[50%]">
                <div className="after_box animated w-full max-w-[411px] ">
                    <Image
                        className="animate__animated wow animate__rotateInUpRight"
                        layout="responsive"
                        width={411}
                        height={500}
                        src="/electr.png"
                        alt="ukuanovwe ovo avatar"
                    />
                </div>
            </div>
        </Container>
    );
}

HeroSection.propTypes = {};

export default HeroSection;
