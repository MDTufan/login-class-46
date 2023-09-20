import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import APP from "../Firebase/Firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
const [passwordError,setpasswordError]=useState("");

    const auth = getAuth(APP);



const hendlesubmit=(event)=>{
    event.preventDefault(); 
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;

    if(!/(?=.*[A-Z])/.test(password)){
        setpasswordError("Plase provide At Last One Upparcase")
    };
   if(password.length < 8){
        setpasswordError("Plase provide At More than 8 charects")

    };
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user =result.user;
        console.log(user);
        verifyEmail();
       desplayUserName(name);
         form.reset();
       
    })
    .catch((error)=>{
        console.log(error)
    })
  const verifyEmail=()=>{
    sendEmailVerification(auth.currentUser)
  .then(() => {
    alert("Plase Check Ypur Email And Virify The Email Address.")
  });
  }
}

const desplayUserName=(name)=>{
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    console.log("name update")
  }).catch((error) => {
    console.log(error)
  });
}




   



  return (
    <div className="container">
     <div className="w-25 mx-auto  xxx" >
     <form onSubmit={hendlesubmit}  >
    <div className="mb-3">
    <label  className="form-label">Name:</label>
    <input type="text" name="name" className="form-control" placeholder="Enter Your Name" required  />
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address:</label>
    <input  type="email" name="email" className="form-control" placeholder="Enter Your Email" required />
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name="password" className="form-control" placeholder="Enter Ypur Password" required  />
  </div>
  <p> Already Have An Account <Link to="/login" ><span className="xx">plase Login</span></Link></p>
  <input type="submit" className="btn xxx-btn" value="Register" />

       
            <p>{passwordError} </p>
    
     
</form>
    


     </div>
    </div>
  );
}

export default Register;
