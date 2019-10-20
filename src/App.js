import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import AppBar from "./components/AppBar";
import InfoContent from "./components/home/InfoContent";
import Footer from "./components/home/Footer";
import reuseUrlTheme from "./reuseUrlTheme";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <ThemeProvider theme={reuseUrlTheme}>
            <AppBar />
            <Switch>
                <Route exact path="/" component={InfoContent} />
                <Route exact path="/home" component={InfoContent} />
                <Route path="/footer" component={Footer} />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
