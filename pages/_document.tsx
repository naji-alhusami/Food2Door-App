import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Add the Google Fonts link here */}
          <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Zen+Dots&display=swap" rel="stylesheet" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
