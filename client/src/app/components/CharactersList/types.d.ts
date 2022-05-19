import {
  CharacterInterface,
  FetchedDataInterface,
} from '../../services/utils/types';

export interface CharactersListProps {
  data: FetchedDataInterface;
  favoriteList: CharacterInterface[];
}
