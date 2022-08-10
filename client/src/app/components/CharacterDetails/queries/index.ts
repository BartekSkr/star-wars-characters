import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

export const useCharactersDetailsData = ({ url }: { url: string }) => {
  const CHARACTER_DETAILS_SCHEMA = loader('./getCharacterDetails.gql');
  const { data, ...state } = useQuery(CHARACTER_DETAILS_SCHEMA, {
    variables: { url },
  });

  return { data, state };
};
