import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function HeadNav() {
  return (
    <Router className="router">
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
        <Route path="/Login">
          <LoginPage />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}
