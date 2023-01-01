import styled from '@emotion/styled';
import React from 'react';

const brandSuccess = '#fff',
    loaderSize = 5,
    checkHeight = loaderSize / 2,
    checkWidth = checkHeight / 2,
    checkLeft = loaderSize / 6 + loaderSize / 12,
    checkThickness = '3px',
    checkColor = brandSuccess;

const CircleLoader = styled.div`
    background-color: #11a186;
    position: relative;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    width: ${loaderSize}em;
    height: ${loaderSize}em;

    @keyframes loader-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const CheckMark = styled.div`
    &.draw:after {
        animation-duration: 800ms;
        animation-timing-function: ease;
        animation-name: checkmark;
        transform: scaleX(-1) rotate(135deg);
        animation-delay: 2s;
    }

    &:after {
        opacity: 1;
        height: ${checkHeight}em;
        width: ${checkWidth}em;
        transform-origin: left top;
        border-right: ${checkThickness} solid ${checkColor};
        border-top: ${checkThickness} solid ${checkColor};
        content: '';
        left: ${checkLeft}em;
        top: ${checkHeight}em;
        position: absolute;
    }

    @keyframes checkmark {
        0% {
            height: 0;
            width: 0;
            opacity: 1;
        }
        20% {
            height: 0;
            width: ${checkWidth}em;
            opacity: 1;
        }
        40% {
            height: ${checkHeight}em;
            width: ${checkWidth}em;
            opacity: 1;
        }
        100% {
            height: ${checkHeight}em;
            width: ${checkWidth}em;
            opacity: 1;
        }
    }
`;

function AnimatedCheck() {
    return (
        <CircleLoader>
            <CheckMark className="draw" />
        </CircleLoader>
    );
}

AnimatedCheck.propTypes = {};

export default AnimatedCheck;
