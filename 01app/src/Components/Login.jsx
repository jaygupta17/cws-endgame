import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider , onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { auth , db } from "../firebaseConfig";
import { useEffect } from "react";
import { doc , setDoc} from "firebase/firestore";
export function Login() {

    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth , res=>{
            if (res?.accessToken) {
               navigate('/home') 
            }
        })
       })

    async function signin(e) {
        e.preventDefault();
        try {
            let googleProvider = new GoogleAuthProvider()
            let res = await signInWithPopup(auth , googleProvider)
            console.log(res.user.accessToken);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className="bg-white/10 h-[80vh] flex justify-center items-center">
                <button onClick={signin} className="px-4 py-1 bg-blue-600 rounded-md font-semibold text-white">Sign in with Google</button>
        </div>
    )
}