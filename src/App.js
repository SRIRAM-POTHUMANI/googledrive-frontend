import "./App.css";
import { Features } from "./features";
import { MyDrive } from "./mydrive";
import { MyDriveUpload } from "./fileupload";
import { Plans } from "./price";
import { LoginPage } from './login.js';
import { HomePage } from "./home";
import Signup from "./signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="Container">
      <HeadNav />
    </div>
  );
}
function HeadNav() {
  return (
    <Router>
      <nav class="py-2 bg-light border-bottom">
        <div class="container d-flex flex-wrap">
          <ul class="nav me-auto">
            <li class="nav-item">
              <Link to="/Home" class="nav-link link-Blue px-2">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Features" class="nav-link link-Blue px-2">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Plans" class="nav-link link-Blue px-2">
                Pricing
              </Link>
            </li>
            
          </ul>

          <Link to="/Login" class="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link to="/Signup" class="btn btn-primary">
            Sign-up
          </Link>
        </div>
      </nav>
      ;
      <Switch>
        <Route path="/Home">
          <HomePage />
        </Route>
        <Route path="/Features">
          <Features className="features_of_drive" />
        </Route>
        <Route path="/Plans">
          <Plans />
        </Route>
        <Route path="/FAQs">
          <HomePage />
        </Route>
        <Route path="/About">
          <HomePage />
        </Route>
        <Route path="/Login">
          <LoginPage />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/my-drive">
          <MyDrive />
        </Route>
        <Route path="/my-drive-upload">
          <MyDriveUpload />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
