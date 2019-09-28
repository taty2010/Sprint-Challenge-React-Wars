import React, {useState, useEffect} from 'react';


const PeopleCard = (props) =>{

    return(
        <div className="card">
            <div>
                <h1>{props.name}</h1>
                <h2>{props.home}</h2>
                <h3>{props.species}</h3>
            </div>
        </div>
    )
};

export default PeopleCard;