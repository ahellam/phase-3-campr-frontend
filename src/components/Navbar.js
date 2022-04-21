import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import { DateRangePicker } from "react-dates"
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo">
          <h2>CAMP'R</h2>
        </div>
        <div className="datepicker">
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="start_date" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="end_date" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </div>
        <div className="navlinks">
          <nav>
            <NavLink exact to="/">Campsites </NavLink>
            <NavLink to="/reservations">Reservations </NavLink>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar;