import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import countryList from "react-select-country-list";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
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

export default function Signup() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "IN"
    });

    const countries = countryList().getData();

    const onSignUpClick = () => {
        
    };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Box py={2} className={classes.background}>
            <Container fixed>
                <Box>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box display={displayUtils.smDownVisible}>
                                        <Box display="flex" justifyContent="center">
                                            <img src="../images/signup.svg" width="80%" alt="Reuse Url" />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Box display={displayUtils.mdUpVisible}>
                                        <Box display="flex" justifyContent="flex-end">
                                            <img src="../images/signup.svg" width="90%" alt="Reuse Url" />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                        <Box px={2} py={4}>
                                            <Typography variant="h5" component="h2">
                                                Signup to Reuse Url
                                            </Typography>
                                            <TextField
                                                id="emailField"
                                                label="Email"
                                                className={classes.textField}
                                                type="text"
                                                value={values.email}
                                                onChange={handleChange("email")}
                                                autoComplete="email"
                                                variant="filled"
                                            />
                                            <br />
                                            <TextField
                                                id="nameField"
                                                label="Name"
                                                value={values.name}
                                                className={classes.textField}
                                                type="text"
                                                onChange={handleChange("name")}
                                                autoComplete="name"
                                                variant="filled"
                                            />
                                            <br />
                                            <TextField
                                                id="passwordField"
                                                label="Password"
                                                value={values.password}
                                                className={classes.textField}
                                                type="password"
                                                onChange={handleChange("password")}
                                                autoComplete="password"
                                                variant="filled"
                                            />
                                            <br />
                                            <TextField
                                                id="confirmPasswordField"
                                                label="Confirm Password"
                                                className={classes.textField}
                                                type="password"
                                                value={values.confirmPassword}
                                                onChange={handleChange("confirmPassword")}
                                                autoComplete="password"
                                                variant="filled"
                                            />
                                            <br />
                                            <TextField
                                                select
                                                id="filled-select-currency"
                                                label="Country"
                                                className={classes.textField}
                                                value={values.country}
                                                onChange={handleChange("country")}
                                                SelectProps={{
                                                    MenuProps: {
                                                        className: classes.textField
                                                    }
                                                }}
                                                variant="filled">
                                                {countries.map(option => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <br />
                                            <Box mt={2} display="flex" justifyContent="center">
                                                <ReButton onClick={onSignUpClick}>Signup</ReButton>
                                            </Box>
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
