import { TeamSection } from 'content/TeamSection'
import { PageLayout } from 'layouts/PageLayout'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <PageLayout>
        <TeamSection />
      </PageLayout>
    </>
  )
}

export default Home
