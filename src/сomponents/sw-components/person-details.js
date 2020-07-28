import React from "react";

import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = ({personId, swapiService}) => {
    const {getPerson, getPersonImage} = swapiService;
    return (
        <ItemDetails
            itemId={personId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )

};

export default withSwapiService(PersonDetails);