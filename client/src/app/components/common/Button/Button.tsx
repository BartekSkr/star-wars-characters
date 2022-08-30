import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { ButtonProps } from './types';

export const Button = ({
  action,
  btnIcon,
  isDeleteList,
  tip,
  isDisable,
}: ButtonProps) => {
  return (
    <>
      <button
        className={
          isDeleteList
            ? 'relative flex my-0 mx-auto mb-4 rounded-lg h-8 w-16 cursor-pointer justify-center text-black bg-default-color transition-colors active:scale-75 active:transition-transform duration-0.2'
            : 'relative m-1 rounded-lg h-8 w-8 cursor-pointer text-black bg-default-color transition-all active:scale-75 active:transition-transform duration-0.2 disabled:opacity-40 disabled:pointer-events-none'
        }
        onClick={action}
        data-tip={tip}
        disabled={isDisable}
      >
        <FontAwesomeIcon
          icon={btnIcon}
          className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </button>
      <ReactTooltip place="left" effect="solid" type="info" />
    </>
  );
};
