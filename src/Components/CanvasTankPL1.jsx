import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getChancesPL1, nextTurnIsPL1 } from '../app/reducers/index';
import { drawTankPL1, drawOxygen } from '../app/game-canvas';

function CanvasTankPL1() {
  const canvasRef = useRef(null);
  const chancesPL1 = useSelector(getChancesPL1);
  const nextIsPL1 = useSelector(nextTurnIsPL1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (nextIsPL1) {
      setTimeout(() => {
        drawTankPL1(ctx, '#d15000');
      }, 500);
    } else {
      setTimeout(() => {
        drawTankPL1(ctx);
      }, 500);
    }

    setTimeout(() => {
      drawOxygen(ctx, chancesPL1);
    }, 500);
  }, [chancesPL1, nextIsPL1]);

  return (
    <canvas ref={canvasRef} width="280" height="480" className="c-canvas" />
  );
}

export default CanvasTankPL1;
