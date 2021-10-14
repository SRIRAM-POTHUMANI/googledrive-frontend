import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./home";

export function LoginPage() {
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");
//   const LoginClick=()=>{
//       <Router><Link href="/Login/my-drive" class="btn btn-outline-primary me-2">
//     Login
//   </Link>
//   <Switch>
//   <Route path="/my-drive">
//   <HomePage />
// </Route>
// </Switch>
// </Router>};

  // useEffect(()=>{
  //   fetch("https://googledrive-b262wd.herokuapp.com/users")
  //   .then((data) =>data.json())
  //   .then((mvs=>setUsers(mvs)));
  // }, []);

  
  return (
    <div>
    <form className="container App" action="Login/my-drive"  >
      <img class="mb-4" src="https://qph.fs.quoracdn.net/main-qimg-d57b15be9168f689001b1bc63e20a5c7-c" alt="logo" width="200" height="150"/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
  
   
  <div class="form-floating mar">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => setuserName(event.target.value)}/>
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating mar">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(event) => setpassWord(event.target.value)}/>
    <label for="floatingPassword">Password</label>
  </div>
  
    <br/>
    {/* <button class="w-30 btn btn-lg btn-primary" type="submit">Sign in</button> <br/>
     */}
       <Link to="/my-drive" class="w-30 btn btn-lg btn-primary" type="submit">
            Sign-in
          </Link>    <br/>
     
    <a class="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways css-nzlz3j"
                href="/Signup"
              >
                Don't have an account? Sign Up
              </a>
  </form>
  {/* <button class="w-30 btn btn-lg btn-primary" type="submit" onClick={LoginClick() }>check once</button> <br/> */}

  </div>
      
    );
  };