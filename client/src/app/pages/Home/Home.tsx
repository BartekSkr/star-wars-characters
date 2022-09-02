import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Search } from '../../components/Search/Search';
import { useLazyQuery } from '@apollo/client';
import { HomeProps } from './types';
import { loader } from 'graphql.macro';
import { Spinner } from '../../components/Spinner/Spinner';

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
      <div className="my-8 mx-auto w-[80%] text-1.2rem font-bold text-center text-accent-color duration-0.2s md:w-[50%]">
        <p>
          Press the icon{' '}
          <FontAwesomeIcon className="duration-0.2s" icon={faJournalWhills} />{' '}
          to display the entire list of <span>Star Wars</span> characters, or
          enter the name of the character you are interested in.
        </p>
      </div>
    </>
  );
};
