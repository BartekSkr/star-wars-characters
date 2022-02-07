import React, { Fragment, useContext, useEffect } from 'react';
import './Favourites.scss';
import yoda from '../../../icons/baby-yoda.svg';
import yoda2 from '../../../icons/baby-yoda-2.svg';
import ReactTooltip from 'react-tooltip';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  deleteFavouriteList,
  deleteFromFavourites,
} from '../../../actions/favouritesActions';
import DataContext from '../../../context/dataContext';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/buttons/Button/Button';

const Favourites = ({ list, remove, deleteList, theme }) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Favourites';
    localStorage.setItem('favourites', JSON.stringify(list.list));
  }, [list.list]);

  const dataContext = useContext(DataContext);
  const { getCharacterDetails } = dataContext;
  //  tooltip toast
  const deleteFromFavouritesToastInfo = (toastInfo) => toast.info(toastInfo);
  const deleteFromFavouritesToastError = (toastInfo) => toast.error(toastInfo);

  const handleDeleteBtnAction = (data) => {
    // eslint-disable-next-line
    let characterID = list.list.find((char) => {
      if (char.created === data.created) return true;
    });
    if (characterID) {
      remove(data);
      deleteFromFavouritesToastInfo(
        `Been removed from the favorites list, ${data.name} has.`
      );
    }
    if (!characterID) {
      deleteFromFavouritesToastError(
        `Not in your favorites list, this character is.`
      );
    }
  };

  return (
    <Fragment>
      {list?.list.length === 0 && (
        <div className='empty-list'>
          <h3>
            No any favourite characters yet, sorry there is. Add your favourite
            characters, please.{' '}
          </h3>
          <img
            src={theme.isDarkTheme === true ? yoda2 : yoda}
            alt='yoda'
            className='yoda-icon'
          />
        </div>
      )}
      {list.list.length > 0 && (
        <Fragment>
          <h3>Your favourites characters from Star Wars</h3>
          <Button
            btnIcon={faTrash}
            tip='Delete whole list'
            action={() => deleteList()}
            deleteList={true}
          />
          {list.list.map((character) => (
            <div key={character.created} className='character'>
              <div className='character-info'>
                <div className='character-info-header'>
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
  list: state.favourites,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (character) => dispatch(deleteFromFavourites(character)),
  deleteList: () => dispatch(deleteFavouriteList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
