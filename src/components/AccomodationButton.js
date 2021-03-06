import React, { useState } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const FILTERS = {
    "Picnic table": "table_restaurant",
    "Firepit": "fireplace",
    "Bathrooms": "bathroom",
    "RV hookup": "rv_hookup"
}


function AccomodationButton({filter, filteredCampsites}) {
    function handleClick(e) {
        const classes = e.target.classList;
        if (classes.contains("active")) {
            classes.remove("active")
        } else {
            classes.add("active")
        }
        filteredCampsites()
    }

  return (
    <div 
        className='accomodation-button' onClick={handleClick} data-value={filter.toUpperCase()}>
        <MaterialIcon icon={FILTERS[filter]} />{filter}
    </div>
  )
}

export default AccomodationButton