import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
    return (
    <div  className='w-11/12 mx-auto  mt-5'>
         <Pdf  targetRef={ref} filename="Assignment-blog-@saimun.pdf" x={0.3} y={.9} scale={0.9}>
        {({ toPdf }) => <button className='bg-red-400 px-4 py-2 text-white font-bold rounded-md shadow-md hover:scale-110 mb-5 hover:translate-x-2' onClick={toPdf}>Generate Pdf</button>}
         </Pdf>
         <div ref={ref}>
            <h1><b>1. Tell us the differences between uncontrolled and controlled components</b></h1>
            <p><b>ans :</b>Controlled components are form inputs in React that are managed by React state. This means that React updates the input value in response to user input and the component's state reflects the current input value. Controlled components use onChange events to handle user input.<br/>

            Uncontrolled components, on the other hand, are form inputs that manage their own state internally. This means that the input value is read from the DOM, rather than being managed by React state. Uncontrolled components use standard HTML events to handle user input, such as onClick or onSubmit.</p>

            <h1><b>2. How to validate React props using PropTypes</b></h1>
            <p><b>ans: </b>1. firstly we need to install the prop-types package using a package manager <br />

            2. then Define the expected props and their data types in the propTypes property of the component. For example, if you have a component called MyComponent that expects a name prop of type string and an age prop of type number</p>

            <h1><b>3.Tell us the difference between nodejs and express js.</b></h1>
            <p><b>ans :</b>Node.js is an environment for executing JavaScript code on the server-side, enabling developers to run JavaScript outside of web browsers. It provides a set of built-in modules that allow you to perform various operations on the server, such as creating a server, reading and writing files, and working with network requests and responses. <br />
            Express.js simplifies the process of building web applications by providing a set of pre-built modules and middleware functions that you can use to handle common tasks. It also provides a more structured way to handle HTTP requests and responses, making it easier to build and maintain complex web applications.
Express.js is a web application framework that i </p>
           <h1><b>4. What is a custom hook, and why will you create a custom hook</b></h1>
           <p><b>ans :</b> A custom hook in React is a type of JavaScript function that enables you to reuse a particular logic or behavior across different components in your application. Custom hooks are created by extracting stateful logic from a component into a reusable function, which can then be shared and reused in other components.</p>
        </div>
    </div>
       
    );
};

export default Blog;