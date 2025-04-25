
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {

 const { pathname } = useLocation()

 return (
  <div className={`w-11/12 mx-auto  mt-4 ${pathname === '/' ? "bg-purple-600  rounded-t-xl text-white" : ""}`}>
   <div className="navbar w-11/12 mx-auto">
    <div className="navbar-start">
     <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M4 6h16M4 12h8m-8 6h16" />
       </svg>
      </div>
      <ul
       tabIndex={0}
       className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
       <li>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active btn btn-primary' : ''}>
         Home
        </NavLink>
       </li>
       <li>
        <NavLink to="/statistics" className={({ isActive }) => isActive ? 'active btn btn-primary' : ''}>
         Statistics
        </NavLink>
       </li>
       <li>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active btn btn-primary' : ''}>
         Dashboard
        </NavLink>
       </li>
      </ul>
     </div>
     <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 gap-12 text-xl font-normal">
      <li>
       <NavLink to="/" className={({ isActive }) => isActive ? 'active btn bg-purple-700 text-white' : ''}>
        Home
       </NavLink>
      </li>
      <li>
       <NavLink to="/statistics" className={({ isActive }) => isActive ? 'active btn bg-purple-600 text-white' : ''}>
        Statistics
       </NavLink>
      </li>
      <li>
       <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active btn bg-purple-600 text-white' : ''}>
        Dashboard
       </NavLink>
      </li>

      <li>
       <NavLink to="/reviwe" className={({ isActive }) => isActive ? 'active btn  bg-purple-600 text-white' : ''}>
        Review
       </NavLink>
      </li>


     </ul>
    </div>
    <div className="navbar-end gap-4">


     <button className={` border border-black btn rounded-full relative text-lg ${pathname === '/' ? "border-white text-black" : ""}`} >
      <span className="absolute -top-2 bg-yellow-600 h-4 w-4 flex items-center justify-center rounded-full p-[10px ] text-white font-medium right-2">hello</span>
      <RiShoppingCart2Line />
      </button>

     <button className={` border border-black btn rounded-full relative text-lg ${pathname === '/' ? "border-white text-black" : ""}`} >
     <span className="absolute -top-2 bg-yellow-600 h-4 w-4 flex items-center justify-center rounded-full p-[10px ] text-white font-medium right-2">hiii</span>
     <FaRegHeart /></button>


    </div>
   </div>
  </div>
 );
};

export default Navbar;


