import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";
import animationData from "../../lottie/contentAnimation.json";

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
            <Grid item xs={6} alignContent="flex-end">
              <Typography variant="h5" gutterBottom>
                <Box fontWeight="fontWeightLight" mt={20} px={3}>
                  Reuseable Short Url?
                </Box>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Box fontWeight="fontWeightLight" px={3}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore
                  consectetur, neque doloribus, cupiditate numquam dignissimos
                  laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Lottie options={defaultOptions} height={400} width={400} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default InfoContent;
