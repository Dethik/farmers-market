import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Produce.css';

function Produce(props){
  return (
    <React.Fragment>
      <div class="produce">
        <h3 class="produce">{props.month}</h3>
        <ul class="produce">
          {props.selection.map((selection) => (
            <li>{selection}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default Produce;