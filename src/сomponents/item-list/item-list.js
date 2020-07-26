import React, { Component } from 'react';
import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {

    state = {
        listItems: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((listCharacters) => {
                this.setState({
                    listCharacters
                })
            });
    }

    renderItems(arr){
        return arr.map((item) => {

            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <li className="list-group-item"
                key={id}
                onClick={() => this.props.onItemSelected(id)}>
                    {label}
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