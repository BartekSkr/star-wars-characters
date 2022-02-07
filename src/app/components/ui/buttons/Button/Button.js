import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Button.scss';

export const Button = ({ action, btnIcon, tip, deleteList }) => {
  return (
    // <button className='button' onClick={action} data-tip={tip}>
    <button
      className={deleteList ? 'delete-list-button' : 'button'}
      onClick={action}
      data-tip={tip}
    >
      <FontAwesomeIcon icon={btnIcon} />
    </button>
  );
};
