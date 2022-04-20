import React from 'react'
import '../styles/Filters.css'
import AccomodationButton from './AccomodationButton'


const FILTERS = [
    "Picnic table",
    "Firepit",
    "Bathrooms",
    "RV hookup"
]

function Filters() {
    return (
        <div className="filters-container">
            <div className='accommodations'>
                {FILTERS.map((filter) => {
                    return <AccomodationButton filter={filter}/>
                })}
            </div>
            
            <div className='price-filter-wrapper'>
                <select name="price-filter" id="price_filter">
                    <option value="any"> {"Any price"}</option>
                    <option value="25"> {"Under $25"}</option>
                    <option value="50"> {"Under $50"}</option>
                    <option value="75"> {"Under $75"}</option>
                    <option value="125"> {"Under $125"}</option>
                    <option value="175"> {"Under $175"}</option>
                    <option value="175+"> {"$175 or more"}</option>
                </select>
            </div>
        </div>
    )
}

export default Filters