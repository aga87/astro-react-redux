import React from 'react';
import { useSelector } from 'react-redux';
import { optionsModalIsOpen } from '../app/reducers/index';
import Star from './Star';
import ResetBtn from './ResetBtn';
import QuitBtn from './QuitBtn';
import BackBtn from './BackBtn';

function OptionsModal() {
  const isOpen = useSelector(optionsModalIsOpen);

  return (
    <div className={isOpen ? 'c-modal c-modal--is-open' : 'c-modal'}>
      <div className="c-modal__content">
        <h1 className="t1">OPTIONS:</h1>
        <div className="c-modal__stars">
          <Star /> <Star /> <Star />
        </div>
        <ResetBtn />
        <QuitBtn />
        <BackBtn />
        <div className="c-modal__stars">
          <Star /> <Star /> <Star />
        </div>
      </div>
    </div>
  );
}

export default OptionsModal;
