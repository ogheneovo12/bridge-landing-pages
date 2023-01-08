import { PageWithLayout } from '@/common/types/interfaces';
import { ICtaCardProps } from 'components/CtaCard';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import CtaSection, { CheckCard, NetworkGrid } from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection, { app_steps } from 'components/LandingPage/ServiceSection';
import TestimonialSection, { generateTestimonialDummy } from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';

import hero_img from 'images/services/ELECTRICIANS.jpg';
import escrow_img from 'images/cta/escrow.png';
import domore_img from 'images/cta/doMore.png';
import booking_img from 'images/cta/booking.png';
import { css } from '@emotion/css';

const ctaList: ICtaCardProps[] = [
    {
        tag: 'Credit BNPL Access',
        title: 'Book now pay later on Bridge',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: booking_img,
        action_link: '/book-pay',
        dropContent: <CheckCard title="Credit Granted" amount="50,000" />,
    },
    {
        tag: 'SECURELY DO BUSSINESS',
        title: 'Your money is safely locked in escrow',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: escrow_img,
        reverse: false,
        action_link: '/escrow',
        dropContent: <CheckCard title="Locked In Escrow" amount="30,550" />,
    },
    {
        tag: 'EASY DIGITAL LIFE',
        title: 'Do more with   the Bridge app',
        description:
            'Pay bills, buy airtime, track your service expenses, and get cash-back on all transactions you make on Bridge.',
        iconUrl: domore_img,
        action_link: '/domore',
        dropContent: <NetworkGrid />,
    },
];

const heroTextsToImages = {
    Electricians: '/ELECTRICIANS.jpg',
    Artisans: '/ARTISANS.jpg',
    Cleaners: '/CLEANERS.jpg',
    Riders: '/DISPATCHRIDERS.jpg',
    Teachers: '/TEACHERS.png',
    Tailors: '/TAILORS.png',
    Plumbers: '/PLUMBERS.jpg',
    Photographers: '/PHOTOGRAPHERS.jpg',
    Painters: '/PAINTERS.jpg',
    Mechanics: '/MECHANICS.jpg',
    Marketers: '/MARKETERS.jpg',
};

const Home: PageWithLayout<void> = () => {
    return (
        <>
            <Head>
                <title>Bridge Landing Page</title>
            </Head>
            <HeroSection
                text={{
                    pre: 'Find',
                    emph: Object.keys(heroTextsToImages),
                    images: Object.values(heroTextsToImages)?.map((imagePath) => `/services${imagePath}`),
                    end: 'Near You',
                    className: 'lg:max-w-[500px]',
                }}
                subText="Bridge allows you connect with people closest to you with the right skills to meet your demands."
                imageUrl={hero_img}
                imgContainerClassName="after_box max-w-[617px] max-h-[705px]"
                imgDimension={{
                    width: 617,
                    height: 705,
                }}
                linkUp={{
                    label: 'SIGNUP AS A SERVICE PROVIDER',
                    url: '/register',
                }}
            />
            <ServiceSection
                title="How Bridge Pro app works"
                sub="We have over 6,000 clients that are near you. Simply follow these 3 simple steps below to get started and be on your way to 10x earning."
                lists={app_steps}
            />
            <CtaSection
                sections={ctaList}
                ctaImageProps={{
                    bg: '/bgColoredRight.png',
                    reverseBg: '/bgColoredLeft.png',
                    bgContainerClassName: 'bg-white bg-no-repeat bg-right ant_image_end',
                    bgReverseContainerClassName: 'bg-left',
                    imageContainerClassName: css`
                        & > span {
                            margin-bottom: -40px !important;
                            @media (max-width: 640px) {
                                width: 228px !important;
                            }
                        }
                    `,
                    imageProps: {
                        className: 'animate__bounceInUp animate__animated wow -mb-[30px]',
                    },
                }}
            />
            <TestimonialSection
                title="What clients are saying..."
                testimonials={generateTestimonialDummy('David olaniyan', '/david.png')}
            />

            <AppCtaSection />
        </>
    );
};

Home.layout = HomeLayout;

export default Home;
