import React from 'react';

import { sahteVeri } from '../../../sahteVeri';
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
