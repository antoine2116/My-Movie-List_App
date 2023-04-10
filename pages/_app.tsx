import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '../components/Layout';
import { Inter } from '@next/font/google'
import { ManagedUIContext } from '../components/UIContext';
import { ManagedAuthContext } from '../components/AuthContext';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={inter.className}>
        <ManagedAuthContext>
          <ManagedUIContext>
            <ThemeProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <div id="portal"></div>
            </ThemeProvider>
          </ManagedUIContext>
        </ManagedAuthContext>
      </main>
    </QueryClientProvider >
  )
}
