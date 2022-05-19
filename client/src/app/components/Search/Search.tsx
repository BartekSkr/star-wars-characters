import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SearchProps } from './types';
import {
  characterToFindName,
  isAllCharacters,
  setPage,
} from '../../services/Redux/actions';

export const Search: React.FC<SearchProps> = ({ page, findCharacter }) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/characters/#${page}`;
    navigate(path);
  };

  return (
    <div className='search'>
      <Link
        to={`/characters/#${page}`}
        className='search-button'
        onClick={() => dispatch(isAllCharacters(true))}
      >
        <FontAwesomeIcon icon={faJournalWhills} size='2x' />
      </Link>
      <input
        type='text'
        name='text'
        className='search-input'
        placeholder='Search for a character...'
        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
          (e.currentTarget.value = '')
        }
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            findCharacter({
              variables: { name: e.currentTarget.value, page: page },
            });
            dispatch(isAllCharacters(false));
            dispatch(setPage('1'));
            dispatch(characterToFindName(e.currentTarget.value));
            routeChange();
          }
        }}
      />
    </div>
  );
};
