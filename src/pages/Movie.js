import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
export default function Movie() {
      let { nome } = useParams();
  return (
    <div>{nome}</div>
  )
}
