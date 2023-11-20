import Layout from '@/components/layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Your page description goes here' />
        <meta name='keywords' content='Blogs,CMS Blog, Blogs' />
        <meta name='author' content='Sanyogita'  />
        <title>Blogs by CMS using contentful</title>

        {/* Add any additional meta tags or links to external resources here */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
