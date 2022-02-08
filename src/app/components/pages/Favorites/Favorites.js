import React, { Fragment, useContext, useEffect } from 'react';
import './Favorites.scss';
import yoda from '../../../icons/baby-yoda.svg';
import yoda2 from '../../../icons/baby-yoda-2.svg';
import ReactTooltip from 'react-tooltip';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  deleteFavoriteList,
  deleteFromFavorites,
} from '../../../actions/actions';
import DataContext from '../../../context/dataContext';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/buttons/Button/Button';

const Favorites = ({ list, remove, deleteList, theme }) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Favorites';
    localStorage.setItem('favorites', JSON.stringify(list));
  }, [list]);

  const dataContext = useContext(DataContext);
  const { getCharacterDetails } = dataContext;
  //  tooltip toast
  const deleteFromFavoritesToastInfo = (toastInfo) => toast.info(toastInfo);
  const deleteFromFavoritesToastError = (toastInfo) => toast.error(toastInfo);

  const handleDeleteBtnAction = (data) => {
    // eslint-disable-next-line
    let characterID = list.find((char) => {
      if (char.created === data.created) return true;
    });
    if (characterID) {
      remove(data);
      deleteFromFavoritesToastInfo(
        `Been removed from the favorites list, ${data.name} has.`
      );
    }
    if (!characterID) {
      deleteFromFavoritesToastError(
        `Not in your favorites list, this character is.`
      );
    }
  };

  return (
    <Fragment>
      {list.length === 0 && (
        <div className='empty-list'>
          <h3>
            No any favorite characters yet, sorry there is. Add your favorite
            characters, please.{' '}
          </h3>
          <img
            src={theme === true ? yoda2 : yoda}
            alt='yoda'
            className='yoda-icon'
          />
        </div>
      )}
      {list.length > 0 && (
        <Fragment>
          <h3>Your favorites characters from Star Wars</h3>
          <Button
            btnIcon={faTrash}
            tip='Delete whole list'
            action={() => deleteList()}
            deleteList={true}
          />
          {list.map((character) => (
            <div key={character.created} className='character'>
              <div className='character-info'>
                <h3>{character.name}</h3>
                <div>
                  <Button
                    btnIcon={faTrash}
                    tip='Delete from favourites'
                    action={() => handleDeleteBtnAction(character)}
                  />
                  <Link to={`/details/${character.name}`}>
                    <Button
                      btnIcon={faInfo}
                      tip='Show details'
                      action={() => getCharacterDetails(character.url)}
                    />
                  </Link>
                </div>
              </div>
              <ReactTooltip place='left' effect='solid' type='info' />
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
  theme: state.isDarkTheme,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (character) => dispatch(deleteFromFavorites(character)),
  deleteList: () => dispatch(deleteFavoriteList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
