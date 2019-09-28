import React, {useState, useEffect} from 'react';
import axios from 'axios';
import async from 'async';
import PeopleCard from './PeopleCard'

const StarWarsApi = (props) =>{
    const [people, setPeople] = useState([]);


    useEffect(() => {
        axios
        .get(
            `https://swapi.co/api/people`
        )
        .then(result =>{
            setPeople(result.data.results);
        })
        .catch(err => {
            console.log(err);
        });
}, []);


console.log(people)
    return(
        people.map((list, i)=>{
            return(
                <StarWarsApi 
                    key = {i}
                    name ={list.name}
                />
            )
        })
       
    );

}

export default StarWarsApi;