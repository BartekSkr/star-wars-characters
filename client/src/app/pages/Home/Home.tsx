import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Search } from '../../components/Search/Search';
import { useLazyQuery } from '@apollo/client';
import { HomeProps } from './types';
import { loader } from 'graphql.macro';

export const Home = ({ page, isAllCharactersList }: HomeProps) => {
  const FIND_CHARACTER_SCHEMA = loader('./queries/findCharacters.gql');

  const [findCharacterList] = useLazyQuery(FIND_CHARACTER_SCHEMA);

  return (
    <>
      <Search
        page={page!}
        findCharacter={findCharacterList}
        isAllCharactersList={isAllCharactersList}
      />
      {/* <div className="initial-info"> */}
      <div className="my-8 mx-auto w-[80%] text-larger text-center text-default-color duration-500 md:w-[50%]">
        <p>
          Press the icon{' '}
          <FontAwesomeIcon className="duration-500" icon={faJournalWhills} /> to
          display the entire list of <span>Star Wars</span> characters, or enter
          the name of the character you are interested in.
        </p>
      </div>
    </>
  );
};
