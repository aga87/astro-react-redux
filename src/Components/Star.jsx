import React from 'react';

// todo: xmln?

function Star() {
  return (
    <svg viewBox="0 0 80 80" className="o-star">
      <polygon
        points="0,30 30,28 40,0 50,28 80,30 56,47 64,77 40,60 14,77 22,47 0,30"
        fill="yellow"
      />
    </svg>
  );
}

export default Star;
