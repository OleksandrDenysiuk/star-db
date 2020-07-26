import React from "react";

import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;


const PersonDetails = ({personId}) => {
    return (
        <ItemDetails
            itemId={personId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
};
const PlanetDetails = ({planetId}) => {
    return (
        <ItemDetails
            itemId={planetId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="diameter" />
        </ItemDetails>
    )
};
const StarshipDetails = ({starshipId}) => {
    return (
        <ItemDetails
            itemId={starshipId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};