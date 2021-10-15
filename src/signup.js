import { useState } from "react";
import "./App.css";

export default function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");
  var DATA={
    firstname: firstName,
    lastname: lastName,
    username: userName,
    password: passWord
  }
  const addUser = () => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({DATA})
    })
  };

  

  return (
    <div>
  <form className="container App">
    <div className="App">
  <img class="mb-4" src="https://qph.fs.quoracdn.net/main-qimg-d57b15be9168f689001b1bc63e20a5c7-c" alt="logo" width="200" height="150"/>
  <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
  <div class="form-floating mar">
      <input type="text" class="form-control" id="Firstname" placeholder="First Name" onChange={(event) => setfirstName(event.target.value)}/>
      <label for="Firstname">First Name </label>
    </div>
    <div class="form-floating mar">
      <input type="text" class="form-control  " id="Lastname" placeholder="Last Name" onChange={(event) => setlastName(event.target.value)}/>
      <label for="Lastname">Last Name</label>
    </div>
  <div class="form-floating w-100 mar">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => setuserName(event.target.value)}/>
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating  w-100 mar">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(event) => setpassWord(event.target.value)}/>
    <label for="floatingPassword">Password</label>
  </div>
</div>
  <br/>
  <button class="w-30 btn btn-lg btn-primary" type="submit" onSubmit={()=>addUser}>Sign Up</button>
  <div class="MuiGrid-root MuiGrid-item css-1wxaqej">
     <a class="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways css-nzlz3j" href="/Login" >
                Already have an account? Sign in
      </a>
    </div>
</form>
<button class="w-30 btn btn-lg btn-primary" type="submit" onClick={()=>console.log({DATA})}>check once</button>
</div>
  );
};