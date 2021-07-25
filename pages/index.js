import Head from 'next/head'
import Content from '../components/Content'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import requests from '../utils/requests'
// client
export default function Home({ results }) {
  //console.log(props)
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
      <Content results={results} />
    </div>
  )
}
// server rendering
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}