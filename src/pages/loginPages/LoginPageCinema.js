import React from 'react'
import { useParams } from 'react-router-dom';
import AdminLogin from '../../components/logins/AdminLogin'


export default function LoginPageCinema() {
    //let { tipoUtente } = useParams();
  return (
    //<div> <AdminLogin tipoutente={tipoUtente}/></div>
   <div> <AdminLogin tipoutente={"gestoreCinema"}/></div>

  )
}
