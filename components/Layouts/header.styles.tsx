import styled from '@emotion/styled';

const MenuStyle = styled.ul`
    display: flex;
    @media (max-width: 768px) {
        position: fixed;
        height: 100vh;
        background-color: #000;
        inset: 0;
        display: block;
        z-index: 99999;
        padding: 20px;
        padding: 30px;
        clip-path: circle(0 at 100% 0%);

        li {
            padding: 20px;

            a {
                font-size: 18px;
            }

            border-bottom: 0.5px solid #fff;
        }

        &.show {
            animation-name: revealCirc;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in-out;
        }

        &.hide {
            animation-name: hideCirc;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in-out;
        }
    }

    @keyframes revealCirc {
        from {
            clip-path: circle(0 at 100% 0%);
        }
        to {
            clip-path: circle(100%);
        }
    }

    @keyframes hideCirc {
        from {
            clip-path: circle(100%);
        }
        to {
            clip-path: circle(0 at 100% 0%);
        }
    }
`;

export default MenuStyle;
