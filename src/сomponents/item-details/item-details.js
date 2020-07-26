import React, {Component} from 'react';
import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import ErrorBoundary from "../error-boundary";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    swapi = new SwapiService();

    state = {
        item: null,
        imgUrl: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    imgUrl: getImageUrl(item)
                })
            })
    }

    render() {

        const {item, loading, imgUrl} = this.state;

        if (!item) {
            return <span>Select a item from list</span>
        }

        const spinner = loading ? <Spinner/> : null;

        return (
            <ErrorBoundary>
                {spinner}
                <div className="item-details card">
                    <img className="item-image"
                         src={imgUrl}
                         alt="image"/>

                    <div className="card-body">
                        <h4>{item.name}</h4>
                        <ul className="list-group list-group-flush">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { item });
                                })
                            }
                        </ul>
                        <ErrorButton />
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}