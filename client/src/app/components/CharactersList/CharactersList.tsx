import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isOnFavoriteList } from '../../helpers/favoriteListServices';
import { CharacterInterface } from '../../helpers/types';
import { addToList, setIsError } from '../../reducers/actions';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import Pagination from '../Pagination/Pagination';
import './Characters.List.scss';
import { CharactersListProps } from './types';

export const CharactersList: React.FC<CharactersListProps> = ({
  data,
  favoriteList,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    data.count === 0 ? dispatch(setIsError(true)) : dispatch(setIsError(false));
    console.log(data.count);
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
            action={() => dispatch(addToList(character))}
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
