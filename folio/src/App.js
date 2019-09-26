import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <div className="linkholder">
          <Link to="/" className="links1">
            Home
          </Link>
          <Link to="/about" className="links2">
            About
          </Link>
          <Link to="/contact" className="links3">
            Contact
          </Link>
          <Link to="/projects" className="links4">
            Projects
          </Link>
          <Link to="/resume" className="links5">
            Resume
          </Link>
          {/* <Link to="/blog" className="links">
            Blog
          </Link> */}
        </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        {/* <Route path='/blog' component={Blog} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;