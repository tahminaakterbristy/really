import { Link, NavLink } from "react-router-dom";
 import imageLogo from '../../assets/images (1).jpeg'
 import userLogo from '../../assets/download.png'

const Navbar = () => {

    const navLinks = <> 
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/Login">Login</NavLink></li>
    <li><NavLink to="/Register">Register</NavLink></li>
    
    
    
    </>
    return (
    //    <div>
         <div className="navbar bg-blue-300 text-blue-800 font-bold">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-slate-300 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-slate-300 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <p className="btn btn-ghost text-xl"></p>
           
         
         
          <img src={imageLogo} className='h-12 w-15 rounded-lg'></img>
          <p className="btn btn-ghost text-xl text-blue-800">
           
           Shajan <span className="text-white">Homes</span>
                     </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-4">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      
          <img
           
            src={userLogo} />
          
        </div>
        <Link>
          <button className="btn"> LogIn</button>
          </Link>
        </div>
          </div>
       
       
       
   
       
    
    );
};

export default Navbar;