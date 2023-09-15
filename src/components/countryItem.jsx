import {useLocation} from "react-router";
import {Link} from "react-router-dom";

export default function CountryItem({data}) {
    let currentLocation = useLocation().pathname.substring(1)
    const filteredData = data.filter((e) => {
        return e.name.common === currentLocation || e.cca3 === currentLocation;
    });
    return (
        <div className="single">
            <div className="container">
                {filteredData.map((e, index) => (
                    <div className="single__wrapper" key={index}>
                        <div className="single__top">
                            <Link to="/">Back</Link>
                        </div>
                        <div className="single__bot">
                            <div className="single__left">
                                <img src={e.flags.png} alt=""/>
                            </div>
                            <div className="single__right">
                                <h2 className="single__name">{e.name.common}</h2>
                                <p className="single__capital">Capital: <span>{e.capital}</span></p>
                                <p className="single__population">
                                    Population:{" "}
                                    <span>
    {e.population.toLocaleString(undefined, {minimumFractionDigits: 0})}
  </span>
                                </p>

                                <p className="single__region">Region: <span>{e.region}</span></p>
                                <div className="single__items">
                                    {
                                        e.borders.map((border) => (
                                            <Link className="single__item" to={`/` + border}>{border}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}