import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";


export default class App extends Component {
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
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const {showRandomPlanet} = this.state;
        const randomPlanet = showRandomPlanet ? <RandomPlanet/> : null;
        return (
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
                <PeoplePage/>
            </div>
        );
    }
};