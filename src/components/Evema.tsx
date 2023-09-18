import React from 'react';

const VIEWPORT_ID = 'viewport';

const Evema = () => {
  const key = 'temp';

  return (
    <div key={key}>
      <canvas id={VIEWPORT_ID}></canvas>
    </div>
  );
};

export default Evema;
