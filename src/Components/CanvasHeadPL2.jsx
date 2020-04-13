import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { drawHeadPL2 } from '../app/game-canvas';
import { nextTurnIsPL1 } from '../app/reducers/index';

function CanvasHeadPL2() {
  const canvasRef = useRef(null);
  const nextIsPL2 = !useSelector(nextTurnIsPL1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (nextIsPL2) {
      setTimeout(() => {
        drawHeadPL2(ctx, '#d15000');
      }, 500);
    } else {
      setTimeout(() => {
        drawHeadPL2(ctx);
      }, 500);
    }
  }, [nextIsPL2]);

  return (
    <canvas ref={canvasRef} width="280" height="300" className="c-canvas" />
  );
}

export default CanvasHeadPL2;
