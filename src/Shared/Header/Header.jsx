import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
 return (
  <div className='md:w-11/12 mx-auto'>
    <div className="navbar bg-base-100">
      <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white">
                 <li><ActiveLink to='/'>Home</ActiveLink></li>
                 <li><ActiveLink to='/blog'>blog</ActiveLink></li>
             </ul>
         </div>
         <a className="normal-case text-3xl font-bold text-red-400">Savorify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
             <li><ActiveLink to='/'>Home</ActiveLink></li>
             <li><ActiveLink to='/blog'>blog</ActiveLink></li>
         </ul>
      </div>
      <div className="navbar-end">
         <img className='w-10 me-2 rounded-full' title={user?.displayName?user.displayName:''} src={`${user?.photoURL?user.photoURL:'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg'}`} alt="" />
         {
         user?<button onClick={logOut} className='bg-red-400 px-5 py-2 hover:bg-red-500 rounded-md text-white me-2'>Logout</button>:<Link className='bg-red-400 px-5 py-2  hover:bg-red-500 rounded-md text-white' to='/login'>Login</Link>
         }
      </div>
    </div>
  </div>
 );
};

export default Header;