import React, {useState, useEffect} from 'react';
import axios from 'axios';
import async from 'async';

const StarWarsApi = () =>{
    const [people, setPeople] = useState('');

    useEffect(() => {
    async function fetchData() {
        try{
            const people = await axios.get(
                "https://swapi.co/documentation#people"
            );
            setPeople(people.data);
        } catch(err) {
            console.log(err);
        }
    }

    fetchData();
}, []);


export default StarWarsApi;