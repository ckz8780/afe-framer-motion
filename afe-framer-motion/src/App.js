import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          {/* home */}
        </Route>
        <Route path="/layout">
          {/* react-bootstrap - bootstrap layout */}
        </Route>
        <Route path="/routing">
          {/* react router - page routing for SPAs */}
        </Route>
        <Route path="/notifications">
          {/* react-toastify - notifications */}
        </Route>
        <Route path="/icons">
          {/* react-icons - icons from FA, material-ui, etc */}
        </Route>
        <Route path="/tables">
          {/* react-table - interactive tables */}
        </Route>
        <Route path="/counters">
          {/* react countup - fancy counter components */}
        </Route>
        <Route path="/charts">
          {/* react-chartjs-2 - interactive charts */}
        </Route>
        <Route path="/presentations">
          {/* mdx-deck - Presentations */}
        </Route>
        <Route path="/animations">
          {/* framer-motion - animations */}
        </Route>
        <Route path="/ui-development">
          {/* react-storybook - efficient team-based UI development */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
