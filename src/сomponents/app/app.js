import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


export default class App extends Component{
    state = {
        showRandomPlanet: true
    }

    togglePlanet = () => {
        this.setState(({showRandomPlanet}) => {
            return {
                showRandomPlanet: !showRandomPlanet
            }
        })
    }

    render() {

        const {showRandomPlanet} = this.state;
        const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;
        return (
            <div className="stardb-app">
                <Header />
                {randomPlanet}
                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.togglePlanet}>
                        Toggle Random Planet
                    </button>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    }
};