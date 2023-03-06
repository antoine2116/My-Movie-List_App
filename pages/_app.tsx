import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '../components/Layout';
import { Inter } from '@next/font/google'
import { ManagedUIContext } from '../components/UIContext';
import { AuthProvider } from '../components/AuthContext';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={inter.className}>
        <AuthProvider>
          <GoogleOAuthProvider clientId='210461145121-50lqvbecdp41h9puu79ckilcffetberd.apps.googleusercontent.com'>
            <ManagedUIContext>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ManagedUIContext>
          </GoogleOAuthProvider>
        </AuthProvider>
        <div id="portal"></div>
      </main>
    </QueryClientProvider>
  )
}
