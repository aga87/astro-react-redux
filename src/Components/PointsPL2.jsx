import React from 'react';
import { useSelector } from 'react-redux';
import { getPointsPL2 } from '../app/reducers/index';
import Star from './Star';

function PointsPL2() {
  const pointsPL2 = useSelector(getPointsPL2);
  return (
    <div className="c-points t1">
      {pointsPL2}
      <span className="c-points__star">
        <Star />
      </span>
    </div>
  );
}

export default PointsPL2;
