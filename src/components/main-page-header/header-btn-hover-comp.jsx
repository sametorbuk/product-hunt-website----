import React from 'react';
import PropTypes from 'prop-types';
import styles from './header-btn-hover-comp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HoveredComp(props) {
  const { array, stateChange } = props;

  return (
    <div
      onMouseEnter={() => stateChange(true)}
      onMouseLeave={() => stateChange(false)}
      className={styles.hoverComp}
    >
      {array.map((item, index) => (
        <div key={index} className={styles.row1}>
          <FontAwesomeIcon
            style={{ color: item.color }}
            className={styles.icon1}
            icon={item.code}
          />
          <div className={styles.row1Right}>
            <p>{item.ex1}</p>
            <p>{item.ex2}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

HoveredComp.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      code: PropTypes.object.isRequired,
      ex1: PropTypes.string.isRequired,
      ex2: PropTypes.string.isRequired,
    })
  ).isRequired,
  stateChange: PropTypes.func.isRequired,
};
