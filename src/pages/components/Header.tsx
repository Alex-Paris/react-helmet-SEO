import Head from 'next/head'

export function Header() {
  const test = "teste secundarionrrrrr"

  return (
    <Head>
      <meta name="description" content={test} />
    </Head>
  )
}
