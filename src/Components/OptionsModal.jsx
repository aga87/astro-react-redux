import React from 'react';

import Star from './Star';
import ResetBtn from './ResetBtn';
import QuitBtn from './QuitBtn';
import BackBtn from './BackBtn';

function OptionsModal() {
  // todo: jsOptionsModal

  return (
    <div className="c-modal l-modal">
      <div className="c-modal__content l-modal__content">
        <h1 className="t1">OPTIONS:</h1>
        <div>
          <Star /> <Star /> <Star />
        </div>
        <ResetBtn />
        <QuitBtn />
        <BackBtn />
        <div>
          <Star /> <Star /> <Star />
        </div>
      </div>
    </div>
  );
}

export default OptionsModal;
