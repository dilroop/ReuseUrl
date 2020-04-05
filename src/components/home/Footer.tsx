import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Theme, makeStyles, StyledProps } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles<Theme, StyledProps>(theme => ({
    footer: {
        flexGrow: 1,
        background: "#222222",
        border: 0,
        color: "white"
    }
}));

export default function Footer() {
    const classes = useStyles({} as StyledProps);

    return (
        <Box className={classes.footer} py={4}>
            <Container fixed>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box textAlign="center" fontSize={12} my={2}>
                            Terms And Conditions
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box textAlign="center" fontSize={12} my={2}>
                            About Us
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box textAlign="center" fontSize={12} my={2}>
                            Contact Us
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box textAlign="center" fontSize={12} my={2}>
                            Follow Us
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
