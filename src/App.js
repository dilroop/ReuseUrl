import React from "react";
import AppBar from "./componants/AppBar";
import { ThemeProvider } from "@material-ui/styles";
import reuseUrlTheme from "./reuseUrlTheme";
import InfoContent from "./componants/home/InfoContent";

const App = () => {
  return (
    <ThemeProvider theme={reuseUrlTheme}>
      <div>
        <AppBar />
        <InfoContent />
      </div>
    </ThemeProvider>
  );
};

export default App;
