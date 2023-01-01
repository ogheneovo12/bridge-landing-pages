import React from 'react';
import CtaCard, { CtaImageProps, ICtaCardProps } from 'components/CtaCard';
import Container from 'components/Container';
import { v4 } from 'uuid';
import AnimatedCheck from 'components/AnimatedCheck';
import nineMobile from 'images/9mobile.png';
import ikejaEl from 'images/ikeja.png';
import mtn from 'images/mtn.png';
import dstv from 'images/dstv.png';
import glo from 'images/glo.png';
import airtel from 'images/airtel.png';
import gotv from 'images/gotv.png';
import { Col, Row } from 'antd';
import Image from 'next/image';
import startimes from 'images/startimes.png';
import SquareCtaCard, { ISquareCtaCardProps } from 'components/SquareCtaCard';

export const networks = [mtn, glo, airtel, nineMobile, dstv, gotv, startimes, ikejaEl];

export const CheckCard = ({ title, amount }: { title: string; amount: string }) => (
    <div className="flex items-center space-x-3">
        <AnimatedCheck />
        <div>
            <p className="font-bold text-xs sm:text-base">{title}</p>
            <p className="text-primary text-xl sm:text-[32px] font-bold">₦{amount}</p>
        </div>
    </div>
);

export const NetworkGrid = () => (
    <Row gutter={[8, 8]}>
        {networks?.map((netimg) => (
            <Col key={v4()} span={6}>
                <div className="h-[37px] w-[37px] rounded-[100%] bg-white shadow-[0_1.03798px_6.99596px_rgba(0,0,0,0.25)]">
                    <Image objectFit="contain" quality={100} width={37} height={37} src={netimg} alt="Network Imahe" />
                </div>
            </Col>
        ))}
    </Row>
);

type CtaSectionProps = {
    sections: ICtaCardProps[];
    ctaImageProps?: CtaImageProps;
};

function CtaSection({ sections, ctaImageProps }: CtaSectionProps) {
    return (
        <Container
            sectionClass="bg-[#FAF0EF] min-h-[600px] md:min-h-screen"
            containerClass="py-[100px] flex  flex-col items-center"
        >
            {sections?.map((item) => (
                <CtaCard key={v4()} {...item} ctaImage={ctaImageProps} />
            ))}
        </Container>
    );
}

export function SquareCtaSection({ sections }: { sections: ISquareCtaCardProps[] }) {
    return (
        <Container sectionClass="bg-white min-h-[600px] md:min-h-screen" containerClass="py-[100px] ">
            {sections?.map((item) => (
                <SquareCtaCard key={v4()} {...item} />
            ))}
        </Container>
    );
}

CtaSection.propTypes = {};

export default CtaSection;
