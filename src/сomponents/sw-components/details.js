import React from "react";

import ItemDetails, {Record} from "../item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";


const PersonDetails = ({personId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return(
                        <ItemDetails
                            itemId={personId}
                            getData={getPerson}
                            getImageUrl={getPersonImage}>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const PlanetDetails = ({planetId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            itemId={planetId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                            <Record field="diameter" label="diameter"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const StarshipDetails = ({starshipId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return (
                        <ItemDetails
                            itemId={starshipId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>
                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="costInCredits" label="Cost"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};