import { PageWithLayout } from '@/common/types/interfaces';
import styled from '@emotion/styled';
import CopyButton from 'components/CopyButton';
import { Alert, Button, Col, Row, Select } from 'antd';
import Container from 'components/Container';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import Head from 'next/head';
import { IoLogOutOutline } from 'react-icons/io5';
import { MdOutlineContentCopy } from 'react-icons/md';

const StyledAlert = styled(Alert)`
    background: #eef5fd;
    .ant-alert-message {
        color: #368ac6;
        text-align: center;
    }
`;

const StatBoxContainer = styled.div`
    background: #ffffff;
    box-shadow: 60px 64px 74px rgba(151, 142, 142, 0.1);
    border-radius: 8px;
    min-height: 150px;
    padding: 30px;
    display: flex;
    flex-flow: column;
    justify-content: center;
`;

const StatBox = ({ title, sub }: { title: string; sub: React.ReactNode }) => (
    <StatBoxContainer>
        <h3 className=" text-4xl  font-medium">{title}</h3>
        <p className="text-[#686777] text-lg font-medium">{sub}</p>
    </StatBoxContainer>
);
const ReferralDashboard: PageWithLayout<void> = () => {
    return (
        <>
            <Head>
                <title>Bridge Referral Dashboard</title>
            </Head>
            <Container sectionClass="pt-[150px] pb-10 bg-[#FAF0EF]">
                <h2 className="text-[32px] leading-[41.66px] md:text-[54px] md:leading-[70.31px] md:text-center font-medium">
                    <span className="text-primary">Referral</span> Dashboard
                </h2>
                <div className="flex justify-between sm:items-center mt-10 flex-col sm:flex-row">
                    <p className="text-lg sm:text-2xl ">
                        Welcome, <span className="font-bold block sm:inline-block">James Anifowose</span>
                    </p>
                    <Button
                        icon={<IoLogOutOutline />}
                        className="text-primary mt-4 sm:mt-0 shadow-none flex py-0 items-center px-0  space-x-3 border-none text-xl sm:text-2xl"
                        type="ghost"
                    >
                        Logout
                    </Button>
                </div>
            </Container>
            <Container sectionClass="pt-[100px] pb-10 bg-[#FAFAFA]">
                <div className="flex justify-between lg:items-center mb-14  flex-col lg:flex-row">
                    <StyledAlert
                        message="NOTE: Referral earnings will be paid out at the end of every month to your Bridge payment account."
                        type="info"
                    />
                    <Select
                        className="ml-auto mt-10 h-10"
                        value={'january'}
                        options={[{ label: 'January', value: 'january' }]}
                    />
                </div>

                <Row gutter={[32, 32]}>
                    <Col xs={24} md={12} lg={8}>
                        <StatBox title="NGN 0.00" sub="Naira Balance" />
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <StatBox title="0" sub="Referral Count" />
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <StatBox title="0" sub="Withdrawal Count" />
                    </Col>
                </Row>
                <StatBoxContainer className="my-14 overflow-hidden flex-col md:flex-row md:items-center md:space-x-3 ">
                    <a
                        className="font-medium text-sm sm:text-2xl overflow-hidden text-ellipsis"
                        href="https://bridge.africa/r/JET68944747484848447"
                    >
                        Bridge.africa/r/JET68944747484848447
                    </a>
                    <CopyButton
                        icon={<MdOutlineContentCopy />}
                        link="https://bridge.africa/r/JET68944747484848447"
                        className="bg-primary text-white uppercase rounded border-primary w-full max-w-[131px] mt-5 md:mt-0"
                    />
                </StatBoxContainer>
            </Container>
        </>
    );
};

ReferralDashboard.layout = HomeLayout;

export default ReferralDashboard;
