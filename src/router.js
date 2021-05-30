import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Splash from './container/Splash';
import Login from './container/Login';

import Home from './container/Home';
import Restaurant from './container/Restaurant';
import Checkout from './container/Checkout';

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { auth } = useSelector((state) => state);

    useEffect(() => {
        if (auth?.userInfo?.token && auth?.userInfo?.userId) {
            setIsLoggedIn(true);
        }
    }, [auth]);

    return (
        <>
            <header>
                <span>header</span>
            </header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route exact path="/login" component={Login} />
                    {isLoggedIn ? (
                        <>
                            <Route path="/home" component={Home} />
                            <Route path="/restaurant/:restaurantId" component={Restaurant} />
                            <Route path="/checkout" component={Checkout} />
                        </>
                    ) : null}
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Router;
