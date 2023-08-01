import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Code404 Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Profile!" />
        <p className="description">
          I'm doing <code>pages/index.js/code>
        </p>
      </main>


    </div>
  )
}
