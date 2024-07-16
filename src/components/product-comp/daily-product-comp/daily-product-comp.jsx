import React from 'react';
import PropTypes from 'prop-types';
import ProductComponent from '../product-component';

export default function DailyProductComp(props) {
  const { data } = props;

  return (
    <>
      {data.map((item) => (
        <ProductComponent
          key={item.name}
          logo={item.logo}
          name={item.name}
          explanation={item.explanation}
          firstbtn={item.firstbtn}
          secondbtn={item.secondbtn}
          count={item.count}
          thirdbtn={item.thirdbtn}
          photo={item.photo}
          introduction={item.introduction}
        />
      ))}
    </>
  );
}


DailyProductComp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired,
      firstbtn: PropTypes.string,
      secondbtn: PropTypes.string,
      count: PropTypes.number.isRequired,
      thirdbtn: PropTypes.string,
      photo: PropTypes.arrayOf(PropTypes.string),
      introduction: PropTypes.string,
    })
  ).isRequired,
};
