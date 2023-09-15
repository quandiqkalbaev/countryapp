import {useEffect, useState} from "react";
import axios from "axios";

export default function CountryData() {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const apiUrl = 'https://restcountries.com/v3.1/all';
        axios.get(apiUrl)
            .then(response => {
                setCountry(response.data)
            })
            .catch(error => {
                console.error("Ошибка!", error)
            })
    },[]);
    return country;
}