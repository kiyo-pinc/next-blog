// import '~/src/styles/reset.css'
import '~/src/styles/colors.css'
import 'highlight.js/styles/hybrid.css'
import '~/src/styles/styles.scss'

import { AppProps } from 'next/app'
import Script from 'next/script'

import usePageView from '~/src/hooks/usePageView'
import { GA_ID } from '~/src/utils/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <Component {...pageProps} />
      {GA_ID !== undefined && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            onLoad={() => {
              const script = document.createElement('script')
              script.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });`
              document.body.appendChild(script)
            }}
          />
        </>
      )}
      <Script
        // strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js"
        integrity="sha512-JrL1wXR0TeToerkl6TPDUa9132S3PB1UeNpZRHmCe6TxS43PFJUcEYUhjJb/i63rSd+uRvpzlcGOtvC/rDQcDg=="
        crossOrigin="anonymous"
      />
    </>
  )
}
export default MyApp
