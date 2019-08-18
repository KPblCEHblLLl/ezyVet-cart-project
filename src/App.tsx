import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import store, {history} from './store';
import {Route, Switch} from 'react-router';
import {AppLayout} from "./components/AppLayout";
import {ProductsListPage} from "./components/ProductsListPage";
import {CartPage} from "./components/CartPage";

class App extends Component {
    public render() {
        return (
            <Provider store={store}>
                <AppLayout>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact={true} path='/' component={ProductsListPage}/>
                            <Route exact={true} path='/cart' component={CartPage}/>
                        </Switch>
                    </ConnectedRouter>
                </AppLayout>
            </Provider>
        );
    }
}

export default App;
