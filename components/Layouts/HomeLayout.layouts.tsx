import React, { useEffect } from 'react';
import Footer from './Footer';
import MainHeader from './MainHeader';

function HomeLayout({ children }: React.PropsWithChildren) {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, import/extensions
        const WOW = require('wow.js/dist/wow.js');
        if (typeof window !== 'undefined') {
            (window as any).WOW = WOW;
        }

        new WOW().init();
    }, []);
    return (
        <div className="bg-white min-h-screen">
            <MainHeader />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

HomeLayout.propTypes = {};

export default HomeLayout;
