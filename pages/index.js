import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone by Steven</title>
        <meta name="description" content="Hulu Clone created by Steven Gragg for portfolio purposes. Thank you for viewing!" />
        <link rel="icon" href="/hulu.png" />
      </Head>

      {/* Header Component */}
      <Header />
      {/* Nav Bar Component */}
      <NavBar />
      {/* Content Component */}
    </div>
  )
}
