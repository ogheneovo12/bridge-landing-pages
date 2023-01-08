import React from 'react';
import Container from 'components/Container';
import { Button, Divider } from 'antd';
import Image, { StaticImageData } from 'next/image';
import cx from 'classnames';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

import playstore from 'images/app/playstore.png';
import appstore from 'images/app/appstore.png';
import { MouseIcon } from 'icons';
import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

type HeroText = {
    pre: string;
    emph: string | string[];
    end: string;
    images?: string[] | StaticImageData[];
    className?: string;
};

function HeroSection({
    text,
    imageUrl,
    subText,
    leftSideClassName = 'justify-start ',
    imgContainerClassName = 'after_box',
    imgDimension,
    customAction,
    linkUp,
}: {
    text: HeroText;
    imageUrl: string | StaticImageData;
    subText?: string;
    leftSideClassName?: string;
    imgContainerClassName?: string;
    imgDimension?: {
        width: number;
        height: number;
    };
    customAction?: React.ReactNode;
    linkUp?: {
        label: string;
        url?: string;
    } | null;
}) {
    const [typeWriter, setTypeWriter] = React.useState<TypewriterClass | null>(null);
    const [typeIndex, setTypeIndex] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    const incrementTypeIndex = React.useCallback(() => {
        if (typeIndex < text?.emph?.length - 1) {
            setTypeIndex(typeIndex + 1);
        } else {
            setTypeIndex(0);
        }
    }, [typeIndex, text?.emph?.length]);

    React.useEffect(() => {
        if (typeWriter && Array.isArray(text.emph)) {
            typeWriter
                .typeString(text.emph[typeIndex])
                .pauseFor(2500)
                .callFunction(() => {
                    console.log('String typed out!');
                    if (containerRef.current) {
                        containerRef.current.classList.remove('animate__flipInY');
                    }
                })
                .deleteAll()
                .callFunction(() => {
                    if (containerRef.current) {
                        containerRef.current.classList.add('animate__flipInY');
                    }
                    incrementTypeIndex();
                })
                .start();
        }
    }, [text.emph, typeWriter, typeIndex, incrementTypeIndex]);

    return (
        <Container sectionClass="pt-[140px] hero_gradient " containerClass="flex justify-between flex-col lg:flex-row">
            <div className="w-full lg:max-w-[50%]">
                <h1
                    className={cx(
                        'animate__fadeInUp  animate__animated text-left text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[70px] font-extrabold md:leading-[75.6px] ',
                        text.className,
                    )}
                >
                    {text.pre}{' '}
                    {Array.isArray(text.emph) ? (
                        <Typewriter
                            onInit={(typw) => setTypeWriter(typw)}
                            options={{
                                wrapperClassName: 'text-primary',
                            }}
                        />
                    ) : (
                        <span className="text-primary">{text?.emph}</span>
                    )}{' '}
                    {text.end}.
                </h1>

                <p className="animation-delay-1000 animate__fadeInUp  animate__animated text-left text-para text-lg  leading-[30px] max-w-[465px] mt-5 md:mt-10 mb-10">
                    {subText}
                </p>
                <div className=" animation-delay-2000 animate__fadeInUp animate__animated  space-x-6 flex items-center justify-center md:justify-start">
                    {customAction ? (
                        customAction
                    ) : (
                        <>
                            <Button
                                icon={<Image src={appstore} width={23} height={28} alt={'app store button'} />}
                                href="/#services"
                                className="rounded-[17px] space-x-2  flex items-center justify-center py-0 max-w-[186px] w-full h-[56px]  bg-secondary text-white hover:bg-primary hover:text-white"
                            >
                                <span className="leading-[10px]">
                                    <small className="block opacity-90 mb-[2px]">Available on</small>
                                    App Store
                                </span>
                            </Button>
                            <Button
                                icon={<Image src={playstore} width={23} height={28} alt={'app store button'} />}
                                href="https://drive.google.com/uc?export=download&id=1dref-Gwx0TBBkUQ8HgaiVutUZTc-MJaX"
                                className="rounded-[17px] space-x-2 flex items-center justify-center py-0 h-[56px] max-w-[186px] w-full text-white bg-secondary"
                            >
                                <span className="leading-[10px]">
                                    <small className="block opacity-90 mb-[2px]">Available on</small>
                                    Play Store
                                </span>
                            </Button>
                        </>
                    )}
                </div>
                <div className="flex items-center">
                    <MouseIcon className="animate__animated animate__bounce animate__slow animate__infinite	" />
                    <Divider className="h-[84px] my-10" orientation="center" type="vertical" />
                    {linkUp ? (
                        <Link href={linkUp?.url || '#'} passHref>
                            <a className="text-base    text-secondary font-bold hover:text-primary">
                                {linkUp.label} <HiArrowRight className="ml-2 inline-block" />
                            </a>
                        </Link>
                    ) : null}
                </div>
            </div>
            <div className={cx('items-center flex w-full lg:max-w-[50%]', leftSideClassName)}>
                <div
                    ref={containerRef}
                    className={cx('animated animate__slow  animate__animated w-full', imgContainerClassName)}
                >
                    <Image
                        className="animate__animated wow animate__rotateInUpRight "
                        layout="responsive"
                        width={imgDimension?.width || 411}
                        height={imgDimension?.height || 500}
                        src={Array.isArray(text.images) ? text.images[typeIndex] : imageUrl}
                        alt="Hero Image"
                    />
                </div>
            </div>
        </Container>
    );
}

HeroSection.propTypes = {};

export default HeroSection;
