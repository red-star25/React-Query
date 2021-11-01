import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fruits from "./components/Fruit/Fruits";
import FruitsReactQuert from "./components/Fruit/FruitsReactQuert";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/fruits" component={Fruits} />
      </Switch>
      <Switch>
        <Route path="/fruits-react-query" component={FruitsReactQuert} />
      </Switch>
    </Router>
  );
}

export default App;
