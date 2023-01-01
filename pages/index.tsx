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
        iconUrl: '/booking.png',
        action_link: '/book-pay',
        dropContent: <CheckCard title="Credit Granted" amount="50,000" />,
    },
    {
        tag: 'SECURELY DO BUSSINESS',
        title: 'Your money is safely locked in escrow',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: '/escrow.png',
        reverse: false,
        action_link: '/escrow',
        dropContent: <CheckCard title="Locked In Escrow" amount="30,550" />,
    },
    {
        tag: 'EASY DIGITAL LIFE',
        title: 'Do more with   the Bridge app',
        description:
            'Pay bills, buy airtime, track your service expenses, and get cash-back on all transactions you make on Bridge.',
        iconUrl: '/doMore.png',
        action_link: '/domore',
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
                    emph: [
                        'ELECTRICIANS',
                        'ARTISANS',
                        'CLEANERS',
                        'RIDERS',
                        'TEACHERS',
                        'TAILORS',
                        'PLUMBERS',
                        'PHOTOGRAPHERS',
                        'PAINTERS',
                        'MECHANICS',
                        'MARKETERS',
                    ],
                    end: 'Near You',
                    className: 'lg:max-w-[500px]',
                }}
                subText="Bridge allows you connect with people closest to you with the right skills to meet your demands."
                imageUrl="/electr.png"
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
                    imageProps: {
                        width: '340px',
                        height: '400px',
                        className: 'animate__bounceInUp animate__animated wow',
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
