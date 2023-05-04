import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Shared/AuthProvider/AuthProvider';
import { updateCurrentUser, updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const handleSubmit=(e)=>{
         setSuccess('')
         setError('')
         e.preventDefault();
         const form =e.target;
         const name=form.name.value;
         const url= form.url.value;
         const email=form.email.value;
         const password=form.password.value;
         if(password.length<6){
            setError('The password is less than 6 characters')
            console.log(error);
            return
         }
         createUser(email,password)
         .then(result=>{
            updateProfile(result.user,{displayName:name,
                                           photoURL:url})
            .then()
            .catch(err=>setError(err.message))
            console.log(result.user);
            setSuccess('user created successfully')
         })
         .catch(err=>setError(err.message))
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Url" name='url' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' required className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-outline btn-error">Signup</button>  
        </div>
        <h1>Already registered? please <Link className='text-red-400 hover:text-red-600 ms-2' to='/login'>Login</Link></h1>
         <h1 className='text-red-500'>{error}</h1>
         <h1 className='text-green-500'>{success}</h1>
      </form>
    </div>
  </div>
  </div>
    );
};

export default Register;