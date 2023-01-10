import { PageWithLayout } from '@/common/types/interfaces';
import { Button } from 'antd';
import HeroSection from 'components/LandingPage/HeroSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import SEO from 'components/Seo';
import { useRouter } from 'next/router';

const ReferralPage: PageWithLayout<void> = () => {
    const router = useRouter();
    return (
        <>
            <SEO
                title="Earn up to N150,000 inviting friends"
                description="Do you already tell your friends about Bridge? Well, it is time to get rewarded."
                image="https://cdn.bridge.africa/static-assets/hero/referral-hero.png"
            />
            <HeroSection
                text={{
                    pre: 'Earn up to',
                    emph: 'N150,000',
                    end: 'inviting friends',
                }}
                subText="Do you already tell your friends about Bridge? Well, it is time to get rewarded."
                imageUrl={'https://cdn.bridge.africa/static-assets/hero/referral-hero.png'}
                imgContainerClassName="after_box max-w-[617px] max-h-[705px]"
                linkUp={{
                    label: 'Already have an account? Sign In',
                    url: '/login',
                }}
                customAction={
                    <Button
                        onClick={() => router.push('/register')}
                        className="bg-black text-white h-16 w-full max-w-[313px] rounded-[17px]"
                    >
                        Join Ambassador Program
                    </Button>
                }
            />
        </>
    );
};

ReferralPage.layout = HomeLayout;

export default ReferralPage;
