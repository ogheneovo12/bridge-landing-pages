import { Col, Row } from 'antd';
import Container from 'components/Container';
import Link from 'next/link';
import React from 'react';

import { v4 } from 'uuid';
import { EmailIcon, FacebookIcon, InstagramIcon, PhoneIcon, TwitterIcon } from 'icons';

type NavLink = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
};

function FooterNav({ title, links }: { title: string; links: NavLink[] }) {
    return (
        <nav className="">
            <h3 className="text-white text-lg font-bold mb-3 uppercase">{title}</h3>
            <ul className="animate__animated wow animate__fadeInUp">
                {links?.map((lnk) => (
                    <li className="py-4 text-[#B3B8BC]" key={v4()}>
                        <Link href={lnk?.href || '#'}>
                            <a className="text-base flex items-center  text-[#B3B8BC] ">
                                {lnk.icon && (
                                    <span className=" mr-4 flex h-[30px] w-[30px] rounded-[100%] bg-[#272C30] items-center justify-center">
                                        {lnk.icon}
                                    </span>
                                )}
                                {lnk.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

const links: Record<string, NavLink[]> = {
    company: [
        {
            label: 'Blog',
        },
        {
            label: 'Terms of Use',
        },
        {
            label: 'Privacy Policy',
        },
        {
            label: 'FAQs',
        },
    ],
    help: [
        {
            label: 'support@bridge.africa',
        },
    ],
    location: [
        {
            label: 'Lekki, Lagos, Nigeria',
        },
    ],
    contact: [
        {
            label: 'Call Line',
            icon: <PhoneIcon />,
        },
        {
            label: 'Email',
            icon: <EmailIcon />,
        },
        {
            label: 'Facebook',
            icon: <FacebookIcon />,
        },
        {
            label: 'Twitter',
            icon: <TwitterIcon />,
        },
        {
            label: 'Instagram',
            icon: <InstagramIcon />,
        },
    ],
};

function Footer() {
    return (
        <footer>
            <Container sectionClass="text-white min-h-[700px] pb-4 pt-[100px] bg-secondary ">
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12} lg={12}>
                        <div className="animate__fadeInUp wow animate_animated">
                            <h1 className="text-white  text-4xl font-medium mb-5">Bridge</h1>
                            <p className="opacity-90">© 2022, Bridge MarketPlace Inc.</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <FooterNav title="Company" links={links.company} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <FooterNav title="NEED HELP" links={links.help} />
                        <FooterNav title="LOCATION" links={links.location} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <div>
                            <FooterNav title="Contact" links={links.contact} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
