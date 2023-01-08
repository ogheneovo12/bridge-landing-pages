import { PageWithLayout } from '@/common/types/interfaces';
import Container from 'components/Container';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import RegisterForm from 'components/RegisterForm';
import Head from 'next/head';
import Image from 'next/image';

const RegisterPage: PageWithLayout<void> = () => {
    return (
        <>
            <Head>
                <title>Bridge Registeration Page</title>
            </Head>
            <Container
                sectionClass="bg-[#efefef] py-[130px]"
                containerClass="flex  item-center justify-between max-w-[1000px] xxl:max-w-[1200px] flex-col md:flex-row"
            >
                <div className="max-w-[406px]">
                    <h2 className="text-[32px] font-bold leading-[41.66px] lg:text-[64px] lg:leading-[82px]">
                        <span className="text-primary">Register</span> your account
                    </h2>
                    <p className="text-[#686777] sm:text-lg text-base mb-5">
                        Join the Ambassador Program and start earning.
                    </p>
                    <div className="hidden md:block">
                        <Image
                            layout="responsive"
                            quality={100}
                            width={297}
                            height={329}
                            src={'/printer.png'}
                            alt="printer illustrat"
                        />
                    </div>
                </div>
                <div>
                    <RegisterForm />
                </div>
            </Container>
        </>
    );
};

RegisterPage.layout = HomeLayout;

export default RegisterPage;
