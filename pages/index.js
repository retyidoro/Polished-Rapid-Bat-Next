import React from 'react'
import Head from 'next/head'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container">
        <Head>
          <title>Polished Rapid Bat</title>
          <meta property="og:title" content="Polished Rapid Bat" />
        </Head>
        <div className="hgjhjg hover:bg-purple-600 bg-purple-500">
          <button className="button bg-teal-500 bg-purple-400">Button</button>
        </div>
        <div className="hgjhjg hover:bg-purple-600 bg-teal-400 bg-teal-400 bg-purple-500">
          <button className="button bg-teal-500 bg-purple-400">Button</button>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Link
          </a>
        </div>
        <a href="https://example.com" target="_blank" rel="noreferrer noopener">
          Link
        </a>
      </div>
      <style jsx>
        {`
          .page1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Page1
