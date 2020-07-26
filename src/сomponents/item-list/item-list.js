import React, { Component } from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    swapi = new SwapiService();

    state = {
        listCharacters: null
    }

    componentDidMount() {
        this.swapi.getAllPeople()
            .then((listCharacters) => {
                this.setState({
                    listCharacters
                })
            });
    }

    renderItems(arr){
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                key={id}
                onClick={() => this.propsOnItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const {listCharacters} = this.state;

        if(!listCharacters) {
            return <Spinner />
        }

        const items = this.renderItems(listCharacters);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}