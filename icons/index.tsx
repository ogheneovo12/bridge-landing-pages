import React from 'react';
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';
export * from './components/WindowIcon.react.svg';
export * from './components/UsersIcon.react.svg';
export * from './components/BellIcon.react.svg';
export * from './components/VaultIcon.react.svg';
export * from './components/TransactionIcon.react.svg';
export * from './components/CurrenciesIcon.react.svg';
export * from './components/ArrowLeft.react.svg';
export * from './components/ArrowRight.react.svg';
export * from './components/coin.icons';

export const greenLine = () => (
    <svg width="1121" height="474" viewBox="0 0 1121 474" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3 446.311L33.9722 455.658C64.9444 465.004 126.889 483.697 188.833 457.934C250.778 432.171 312.722 361.952 374.667 297.32C436.611 232.689 498.556 173.647 560.5 174.38C622.444 175.113 684.389 235.622 746.333 217.321C808.278 199.019 870.222 101.906 932.167 53.051C994.111 4.19573 1056.06 3.59786 1087.03 3.29893L1118 3"
            stroke="#35977F"
            strokeWidth="5"
            strokeLinecap="round"
        />
    </svg>
);

export const trendIcon: Record<string, React.ReactNode> = {
    rising: <BiTrendingUp />,
    falling: <BiTrendingDown />,
};
