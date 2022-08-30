import yodaYellow from '../../assets/images/baby-yoda-yellow.svg';
import yodaBlack from '../../assets/images/baby-yoda-black.svg';
import { ErrorProps } from './types';

export const Error = ({ isDarkTheme, errorMessage }: ErrorProps) => {
  return (
    <div className="my-0 mx-auto text-center text-default-color w-[50%]">
      <p className="text-1.5rem font-bold">{errorMessage}</p>
      <img
        src={isDarkTheme ? yodaYellow : yodaBlack}
        alt="yoda"
        className="mx-auto"
      />
    </div>
  );
};
