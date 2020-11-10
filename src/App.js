import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { End, Game, Start } from "./components/pages";

export function App() {
  const path = process.env.PUBLIC_URL;
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route exact path={path + "/"} component={Start} />
        <Route exact path={path + "/game"} component={Game} />
        <Route exact path={path + "/results"} component={End} />
      </Switch>
    </Router>
  );
}
