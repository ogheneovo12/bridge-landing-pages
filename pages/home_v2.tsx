import { PageWithLayout } from '@/common/types/interfaces';
import { ICtaCardProps } from 'components/CtaCard';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import CtaSection, { CheckCard, NetworkGrid } from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection, { app_steps } from 'components/LandingPage/ServiceSection';
import TestimonialSection, { generateTestimonialDummy } from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';

const ctaList: ICtaCardProps[] = [
    {
        tag: 'Credit BNPL Access',
        title: 'Book now pay later on Bridge',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/booking.png',
        dropContent: <CheckCard title="Credit Granted" amount="50,000" />,
    },
    {
        tag: 'SECURELY DO BUSSINESS',
        title: 'Your money is safely locked in escrow',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/escrow.png',
        reverse: false,
        dropContent: <CheckCard title="Locked In Escrow" amount="30,550" />,
    },
    {
        tag: 'EASY DIGITAL LIFE',
        title: 'Do more with the Bridge app',
        description:
            'Pay bills, buy airtime, track your service expenses, and get cash-back on all transactions you make on Bridge.',
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/do-more.png',
        dropContent: <NetworkGrid />,
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
                    pre: 'Find',
                    emph: 'Electricians',
                    end: 'Near You',
                }}
                subText="Bridge allows you connect with people closest to you with the right skills to meet your demands."
                imageUrl={'https://cdn.bridge.africa/static-assets/services/electricians.png'}
                linkUp={{
                    label: 'SIGNUP AS A SERVICE PROVIDER',
                    url: '/#',
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
                    imageProps: {
                        className: 'animate__bounceInUp animate__animated wow -mb-[30px]',
                    },
                }}
            />
            <TestimonialSection
                title="What clients are saying..."
                testimonials={generateTestimonialDummy(
                    'David olaniyan',
                    'https://cdn.bridge.africa/static-assets/others/david.png',
                )}
            />
            <AppCtaSection />
        </>
    );
};

Home.layout = HomeLayout;

export default Home;
