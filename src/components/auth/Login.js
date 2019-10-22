import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import displayUtils from "../../utils/displayUtils";
import ReButton from "../commonUIElements";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        marginTop: theme.spacing(2),
        width: 260
    },
    background: {
        flexGrow: 1,
        background: "#f3f3f3",
        border: 0,
        minHeight: "90vh"
    }
}));

export default function Login() {
    const classes = useStyles();

    const loginOnClick = () => {
        alert("Not Implemented");
    };

    return (
        <Box py={2} className={classes.background}>
            <Container fixed>
                <Box>
                    <Card className={classes.card}>
                        <CardContent>
                            <Grid container fontWeight="fontWeightLight">
                                <Grid item xs={12}>
                                    <Box display={displayUtils.smDownVisible}>
                                        <Box display="flex" justifyContent="center">
                                            <img src="../images/login.svg" width="80%" alt="Reuse Url" />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                        <Box px={2} py={4}>
                                            <Typography variant="h5" component="h2" mb={2}>
                                                Log in to Reuse Url
                                            </Typography>
                                            <TextField
                                                id="usernameField"
                                                label="Username or Email"
                                                className={classes.textField}
                                                type="text"
                                                autoComplete="username"
                                                variant="filled"
                                            />
                                            <br />
                                            <TextField
                                                id="passwordField"
                                                label="Password"
                                                className={classes.textField}
                                                type="password"
                                                autoComplete="password"
                                                variant="filled"
                                            />
                                            <br />
                                            <Box mt={2}>
                                                <ReButton onClick={loginOnClick}>Login</ReButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Box display={displayUtils.mdUpVisible}>
                                        <Box display="flex" justifyContent="flex-end">
                                            <img src="../images/login.svg" width="90%" alt="Reuse Url" />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
}
