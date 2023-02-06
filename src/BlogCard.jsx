import React from 'react'

const BlogCard = ({post}) => {
  return (
    <div className='blogcard' key={post.id}>
        <div className='bloghead'>
            <h3>{post.title}</h3>
            <span style={{textAlign: 'justify' }}>
                <h5>{post.author}</h5>
                <h6>{post.date}</h6>
            </span>
        </div>
        <div className='blogbody'><p>{post.desc}</p></div>
        
    </div>
  )
}

export default BlogCard