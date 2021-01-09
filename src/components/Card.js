import React from 'react';

export const Card = ({
  type,
  price,
  features,
  buttonText,
  actionButton,
  link,
}) => {
  return (
    <div className="card">
      <h4>{type}</h4>

      {price && (
        <div>
          <h1>{price}</h1>
          <p>per persone, per month</p>
        </div>
      )}

      <h3>Feature</h3>
      <ul>
        {features.map((feature, i) => (
          <li key={i}>
            <span className="check"></span>
            <p>{feature}</p>
          </li>
        ))}
      </ul>

      <button onClick={() => actionButton(type)}>{buttonText}</button>
      <a href={link}>learn more</a>
    </div>
  );
};
 