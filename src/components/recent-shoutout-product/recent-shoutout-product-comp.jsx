import PropTypes from 'prop-types';
import './recent-shoutout-product-comp.css';
import React from 'react';

export default function RecentShoutoutProductComp(props) {
  const { product } = props;
  const { name, exp1, logo, exp2, platform } = product;

  return (
    <> 
      <div className="recent-product-comp-div">
        <div className="recent-product-info">
          <img className="recent-product-photo" src={logo} alt="" />
          <div className="recent-product-info-explanation">
            <p style={{ fontWeight: 'bold' }}>{name} --</p>
            <p>{exp1}</p>
          </div>
        </div>
        <div className="recent-product-explanation">
          <p>
            Shouted out <img className="platform-photo" src={platform} alt="" />{' '}
            Heroku
          </p>
          <p className="recent-product-explanation">{exp2}</p>
        </div>
      </div>
    </>
  );
}

RecentShoutoutProductComp.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exp1: PropTypes.string,
    logo: PropTypes.string,
    exp2: PropTypes.string,
    platform: PropTypes.string.isRequired,
  }).isRequired,
};
