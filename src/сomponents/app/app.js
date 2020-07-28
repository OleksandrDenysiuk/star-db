import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import {
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from "../sw-components";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    togglePlanet = () => {
        this.setState(({showRandomPlanet}) => {
            return {
                showRandomPlanet: !showRandomPlanet
            }
        })
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const {showRandomPlanet} = this.state;
        const randomPlanet = showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div className="stardb-app">
                    <Header/>
                    {randomPlanet}
                    <div className="row mb2 button-row">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.togglePlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton/>
                    </div>
                    <PersonDetails itemId={2}/>
                    <PlanetDetails itemId={1}/>
                    <StarshipDetails itemId={9}/>
                    <PersonList/>
                    <PlanetList/>
                    <StarshipList/>
                </div>
            </SwapiServiceProvider>
        );
    }
};