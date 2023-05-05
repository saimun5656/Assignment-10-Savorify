import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Shared/AuthProvider/AuthProvider';

const Login = () => {
    const emailref=useRef()
    const location=useLocation()
    const navigate=useNavigate()
    const from=location.state?.from||'/'
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const {login, googleSignIn, githubSignIn, passwordreset}=useContext(AuthContext)
    const handlegoogle=()=>{
        googleSignIn()
        .then(res=>navigate(from))
    }
    const handleGithubSignin=()=>{
      githubSignIn()
      .then(res=>navigate(from))
    }
    const handleonSubmit=(e)=>{
         setSuccess('')
         setError('')
         e.preventDefault();
         const form =e.target;
         const email=form.email.value;
         const password=form.password.value;
         login(email,password)
         .then(res=>{
            setSuccess('user login successful')
            navigate(from)
        })
            
         .catch(err=>setError(err.message))

    }
   // console.log(location);
 return (
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleonSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' required className="input input-bordered"  ref={emailref} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' required className="input input-bordered" />
          <label className="label">
            <button onClick={()=> {console.log(emailref.current.value); passwordreset(emailref.current.value);alert('email sended')}}href="#" className="label-text-alt link link-hover">Forgot password?</button>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <button onClick={handlegoogle} className="btn btn-primary mt-5">Sign in With Google</button>
        <button onClick={handleGithubSignin} className="btn btn-primary mt-5">Sign in With Github</button>
        <h1>Don't have an Account? please <Link className='text-red-400 hover:text-red-600 ms-2' to='/reg'>Register</Link></h1>
        <h1 className='text-red-500'>{error}</h1>
        <h1 className='text-green-500'>{success}</h1>

      </form>
    </div>
  </div>
  </div>
 );
};
export default Login;