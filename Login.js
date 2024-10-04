import React,{useState} from 'react'
import {auth} from './Firebase'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data,setData]=useState({
    email:"",
    password:"",
  })
  const {email,password}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const LogIn=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(user=>console.log(user)
    ).catch(err=>{
      console.log(err);
      window.alert("Please Enter the correct Credentials");
    });
  }
      return (
        <div>
          <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-2 pb-1 navbar-fixed-top">
        <div className="container">
          <div className="nav-item float-start">
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
            <li><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="orange" class="bi bi-justify-right" viewBox="0 0 16 18">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg></li>&nbsp;&nbsp;
            <li> <h5 className="text-light">appname</h5></li>
          </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><h5><Link to="/" className="nav-item nav-link btn btn-dark">Home</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5><Link to="/home" className="nav-item nav-link btn btn-dark">Login</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <div className="container ">
    <br /><br /><br />
    <div className="row px-3 justify-content-center">
        <div className="card col-sm-4 bg-l rounded formu" style={{height:"380px"}} >
        <center >
          <br/>
              <h4 align="center">Login Form</h4>
            <form>
            <input style={{border:"1px solid black"}} type="text" placeholder='Email id' value={email} name='email' onChange={changeHandler}/><br/>
            <input autoComplete='off' style={{border:"1px solid black"}} type="password" placeholder='Password' value={password} name='password' onChange={changeHandler}/><br/><br/><br/>
            <button onClick={LogIn} className='btn btn-dark'>Login</button>
        </form>
        </center>
      </div>
    </div>
  </div>
        </div>
      )
}

export default Login
