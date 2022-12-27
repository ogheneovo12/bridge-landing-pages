import { Button } from 'antd';

export interface IServiceCardProps {
    title: string;
    description?: string;
    actionText?: string | number;
    actionLink?: string;
}

function ServiceCard({ title, description, actionText }: IServiceCardProps) {
    return (
        <div className="min-h-[337px] p-[30px] rounded-[40px] bg-service text-white cursor-pointer hover:bg-[#343434]">
            <Button
                type="ghost"
                className="text-white rounded-[20px] border-white h-[69px] w-[69px] text-2xl sm:text-[32px]"
            >
                {actionText}
            </Button>
            <h3 className=" text-xl sm:text-2xl text-white font-semibold uppercase mb-[20px] mt-[45px]">{title}</h3>
            <p className="text-light text-sm sm:text-base opacity-90">{description}</p>
        </div>
    );
}

ServiceCard.propTypes = {};

export default ServiceCard;
