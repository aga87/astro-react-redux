import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getChancesPL2, nextTurnIsPL1 } from '../app/reducers/index';
import { drawTankPL2, drawOxygen } from '../app/game-canvas';

function CanvasTankPL2() {
  const canvasRef = useRef(null);
  const chancesPL2 = useSelector(getChancesPL2);
  const nextIsPL2 = !useSelector(nextTurnIsPL1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (nextIsPL2) {
      setTimeout(() => {
        drawTankPL2(ctx, '#d15000');
      }, 500);
    } else {
      setTimeout(() => {
        drawTankPL2(ctx);
      }, 500);
    }
    setTimeout(() => {
      drawOxygen(ctx, chancesPL2);
    }, 500);
  }, [chancesPL2, nextIsPL2]);

  return (
    <canvas ref={canvasRef} width="280" height="480" className="c-canvas" />
  );
}

export default CanvasTankPL2;
