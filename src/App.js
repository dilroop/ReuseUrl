import React from "react";
import AppBar from "./componants/AppBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import reurseUrlTheme from "./reurseUrlTheme";

const App = () => {
  return (
    <MuiThemeProvider theme={reurseUrlTheme}>
      <div>
        <AppBar />
        <h1>Hello Might</h1>
        <h3>Aakash Bista </h3>
        &amp;
        <h3> Parth Patel</h3>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
