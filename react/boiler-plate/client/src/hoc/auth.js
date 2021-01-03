import axios from 'axios';
import React, { useEffect } from 'react';
import Axios from 'axois';
import { useDispatch } from 'react-redux';
import { auth } from '../_action/user_action';


export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {

    const dispatch = useDispatch();

    useEffect(() => {

      dispatch(auth()).then(response => {
        
      })

    }, [])
  }


  return AuthenticationCheck
}