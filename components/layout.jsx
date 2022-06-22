import Head from 'next/head'
import Navbar from './navbar'

const Layout = (props) => (
  <div>
    <Head>
      <title>to-json</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
      <div>{props.children}</div>
    </main>

    <footer className="mx-auto w-full max-w-container border-t py-10 text-center text-sm text-gray-500 sm:flex sm:items-center sm:justify-center">
      <p>© 2022 Bebop Labs Inc. All rights reserved.</p>
      <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
        <a className="hover:text-teal-600" href="/privacy">Privacy Policy
        </a>
      </p>
      <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
        <a className="hover:text-teal-600" href="/privacy">Built by Max
        </a>
      </p>
    </footer>

  </div>
)

export default Layout
