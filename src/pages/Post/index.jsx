import { client } from '@/lib/contentful/client'
import PostCard from '@/components/posts/PostCard'
import { useEffect, useState } from 'react'

const Posts = () => {
  const[posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'post' })
        setPosts(response?.items)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className='section'>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
          {posts?.map((post, i) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  )
}

// export const getStaticProps = async () => {
//   const response = await client.getEntries({ content_type: 'post' })
//   return {
//     props: {
//       posts: response.items,
//       revalidate: 60
//     }
//   }
// }

export default Posts
