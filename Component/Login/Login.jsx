import React from 'react';
import Navbar from '../Navbar/Navbar';

const Login = () => {

    const handleLogin = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>

                    </label>
          {/* <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
          <span className="flex-start" onClick={() => setShowPassword(!showPassword)}>Show</span>   */}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success text-white">Login</button>
        </div>
      </form>
      {
        signError && <p className="text-red=500 text-red-600">Wrong user/password</p>
      }
      {
        success && <p className="text-green-500">Successful</p>
         
      }
   <p className="mb-2 ml-4">New to this website? please <Link to="/Register" className="text-green-600" >Register</Link></p> 
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;