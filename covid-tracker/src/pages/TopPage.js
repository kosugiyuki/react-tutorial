import Title from "../components/Title"
import Selector from "../components/Selector"
import Result from "../components/Result"

const TopPage = (props) => {
    return (
        <>
            <Title/>
            <Selector countriesJson={props.countriesJson} 
                setCountry={props.setCountry} fetchCountryData={props.fetchCountryData}/>
            <Result countryData={props.countryData}/>
        </>
    )
}

export default TopPage;