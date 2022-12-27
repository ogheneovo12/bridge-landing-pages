import { Avatar, Badge, Button, Card, Image } from 'antd';
import React, { useState } from 'react';
import styled from '@emotion/styled';

type ProjectType = 'Contract' | 'Personal' | 'Fulltime';
export interface IProjectCardProps {
    title: string;
    description?: string;
    actionLink?: string;
    image: string;
    previewGroups?: string[];
    logo?: string;
    type: ProjectType;
}

const { Meta } = Card;

const StyledCard = styled(Card)`
    .ant-card-meta-title {
        color: #fff;
    }
    .ant-card-meta-description {
        color: rgba(255, 255, 255, 0.7);
    }
`;

const colorMap: Record<ProjectType, string> = {
    Contract: 'geekblue',
    Personal: 'gold',
    Fulltime: 'green',
};
function ProjectCard({ title, image, actionLink, previewGroups, logo, type, description }: IProjectCardProps) {
    const [visible, setVisible] = useState(false);
    return (
        <Badge.Ribbon placement="start" text={type} color={colorMap[type]}>
            <StyledCard
                extra={<Button href={actionLink}>Visit</Button>}
                cover={
                    <Image
                        preview={{ visible: false }}
                        className="mx-auto object-cover"
                        height={300}
                        width={'100%'}
                        src={image}
                        alt={`${title} Project Preview`}
                        onClick={() => setVisible(true)}
                    />
                }
                className="min-h-[400px] w-full  bg-primary text-white"
            >
                <Meta className="text-white" avatar={<Avatar src={logo} />} title={title} description={description} />

                {previewGroups && (
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                            {previewGroups?.map((prev_url, i) => (
                                <Image key={`${title}_${prev_url}_${i}`} src={prev_url} alt={`${title} preview ${i}`} />
                            ))}
                        </Image.PreviewGroup>
                    </div>
                )}
            </StyledCard>
        </Badge.Ribbon>
    );
}

ProjectCard.propTypes = {};

export default ProjectCard;
