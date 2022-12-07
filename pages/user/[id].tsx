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
        <meta name="description" content={data.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{data.name}</div>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const data = await fetch(
    `http://localhost:3000/api/user/${context.query.id}`
  ).then((res) => res.json())

  // Pass data to the page via props
  return { props: { data } }
}