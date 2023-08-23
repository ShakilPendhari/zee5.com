import React, { useEffect } from 'react'

const News = () => {
  
  useEffect(()=>{
    document.title = "SP5 | News"
  },[])

  return (
    <div>News</div>
  )
}

export default News