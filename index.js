/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './components/redux/store';

const AppRedux = ()=>(
    <Provider store = {store}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => AppRedux);
