import { PageWithLayout } from '@/common/types/interfaces';
import Container from 'components/Container';
import HomeLayout from 'components/Layouts/HomeLayout.layouts';
import { Collapse } from 'antd';
import styled from '@emotion/styled';
import { v4 } from 'uuid';

import { BsPlus, BsDash } from 'react-icons/bs';
import SEO from 'components/Seo';

const { Panel } = Collapse;

const StyledPanel = styled(Panel)`
    .ant-collapse-header-text {
        font-weight: 500;
        color: #f15f0d;
    }
`;

interface IFaq {
    header: string;
    content: string;
}

const FaqList: IFaq[] = [
    {
        header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        content:
            'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    },
    {
        header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        content:
            'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    },
    {
        header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        content:
            'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    },
    {
        header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        content:
            'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    },
];

const FaqPage: PageWithLayout<void> = () => {
    return (
        <>
            <SEO title="Bridge Faq" description="Compilations of commmon inquiry of how bridge works" />
            <Container sectionClass="bg-[#efefef] py-[130px]" containerClass="">
                <div>
                    <h2 className="text-[32px] text-center font-bold leading-[41.66px] lg:text-[64px] lg:leading-[82px] text-primary">
                        FAQ
                    </h2>
                    <p className="text-[#686777] text-center sm:text-lg text-base mb-5">
                        Have any questions? We&apos;re here to assist you
                    </p>
                </div>
                <Collapse
                    expandIcon={({ isActive }) => (
                        <span className="text-base">{isActive ? <BsDash /> : <BsPlus />}</span>
                    )}
                    className="w-full max-w-[714px] mx-auto rounded-md"
                    expandIconPosition="end"
                >
                    {FaqList.map((fq) => (
                        <StyledPanel header={fq.header} key={v4()}>
                            <p>{fq.content}</p>
                        </StyledPanel>
                    ))}
                </Collapse>
            </Container>
        </>
    );
};

FaqPage.layout = HomeLayout;

export default FaqPage;
