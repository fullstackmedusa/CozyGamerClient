import React from 'react'
import Comment from './Comment'
import './CommentList.css'
function CommentList() {
  return (
    <div className='comment-container'>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default CommentList