import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import getQueryClient from '@/lib/queryClient';

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
