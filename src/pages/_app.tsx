import type { AppProps } from 'next/app'
import 'bulma/css/bulma.css' //importando bulma
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
