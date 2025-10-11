import React from 'react'

const AuthLayout = ({children}: React.PropsWithChildren<{}>) => {
  return (
    <div className='flex justify-center pt-40'>{children}</div>
  )
}

export default AuthLayout