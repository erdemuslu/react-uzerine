import React, { useCallback } from 'react';
import { string, shape } from 'prop-types';
// import './Card.css';
import helpers from './helpers';

const Card = ({
  title,
  desc,
  buttonText,
  data
}) => {
  const filteredData = useCallback(() => {
    const result = helpers.removeDuplicateItemFromArray(data);
    return result;
  }, [data]);

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>
        {desc}
      </p>
      <div className="erdem">erdem</div>
      <ul>
        {
          !!filteredData().length && filteredData().length > 0 && filteredData().map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))
        }
      </ul>
      <div>
        <button type="button" onClick={() => console.log('clicked')}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}


Card.propTypes = {
  title: string,
  desc: string,
  buttonText: string,
  data: shape([])
}

Card.defaultProps = {
  title: '',
  desc: '',
  buttonText: '',
  data: []
}

export default Card;
