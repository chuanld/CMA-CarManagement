import { Button } from '@/components/ui/button'
import React from 'react'

const NotFound = () => {
  return (
    <div className='container w-full text-4xl font-bold p-20 mx-auto'>
        <h1>Not Found</h1>
        <Button className='mt-4' asChild>
            <a href="/">Go to Home</a>
        </Button>
    </div>
  )
}

export default NotFound