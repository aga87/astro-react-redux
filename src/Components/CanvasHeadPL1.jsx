import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { drawHeadPL1 } from '../app/game-canvas';
import { nextTurnIsPL1 } from '../app/reducers/index';

function CanvasHeadPL1() {
  const canvasRef = useRef(null);
  const nextIsPL1 = useSelector(nextTurnIsPL1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (nextIsPL1) {
      setTimeout(() => {
        drawHeadPL1(ctx, '#d15000');
      }, 500);
    } else {
      setTimeout(() => {
        drawHeadPL1(ctx);
      }, 500);
    }
  }, [nextIsPL1]);

  return (
    <canvas ref={canvasRef} width="280" height="300" className="c-canvas" />
  );
}

export default CanvasHeadPL1;
