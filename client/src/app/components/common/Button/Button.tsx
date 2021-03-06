import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import './Button.scss';
import { ButtonProps } from './types';

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
      <ReactTooltip place="left" effect="solid" type="info" />
    </>
  );
};
