import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppRoute from './components/appRoute';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AppBar from './components/home/AppBar';
import Footer from './components/home/Footer';
import InfoContent from './components/home/InfoContent';
import reuseUrlTheme from './reuseUrlTheme';
import { AuthenticationManager } from './components/auth/AuthenticationManager';

const App = () => {
	const authManager = AuthenticationManager.getInstance();
	authManager.observeAuth();
	return (
		<ThemeProvider theme={reuseUrlTheme}>
			<AppBar />
			<Switch>
				<Route exact path={AppRoute.Home} component={InfoContent} />
				<Route exact path={AppRoute.Login} component={Login} />
				<Route exact path={AppRoute.Signup} component={Signup} />
			</Switch>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
