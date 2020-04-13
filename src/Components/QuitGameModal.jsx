import React from 'react';
import { useSelector } from 'react-redux';
import { quitModalIsOpen } from '../app/reducers/index';
import Star from './Star';

function QuitGameModal() {
  const isOpen = useSelector(quitModalIsOpen);

  return (
    <div className={isOpen ? 'c-modal c-modal--is-open' : 'c-modal'}>
      <div className="c-modal__content">
        <div>
          <Star /> <Star /> <Star />
        </div>

        <p className="t1">
          THANKS <br />
          FOR <br />
          PLAYING
        </p>

        <div>
          <Star /> <Star /> <Star />
        </div>
      </div>
    </div>
  );
}

export default QuitGameModal;
