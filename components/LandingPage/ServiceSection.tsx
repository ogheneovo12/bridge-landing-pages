import { Col, Row } from 'antd';
import Container from 'components/Container';
import ServiceCard, { IServiceCardProps } from 'components/ServiceCard';
import React from 'react';
import { v4 } from 'uuid';
import cx from 'classnames';

const services: (IServiceCardProps & { className?: string })[] = [
    {
        title: 'Create an account',
        description:
            'Download Bridge from the AppStore or Google Play. Sign up with your phone number or email address.',
    },
    {
        title: 'CHAT WITH A PRO',
        description:
            'Search for a Pro or service and Bridge will provide you with a list of quality artisans to choose from.',
    },
    {
        title: 'GET IT DONE  ✅',
        description:
            'Payment will be held in escrow until Pro completes job, and you rate Pro. You are in absolute control.',
    },
];
export default function ServiceSection() {
    return (
        <Container
            id="services"
            containerClass="pt-[150px] pb-[60px] px-[30px]"
            sectionClass=" items-center md:min-h-screen min-h-[670px] bg-secondary bg-hero-pattern  bg-no-repeat"
        >
            <h2 className="section-title text-2xl leading-10 md:text-[50px] md:leading-[50px] text-white mb-[20px]  animate__animated wow animate__fadeIn">
                How the Bridge app works
            </h2>
            <p className="text-white text-sm sm:text-lg mb-[70px] max-w-[725px] opacity-90">
                We have over 6,000 professionals and service men near you. Simply follow these 3 simple steps below to
                get your problem fixed.
            </p>
            <Row gutter={[24, 24]}>
                {services?.map(({ className, ...item }, i) => (
                    <Col
                        className={cx(className, 'animated wow animate__animated animate__rollIn')}
                        sm={24}
                        md={12}
                        lg={8}
                        key={v4()}
                    >
                        <ServiceCard {...item} actionText={i + 1} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
