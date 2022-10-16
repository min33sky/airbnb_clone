import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import getQueryClient from '@/lib/queryClient';

import Router from 'next/router';
import NProgress from 'nprogress';
// import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/customNprogress.css';

NProgress.configure({ showSpinner: false });

//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps<{ dehydratedState: any }>) {
  const queryClient = getQueryClient(); // Create react-query queryClient Instance

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
