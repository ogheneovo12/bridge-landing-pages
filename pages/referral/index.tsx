import { PageWithLayout } from '@/common/types/interfaces';
import { Button } from 'antd';
import HeroSection from 'components/LandingPage/HeroSection';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ReferralPage: PageWithLayout<void> = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Bridge Landing Page</title>
            </Head>
            <HeroSection
                text={{
                    pre: 'Earn up to',
                    emph: '150,000',
                    end: 'inviting friends',
                }}
                subText="Do you already tell your friends about Bridge? Well, it is time to get rewarded."
                imageUrl="/image15.png"
                imgContainerClassName="after_box max-w-[617px] max-h-[705px]"
                imgDimension={{
                    width: 617,
                    height: 705,
                }}
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
