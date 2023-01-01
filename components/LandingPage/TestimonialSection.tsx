import styled from '@emotion/styled';
import { Button, Carousel as CarouselBare } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import Container from 'components/Container';
import TestimonialCard, { ITestimonialCardProps } from 'components/TestimonialCard';
import { ArrowLeft, ArrowRight } from 'icons';
import React, { useRef } from 'react';
import { v4 } from 'uuid';

const Carousel = styled(CarouselBare)`
    .slick-dots li button {
        height: 10px;
        width: 10px;
        background: #c4c4c4;
        border-radius: 100%;
    }
    .slick-dots li.slick-active button {
        background-color: #ec5d0d;
        outline: 1px solid #ec5d0d;
        outline-offset: 2px;
    }
`;
function TestimonialSection({ title, testimonials }: { title: string; testimonials: ITestimonialCardProps[] }) {
    const carouselRef = useRef<CarouselRef>(null);

    return (
        <Container
            containerClass="pt-[150px] pb-[60px] px-[30px]"
            sectionClass="bg-hero-pattern  bg-no-repeat md:min-h-screen min-h-[670px]"
        >
            <h2 className="section-title text-[28px] leading-[36px] md:text-[56px] mt-6 font-bold md:leading-[68px] text-secondary mb-[20px]  animate__animated wow animate__fadeIn">
                {title}
            </h2>
            <p className="text-secondary text-sm sm:text-lg mb-[70px] max-w-[725px] opacity-90">
                Great work can only be done safely and this is what Bridge stands for. Our pros are onboarded through a
                rigorous vetting KYC process. Our processes ensures your comfort and safety
            </p>
            <Carousel ref={carouselRef} dots dotPosition="bottom">
                {testimonials?.map((testimony) => (
                    <TestimonialCard key={v4()} {...testimony} />
                ))}
            </Carousel>
            <div className="flex justify-center my-8 md:my-0 md:justify-end space-x-6">
                <Button
                    onClick={() => {
                        carouselRef?.current?.prev();
                    }}
                    className="h-[80px] w-[80px] rounded-[100%] flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white"
                >
                    <ArrowRight />
                </Button>
                <Button
                    onClick={() => {
                        carouselRef?.current?.next();
                    }}
                    className="h-[80px] w-[80px] rounded-[100%] flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white"
                >
                    <ArrowLeft />
                </Button>
            </div>
        </Container>
    );
}

TestimonialSection.propTypes = {};

export default TestimonialSection;

export const generateTestimonialDummy = (userName: string, userImage: string, count = 3) =>
    Array.from(new Array(count).keys()).map(() => ({
        testimony:
            "Using the Bridge app has been a smooth one so far. I'm able to find someone very quickly whenever i have an emergency. Thank you so much for this app.",
        userImage,
        userName,
        userLocation: 'Lagos, Nigeria',
    }));
