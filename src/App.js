// import './App.css';
import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import Blogdetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './Notfound';
import Contactus from './feedback';

function App() {



  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/feedback">
              <Contactus />
            </Route>
            <Route path="/blog/:id">
              <Blogdetails />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
