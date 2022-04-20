import React, { useState } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const FILTERS = {
    "Picnic table": "table_restaurant",
    "Firepit": "fireplace",
    "Bathrooms": "bathroom",
    "RV hookup": "rv_hookup"
}


function AccomodationButton({filter}) {
    

    function handleClick(e) {
        const classes = e.target.classList;
        if (classes.contains("active")) {
            classes.remove("active")
        } else {
            classes.add("active")
            console.log("Data value:", e.target.getAttribute("data-value"));
        }
    }

  return (
    <div 
        className='accomodation-button' 
        onClick={handleClick} 
        data-value={filter.toUpperCase()}
    >
        <MaterialIcon icon={FILTERS[filter]} />{filter}
    </div>
  )
}

export default AccomodationButton