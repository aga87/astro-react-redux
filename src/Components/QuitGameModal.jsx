import React from 'react';
import { useSelector } from 'react-redux';
import { quitModalIsOpen } from '../app/reducers/index';
import Star from './Star';

function QuitGameModal() {
  const isOpen = useSelector(quitModalIsOpen);

  return (
    <div className="c-modal l-modal">
      <div className="c-modal__content l-modal__content">
        <div>
          <Star /> <Star /> <Star />
        </div>

        <p>
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
