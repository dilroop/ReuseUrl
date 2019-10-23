import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Route from "../appRoute";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        cursor: "pointer"
    },
    background: {
        flexGrow: 1,
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white"
    }
}));

export default function Bar() {
    const classes = useStyles();
    let history = useHistory();

    const onLogoClick = () => {
        history.push(Route.Home);
    };

    return (
        <AppBar position="sticky" elevation={0} className={classes.background}>
            <Toolbar>
                <Typography variant="h6" className={classes.title} noWrap onClick={onLogoClick}>
                    Reuse Urls
                </Typography>
                <Button color="inherit" component={Link} to={Route.Login}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
