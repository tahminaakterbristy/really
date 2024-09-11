import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    // const {createUser} = useContext(AuthContext);


    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const passwond = form.password.value;

        createUser(email,passwond)
        .then(result =>{
          const user = result.user;
        })
        .then(error=> console.log(error));
    }

    return (
        <div className="mx-auto md:w-1/2 items-center">
      <h2 className="text-2xl mb-4 text-center">Please Register</h2>
      <form
        onSubmit={handleRegister}
        className="md:w-1/2 lg:w-2/4 my-10 mx-auto"
      >
        <input
          className="btn btn-ghost border-black mb-4 w-full"
          type="email"
          name="email"
          placeholder="Your Email Adress"
          required
        />
        <br />
        <input
          className="btn btn-ghost  border-black mb-4 w-full"
        //   type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Your Password"
          required
        />
        
        <br />
        <input
          className="btn btn-ghost  border-black mb-4 w-full"
          type="Name"
          name="name"
          placeholder="Your Name"
          required
        />
        <br />
        <input
          className="btn btn-ghost  border-black mb-4 w-full"
          type="photo"
          name="photo"
          placeholder="Your Photo"
          required
        />
        <br />
        {/* <input
          className="btn btn-success text-white"
          type="submit"
         name="Register"
        /> */}
        <button className="btn btn-success"><Link to="/Login" className="text-white" >Submit</Link></button>
      </form>
      {/* {registerError && <p className="text-red-500">{registerError}</p>}
      {success && <p className="text-green-500">{success}</p>} */}
       
    </div>
    );
};

export default Register;