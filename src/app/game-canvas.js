/**
 * Draw a head on canvas
 * @param ctx - 2d canvas drawing context. Recommended width=280px, height=300px.
 * @param {string} [strokeColor] - color name or hex value
 */

function drawHead(ctx, strokeColor = 'grey') {
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = 'black';
  // pipes
  ctx.moveTo(140, 20);
  ctx.lineTo(140, 80);
  // head
  ctx.moveTo(240, 180);
  ctx.arc(140, 180, 100, 0, 2 * Math.PI);
  ctx.stroke();
  // eyes
  ctx.fillRect(60, 130, 160, 60);
  ctx.strokeRect(60, 130, 160, 60);
  ctx.closePath();
  // smile
  ctx.beginPath();
  ctx.arc(140, 180, 80, 0.25 * Math.PI, 0.75 * Math.PI);
  ctx.stroke();
}

export function drawHeadPL1(ctx, strokeColor = 'grey') {
  drawHead(ctx, strokeColor);
  // head to tank connection (leftwards)
  ctx.moveTo(140, 20);
  ctx.lineTo(0, 20);
  ctx.stroke();
}

export function drawHeadPL2(ctx, strokeColor = 'grey') {
  drawHead(ctx, strokeColor);
  // head to tank connection (rightwards)
  ctx.moveTo(140, 20);
  ctx.lineTo(280, 20);
  ctx.stroke();
}

/**
 * Draw an oxygen tank on canvas
 * @param ctx - 2d canvas drawing context. Recommended width=280px, height=480px.
 * @param {string} [strokeColor] - color name or hex value
 */

function drawTank(ctx, strokeColor = 'grey') {
  // left cylinder
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = strokeColor;
  ctx.moveTo(20, 460);
  ctx.lineTo(20, 140);
  ctx.arc(80, 140, 60, Math.PI, 0);
  ctx.lineTo(140, 460);
  ctx.closePath();
  // right cylinder
  ctx.moveTo(140, 460);
  ctx.lineTo(260, 460);
  ctx.lineTo(260, 140);
  ctx.moveTo(140, 140);
  ctx.arc(200, 140, 60, Math.PI, 0);
  // pipes
  ctx.moveTo(80, 80);
  ctx.lineTo(80, 60);
  ctx.lineTo(200, 60);
  ctx.lineTo(200, 80);
  ctx.moveTo(140, 60);
  ctx.lineTo(140, 20);
  ctx.stroke();
}

export function drawTankPL1(ctx, strokeColor = 'grey') {
  drawTank(ctx, strokeColor);
  // tank to head connection (rightwards)
  ctx.lineTo(280, 20);
  ctx.stroke();
}

export function drawTankPL2(ctx, strokeColor = 'grey') {
  drawTank(ctx, strokeColor);
  // tank to head connection (leftwards)
  ctx.lineTo(0, 20);
  ctx.stroke();
}

/**
 * Draw oxygen on canvas
 * @param ctx - 2d canvas drawing context. Recommended width=280px, height=480px.
 */

function drawFullOxygen(ctx) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = '#158fe6';
  // left cylinder
  ctx.rect(40, 120, 80, 320);
  // right cylinder
  ctx.rect(160, 120, 80, 320);
  ctx.fill();
}

/**
 * Draw oxygen on canvas
 * @param ctx - 2d canvas drawing context. Recommended width=280px, height=480px.
 * @param {number} chances - the number of chances each player has will be reflected in the oxygen levels
 */

// fixme: NAMES !!! dont export the function above

export function drawOxygen(ctx, chances) {
  if (chances === 8) {
    drawFullOxygen(ctx);
  } else if (chances === 7) {
    ctx.clearRect(160, 120, 80, 80);
  } else if (chances === 6) {
    ctx.clearRect(160, 200, 80, 80);
  } else if (chances === 5) {
    ctx.clearRect(160, 280, 80, 80);
  } else if (chances === 4) {
    ctx.clearRect(160, 360, 80, 80);
  } else if (chances === 3) {
    ctx.clearRect(40, 120, 80, 80);
  } else if (chances === 2) {
    ctx.clearRect(40, 200, 80, 80);
  } else if (chances === 1) {
    ctx.clearRect(40, 280, 80, 80);
  } else if (chances === 0) {
    ctx.clearRect(40, 360, 80, 80);
  } else {
    drawFullOxygen(ctx);
  }
}
