import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isOnFavoriteList } from '../../services/utils/favoriteListServices';
import { CharacterInterface } from '../../services/utils/types';
import { addToList, setIsError } from '../../services/store/actions';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import Pagination from '../Pagination/Pagination';
import './CharactersList.scss';
import { CharactersListProps } from './types';
import { toast } from 'react-toastify';

export const CharactersList: React.FC<CharactersListProps> = ({
  data,
  favoriteList,
}) => {
  const dispatch = useDispatch();

  //  toast info
  const addToFavoritesToast = (info: string) => toast.success(info);

  useEffect(() => {
    data.count === 0 ? dispatch(setIsError(true)) : dispatch(setIsError(false));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {data.results.map((character: CharacterInterface) => (
        <div key={character.created} className='character'>
          <CharacterItem
            btnIcon={faPlus}
            character={character}
            favoriteList={favoriteList}
            action={() => {
              dispatch(addToList(character));
              addToFavoritesToast(
                `Been added to the favorites list, ${character.name} has.`
              );
            }}
            isDisable={
              isOnFavoriteList(favoriteList!, character) ? true : false
            }
            tip={
              isOnFavoriteList(favoriteList!, character)
                ? 'Delete from favorites'
                : 'Add to favorites'
            }
          />
        </div>
      ))}
      <Pagination charactersAmount={data.count} />
    </>
  );
};
