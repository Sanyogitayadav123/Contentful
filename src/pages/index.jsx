import Posts from './Post'
import Home from './Home'
import Head from 'next/head'

const Homepage = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Your page description goes here' />
        <meta name='keywords' content='Blogs,CMS Blog, Blogs' />
        <meta name='author' content='Sanyogita' />
        <meta property='og:title' content='My CMS blogs' />
        <title>Blogs by CMS using contentful</title>
        <link rel='icon' href='/Blog-icon.png' />

        {/* Add any additional meta tags or links to external resources here */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-JGJ19FE1C6'
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
   
        gtag('config', 'G-JGJ19FE1C6');`}
        </script>
      </Head>
      <Home />

      <Posts />
    </>
  )
}

export default Homepage
