import { Image, Tag } from 'antd';
import { BiChevronRight } from 'react-icons/bi';
import cx from 'classnames';
export interface ICtaCardProps {
    tag: string;
    title: string;
    description: string;
    action_text?: string;
    action_link?: string;
    iconUrl: string;
    reverse?: boolean;
}

function CtaCard({
    tag,
    title,
    description,
    action_link,
    action_text = 'Learn more',
    iconUrl,
    reverse = true,
}: ICtaCardProps) {
    return (
        <div
            className={cx(
                'flex items-center mb-10',
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
                <a href={action_link} className="text-primary font-bold text-lg flex items-center">
                    {action_text} <BiChevronRight />
                </a>
            </div>
            <div
                className={cx(
                    'w-full max-w-[550px  wow animate__animated',
                    reverse ? ' animate__fadeInLeft ' : 'animate__fadeInRight',
                )}
            >
                <div className="relative bg-[url(/Bridge.png)] h-[300px] max-w-[300px] md:h-[500px] rounded-[100%] bg-[#EBBFA7] w-full md:max-w-[500px] flex justify-center items-center">
                    <Image
                        className="animate__animated animate__slow animate__heartBeat animate__infinite"
                        preview={false}
                        width={240}
                        height={264}
                        src={iconUrl}
                        alt="cta icon"
                    />
                    <div className="absolute bg-white bottom"></div>
                </div>
            </div>
        </div>
    );
}

CtaCard.propTypes = {};

export default CtaCard;
