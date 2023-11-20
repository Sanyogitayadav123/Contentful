import { client } from '@/lib/contentful/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Logo = () => {
  const [logo, setLogo] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'logo' })
        setLogo(response?.items)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {logo?.map((value, i) => {
        return (
          <>
          <Link href={'/'}>
          <img
              className='w-10 h-10'
              alt='img'
              src={value?.fields?.logo?.fields?.file?.url}
            />
          </Link>
          </>
        )
      })}
    </div>
  )
}

export default Logo
