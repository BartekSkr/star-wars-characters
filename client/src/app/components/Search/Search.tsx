import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SearchProps } from './types';
import {
  characterToFindName,
  isAllCharacters,
  setPage,
} from '../../store/actions';
import ReactTooltip from 'react-tooltip';

export const Search = ({ page, findCharacter }: SearchProps) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  return (
    <div className="flex w-[90%] relative justify-center mt-4 mr-auto mb-6 ml-auto">
      <Link
        data-for="list-btn"
        data-tip="Show character list"
        to={`/characters/#${page}`}
        className="bg-none cursor-pointer p-0 mr-4 active:scale-75 active:transition-transform duration-500"
        onClick={() => dispatch(isAllCharacters(true))}
      >
        <FontAwesomeIcon
          icon={faJournalWhills}
          size="2x"
          className="text-default-color"
        />
      </Link>
      <input
        type="text"
        name="text"
        className="w-full text-black ml-4 h-8 text-lg rounded-2xl outline-none overflow-hidden indent-4 md:w-[50%]"
        placeholder="Search for a character..."
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
            navigate(`/characters/#${page}`);
          }
        }}
      />
      <ReactTooltip id="list-btn" place="left" effect="solid" type="info" />
    </div>
  );
};
