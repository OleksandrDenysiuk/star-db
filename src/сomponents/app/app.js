import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from '../pages';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {


    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const {swapiService, isLoggedIn} = this.state;
        return (
            <SwapiServiceProvider value={swapiService}>
                <Router>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>

                        <Route path="/"
                               render={() => <h2>Welcome to StarDB!</h2>}
                               exact/>
                        <Route path="/people" component={PeoplePage}/>
                        <Route path="/planets" component={PlanetsPage}/>
                        <Route path="/starships" exact component={StarshipsPage}/>
                        <Route path="/starships/:id"
                               render={({match}) => {
                                   const {id} = match.params;
                                   return <StarshipDetails itemId={id}/>
                               }}/>
                        <Route path="/login"
                               render={() => (
                                   <LoginPage
                                       isLoggedIn={isLoggedIn}
                                       onLogin={this.onLogin}/>
                               )}/>
                        <Route path="/secret"
                               render={() => (
                                   <SecretPage isLoggedIn={isLoggedIn}/>
                                   )}/>
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
};