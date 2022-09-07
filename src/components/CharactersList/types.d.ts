import { CharacterInterface, FetchedDataInterface } from '../../utils/types';

export interface CharactersListProps {
  data: FetchedDataInterface;
  favoriteList: CharacterInterface[];
}
