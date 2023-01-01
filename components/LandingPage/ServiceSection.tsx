import { Col, Row } from 'antd';
import Container from 'components/Container';
import ServiceCard, { IServiceCardProps } from 'components/ServiceCard';
import React from 'react';
import { v4 } from 'uuid';
import cx from 'classnames';

export const app_steps: IServiceCardProps[] = [
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

export const app_services: IServiceCardProps[] = [
    {
        title: 'Cras bibendum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem turpis etiam eu.',
    },
    {
        title: 'Cras bibendum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem turpis etiam eu.',
    },
    {
        title: 'Cras bibendum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem turpis etiam eu.',
    },
];
export default function ServiceSection({
    isLight,
    lists,
    title,
    sub,
}: {
    isLight?: boolean;
    lists: IServiceCardProps[];
    title: string;
    sub: string;
}) {
    return (
        <Container
            id="services"
            containerClass="pt-[150px] pb-[60px] px-[30px]"
            sectionClass={cx(
                'items-center md:min-h-screen min-h-[670px] bg-bottom   bg-no-repeat',
                isLight ? 'bg-[#E7F6F3]  bg-light-hero-pattern' : 'bg-secondary bg-hero-pattern',
            )}
        >
            <h2
                className={cx(
                    'section-title text-2xl leading-10 md:text-[50px] md:leading-[50px]  mb-[20px]  animate__animated wow animate__fadeIn',
                    isLight ? 'text-black' : 'text-white',
                )}
            >
                {title}
            </h2>
            <p
                className={cx(
                    ' text-sm sm:text-lg mb-[70px] max-w-[725px] opacity-90',
                    isLight ? 'text-black' : 'text-white',
                )}
            >
                {sub}
            </p>
            <Row gutter={[24, 24]}>
                {lists?.map((item, i) => (
                    <Col className={'animated wow animate__animated animate__rollIn'} sm={24} md={12} lg={8} key={v4()}>
                        <ServiceCard {...item} actionText={i + 1} isLight={isLight} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
