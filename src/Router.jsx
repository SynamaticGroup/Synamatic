import React from 'react';
import { Route, Switch } from 'react-router';
import Category from './containers/Category';
import Favourites from './containers/Favourites';
import Home from './containers/Home';
import Search from './containers/Search';
import SearchPage from './containers/SearchTest';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/favourites'} component={Favourites} />
                <Route exact path={'/search'} component={SearchPage} />
                <Route exact path={'/category'} component={Category} />
                <Route exact path={'/searchTest'} component={SearchPage}></Route>
            </Switch>
        </>
    );
};
export default Router;
