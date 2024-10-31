import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import UserStore from "./store/UserStore";
import App from './App';

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
)

