import React from 'react';
import CtaCard, { ICtaCardProps } from 'components/CtaCard';
import Container from 'components/Container';
import { v4 } from 'uuid';

const ctaList: ICtaCardProps[] = [
    {
        tag: 'Credit BNPL Access',
        title: 'Book now pay later on Bridge',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: '/check-set.png',
    },
    {
        tag: 'SECURELY DO BUSSINESS',
        title: 'Your money is safely locked in escrow',
        description: "Need a service but can't pay now? Book Now Pay Later through our financial services partners.",
        iconUrl: '/settings.png',
        reverse: false,
    },
    {
        tag: 'EASY DIGITAL LIFE',
        title: 'Do more with the Bridge app',
        description:
            'Pay bills, buy airtime, track your service expenses, and get cash-back on all transactions you make on Bridge.',
        iconUrl: '/cart-set.png',
    },
];

function CtaSection() {
    return (
        <Container sectionClass="bg-[#FAF0EF] min-h-[600px] md:min-h-screen" containerClass="py-[100px]">
            {ctaList?.map((item) => (
                <CtaCard key={v4()} {...item} />
            ))}
        </Container>
    );
}

CtaSection.propTypes = {};

export default CtaSection;
