
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quote from './Components/Quotes/Quote';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/Stock-listing-app/" component = {Home}></Route>
          <Route path = "/stocks/:symbol" component= {Quote}></Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
