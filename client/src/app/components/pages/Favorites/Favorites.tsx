import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import './Favorites.scss';
import { FavoritesProps } from './types';
import yodaBlack from '../../../assets/images/baby-yoda-black.svg';
import yodaYellow from '../../../assets/images/baby-yoda-yellow.svg';
import { CharacterItem } from '../../CharacterItem/CharacterItem';
import { deleteList, removeFromList } from '../../../reducers/actions';
import { isOnFavoriteList } from '../../../helpers/favoriteListServices';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CharacterInterface } from '../../../helpers/types';
import { Button } from '../../Button/Button';

const Favorites: React.FC<FavoritesProps> = ({ favoriteList, isDarkTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <>
      {favoriteList!.length === 0 && (
        <div className='empty-list'>
          <h3>
            No any favorite characters yet, sorry there is. Add your favorite
            characters, please.
          </h3>
          <img
            src={isDarkTheme === true ? yodaYellow : yodaBlack}
            alt='baby yoda'
            className='yoda-icon'
          />
        </div>
      )}
      {favoriteList!.length > 0 && (
        <>
          <h3>Your favorites characters from Star Wars</h3>
          <Button
            btnIcon={faTrash}
            isDeleteList={true}
            tip='Delete whole list'
            action={() => dispatch(deleteList())}
          />
          {favoriteList!.map((character: CharacterInterface) => (
            <div key={character.created} className='character'>
              <CharacterItem
                btnIcon={faTrash}
                character={character}
                favoriteList={favoriteList!}
                action={() => dispatch(removeFromList(character))}
                isDisable={
                  isOnFavoriteList(favoriteList!, character) ? false : true
                }
                tip={
                  isOnFavoriteList(favoriteList!, character)
                    ? 'Delete From favorites'
                    : 'Add to favorites'
                }
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  favoriteList: state.favoriteList,
  isDarkTheme: state.isDarkTheme,
});

export default connect(mapStateToProps, null)(Favorites);
