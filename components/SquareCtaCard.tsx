import { Image } from 'antd';
import React from 'react';
import cx from 'classnames';
import styled from '@emotion/styled';

export interface ISquareCtaCardProps {
    image_url: string;
    tagline: string;
    content: React.ReactNode;
    title: string;
    reverse?: boolean;
}

const ImageDiv = styled.div`
    position: relative;
    &::after,
    &::before {
        position: absolute;
        content: '';
        height: 74px;
        width: 74px;
        border-radius: 100%;
    }

    &::after {
        bottom: -37px;
        background: #11a186;
        left: 10%;
    }

    &::before {
        top: -37px;
        background: #f15f0d;
        right: 20%;
        z-index: 2;
    }
`;

function SquareCtaCard({ image_url, tagline, content, title, reverse = true }: ISquareCtaCardProps) {
    return (
        <div
            className={cx(
                'flex  mb-28 items-center lg:items-stretch lg:justify-between',
                reverse ? 'lg:flex-row-reverse flex-col-reverse' : ' flex-col-reverse lg:flex-row',
            )}
        >
            <div
                className={cx(
                    'w-full max-w-[564px] mt-5 lg:mt-0 wow animate__animated',
                    reverse ? 'lg:ml-5 mr-0 animate__fadeInRight' : ' ml-0 lg:mr-5 animate__fadeInLeft',
                )}
            >
                <p className=" text-sm sm:text-base font-bold uppercase mb-3">{tagline}</p>
                <h2 className=" text-[28px] leading-[37px] md:text-[40px] md:leading-[56px] font-bold">{title}</h2>
                <div className=" text-sm sm:text-lg text-para">{content}</div>
            </div>
            <ImageDiv
                className={cx(
                    'w-full max-w-[576px] lg:h-[443px] text-dark wow animate__animated flex',
                    reverse ? ' animate__fadeInLeft ' : 'animate__fadeInRight',
                )}
            >
                <Image preview={false} src={image_url} alt={tagline} />
            </ImageDiv>
        </div>
    );
}

SquareCtaCard.propTypes = {};

export default SquareCtaCard;
