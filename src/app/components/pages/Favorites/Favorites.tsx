import { Dispatch, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { CharacterInterface } from '../../../interface/interface';
import { AppDispatch, RootState } from '../../../store/store';
import yoda from '../../../icons/baby-yoda.svg';
import yoda2 from '../../../icons/baby-yoda-2.svg';
import './Favorites.scss';
import { Button } from '../../ui/buttons/Button/Button';
import { faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import {
  deleteFavoriteList,
  removeFromFavorites,
  setDisplay,
  setLoading,
  setCharacterDetails,
} from '../../../actions/actions';
import { Link } from 'react-router-dom';
import { removeCharacterFromList } from '../../../helpers/favoriteListServices';
import { getCharacterDetails } from '../../../helpers/characterDetailsServices';

interface FavoritesProps {
  theme?: boolean;
  favorites?: CharacterInterface[];
  remove: (character: CharacterInterface) => void;
  deleteList: () => void;
  setLoading: (isLoading: boolean) => void;
  setDisplay: (isDisplay: boolean) => void;
  setCharacterDetails: (character: CharacterInterface[]) => void;
}

const Favorites: React.FC<FavoritesProps> = ({
  theme,
  favorites,
  remove,
  deleteList,
  setLoading,
  setDisplay,
  setCharacterDetails,
}) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Favorites';
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Fragment>
      {favorites!.length === 0 && (
        <div className='empty-list'>
          <h3>
            No any favorite characters yet, sorry there is. Add your favorite
            characters, please.
          </h3>
          <img
            src={theme === true ? yoda2 : yoda}
            alt='baby yoda'
            className='yoda-icon'
          />
        </div>
      )}
      {favorites!.length > 0 && (
        <Fragment>
          <h3>Your favorites characters from Star Wars</h3>
          <Button
            btnIcon={faTrash}
            isDeleteList={true}
            tip='Delete whole list'
            action={() => deleteList()}
          />
          {favorites!.map((character: CharacterInterface) => (
            <div key={character.created} className='character'>
              <div className='character-info'>
                <h3>{character.name}</h3>
                <div>
                  <Button
                    btnIcon={faTrash}
                    isDeleteList={false}
                    tip='Delete from the list'
                    action={() =>
                      removeCharacterFromList(character, favorites!, remove)
                    }
                  />
                  <Link to={`/details/${character.name}`}>
                    <Button
                      btnIcon={faInfo}
                      isDeleteList={false}
                      tip='Show details'
                      action={() =>
                        getCharacterDetails(
                          setLoading,
                          setDisplay,
                          character.url,
                          setCharacterDetails
                        )
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.isDarkTheme,
  favorites: state.favoriteList,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  remove: (character: CharacterInterface) =>
    dispatch(removeFromFavorites(character)),
  deleteList: () => dispatch(deleteFavoriteList()),
  setLoading: (isLoading: boolean) => dispatch(setLoading(isLoading)),
  setDisplay: (isDisplay: boolean) => dispatch(setDisplay(isDisplay)),
  setCharacterDetails: (character: CharacterInterface[]) =>
    dispatch(setCharacterDetails(character)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
