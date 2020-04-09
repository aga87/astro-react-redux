import React from 'react';

import { useSelector } from 'react-redux';

import { getPointsPL1 } from '../app/reducers/index';

function PointsPL1() {
  const pointsPL1 = useSelector(getPointsPL1);
  return <div className="t1">{pointsPL1}</div>;
}

export default PointsPL1;
