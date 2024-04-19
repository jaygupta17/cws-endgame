import {NavLink ,Navigate,useNavigate} from "react-router-dom"
import { auth } from "../firebaseConfig";
function Header() {
    const navigate = useNavigate();
  return (
        <div className="bg-neutral-800 md:h-[10vh] w-full flex justify-between items-center sm:flex-col md:flex-row sm:h[20%]">
            <div className="text-xl font-semibold text-gray-100 w-[15%] flex justify-center items-center"> 
                Jay G
            </div>
            <ul className="w-[35%] text-gray-300 flex justify-evenly items-center sm:text-2">
                <li>
                    <NavLink to="/home" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive?"text-blue-400 font-bold": "text-gray-200"}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive? "text-blue-400 font-bold": "text-gray-200"}`}>
                        About
                    </NavLink>                   
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>`font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${isActive? "text-blue-400 font-bold": "text-gray-200"}`}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="md:w-[15%] h-[50%] flex justify-center items-center sm:w-full text-white">
            {auth.currentUser?.getIdToken? <button className="md:px-3 md:py-1 px-1 py-1 bg-blue-600 text-white rounded-md" onClick={()=>{
                
                navigate('');
                auth.signOut();
            }}>
                Sign out
            </button> :  <NavLink to="/" className={({isActive})=>`bg-blue-700 font-semibold px-3 py-1 rounded ${isActive? "text-blue-200 font-bold": "text-gray-200"}`}>
                        Login
                    </NavLink>}
            </div>
        </div>
  )
}

export default Header