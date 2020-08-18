import React, { lazy, Suspense } from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>Code Splitting in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Suspense fallback={<small>Loading...</small>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;