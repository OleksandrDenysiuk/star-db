import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

export default class App extends Component {



    state = {
        hasError: false,
        swapiService: new SwapiService()
    }

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

        const {swapiService} = this.state;
        return (
            <SwapiServiceProvider value={swapiService}>
                <div className="stardb-app">
                    <Header onServiceChange={this.onServiceChange}/>
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />

                </div>
            </SwapiServiceProvider>
        );
    }
};