import React from 'react';

function PageTitle({
    title,
    btn_action = () => {},
    btn_content,
    before_btn,
}: {
    title?: string;
    btn_content?: React.ReactNode;
    before_btn?: React.ReactNode;
    btn_action?: () => void;
}) {
    return (
        <div className="flex items-center gap-1 justify-between">
            <p className=" text-lg font-semibold text-deep-blue">{title}</p>
            <div className="flex items-center gap-2">
                {before_btn}
                <button onClick={btn_action} className="bg-secondary text-white h-10 px-5 min-w-[152px] rounded-lg">
                    {btn_content}
                </button>
            </div>
        </div>
    );
}

PageTitle.propTypes = {};

export default PageTitle;
