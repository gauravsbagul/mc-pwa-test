import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import './App.css';
import { persistor, store } from './Redux/store';
import Router from './router';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.status.danger,
        '&$checked': {
            color: theme.status.danger,
        },
    },
    checked: {},
}));

const theme = createMuiTheme({
    status: {
        danger: 'red',
        success: 'green',
        primary: 'green',
    },
});

const App = (props) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Router />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
