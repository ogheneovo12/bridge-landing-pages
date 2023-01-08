import { PageWithLayout } from '@/common/types/interfaces';
import { IBlogCardProps } from 'components/BlogCard';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import BlogSection from 'components/LandingPage/BlogSection';
import { SquareCtaSection } from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection, { app_services } from 'components/LandingPage/ServiceSection';
import TestimonialSection, { generateTestimonialDummy } from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import { ISquareCtaCardProps } from 'components/SquareCtaCard';
import Head from 'next/head';
import hero_img from 'images/hero/escrow_hero.png';

const DummyContent = () => (
    <>
        <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id tempor, viverra at volutpat.
            Vestibulum proin massa massa mauris ipsum. Et aliquet sit sem volutpat.
        </p>
        <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id tempor, viverra at volutpat.
            Vestibulum proin massa massa mauris ipsum. Et aliquet sit sem volutpat.
        </p>
    </>
);

const ctaList: ISquareCtaCardProps[] = [
    {
        tagline: 'BENEFITS',
        title: 'Sit tristique sed a morbi. Adrtuoopwopo',
        content: <DummyContent />,
        image_url: '/square_cta.png',
    },
    {
        tagline: 'BENEFITS',
        title: 'Sit tristique sed a morbi. Adrtuoopwopo',
        content: <DummyContent />,
        image_url: '/square_cta.png',
        reverse: false,
    },
    {
        tagline: 'BENEFITS',
        title: 'Sit tristique sed a morbi. Adrtuoopwopo',
        content: <DummyContent />,
        image_url: '/square_cta.png',
    },
];

const blogList: IBlogCardProps[] = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices.',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        blogImage: '/image17.png',
        blogUrl: '#',
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices.',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        blogImage: '/image18.png',
        blogUrl: '#',
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices.',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        blogImage: '/image19.png',
        blogUrl: '#',
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
                    pre: '',
                    emph: 'Your money',
                    end: 'is safely locked in escrow',
                }}
                subText="Bridge allows you connect with people closest to you with the right skills to meet your demands."
                imageUrl={hero_img}
                leftSideClassName="justify-center bg-no-repeat bg-center bg-contain"
                imgContainerClassName="bg-[#F8F8F8] lg:-ml-32 max-w-[708px] max-h-[660px]"
                imgDimension={{
                    width: 708,
                    height: 660,
                }}
            />
            <ServiceSection
                isLight
                title="We've got you covered!"
                sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis malesuada egestas in tellus. Convallis neque mauris, at morbi. Arcu condimentum."
                lists={app_services}
            />
            <SquareCtaSection sections={ctaList} />
            <BlogSection blogs={blogList} />
            <TestimonialSection
                title="Other Pros are saying..."
                testimonials={generateTestimonialDummy('DANIELLA ENUOYIBO', '/daniella.png')}
            />
            <AppCtaSection />
        </>
    );
};

Home.layout = HomeLayout;

export default Home;
