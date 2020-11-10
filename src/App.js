import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { End, Game, Start } from "./components/pages";

export function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/results' component={End} />
      </Switch>
    </Router>
  );
}
