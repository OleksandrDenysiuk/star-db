import React, {Component} from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails, {Record} from '../item-details/item-details';
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
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapi.getPerson}
                getImageUrl={this.swapi.getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        );
    }
}