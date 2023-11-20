import { client } from '@/lib/contentful/client'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [landingPage, setLandingPage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'landingPage'
        })
        setLandingPage(response?.items)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {/* <h1 className="text-3xl font-bold">Home Page</h1> */}
      {landingPage?.map((value, i) => {
        console.log('value', value?.fields?.bannerImg?.fields?.file?.url)
        return (
          <div key={i}>
            <img
              className='w-[1254px]'
              alt='img'
              src={value?.fields?.bannerImg?.fields?.file?.url}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Home
