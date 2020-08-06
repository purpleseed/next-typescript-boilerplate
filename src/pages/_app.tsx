import '@openfonts/noto-sans-kr_korean'
import '@openfonts/noto-sans-kr_latin'
import { AppProps } from 'next/app'
import React from 'react'

function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
