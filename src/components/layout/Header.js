import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../ui/Logo'
import { client } from '@/lib/contentful/client'

const Header = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'navBar' })
        const revArr = response?.items.reverse()
        setPosts(revArr)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <header className='bg-stone-100 p-8'>
      <nav className='container'>
        <ul className='flex gap-4'>
          <Logo />
          {posts?.map((data, i) => {
            return (
              <li key={i}>
                <Link
                  href={`/${data?.fields?.home}`}
                  className='text-sm font-medium uppercase text-stone-400'
                >
                  {data?.fields?.home}
                </Link>
              </li>
            )
          })}

          {/* <li>
          <Link
            href='/posts'
            className='text-sm font-medium uppercase text-stone-400'
          >
            Posts
          </Link>
        </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
