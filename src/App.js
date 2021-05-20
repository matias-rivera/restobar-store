import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer";
import { Provider } from "./context";
import MainScreen from "./screens/MainScreen";
import MenuScreen from "./screens/MenuScreen";
import NavbarMenu from "./components/NavbarMenu";

function App() {
    return (
        <Provider>
            <GlobalStyle />

            <Router>
                <Switch>
                    <Route component={MenuScreen} path={"/menu"} />
                    <Route component={MainScreen} path={"/"} exact />
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
