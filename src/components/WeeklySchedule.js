import React from "react";
import PropTypes from "prop-types"


function WeeklySchedule(props) {
  return (
    <>
      <p>Day: {props.day}</p>
      <p>Location: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
      <hr/>
      <br/>
    </>
  )
}

WeeklySchedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default WeeklySchedule;