import React from 'react';
import { useSelector } from 'react-redux';
import { getPointsPL1 } from '../app/reducers/index';
import Star from './Star';

function PointsPL1() {
  const pointsPL1 = useSelector(getPointsPL1);
  return (
    <div className="c-points t1">
      <span className="c-points__star">
        <Star />
      </span>
      {pointsPL1}
    </div>
  );
}

export default PointsPL1;
