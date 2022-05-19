import { CharacterInterface } from './types';

//  checks if character is on favorite list
export const isOnFavoriteList = (
  list: CharacterInterface[], //  favorite list
  characterToFind: CharacterInterface //  character to find on the favorite list
) => {
  return list.find(
    (character: CharacterInterface) =>
      character.created === characterToFind.created
  );
};
