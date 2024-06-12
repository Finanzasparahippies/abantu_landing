import React from "react";
import Link from "next/link";

const PriceCard = ({
  count,
  amount,
  name,
  extraClassName,
  options,
  button
}) => {
  return (
    <div className="pricing-one__single">
      <div className={`circle circle-${extraClassName}`}>
        <div className={`count count-${extraClassName}`}>
          <h4>{count}</h4>
        </div>
      </div>
      <div className="price">
 
        <p style={{fontSize: "28px", fontWeight: "bold"}}>{name}</p>
      </div>
      <ul className="list-unstyled pricing-one__list">
        <p>{options}</p>
      </ul>
    </div>
  );
};

export default PriceCard;
