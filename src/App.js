import Country from "./components/country";
import {Route, Routes} from "react-router";
import CountryData from "./components/data";
import CountryItem from "./components/countryItem";

function App() {
    let countries = CountryData();
    return (
        <Routes>
            <Route path="/" element={<Country/>}/>
            {countries.map((e,index) => (
                <>
                <Route path={`/` + e.name.common} element={<CountryItem data={countries}/>} key={index}/>
                <Route path={`/` + e.cca3} element={<CountryItem data={countries}/>} key={index}/>
                </>

            ))}
        </Routes>

    );
}

export default App;
