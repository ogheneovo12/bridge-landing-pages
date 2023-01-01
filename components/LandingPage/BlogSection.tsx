import { Col, Row } from 'antd';
import BlogCard, { IBlogCardProps } from 'components/BlogCard';
import Container from 'components/Container';
import { v4 } from 'uuid';

function BlogSection({ blogs }: { blogs: IBlogCardProps[] }) {
    return (
        <Container sectionClass="bg-white min-h-[600px] md:min-h-screen" containerClass="pb-[100px]">
            <h2 className="text-[40px] leading-[50px] font-bold mb-14">What to read next</h2>
            <Row gutter={[32, 32]}>
                {blogs?.map((item) => (
                    <Col key={v4()} xs={24} sm={24} md={12} lg={8}>
                        <BlogCard {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

BlogSection.propTypes = {};

export default BlogSection;
