import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";
import animationData from "../../lottie/contentAnimation.json";
import displayUtils from "../../utils/displayUtils";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

class InfoContent extends Component {
    state = {};
    render() {
        return (
            <div>
                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Box display={displayUtils.smDownVisible} height="50vh">
                                <Lottie options={defaultOptions} width="100%" />
                            </Box>
                        </Grid>

                        <Grid item sm={12} md={6} alignContent="flex-end" height="100%">
                            <Box height="50vh">
                                <Typography variant="h5" gutterBottom>
                                    <Box fontWeight="fontWeightLight" px={3}>
                                        Reuseable Short Url?
                                    </Box>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <Box fontWeight="fontWeightLight" px={3}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                                        tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
                                        cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
                                        quibusdam.
                                    </Box>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <Box display={displayUtils.mdUpVisible}>
                                <Lottie options={defaultOptions} width="100%" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default InfoContent;
