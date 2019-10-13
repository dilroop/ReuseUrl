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
    render() {
        return (
            <Box style={{ background: "#e3f2fd" }}>
                <Container fixed>
                    <Grid container>
                        <Grid item sm={12}>
                            <Box display={displayUtils.smDownVisible} height="50vh">
                                <Lottie options={defaultOptions} />
                            </Box>
                        </Grid>

                        <Grid item sm={12} md={6} height="100%">
                            <Box display="flex" alignItems="center" height="100%" mb={8}>
                                <Box fontWeight="fontWeightLight" px={1}>
                                    <Typography variant="h5" gutterBottom fontWeight="fontWeightLight">
                                        <Box fontWeight="fontWeightLight">Reuseable Short Url?</Box>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        <Box fontWeight="fontWeightLight">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                                            tenetur unde suscipit, quam beatae rerum inventore consectetur, neque
                                            doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
                                            quidem quibusdam.
                                        </Box>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <Box display={displayUtils.mdUpVisible} px={1}>
                                <Lottie options={defaultOptions} width="100%" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        );
    }
}

export default InfoContent;
