import React, { Component } from 'react'
import {Link } from "react-router-dom"
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <>    
      <nav>
        <ul>
          <li>
            <Link to="/">Navigateclass</Link>
          </li>
          
        </ul>
      </nav>

    </>
    
    )
  }
}
