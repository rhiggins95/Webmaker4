import React from 'react'
import {Link} from "react-router-dom"
export default function PageList() {
    return (
    <div>
  <nav classname="navbar bg-light navbar-light fixed-top">
    <div>
     <Link to="/user/:uid/website" classname="text-dark">
        <i classname="fas fa-chevron-left" />
      </Link>
      <span classname="navbar-brand mb-0 h1 m1-4">Pages</span>
    </div>
   <Link to="/user/:uid/website/:wid/page/new" classname="text-dark">
      <i classname="fas fa-plus" />
    </Link>
  </nav>
  <main classname="container">
    <ul classname="list-group list-group-flush">
      <li classname="list-group-item">
       <Link to="/user/:uid/website/:wid/page/:pid/widget" >Blog Post</Link>
       <Link to="/user/:uid/website/:wid/page/:pid" classname="float-right">
          <i classname="fas fa-cog" />
        </Link>
      </li>
      <li classname="list-group-item">
       <Link to="/user/:uid/website/:wid/page/:pid/widget">Blogs</Link>
       <Link to="/user/:uid/website/:wid/page/:pid" classname="float-right">
          <i classname="fas fa-cog" />
        </Link>
      </li>
      <li classname="list-group-item">
       <Link to="/user/:uid/website/:wid/page/:pid/widget">Home</Link>
       <Link to="/user/:uid/website/:wid/page/:pid" classname="float-right">
          <i classname="fas fa-cog" />
        </Link>
      </li>
      <li classname="list-group-item">
       <Link to="/user/:uid/website/:wid/page/:pid/widget">About</Link>
       <Link to="/user/:uid/website/:wid/page/:pid" classname="float-right">
          <i classname="fas fa-cog" />
        </Link>
      </li>
      <li classname="list-group-item">
       <Link  to="/user/:uid/website/:wid/page/:pid/widget">
         Contact Us</Link>
       <Link 
         to="/user/:uid/website/:wid/page/:pid" 
         classname="float-right">
        <i classname="fas fa-cog" />
        </Link>
        </li>
        </ul>
      </main>
      <footer classname="navbar navbar-light bg-light fixed-bottom">
      <span />
    <Link to="/user/:uid" classname="text-dark">
      <i classname="fas fa-user" />
    </Link>
  </footer>
  </div>

    )
}
