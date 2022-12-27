import { Avatar } from 'antd';
import React from 'react';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export interface ITestimonialCardProps {
    userImage: string;
    testimony: string;
    userName: string;
    userLocation: string;
}

function TestimonialCard({ userImage, testimony, userName, userLocation }: ITestimonialCardProps) {
    return (
        <div className="flex wow animate__flipInX  animate__animated items-center flex-col md:flex-row">
            <Avatar className="h-[284px] w-[284px] rounded-[100%] flex-shrink-0" src={userImage} />
            <div className="px-[30px]">
                <p className="font-medium text-xl italic my-4 md:my-0 md:text-3xl max-w-[812px]">“{testimony}”</p>

                <div className=" mt-10 flex mb-10  sm:items-center justify-between max-w-[300px] flex-col sm:flex-row">
                    <hgroup>
                        <h3 className="text-lg font-bold ">{userName}</h3>
                        <small className="text-para text-sm">{userLocation}</small>
                    </hgroup>
                    <div className="flex text-lg mt-10 sm:mt-0">
                        <AiFillStar className="text-[#F1A32D]" />
                        <AiFillStar className="text-[#F1A32D]" />
                        <AiFillStar className="text-[#F1A32D]" />
                        <AiFillStar className="text-[#F1A32D]" />
                        <AiOutlineStar />
                    </div>
                </div>
            </div>
        </div>
    );
}

TestimonialCard.propTypes = {};

export default TestimonialCard;
