import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} type="image/png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-16x16.png`}
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
