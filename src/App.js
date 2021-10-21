import "./App.css";
import Inicio from "./pages/Inicio";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
