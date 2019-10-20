import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import AppBar from "./components/AppBar";
import InfoContent from "./components/home/InfoContent";
import reuseUrlTheme from "./reuseUrlTheme";

const App = () => {
    return (
        <ThemeProvider theme={reuseUrlTheme}>
            <AppBar />
            <InfoContent />
        </ThemeProvider>
    );
};

export default App;
