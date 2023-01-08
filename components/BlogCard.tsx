import React from 'react';
import { Card as BareCard, Image } from 'antd';
import styled from '@emotion/styled';
import Link from 'next/link';

export interface IBlogCardProps {
    title: string;
    blogUrl: string;
    blogImage: string;
    excerpt: string;
}

const Card = styled(BareCard)`
    border: none;
    .ant-card-body {
        padding-left: 0px;
        padding-right: 0px;
    }
`;

function BlogCard({ blogImage, blogUrl, title, excerpt }: IBlogCardProps) {
    return (
        <Card
            className="animate__fadeInUp animate__animated wow"
            cover={<Image src={blogImage} alt={'blog cover image'} />}
        >
            <h3 className=" text-xl sm:text-2xl font-bold text-[#232536] ">
                <Link href={blogUrl}>{title}</Link>
            </h3>
            <p className=" text-sm sm:text-base text-[#232536] mt-[14px]">{excerpt}</p>
        </Card>
    );
}

BlogCard.propTypes = {};

export default BlogCard;
