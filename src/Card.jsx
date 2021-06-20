import React from 'react';
import { string } from 'prop-types';
// import './Card.css';

const Card = ({
  title,
  desc,
  buttonText
}) => (
  <div className="card">
    <h1>{title}</h1>
    <p>{desc}</p>
    <div>
      <button type="button" onClick={() => console.log('clicked')}>
        {buttonText}
      </button>
    </div>
  </div>
)

Card.propTypes = {
  title: string,
  desc: string,
  buttonText: string
}

Card.defaultProps = {
  title: '',
  desc: '',
  buttonText: ''
}

export default Card;
