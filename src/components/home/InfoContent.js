import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles, styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lottie/contentAnimation.json";
import displayUtils from "../../utils/displayUtils";
import Footer from "../../components/home/Footer";

const ReButton = styled(Button)({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
});

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const useStyles = makeStyles(theme => ({
    background: {
        flexGrow: 1,
        background: "linear-gradient(90deg, #da5a76 30%, #db8254 90%)",
        border: 0,
        color: "white"
    }
}));

export default function InfoContent() {
    const classes = useStyles();

    const signUpOnClick = () => {
        alert("Test");
    };

    return (
        <Box>
            <Container fixed>
                <Grid container fontWeight="fontWeightLight">
                    <Grid item sm={12}>
                        <Box display={displayUtils.smDownVisible} alignItems="center">
                            <Lottie options={defaultOptions} width="100%" />
                        </Box>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <Box display="flex" alignItems="center" height="100%">
                            <Box fontWeight="fontWeightLight" px={1} py={8}>
                                <Typography variant="h5" gutterBottom>
                                    Reuseable Short Url?
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    We will generate a short reuseable link, Use of the static link with dynamic
                                    destination can be handy in situations like have permanent link for your next live
                                    stream or permanent link to your CV.
                                </Typography>
                                <Box mt={6}>
                                    <ReButton onClick={signUpOnClick}>Sign Up</ReButton>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <Box display={displayUtils.mdUpVisible} px={2} height="70vh">
                            <Box display="flex" alignItems="center" height="100%">
                                <Lottie options={defaultOptions} width="100%" height="50%" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box className={classes.background}>
                <Container fixed>
                    <Box display="flex" height="70vh" py={6} alignItems="center">
                        <Box justifyContent="center" alignItems="center">
                            <Typography variant="h4" gutterBottom>
                                <i>What would you like to use reurl for ?</i>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Please share your feedback
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
