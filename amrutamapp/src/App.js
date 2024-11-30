import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import FindDoctors from './components/FindDoctors/FindDoctors';
import NotFound from "./components/NotFound/NotFound";

import './App.css';
import About from './components/About/About';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/findDoctors"  component={FindDoctors}/>
        <Route path="/about"  component={About}/>
        <Route path="/not-found" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
