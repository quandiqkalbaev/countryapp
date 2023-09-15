import CountryData from "./data";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Country() {
    let countries = CountryData();
    let [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="country">
            <div className="container">
                <div className="country__inner">
                    <input type="search" id="" className="country__search-input"
                           value={searchTerm}
                           onChange={handleSearchChange}
                           placeholder="Search by country name"/>
                    <div className="country__items">
                        {filteredCountries.map((e, index) => (
                            <Link to={`/`+e.name.common} className="country__item" key={index}>
                                <div className="country__flag">
                                    <img src={e.flags.png} alt="country-img"/>
                                </div>
                                <div className="country__info">
                                    <h2 className="country__name">{e.name.common}</h2>
                                    <p className="country__capital">Capital: <span>{e.capital}</span></p>
                                    <p className="country__population">Population: <span>{e.population} mln</span></p>
                                    <p className="country__region">Region: <span>{e.region}</span></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}