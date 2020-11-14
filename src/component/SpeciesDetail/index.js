import React from 'react';
import './style.scss'

const SpeciesDetail = (props) => {
  const { name, classification, designation, average_height } = props;
  return (
    <div className="swapi">
      <ul className="list">
        <li>
          <h3>Name: {name}</h3>
        </li>
        <li>
          <p>Classification: {classification}</p>
        </li>
        <li>
          <p>Designation: {designation}</p>
        </li>
        <li>
          <p>Average of Height: {average_height} cm</p>
        </li>
      </ul>
    </div>
  );
};

export default SpeciesDetail;
