import { CharacterInterface, FetchedDataInterface } from '../../helpers/types';

export interface CharactersListProps {
  data: FetchedDataInterface;
  favoriteList: CharacterInterface[];
}
