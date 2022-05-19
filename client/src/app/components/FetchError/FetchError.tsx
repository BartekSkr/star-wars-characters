import './FetchError.scss';
import yodaYellow from '../../assets/images/baby-yoda-yellow.svg';
import yodaBlack from '../../assets/images/baby-yoda-black.svg';
import { FetchErrorProps } from './types';

export const FetchError: React.FC<FetchErrorProps> = ({
  isDarkTheme,
  errorMessage,
}) => {
  return (
    <div className='error-container'>
      <h2>{errorMessage}</h2>
      <img src={isDarkTheme ? yodaYellow : yodaBlack} alt='yoda' />
    </div>
  );
};
