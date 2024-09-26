import React from 'react'

const Title = ({text}) => {
  return (
    <div className='text-2xl italic text-center mt-5'>{!text ? 'Text' : text}</div>
  )
}

export default Title