import './Error.scss';
import yodaYellow from '../../assets/images/baby-yoda-yellow.svg';
import yodaBlack from '../../assets/images/baby-yoda-black.svg';
import { ErrorProps } from './types';

export const Error: React.FC<ErrorProps> = ({ isDarkTheme, errorMessage }) => {
  return (
    <div className='error-container'>
      <h2>{errorMessage}</h2>
      <img src={isDarkTheme ? yodaYellow : yodaBlack} alt='yoda' />
    </div>
  );
};
