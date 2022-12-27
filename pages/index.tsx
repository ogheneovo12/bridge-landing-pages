import { PageWithLayout } from '@/common/types/interfaces';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import CtaSection from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection from 'components/LandingPage/ServiceSection';
import TestimonialSection from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';

const Home: PageWithLayout<void> = () => {
    return (
        <>
            <Head>
                <title>Bridge Landing Page</title>
            </Head>
            <HeroSection />
            <ServiceSection />
            <CtaSection />
            <TestimonialSection />
            <AppCtaSection />
        </>
    );
};

Home.layout = HomeLayout;

export default Home;
