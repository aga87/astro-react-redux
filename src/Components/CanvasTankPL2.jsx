import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getChancesPL2 } from '../app/reducers/index';
import { drawTankPL2, drawOxygen } from '../app/game-canvas';

function CanvasTankPL2() {
  const canvasRef = useRef(null);
  const chancesPL2 = useSelector(getChancesPL2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawTankPL2(ctx);
    setTimeout(() => {
      drawOxygen(ctx, chancesPL2);
    }, 500);
  }, [chancesPL2]);

  return (
    <canvas ref={canvasRef} width="280" height="480" className="c-canvas" />
  );
}

export default CanvasTankPL2;
