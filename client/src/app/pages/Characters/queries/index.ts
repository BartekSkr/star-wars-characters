import { useLazyQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

export const useFindCharacters = ({
  name,
  page,
}: {
  name?: string;
  page: string;
}) => {
  const CHARACTERS_LIST_SCHEMA = loader('./findCharacters.gql');
  const [findCharacter, { data, ...state }] = useLazyQuery(
    CHARACTERS_LIST_SCHEMA,
    {
      variables: { name, page },
    }
  );

  return { findCharacter, data, state };
};

export const useGetCharactersList = ({ page }: { page: string }) => {
  const FIND_CHARACTER_SCHEMA = loader('./getCharactersList.gql');
  const [getCharactersList, { data, ...state }] = useLazyQuery(
    FIND_CHARACTER_SCHEMA,
    {
      variables: { page },
    }
  );

  return { getCharactersList, data, state };
};
