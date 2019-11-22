import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from "react-router-dom"
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import Gallery from "../Gallery/Gallery";

const App = () => {
    return (
        <HashRouter>
            <div className={"app__container"}>
                <Header/>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Profile}/>
                    <Route path={"/gallery"} component={Gallery}/>
                </Switch>
            </div>

        </HashRouter>

    );
};

export default App;
