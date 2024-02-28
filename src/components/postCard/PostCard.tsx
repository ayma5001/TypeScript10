import React, { FC } from 'react'
import { PostProps } from '../../types/types'


const PostCard:FC<PostProps> = ({title, body}: PostProps) => {
    
  return (
    <div className='postCard'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default PostCard
