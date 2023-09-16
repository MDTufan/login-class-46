import {  getAuth, signInWithEmailAndPassword } from "firebase/auth";
import APP from "../Firebase/Firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
    const [success,setsuccess]=useState(false);
    const auth = getAuth(APP)

    const hendlesubmit=(event)=>{
        event.preventDefault(); 
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            setsuccess(true)
           form.reset();
         
        })
        .catch((error)=>{
            console.log(error)
        })
    
    }


    return (
        <div className="container">p-5
         <div className="w-25 mx-auto xxx " >
         <form onSubmit={hendlesubmit}  >
        
      <div className="mb-3">
        <label  className="form-label">Email address:</label>
        <input type="email" name="email" className="form-control" placeholder="Enter Your Email" required />
        
      </div>
      <div className="mb-3">
        <label  className="form-label">Password</label>
        <input type="password" name="password" className="form-control" placeholder="Enter Ypur Password" required  />
      </div>
      <p> Create Your  <Link to="/register" ><span className="xx">New Account</span></Link></p>
      <input type="submit" className="btn xxx-btn" value="LogIn" />
     {
        success && <div>
            <p>SuccessFully Login</p>
        </div>
     }
    </form>
         </div>
        </div>
      );
}

export default LogIn;
