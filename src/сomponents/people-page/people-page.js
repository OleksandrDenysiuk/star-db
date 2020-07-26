import React, {Component} from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: null
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapi.getAllPeople}
                renderItem={(item) => item.name}/>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        );
    }
}