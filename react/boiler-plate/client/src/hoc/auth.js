import axios from 'axios';
import React, { useEffect } from 'react';
import Axios from 'axois';
import { useDispatch } from 'react-redux';


export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {

      dispatch()

      Axios.get('/api/users/auth')
    }, [])
  }


  return AuthenticationCheck
}