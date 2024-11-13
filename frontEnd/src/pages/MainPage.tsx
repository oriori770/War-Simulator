import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (<>
    <div>MainPage</div>
    <Link to="/logIn">logIn</Link>
    <br />
    <Link to="/rgister">rgister</Link>
  </>
  )
}

export default MainPage