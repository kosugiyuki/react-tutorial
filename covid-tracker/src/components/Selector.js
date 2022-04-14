const Selector = (props) => {
    return (
        <>
            <select onChange={(e)=>{props.setCountry(e.target.value)}}>
                <option>Select A Country.</option>
                {props.countriesJson.map((country, index) => {
                    return <option key={index} value={country.Slug}>{index}:{country.Country}</option>
                })}
            </select>
            <button onClick={props.fetchCountryData}>Get Data</button>
        </>
    )
}

export default Selector;