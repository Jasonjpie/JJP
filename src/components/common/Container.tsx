import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Container = ({children}:Props) => {
  return (
    <div className='w-full h-full max-w-[1560px] mx-auto md:px-16'>
      {children}
    </div>
  )
}

export default Container