import { PageWithLayout } from '@/common/types/interfaces';
import { Card, Col, Image as AntImage, Row } from 'antd';
import Container from 'components/Container';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { v4 } from 'uuid';

const StatsBox = ({ count, label }: { count: string; label: string }) => (
    <div className="p-4 md:p-8">
        <h3 className=" text-2xl md:text-[55px] font-euclid text-white md:leading-[64px] font-bold">{count}+</h3>
        <p className=" text-[10px] md:text-base text-white font-euclid">{label}</p>
    </div>
);

export interface ITeamCardProps {
    team_img: string | StaticImageData;
    name: string;
    role: string;
}

const TeamCard = ({ team_img, name, role }: ITeamCardProps) => (
    <Card
        className="mx-auto w-full max-w-[329px]"
        cover={<Image src={team_img} layout="responsive" width={329} height={231} alt={`${name} photo`} />}
    >
        <h3 className="text-center text-base font-bold">{name}</h3>
        <p className="text-center text-sm text-[#686777]">{role}</p>
    </Card>
);

const teams: ITeamCardProps[] = [
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover1.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover2.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover1.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover2.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover1.png',
        name: 'Full Name',
        role: 'role',
    },
    {
        team_img: 'https://cdn.bridge.africa/static-assets/team/cover2.png',
        name: 'Full Name',
        role: 'role',
    },
];

const AboutUs: PageWithLayout<void> = () => {
    return (
        <>
            <Head>
                <title>Bridge Landing Page</title>
            </Head>
            <Container sectionClass="pt-[120px]">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:px-5">
                        <div className="max-w-[624px] w-full lg:-mb-10 relative z-10 bg-white lg:px-[55px] pt-5 pb-4 lg:pb-12">
                            <h2 className=" text-[32px] leading-[41.6px] lg:text-[56px] lg:leading-[64px] font-bold">
                                The World of <span className="text-primary">Work</span> is Changing!
                            </h2>
                        </div>
                    </div>
                    <div className="w-full max-w-[477px]">
                        <p className="text-para text-base pb-5 lg:pb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="bg-[url(https://cdn.bridge.africa/static-assets/hero/about-hero.png)] bg-cover bg-center min-h-[444px] flex flex-col justify-end md:px-14">
                    <Row className="w-full max-w-[630px] bg-primary">
                        <Col span={8}>
                            <StatsBox count="12" label="Employees" />
                        </Col>
                        <Col span={8}>
                            <StatsBox count="18" label="App Downloads" />
                        </Col>
                        <Col span={8}>
                            <StatsBox count="30k" label="Total active Users" />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container
                sectionClass="bg-[#FAF0EF]  pt-40 pb-20 md:min-h-[500px] "
                containerClass="flex flex-col md:flex-row"
            >
                <div className="md:w-2/4 my-4 md:my-0">
                    <h3 className="text-base font-bold uppercase">OUR MISSION</h3>
                    <h2 className="text-[40px] leading-[56px] font-bold mt-3 mb-5 max-w-[500px]">
                        How Bridge Pro app works
                    </h2>
                    <p className="text-lg text-para max-w-[500px]">
                        We have over 6,000 clients that are near you. Simply follow these 3 simple steps below to get
                        started and be on your way to 10x earning.
                    </p>
                </div>
                <div className="md:w-2/4 my-4 md:my-0">
                    <h3 className="text-base font-bold uppercase">OUR VISION</h3>
                    <h2 className="text-[40px] leading-[56px] font-bold mt-3 mb-5 max-w-[500px]">
                        How Bridge Pro app works
                    </h2>
                    <p className="text-lg text-para max-w-[500px]">
                        We have over 6,000 clients that are near you. Simply follow these 3 simple steps below to get
                        started and be on your way to 10x earning.
                    </p>
                </div>
            </Container>
            <Container sectionClass="bg-[#FAFAFA] py-20 md:min-h-screen">
                <h2 className="text-[40px] font-bold leading-[48px] text-center mb-20">
                    Meet The <span className="text-primary">Team</span>
                </h2>

                <Row gutter={[32, 32]}>
                    {teams?.map((team) => (
                        <Col key={v4()} xs={24} sm={12} md={12} lg={8}>
                            <TeamCard {...team} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container sectionClass="bg-[#faf0ef] py-20 md:min-h-[300px]">
                <Row gutter={[32, 32]}>
                    {Array.from(new Array(7).keys()).map((i) => (
                        <Col
                            className="ant_image_center justify-center flex text-center"
                            key={v4()}
                            xs={24}
                            sm={12}
                            md={8}
                            lg={6}
                        >
                            <AntImage
                                preview={false}
                                src={`https://cdn.bridge.africa/static-assets/others/partners/image${i + 1}.png`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

AboutUs.layout = HomeLayout;

export default AboutUs;
