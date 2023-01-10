import { PageWithLayout } from '@/common/types/interfaces';
import { IBlogCardProps } from 'components/BlogCard';
import AppCtaSection from 'components/LandingPage/AppCtaSection';
import BlogSection from 'components/LandingPage/BlogSection';
import { SquareCtaSection } from 'components/LandingPage/CtaSection';
import HeroSection from 'components/LandingPage/HeroSection';
import ServiceSection, { app_services } from 'components/LandingPage/ServiceSection';
import TestimonialSection, { generateTestimonialDummy } from 'components/LandingPage/TestimonialSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import SEO from 'components/Seo';
import { ISquareCtaCardProps } from 'components/SquareCtaCard';

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
        image_url: 'https://cdn.bridge.africa/static-assets/cta/square-cta.png',
    },
    {
        tagline: 'BENEFITS',
        title: 'Sit tristique sed a morbi. Adrtuoopwopo',
        content: <DummyContent />,
        image_url: 'https://cdn.bridge.africa/static-assets/cta/square-cta.png',
        reverse: false,
    },
    {
        tagline: 'BENEFITS',
        title: 'Sit tristique sed a morbi. Adrtuoopwopo',
        content: <DummyContent />,
        image_url: 'https://cdn.bridge.africa/static-assets/cta/square-cta.png',
    },
];

const blogList: IBlogCardProps[] = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices.',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        blogImage: 'https://cdn.bridge.africa/static-assets/others/image17.png',
        blogUrl: '#',
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices.',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        blogImage: 'https://cdn.bridge.africa/static-assets/others/image18.png',
        blogUrl: '#',
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices.',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        blogImage: 'https://cdn.bridge.africa/static-assets/others/image19.png',
        blogUrl: '#',
    },
];

const Home: PageWithLayout<void> = () => {
    return (
        <>
            <SEO
                title="Bridge Financial Services"
                description="Scale up with our financial services"
                image="https://cdn.bridge.africa/static-assets/hero/finance-hero.png"
            />
            <HeroSection
                text={{
                    pre: '',
                    emph: 'Scale up',
                    end: 'with our financial services',
                    className: 'lg:max-w-[500px]',
                }}
                subText="Bridge allows you connect with people closest to you with the right skills to meet your demands."
                imageUrl={'https://cdn.bridge.africa/static-assets/hero/finance-hero.png'}
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
