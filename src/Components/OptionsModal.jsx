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
        {/* <div className="c-modal__stars">
          <Star /> <Star /> <Star />
        </div> */}
        <div className="c-modal__stars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            className="o-star"
          >
            <polygon
              points="0,30 30,28 40,0 50,28 80,30 56,47 64,77 40,60 14,77 22,47 0,30"
              fill="yellow"
            />
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            className="o-star"
          >
            <polygon
              points="0,30 30,28 40,0 50,28 80,30 56,47 64,77 40,60 14,77 22,47 0,30"
              fill="yellow"
            />
          </svg>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            className="o-star"
          >
            <polygon
              points="0,30 30,28 40,0 50,28 80,30 56,47 64,77 40,60 14,77 22,47 0,30"
              fill="yellow"
            />
          </svg>
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
