import {  getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import APP from "../Firebase/Firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
    const [success,setsuccess]=useState(false);
    const [userEmail,setuserEmail]=useState('')
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
    const handelEmailBluer =(event)=>{
      const email=event.target.value;
      console.log(email);
      setuserEmail(email);
    }
    const hendleFotgetpassword=()=>{
       if(!userEmail){
        alert("Plase Enter Your Email And Try Again")
       }
  sendPasswordResetEmail(auth, userEmail)
  .then(() => {
    alert("plase cheack your emall and reset password")
  })
  .catch((error) => {
    
    const errorMessage = error.message;
   console.log(errorMessage);
  });
    }


    return (
        <div className="container">
         <div className="w-25 mx-auto xxx " >
         <form onSubmit={hendlesubmit}  >
        
      <div className="mb-3">
        <label  className="form-label">Email address:</label>
        <input  onBlur={handelEmailBluer} type="email" name="email" className="form-control" placeholder="Enter Your Email" required />
        
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

    <p className="x2x mt-3">Forget password <button className=" xxxxx" onClick={hendleFotgetpassword}  >Plase Reset</button> </p>

         </div>
        </div>
      );
}

export default LogIn;
