import { Button } from 'antd';
import cx from 'classnames';
export interface IServiceCardProps {
    title: string;
    description?: string;
    actionText?: string | number;
    actionLink?: string;
    isLight?: boolean;
}

function ServiceCard({ title, description, actionText, isLight }: IServiceCardProps) {
    return (
        <div
            className={cx(
                'min-h-[337px] p-[30px] rounded-[40px] bg-transparent text-white cursor-pointer ',
                isLight ? 'hover:bg-white' : 'hover:bg-[#343434]',
            )}
        >
            <Button
                type="ghost"
                className={cx(
                    'rounded-[20px]  h-[69px] w-[69px] text-2xl sm:text-[32px]',
                    isLight ? 'text-black border-black' : 'text-white border-white',
                )}
            >
                {actionText}
            </Button>
            <h3
                className={cx(
                    ' text-xl sm:text-2xl font-semibold uppercase mb-[20px] mt-[45px]',
                    isLight ? 'text-black' : 'text-white ',
                )}
            >
                {title}
            </h3>
            <p className={cx('text-sm sm:text-base opacity-90', isLight ? 'text-black' : 'text-light')}>
                {description}
            </p>
        </div>
    );
}

ServiceCard.propTypes = {};

export default ServiceCard;
