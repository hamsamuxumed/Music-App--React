import React from "react";
import { NavBar } from './components/layouts';
import * as Pages from './pages';

import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>

                <Route exact path='/'>
                    <Pages.Home />
                </Route>

                <Route path='/albums'>
                    <Pages.Albums />
                </Route>

                <Route >
                    <h1>Opps</h1>
                </Route>

            </Switch>





        </>
    )
}

export default App