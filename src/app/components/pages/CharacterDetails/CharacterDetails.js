import React, { Fragment, useContext, useEffect } from 'react';
import './CharacterDetails.scss';
import DataContext from '../../../context/dataContext';
import { Spinner } from '../../ui/common/Spinner/Spinner';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../../actions/favoritesActions';
import ReactTooltip from 'react-tooltip';
import { Button } from '../../ui/buttons/Button/Button';

const CharacterDetails = ({ list, add, remove }) => {
  useEffect(() => {
    document.title = `Star Wars Characters - Character Details`;
  }, []);

  const dataContext = useContext(DataContext);
  const { loading, display, characterDetails } = dataContext;
  //  tooltip toast
  const addToFavoritesToastSuccess = (toastInfo) => toast.success(toastInfo);
  const addToFavoritesToastError = (toastInfo) => toast.error(toastInfo);
  const deleteFromFavoritesToast = (toastInfo) => toast.info(toastInfo);

  const handleAddBtnAction = () => {
    // eslint-disable-next-line
    let characterID = list.list.find((char) => {
      if (char.created === characterDetails.created) return true;
    });
    if (!characterID) {
      add(characterDetails);
      addToFavoritesToastSuccess(
        `Been added to the favorites list, ${characterDetails.name} has.`
      );
    } else {
      addToFavoritesToastError(
        `Already on the favorites list, ${characterDetails.name} is.`
      );
    }
  };

  const handleDeleteBtnAction = () => {
    // eslint-disable-next-line
    let characterID = list.list.find((char) => {
      if (char.created === characterDetails.created) return true;
    });
    if (characterID) {
      remove(characterDetails);
      deleteFromFavoritesToast(
        `Been removed from the favorites list, ${characterDetails.name} has.`
      );
    }
    if (!characterID) {
      addToFavoritesToastError(
        `Not in your favorites list, ${characterDetails.name} is.`
      );
    }
  };

  return (
    <Fragment>
      {loading === true && display === false && (
        <Fragment>
          <Spinner />
        </Fragment>
      )}
      {loading === false && display === true && (
        <div className='character-details'>
          <div className='character-info'>
            <h2>{characterDetails.name}</h2>
            <div>
              <Button
                btnIcon={faPlus}
                tip='Add to favorites'
                action={handleAddBtnAction}
                deleteList={false}
              />
              <Button
                btnIcon={faTrash}
                tip='Delete from favorites'
                action={handleDeleteBtnAction}
                deleteList={false}
              />
            </div>
          </div>
          <div className='character-info-details'>
            <span>
              <strong>Height: </strong>
              <p>{characterDetails.height} cm</p>
            </span>
            <span>
              <strong>Mass: </strong>
              <p>{characterDetails.mass} kg</p>
            </span>
            <span>
              <strong>Hair color: </strong>
              <p>{characterDetails.hair_color}</p>
            </span>
            <span>
              <strong>Skin color: </strong>
              <p>{characterDetails.skin_color}</p>
            </span>
            <span>
              <strong>Eye color: </strong>
              <p>{characterDetails.eye_color}</p>
            </span>
            <span>
              <strong>Birth year: </strong>
              <p>{characterDetails.birth_year}</p>
            </span>
            <span>
              <strong>Gender: </strong>
              <p>{characterDetails.gender}</p>
            </span>
            <span>
              <strong>Homeworld: </strong>
              <p>{characterDetails.homeworld}</p>
            </span>
            {characterDetails.films.length !== 0 && (
              <div className='movies'>
                <h3>
                  <p>Movies:</p>
                </h3>
                <Fragment>
                  {characterDetails.films?.map((filmData) => (
                    <div key={filmData.episode_id}>
                      <div>
                        ● '{filmData.title}' (ep. {filmData.episode_id})
                      </div>
                    </div>
                  ))}
                </Fragment>
              </div>
            )}
            {characterDetails.vehicles.length !== 0 && (
              <div className='vehicles'>
                <h3>
                  <p>Vehicles:</p>
                </h3>
                <Fragment>
                  {characterDetails.vehicles?.map((vehicleData) => (
                    <div key={vehicleData.created}>
                      <div>● {vehicleData.name}</div>
                    </div>
                  ))}
                </Fragment>
              </div>
            )}
            {characterDetails.starships.length !== 0 && (
              <div className='starships'>
                <h3>
                  <p>Starships:</p>
                </h3>
                <Fragment>
                  {characterDetails.starships?.map((starshipData) => (
                    <div key={starshipData.created}>
                      <div>● {starshipData.name}</div>
                    </div>
                  ))}
                </Fragment>
              </div>
            )}
          </div>
          <ReactTooltip place='left' effect='solid' type='info' />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  list: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  add: (characterDetails) => dispatch(addToFavorites(characterDetails)),
  remove: (characterDetails) => dispatch(deleteFromFavorites(characterDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
