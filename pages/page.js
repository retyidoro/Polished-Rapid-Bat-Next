import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <nav className="page-container">
        <Head>
          <title>Page - Polished Rapid Bat</title>
          <meta property="og:title" content="Page - Polished Rapid Bat" />
        </Head>
        <footer className="page-footer">
          <div className="page-container1">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="page-image"
            />
            <nav className="page-nav">
              <span className="page-text">About</span>
              <span className="page-text1">Features</span>
              <span className="page-text2">Pricing</span>
              <span>Text</span>
              <span className="page-text4">Team</span>
              <span className="page-text5">Blog</span>
            </nav>
          </div>
          <div className="page-separator"></div>
          <div className="page-container2">
            <span className="page-text6">
              © 2021 teleportHQ, All Rights Reserved.
            </span>
            <div className="page-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="page-icon">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="page-icon2">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="page-icon4">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
        <Link href="/page2">
          <a className="page-link">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="input gfdg"
            />
          </a>
        </Link>
        <button className="button">Button</button>
        <div className="page-container3 bg-blue-400">
          <button className="button">Button</button>
          <h1>Heading</h1>
        </div>
        <div className="page-container4"></div>
      </nav>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .page-container1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .page-image {
            height: 2rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-nav {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .page-text {
            margin-left: 0px;
          }
          .page-text1 {
            margin-left: var(--dl-space-space-unit);
          }
          .page-text2 {
            margin-left: var(--dl-space-space-unit);
          }
          .page-text4 {
            margin-left: var(--dl-space-space-unit);
          }
          .page-text5 {
            margin-left: var(--dl-space-space-unit);
          }
          .page-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .page-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .page-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .page-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .page-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .page-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .page-link {
            display: contents;
          }
          .page-container3 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column-reverse;
          }
          .page-container4 {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-danger-300);
          }
          @media (max-width: 767px) {
            .page-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .page-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .page-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .page-container2 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .page-text6 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .page-footer {
              padding: var(--dl-space-space-unit);
            }
            .page-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .page-container2 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .page-text6 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
