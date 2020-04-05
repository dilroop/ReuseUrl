import React from 'react';
import { Theme, makeStyles, StyledProps } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppRoute from '../appRoute';
import { Switch, Route, useHistory, Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { AuthenticationManager } from '../auth/AuthenticationManager';

const useStyles = makeStyles<Theme, StyledProps>((theme) => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1,
		cursor: 'pointer'
	},
	background: {
		flexGrow: 1,
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white'
	}
}));

export default function Bar() {
	const classes = useStyles({} as StyledProps);
	let history = useHistory();

	const onLogoClick = () => {
		history.push(AppRoute.Home);
	};

	const logout = () => {
		AuthenticationManager.logout();
	};

	const headerButtons = AuthenticationManager.user ? (
		<Button color="inherit" component={Link} onClick={logout}>
			Logout
		</Button>
	) : (
		<Switch>
			<Route
				exact
				path={AppRoute.Home}
				render={() => (
					<Box>
						<Button color="inherit" component={Link} to={AppRoute.Signup}>
							Signup
						</Button>
						<Button color="inherit" component={Link} to={AppRoute.Login}>
							Login
						</Button>
					</Box>
				)}
			/>
			<Route
				exact
				path={AppRoute.Login}
				render={() => (
					<Button color="inherit" component={Link} to={AppRoute.Signup}>
						Signup
					</Button>
				)}
			/>
			<Route
				path={AppRoute.Signup}
				render={() => (
					<Button color="inherit" component={Link} to={AppRoute.Login}>
						Login
					</Button>
				)}
			/>
		</Switch>
	);

	return (
		<AppBar position="sticky" elevation={0} className={classes.background}>
			<Toolbar>
				<Typography variant="h6" className={classes.title} noWrap onClick={onLogoClick}>
					Reuse Urls
				</Typography>
				{headerButtons}
			</Toolbar>
		</AppBar>
	);
}
