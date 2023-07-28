import ContextWrapper from '@/Context/contextWrapper'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
        <Component {...pageProps} />
    </ContextWrapper>
  )
}
