import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='md:w-96 mb-5' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=1380&t=st=1683217435~exp=1683218035~hmac=9ce6f528ff9f78b2e3cc4b085dd2837824f668733bc0b29af4e920f7060722ca" alt="" />
            <Link className='bg-red-400 px-5 py-2 rounded' to='/'>Home</Link>

        </div>
    );
};

export default Errorpage;