import React from 'react';
import { Provider } from 'react-redux';

import Control from './containers/Control';
import Graph from './containers/Graph'

import store from './store';

const App = () => (
    <Provider store={store}>
        <Control />
        <Graph />
    </Provider>    
)

export default App;