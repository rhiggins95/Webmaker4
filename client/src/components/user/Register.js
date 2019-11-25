import React from 'react'
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
    <div className="form-group">
      <input type="password" className="form-control" placeholder="password" />
    </div>
    <div className="form-group">
      <input type="password" className="form-control" placeholder="Verify Password" />
    </div>
    <Link to="/user/:uid" className="btn btn-primary btn-block" href="Profile.html">Register</Link>
    <Link to="/login" className="btn btn-success btn-block" href="Register.html">Cancel</Link>
  </form>
</div>

    )
}