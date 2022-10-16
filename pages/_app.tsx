import type { AppProps } from 'next/app'
import AppLayout from '../components/layout/AppLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
