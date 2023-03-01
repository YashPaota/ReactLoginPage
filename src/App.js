import React from "react";
import "./App.css";
import profile from "./Images/profile.png";
import email from "./Images/email.jpg";
import pass from "./Images/pass.png";


function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-img">
              <img src={profile} alt="profile-pic" className="profile"/>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div >
              <img src={email} alt="email-pic" className="icon-img" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="secondInput-container">
              <img src={pass} alt="pass-pic" className="icon-img" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="button-container">
            <button>Login</button>
            </div>
            <p className="link">
              <a href="#">Forgot Password</a> or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App