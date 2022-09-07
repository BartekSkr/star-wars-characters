import { connect } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store/store';
import { CharactersProps } from './types';
import { Spinner } from '../../components/Spinner/Spinner';
import { Search } from '../../components/Search/Search';
import { CharactersList } from '../../components/CharactersList/CharactersList';
import { Error } from '../../components/Error/Error';
import { motion } from 'framer-motion';
import { useFindCharacters, useGetCharactersList } from './queries';

const Characters = ({
  favoriteList,
  page,
  isAllCharactersList,
  characterName,
  isDarkTheme,
  isSearchError,
}: CharactersProps) => {
  //  fetching all characters
  const {
    getCharactersList,
    data: charactersListData,
    state: charactersListState,
  } = useGetCharactersList({ page });

  //  searching character by name
  const {
    findCharacter,
    data: findCharactersData,
    state: findCharactersState,
  } = useFindCharacters({ name: characterName, page });

  useEffect(() => {
    document.title = 'StarWars - characters';
    isAllCharactersList
      ? getCharactersList({ variables: { page } })
      : findCharacter({ variables: { page, name: characterName } });
  }, [
    favoriteList,
    page,
    characterName,
    isAllCharactersList,
    findCharacter,
    getCharactersList,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Search
        page={page}
        findCharacter={findCharacter}
        isAllCharactersList={isAllCharactersList!}
      />
      {(charactersListState.loading || findCharactersState.loading) && (
        <Spinner />
      )}
      {/* data for all characters */}
      {isAllCharactersList && charactersListData && (
        <CharactersList
          data={charactersListData.charactersList}
          favoriteList={favoriteList!}
        />
      )}
      {/* data for searched characters */}
      {!isAllCharactersList && findCharactersData && (
        <CharactersList
          data={findCharactersData.findCharacter}
          favoriteList={favoriteList!}
        />
      )}
      {/* error message if something goes wrong during fetching data */}
      {(charactersListState.error || findCharactersState.error) && (
        <Error
          isDarkTheme={isDarkTheme!}
          errorMessage="Oops... Wrong something went!!! Hmm."
        />
      )}
      {/* error message if there is no character with searched name */}
      {!findCharactersState.loading &&
        !charactersListState.loading &&
        isSearchError && (
          <Error
            isDarkTheme={isDarkTheme!}
            errorMessage="Sorry, no such character, there is... Try again, please!"
          />
        )}
    </motion.div>
  );
};

const mapStateToProps = (state: RootState) => ({
  favoriteList: state.favoriteList,
  isDarkTheme: state.isDarkTheme,
  isAllCharactersList: state.isAllCharacters,
  characterName: state.characterNameToFind,
  isSearchError: state.isError,
});

export default connect(mapStateToProps, null)(Characters);
