import { useState, useEffect } from 'react';

const useFrom = () => {
  const [ values, setValues ] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const [ errors, setErrors ] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setErrors({
      ...values,
      [name]: value
    })
  }
  return { handleChange, values };
}

export default useFrom;
