import Head from 'next/head'
import type { User } from '../../interfaces'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function UserPage({ data, error }) {
  // const router = useRouter()
  // const { data, error } = useSwr<User>(
  //   "/api/user/1",
  //   //`/api/user/${router.query.id}` : null,
  //   fetcher
  // )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Test - {data.name}</title>
        <meta property="og:title" content={`Test - ${data.name}`} />

        <meta name="description" content={data.name} />
        <meta property="og:description" content={data.name} />

        <meta property="og:image" content={data.photo} />
        <meta property="og:type" content="website" />

        {/* <link rel="canonical" href={window.location.href} /> */}
        {/* <meta property="og:url" content={window.location.href} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{data.name}</div>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Loading server
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://react-helmet-seo.vercel.app';

  // Fetch data from external API
  const data = await fetch(
    `${server}/api/user/${context.query.id}`
  ).then((res) => res.json())

  // Pass data to the page via props
  return { props: { data } }
}