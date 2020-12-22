import React, { useEffect } from 'react'
import axois from 'axios';
// import { response } from 'express';
function LandingPage() {
  
  useEffect(() => {
    axois.get('/api/hello')
    .then(response => console.log(response.data))
    
  }, [])

  return (
    <div>
      LandingPage
    </div>
  )
}

export default LandingPage
