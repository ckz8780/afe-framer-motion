import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import Routing from './components/Routing';
import Notifications from './components/Notifications';
import Icons from './components/Icons';
import Tables from './components/Tables';
import Counters from './components/Counters';
import Charts from './components/Charts';
import Presentations from './components/Presentations';
import Animations from './components/Animations';
import UIDevelopment from './components/UIDevelopment';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* homepage */}
          <Home />
        </Route>
        <Route exact path="/layout">
          {/* react-bootstrap - bootstrap layout */}
          <Layout />
        </Route>
        <Route exact path="/routing">
          {/* react router - page routing for SPAs */}
          <Routing />
        </Route>
        <Route exact path="/notifications">
          {/* react-toastify - notifications */}
          <Notifications />
        </Route>
        <Route exact path="/icons">
          {/* react-icons - icons from FA, material-ui, etc */}
          <Icons />
        </Route>
        <Route exact path="/tables">
          {/* react-table - interactive tables */}
          <Tables />
        </Route>
        <Route exact path="/counters">
          {/* react countup - fancy counter components */}
          <Counters />
        </Route>
        <Route exact path="/charts">
          {/* react-chartjs-2 - interactive charts */}
          <Charts />
        </Route>
        <Route exact path="/presentations">
          {/* mdx-deck - Presentations */}
          <Presentations />
        </Route>
        <Route exact path="/animations">
          {/* framer-motion - animations */}
          <Animations />
        </Route>
        <Route exact path="/ui-development">
          {/* react-storybook - efficient team-based UI development */}
          <UIDevelopment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
