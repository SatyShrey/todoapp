
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth ,signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { useContext } from "react";
import { API } from "./ContextAPI";
import glogo from "./googleicon.png"
 
function LoginPage(){

      const firebaseConfig = {
        apiKey: "AIzaSyDQxve9EL2hSOdmZh-A7dXmazwi-MbZhVU",
        authDomain: "goldywebzone.firebaseapp.com",
        databaseURL: "https://goldywebzone-default-rtdb.firebaseio.com",
        projectId: "goldywebzone",
        storageBucket: "goldywebzone.firebasestorage.app",
        messagingSenderId: "462971610645",
        appId: "1:462971610645:web:68f7b407853c203901101c"
      };
    
      const app = initializeApp(firebaseConfig)
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider()
      const{setErr,setEmail}=useContext(API)
    
    
      function login(){
        signInWithPopup(auth, provider)
        .then((result) => {
          const userEmail = result.user.email;
          sessionStorage.setItem("email",userEmail)
          setEmail(userEmail)
        })
        .catch((error) => {setErr(error)});
       }

       return(
        <div className="loginPage">
            <button className="login" onClick={login}> <img src={glogo} alt="googleicon" /> Login with Google</button>
        </div>
       )
}

export default LoginPage