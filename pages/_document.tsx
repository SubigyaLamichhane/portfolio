import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head></Head>

        <body className="bg-white lg:bodydown text-[18px] lg:text-[21px] font-proxima lg:overflow-x-hidden">
          <div className="max-w-7xl m-auto px-5">
            <Main />
            <NextScript />
          </div>
          {/* Make Color mode to persists when you refresh the page. */}
        </body>
      </Html>
    );
  }
}
