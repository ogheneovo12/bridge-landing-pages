import { PageWithLayout } from '@/common/types/interfaces';
import { ICtaCardProps } from 'components/CtaCard';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import CtaSection, { CheckCard } from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection, { app_steps } from 'components/LandingPage/ServiceSection';
import TestimonialSection, { generateTestimonialDummy } from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';

const ctaList: ICtaCardProps[] = [
    {
        tag: 'FINANCIAL SERVICES',
        title: 'Scale up with our financial services',
        description: 'Gain access to credit, investments, pensions, all made available through our fintech partners.',
        iconUrl: 'https://cdn.bridge.africa/static-assets/others/chart.png',
        dropContent: <CheckCard title="Credit Granted" amount="65,000" />,
    },
    {
        tag: 'ACCESS TO PRODUCTIVITY TOOLS',
        title: 'Work smart, save time & stress',
        description:
            'Track your bussiness performance, send invoices, set appointments, access tools to scale your business.',
        iconUrl: 'https://cdn.bridge.africa/static-assets/others/settings.png',
        reverse: false,
        dropContent: <CheckCard title="Payment Received" amount="57,000" />,
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
                imageUrl="/hero3.png"
                leftSideClassName="justify-center bg-[url(https://cdn.bridge.africa/static-assets/bg/bgblob.png)] bg-no-repeat bg-center bg-contain "
                imgContainerClassName="max-w-[578px] max-h-[744px]"
                imgDimension={{
                    width: 578,
                    height: 744,
                }}
                linkUp={{
                    label: 'SIGNUP AS A CLIENT',
                    url: '/#',
                }}
            />
            <ServiceSection
                title="How Bridge Pro app works"
                sub="We have over 6,000 clients that are near you. Simply follow these 3 simple steps below to get started and be on your way to 10x earning."
                lists={app_steps}
            />
            <CtaSection sections={ctaList} />
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
