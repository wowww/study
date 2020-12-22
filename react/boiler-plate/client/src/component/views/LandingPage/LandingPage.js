import React, { useEffect } from 'react'
import axois from 'axios';
import { response } from 'express';
function LandingPage() {
  
  useEffect(() => {
    axois.get('http://localhost:5000/api/hello')
    .then(response => console.log(response.data))
    
  }, [])

  return (
    <div>
      LandingPage
    </div>
  )
}

export default LandingPage
