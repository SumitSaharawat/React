import { useContext } from "react";
import { CountryContext } from "./CountryContext";

function CountryInfo() {

    const {countryData} = useContext(CountryContext)
    return (
        <div>
            <img src={countryData.flags.svg} alt="Flag" className="flagImage" />
            <h2>{countryData.name.common}</h2>
            <div className="row">
                <div className="dataRow">
                    <h4>Capital:</h4>
                    <span>{countryData.capital[0]}</span>
                </div>
            </div>
            <div className="row">
                <div className="dataRow">
                    <h4>Continent:</h4>
                    <span>{countryData.continents[0]}</span>
                </div>
            </div>
        </div>
    );
}

export default CountryInfo;