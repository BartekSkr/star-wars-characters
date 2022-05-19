import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';
import ReactTooltip from 'react-tooltip';
import './Button.scss';

interface ButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
  btnIcon: IconDefinition;
  isDeleteList: boolean;
  tip?: string;
  isDisable?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  action,
  btnIcon,
  isDeleteList,
  tip,
  isDisable,
}) => {
  return (
    <>
      <button
        className={isDeleteList ? 'delete-list-button' : 'button'}
        onClick={action}
        data-tip={tip}
        disabled={isDisable}
      >
        <FontAwesomeIcon icon={btnIcon} />
      </button>
      <ReactTooltip place='left' effect='solid' type='info' />
    </>
  );
};
