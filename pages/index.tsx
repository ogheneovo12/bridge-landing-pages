import { PageWithLayout } from '@/common/types/interfaces';
import { ICtaCardProps } from 'components/CtaCard';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import CtaSection, { CheckCard, NetworkGrid } from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection, { app_steps } from 'components/LandingPage/ServiceSection';
import TestimonialSection, { generateTestimonialDummy } from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';

import { css } from '@emotion/css';
import SEO from 'components/Seo';

const ctaList: ICtaCardProps[] = [
    {
        tag: 'Credit BNPL Access',
        title: 'Book now pay later on Bridge',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/booking.png',
        action_link: '/book-pay',
        dropContent: <CheckCard title="Credit Granted" amount="50,000" />,
    },
    {
        tag: 'SECURELY DO BUSSINESS',
        title: 'Your money is safely locked in escrow',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/escrow.png',
        reverse: false,
        action_link: '/escrow',
        dropContent: <CheckCard title="Locked In Escrow" amount="30,550" />,
    },
    {
        tag: 'EASY DIGITAL LIFE',
        title: 'Do more with   the Bridge app',
        description:
            'Pay bills, buy airtime, track your service expenses, and get cash-back on all transactions you make on Bridge.',
        iconUrl: 'https://cdn.bridge.africa/static-assets/cta/do-more.png',
        action_link: '/domore',
        dropContent: <NetworkGrid />,
    },
];

const heroTextsToImages = {
    Electricians: '/electricians.jpg',
    Artisans: '/artisans.jpg',
    Cleaners: '/cleaners.jpg',
    Riders: '/dispatch-riders.jpg',
    Drivers: '/drivers.jpg',
    Teachers: '/teachers.png',
    Tailors: '/tailors.png',
    Plumbers: '/plumbers.jpg',
    Servicemen: '/service-men.jpg',
    Photographers: '/photographers.jpg',
    Painters: '/painters.jpg',
    Mechanics: '/mechanics.jpg',
    Marketers: '/marketers.jpg',
    'Ac Repairers': '/ac-repairers.jpg',
    'Makeup Artists': '/makeup-artists.jpg',
};

const Home: PageWithLayout<void> = () => {
    return (
        <>
            <SEO
                title="Bridge Website"
                description="ridge allows you connect with people closest to you with the right skills to meet your demands."
            />
            <HeroSection
                text={{
                    pre: 'Find',
                    emph: Object.keys(heroTextsToImages),
                    images: Object.values(heroTextsToImages)?.map(
                        (imagePath) => `https://cdn.bridge.africa/static-assets/services${imagePath}`,
                    ),
                    end: 'Near You',
                    className: 'lg:max-w-[500px]',
                }}
                subText="Bridge allows you connect with people closest to you with the right skills to meet your demands."
                imageUrl={'https://cdn.bridge.africa/static-assets/services/electricians.png'}
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
