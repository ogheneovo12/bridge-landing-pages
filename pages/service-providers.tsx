import { PageWithLayout } from '@/common/types/interfaces';
import { ICtaCardProps } from 'components/CtaCard';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import CtaSection, { CheckCard } from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection, { app_steps } from 'components/LandingPage/ServiceSection';
import TestimonialSection, { generateTestimonialDummy } from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';

import { css } from '@emotion/css';

const ctaList: ICtaCardProps[] = [
    {
        tag: 'FINANCIAL SERVICES',
        title: 'Scale up with our financial services',
        description: 'Gain access to credit, investments, pensions, all made available through our fintech partners.',
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/financial.png',
        dropContent: <CheckCard title="Credit Granted" amount="65,000" />,
        action_link: '/finance',
    },
    {
        tag: 'ACCESS TO PRODUCTIVITY TOOLS',
        title: 'Work smart, save time & stress',
        description:
            'Track your bussiness performance, send invoices, set appointments, access tools to scale your business.',
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/smart.png',
        reverse: false,
        dropContent: <CheckCard title="Payment Received" amount="57,000" />,
        action_link: '/smart',
    },
];

const Home: PageWithLayout<void> = () => {
    return (
        <>
            <Head>
                <title>Bridge Landing Page</title>
            </Head>
            <HeroSection
                text={{
                    pre: 'Calling all',
                    emph: 'Dispatch Riders',
                    end: '10x your earnings',
                }}
                subText="Bridge allows you connect with people closest to you with the right skills to meet your demands."
                imageUrl={'https://cdn.bridge.africa/static-assets/hero/service-hero.png'}
                leftSideClassName="justify-center bg-[url(https://cdn.bridge.africa/static-assets/bg/bgblob.png)] bg-no-repeat bg-center bg-contain"
                imgContainerClassName="max-w-[578px] max-h-[744px]"
                imgDimension={{
                    width: 2312,
                    height: 2974,
                }}
                linkUp={{
                    label: 'SIGNUP AS A CLIENT',
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
                    bg: 'https://cdn.bridge.africa/static-assets/bg/bg-colored-right.png',
                    reverseBg: 'https://cdn.bridge.africa/static-assets/bg/bg-colored-left.png',
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
                        width: 340,
                        height: 459,
                        className: 'animate__bounceInUp animate__animated wow',
                    },
                }}
            />
            <TestimonialSection
                title="Other Pros are saying..."
                testimonials={generateTestimonialDummy(
                    'DANIELLA ENUOYIBO',
                    'https://cdn.bridge.africa/static-assets/others/daniella.png',
                )}
            />
            <AppCtaSection />
        </>
    );
};

Home.layout = HomeLayout;

export default Home;
