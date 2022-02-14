import { toast } from 'react-toastify';
import { CharacterInterface } from '../interface/interface';

const addToFavoritesToast = (info: string) => toast.success(info);
const addToFavoritesErrorToast = (info: string) => toast.error(info);
const deleteFromFavoritesToast = (info: string) => toast.info(info);
const deleteFromFavoritesErrorToast = (info: string) => toast.info(info);

//  checks if character is on favorite list, use to set button disabled
export const isOnFavoriteList = (
  list: CharacterInterface[], //  favorite list
  characterToFind: CharacterInterface //  character to find on the favorite list
) => {
  return list.find(
    (character: CharacterInterface) =>
      character.created === characterToFind.created
  );
};

//  add character to favorite list (used in components: Characters, Favorites, CharactersDetails)
export const addCharacterToList = (
  character: CharacterInterface, //  what you want to add to the list
  list: CharacterInterface[], //  list of favorites characters
  add: (character: CharacterInterface) => void //  function which add character to the list
) => {
  let characterId: CharacterInterface | undefined = list!.find(
    (char: CharacterInterface) => char.created === character.created
  );
  if (!characterId) {
    add(character);
    addToFavoritesToast(
      `Been added to the favorites list, ${character.name} has.`
    );
  } else {
    addToFavoritesErrorToast(
      `Already on the favorites list, ${character.name} is.`
    );
  }
};

//  remove character from favorite list (used in components: Favorites, CharacterDetails)
export const removeCharacterFromList = (
  character: CharacterInterface, //  what you  want to remove from the list
  list: CharacterInterface[], //  list of favorites characters
  remove: (character: CharacterInterface) => void //  function which remove character from the list
) => {
  let characterId = list!.find(
    (char: CharacterInterface) => char.created === character.created
  );
  if (characterId) {
    remove(character);
    deleteFromFavoritesToast(
      `Been removed from the favorites list, ${character.name} has.`
    );
  } else {
    deleteFromFavoritesErrorToast(
      `Not in your favorites list, ${character.name} is.`
    );
  }
};
