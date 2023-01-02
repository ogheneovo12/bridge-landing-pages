import { Tag } from 'antd';
import { BiChevronRight } from 'react-icons/bi';
import cx from 'classnames';
import { SparkleIcon } from 'icons';
import Image, { ImageProps, StaticImageData } from 'next/image';
import Link from 'next/link';

export type CtaImageProps = {
    bg: string;
    bgContainerClassName?: string;
    bgReverseContainerClassName?: string;
    imageContainerClassName?: string;
    reverseBg?: string;
    imageProps: Omit<ImageProps, 'src'>;
};

export interface ICtaCardProps {
    tag: string;
    title: string;
    description: string;
    action_text?: string;
    action_link?: string;
    iconUrl: string | StaticImageData;
    reverse?: boolean;
    dropContent?: React.ReactNode;
    ctaImage?: CtaImageProps;
}

const DropContent = ({ content, reverse }: { content: React.ReactNode; reverse?: boolean }) => (
    <div
        className={cx(
            'absolute p-4  flex items-center shadow-[0_4px_30px_rgba(0,0,0,0.05)] bg-white -bottom-[24px] min-h-[85px] sm:min-h-[128px] w-full max-w-[263px] rounded-[30px]',
            reverse ? '-right-9' : '-left-9',
        )}
    >
        <SparkleIcon
            className={cx('absolute -top-[35px]', reverse ? '-right-[35px]' : '-left-[35px] rotate-[251deg]')}
        />
        {content}
    </div>
);

const defaultImageProps: CtaImageProps = {
    bg: '/Bridge.png',
    bgContainerClassName: 'bg-[#EBBFA7]',
    imageContainerClassName: '',
    imageProps: {
        sizes: '(max-width: 768px) 171px, 240px',
        width: 240,
        height: 264,
        className: 'animate__animated animate__slow animate__heartBeat animate__infinite',
    },
};
function CtaCard({
    tag,
    title,
    description,
    action_link,
    action_text = 'Learn more',
    iconUrl,
    reverse = true,
    dropContent,
    ctaImage = defaultImageProps,
}: ICtaCardProps) {
    return (
        <div
            className={cx(
                'flex items-center mb-10 justify-center max-w-[1110px]',
                reverse ? 'md:flex-row-reverse flex-col-reverse' : ' flex-col-reverse md:flex-row',
            )}
        >
            <div
                className={cx(
                    'mt-10 md:mt-0 wow animate__animated',
                    reverse ? ' animate__fadeInRight ' : 'animate__fadeInLeft',
                )}
            >
                <Tag className="bg-white text-transform uppercase tracking-[2px] rounded-md">{tag}</Tag>
                <h2 className=" text-[28px] leading-[36px] md:text-[56px] mt-6 font-bold md:leading-[68px]">{title}</h2>
                <p className="text-para text-lg max-w-[525px] my-5">{description}</p>
                <Link href={action_link || '#'} passHref>
                    <a className="text-primary font-bold text-lg flex items-center">
                        {action_text} <BiChevronRight />
                    </a>
                </Link>
            </div>
            <div
                className={cx(
                    'w-full max-w-[550px]  wow animate__animated flex',
                    reverse ? ' animate__fadeInLeft ' : 'animate__fadeInRight',
                )}
            >
                <div
                    style={{
                        background: reverse ? `url(${ctaImage?.reverseBg || ctaImage?.bg})` : `url(${ctaImage?.bg})`,
                    }}
                    className={cx(
                        'relative  h-[335px]  max-w-[335px] md:h-[500px] bg-contain rounded-[100%]  w-full md:max-w-[500px] flex justify-center items-center',
                        ctaImage?.bgContainerClassName,
                        reverse ? ctaImage?.bgReverseContainerClassName : '',
                    )}
                >
                    <div
                        className={cx(
                            'w-full h-full overflow-hidden rounded-[100%] flex justify-center items-center',
                            ctaImage.imageContainerClassName,
                        )}
                    >
                        <Image {...ctaImage?.imageProps} src={iconUrl} alt="cta icon" />
                    </div>

                    {dropContent && <DropContent reverse={reverse} content={dropContent} />}
                </div>
            </div>
        </div>
    );
}

CtaCard.propTypes = {};

export default CtaCard;
