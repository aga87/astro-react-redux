import React from 'react';
import { useSelector } from 'react-redux';
import { getPointsPL2 } from '../app/reducers/index';

function PointsPL2() {
  const pointsPL2 = useSelector(getPointsPL2);
  return <div className="t1">{pointsPL2}</div>;
}

export default PointsPL2;
