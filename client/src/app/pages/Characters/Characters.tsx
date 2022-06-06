import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { RootState } from '../../store/store';
import { CharactersProps } from './types';
import { useLazyQuery } from '@apollo/client';
import {
  CHARACTERS_LIST_SCHEMA,
  FIND_CHARACTER_SCHEMA,
} from '../../graphql/schema';
import { Spinner } from '../../components/Spinner/Spinner';
import { Search } from '../../components/Search/Search';
import { CharactersList } from '../../components/CharactersList/CharactersList';
import { Error } from '../../components/Error/Error';

const Characters: React.FC<CharactersProps> = ({
  favoriteList,
  page,
  isAllCharactersList,
  characterName,
  isDarkTheme,
  isSearchError,
}) => {
  //  query used when fetching all characters
  const [
    charactersList,
    {
      data: charactersData,
      loading: charactersLoading,
      error: charactersError,
    },
  ] = useLazyQuery(CHARACTERS_LIST_SCHEMA);

  //  query used when fetching characters searched by name
  const [
    findCharacterList,
    {
      data: findCharacterData,
      loading: findCharacterLoading,
      error: findCharacterError,
    },
  ] = useLazyQuery(FIND_CHARACTER_SCHEMA);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
    isAllCharactersList
      ? charactersList({ variables: { page } })
      : findCharacterList({ variables: { page, name: characterName } });
    document.title = 'StarWars Characters';
    // eslint-disable-next-line
  }, [favoriteList, page, characterName, isAllCharactersList]);

  return (
    <>
      <Search
        page={page}
        findCharacter={findCharacterList}
        isAllCharactersList={isAllCharactersList!}
      />
      {(charactersLoading || findCharacterLoading) && <Spinner />}
      {/* data for all characters */}
      {isAllCharactersList && charactersData && (
        <CharactersList
          data={charactersData.charactersList}
          favoriteList={favoriteList!}
        />
      )}
      {/* data for searched characters */}
      {!isAllCharactersList && findCharacterData && (
        <CharactersList
          data={findCharacterData.findCharacter}
          favoriteList={favoriteList!}
        />
      )}
      {/* error message if something goes wrong during fetching data */}
      {(charactersError || findCharacterError) && (
        <Error
          isDarkTheme={isDarkTheme!}
          errorMessage="Oops... Wrong something went!!! Hmm."
        />
      )}
      {/* error message if there is no character with searched name */}
      {!findCharacterLoading && !charactersLoading && isSearchError && (
        <Error
          isDarkTheme={isDarkTheme!}
          errorMessage="Sorry, no such character, there is... Try again, please!"
        />
      )}
    </>
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
