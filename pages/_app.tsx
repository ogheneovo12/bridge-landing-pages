import React from 'react';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'antd/dist/antd.css';
import 'styles/output.scss';
import 'styles/globals.css';
import '../styles/override.scss';
import 'animate.css';

import type { AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { WithLayout } from '@/common/types/interfaces';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

interface AppPropsWithComponentWithLayouts extends AppProps {
    Component: NextComponentType<NextPageContext, any, unknown> & WithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithComponentWithLayouts) {
    const Layout = Component.layout || (({ children }: { children: React.ReactNode }) => <>{children}</>);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
