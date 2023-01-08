import { Button, Divider } from 'antd';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import MenuStyle from './header.styles';
import cx from 'classnames';
import { useRouter } from 'next/router';

function MainHeader() {
    const router = useRouter();
    const ref = useRef<HTMLUListElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const showMobileMenu = () => {
        const body = document.querySelector('body');
        if (ref.current) {
            if (body) {
                body.style.overflowY = 'hidden';
            }
            ref.current.classList.remove('hide');
            ref.current.classList.add('show');
        }
    };

    const hideMobileMenu = () => {
        const body = document.querySelector('body');
        if (ref.current) {
            if (body) {
                body.style.overflowY = 'scroll';
            }
            ref.current.classList.remove('show');
            ref.current.classList.add('hide');
        }
    };

    useEffect(() => {
        function onScroll() {
            if (window) {
                const scrollTop =
                    window.pageYOffset !== undefined
                        ? window.pageYOffset
                        : (document.documentElement || document.body.parentNode || document.body).scrollTop;

                if (headerRef.current) {
                    if (scrollTop > 70) {
                        headerRef.current.classList.add('shadow-lg');
                        headerRef.current.classList.add('bg-white');
                    } else {
                        headerRef.current.classList.remove('shadow-lg');
                        headerRef.current.classList.remove('bg-white');
                    }
                }
            }
        }
        onScroll();
        if (window) {
            window.addEventListener('scroll', onScroll);
        }
        return () => window && window.removeEventListener('scroll', onScroll);
    }, []);

    const styleActiveRoute = (route: string) => (router.pathname === route ? 'text-primary' : '');

    return (
        <header
            ref={headerRef}
            className="flex flex-col justify-center absolute left-0 right-0  w-full top-0 z-[999]   items-center  min-h-[70px] text-secondary animate__fadeInDown animate__animated"
        >
            <nav className="nav py-6   container flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <p className=" text-[32px] text-secondary font-medium text-light">Bridge</p>
                </div>
                <div className="flex items-center">
                    <MenuStyle ref={ref} className="m-0 items-center md:space-x-20 ">
                        <div className="flex justify-between items-center md:hidden">
                            <h2 className="font-semibold text-xl">Bridge</h2>
                            <Button onClick={hideMobileMenu} className="   bg-transparent  text-black">
                                <FaTimes />
                            </Button>
                        </div>

                        <li>
                            <Link href="/">
                                <span
                                    className={cx(
                                        'hover:text-primary font-medium active:text-primary cursor-pointer',
                                        styleActiveRoute('/'),
                                    )}
                                    onClick={hideMobileMenu}
                                >
                                    HOME
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-providers">
                                <span
                                    className={cx(
                                        'hover:text-primary font-medium active:text-primary cursor-pointer',
                                        styleActiveRoute('/service-providers'),
                                    )}
                                    onClick={hideMobileMenu}
                                >
                                    SERVICE PROVIDER
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/about-us">
                                <span
                                    className={cx(
                                        'hover:text-primary font-medium active:text-primary cursor-pointer',
                                        styleActiveRoute('/about-us'),
                                    )}
                                    onClick={hideMobileMenu}
                                >
                                    ABOUT US
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">
                                <span
                                    className={cx(
                                        'hover:text-primary font-medium active:text-primary cursor-pointer',
                                        styleActiveRoute('/faq'),
                                    )}
                                    onClick={hideMobileMenu}
                                >
                                    {' '}
                                    FAQ
                                </span>
                            </Link>
                        </li>
                    </MenuStyle>
                    <Button onClick={showMobileMenu} className="text-secondary md:hidden  bg-transparent">
                        <FaBars />
                    </Button>
                </div>
            </nav>
            <div className="container">
                <Divider className="mt-auto mb-0 text-[#DAD0CA]" />
            </div>
        </header>
    );
}

MainHeader.propTypes = {};

export default MainHeader;
