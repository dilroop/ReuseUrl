import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../lottie/contentAnimation.json";
import displayUtils from "../../utils/displayUtils";

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

class InfoContent extends Component {
    signUpOnClick() {
        alert("Test");
    }

    render() {
        return (
            <Box>
                <Box>
                    <Container fixed>
                        <Grid container fontWeight="fontWeightLight">
                            <Grid item sm={12}>
                                <Box display={displayUtils.smDownVisible} alignItems="center">
                                    <Lottie options={defaultOptions} width="100%" />
                                </Box>
                            </Grid>

                            <Grid item sm={12} md={6}>
                                <Box display="flex" alignItems="center" height="50vh">
                                    <Box fontWeight="fontWeightLight" px={1}>
                                        <Typography variant="h5" gutterBottom>
                                            Reuseable Short Url?
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            We will generate a short reuseable link, Use of the static link with dynamic
                                            destination can be handy in situations like have permanent link for your
                                            next live stream or permanent link to your CV.
                                        </Typography>
                                        <Box mt={6}>
                                            <ReButton onClick={this.signUpOnClick}>Sign Up</ReButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item sm={12} md={6} height="100%">
                                <Box display={displayUtils.mdUpVisible} px={2} height="100%">
                                    <Box display="flex" alignItems="center" height="100%">
                                        <Lottie options={defaultOptions} width="100%" height="50%" />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box height="50vh" alignItems="center" style={{ background: "#e3f2fd" }}>
                    Hello
                </Box>
            </Box>
        );
    }
}

export default InfoContent;
