import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Search } from '../../components/Search/Search';
import { useLazyQuery } from '@apollo/client';
import { HomeProps } from './types';
import { loader } from 'graphql.macro';

export const Home: React.FC<HomeProps> = ({ page, isAllCharactersList }) => {
  const FIND_CHARACTER_SCHEMA = loader('./queries/findCharacters.gql');

  const [findCharacterList] = useLazyQuery(FIND_CHARACTER_SCHEMA);

  return (
    <>
      <Search
        page={page!}
        findCharacter={findCharacterList}
        isAllCharactersList={isAllCharactersList}
      />
      <div className="initial-info">
        <h3>
          Press the icon{' '}
          <FontAwesomeIcon
            className="initial-info-icon"
            icon={faJournalWhills}
          />{' '}
          to display the entire list of <span>Star Wars</span> characters, or
          enter the name of the character you are interested in.
        </h3>
      </div>
    </>
  );
};
