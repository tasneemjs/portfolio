import './Menu.css';
import tj_logo from './tj_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Intro from '../intro/Intro';
import SelectedWorks from '../works/SelectedWorks';
import Works from '../works/Works';
import About from '../about/About';
const Menu = () => {
    return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light active ">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ pointerEvents: 'none' }} href="https://37muo.csb.app/">
          <img src={tj_logo} className="" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/about'>About</Link>
              </li>
              <li className="nav-item">
              <Link to='/works'>Works</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
        <Switch>
          <Route exact path="/">
            <Intro/>
            <SelectedWorks />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
      </Router>
    );
  };

  
export default Menu;