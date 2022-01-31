import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/style.css';
import Category from './containers/Category';
import Favourites from './containers/Favourites';
import Home from './containers/Home';
import SearchPage from './containers/SearchTest';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favourites} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/categories" component={Category} />
            </Switch>
        </Router>
    );
}

export default App;
