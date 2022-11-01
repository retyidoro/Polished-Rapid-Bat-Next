import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Page2 = (props) => {
  return (
    <>
      <div className="page2-container">
        <Head>
          <title>Page2 - Polished Rapid Bat</title>
          <meta property="og:title" content="Page2 - Polished Rapid Bat" />
        </Head>
        <Link href="/page">
          <a className="page2-link button">Button</a>
        </Link>
        <div className="page2-container1">
          <div className="page2-container2"></div>
        </div>
      </div>
      <style jsx>
        {`
          .page2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page2-link {
            text-decoration: none;
          }
          .page2-container1 {
            flex: 0 0 auto;
            width: 200px;
            height: 1000px;
            display: flex;
            align-items: center;
            border-color: #39d0ef;
            border-style: solid;
            flex-direction: column;
            border-left-width: 5px;
            border-right-width: 5px;
          }
          .page2-container2 {
            flex: 0 0 auto;
            width: 5px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-success-300);
            border-width: 4px;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .page2-link {
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Page2
