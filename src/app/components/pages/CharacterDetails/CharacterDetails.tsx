import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../actions/actions';
import {
  addCharacterToList,
  isOnFavoriteList,
  removeCharacterFromList,
} from '../../../helpers/favoriteListServices';
import {
  CharacterInterface,
  FilmsInterface,
  StarshipsInterface,
  VehiclesInterface,
} from '../../../interface/interface';
import { AppDispatch, RootState } from '../../../store/store';
import { Button } from '../../ui/buttons/Button/Button';
import Spinner from '../../ui/common/Spinner/Spinner';
import './CharacterDetails.scss';

interface CharacterDetailsProps {
  favorites?: CharacterInterface[];
  characterDetails?: CharacterInterface[];
  isLoading?: boolean;
  isDisplay?: boolean;
  add: (character: CharacterInterface) => void;
  remove: (character: CharacterInterface) => void;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  favorites,
  characterDetails,
  isLoading,
  isDisplay,
  add,
  remove,
}) => {
  useEffect(() => {
    characterDetails!.length > 0
      ? (document.title = `Star Wars Characters - ${characterDetails![0].name}`)
      : (document.title = `Star Wars Characters - Details`);
  }, [characterDetails]);

  return (
    <Fragment>
      {isLoading && !isDisplay && (
        <Fragment>
          <Spinner />
        </Fragment>
      )}
      {!isLoading && isDisplay && (
        <div className='character-details'>
          <div className='character-info'>
            <h2>{characterDetails![0].name}</h2>
            <div>
              <Button
                btnIcon={faPlus}
                isDeleteList={false}
                tip='Add to favorites'
                action={() =>
                  addCharacterToList(characterDetails![0], favorites!, add)
                }
                isDisable={
                  isOnFavoriteList(favorites!, characterDetails![0])
                    ? true
                    : false
                }
              />
              <Button
                btnIcon={faTrash}
                isDeleteList={false}
                tip='Delete from favorites'
                action={() =>
                  removeCharacterFromList(
                    characterDetails![0],
                    favorites!,
                    remove
                  )
                }
                isDisable={
                  isOnFavoriteList(favorites!, characterDetails![0])
                    ? false
                    : true
                }
              />
            </div>
          </div>
          <div className='character-info-details'>
            <span>
              <strong>Height: </strong>
              <p>{characterDetails![0].height} cm</p>
            </span>
            <span>
              <strong>Mass: </strong>
              <p>{characterDetails![0].mass} kg</p>
            </span>
            <span>
              <strong>Hair color: </strong>
              <p>{characterDetails![0].hair_color}</p>
            </span>
            <span>
              <strong>Skin color: </strong>
              <p>{characterDetails![0].skin_color}</p>
            </span>
            <span>
              <strong>Eye color: </strong>
              <p>{characterDetails![0].eye_color}</p>
            </span>
            <span>
              <strong>Birth year: </strong>
              <p>{characterDetails![0].birth_year}</p>
            </span>
            <span>
              <strong>Gender: </strong>
              <p>{characterDetails![0].gender}</p>
            </span>
            <span>
              <strong>Homeworld: </strong>
              <p>{characterDetails![0].homeworld}</p>
            </span>
            {characterDetails![0].films.length !== 0 && (
              <div className='movies'>
                <h3>
                  <p>Movies:</p>
                </h3>
                <Fragment>
                  {characterDetails![0].filmsData.map(
                    (filmData: FilmsInterface) => (
                      <div key={filmData.episode_id}>
                        <div>
                          ● '{filmData.title}' (ep. {filmData.episode_id})
                        </div>
                      </div>
                    )
                  )}
                </Fragment>
              </div>
            )}
            {characterDetails![0].vehicles.length !== 0 && (
              <div className='vehicles'>
                <h3>
                  <p>Vehicles:</p>
                </h3>
                <Fragment>
                  {characterDetails![0].vehiclesData.map(
                    (vehicleData: VehiclesInterface) => (
                      <div key={vehicleData.created}>
                        <div>● {vehicleData.name}</div>
                      </div>
                    )
                  )}
                </Fragment>
              </div>
            )}
            {characterDetails![0].starships.length !== 0 && (
              <div className='starships'>
                <h3>
                  <p>Starships:</p>
                </h3>
                <Fragment>
                  {characterDetails![0].starshipsData.map(
                    (starshipData: StarshipsInterface) => (
                      <div key={starshipData.created}>
                        <div>● {starshipData.name}</div>
                      </div>
                    )
                  )}
                </Fragment>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  favorites: state.favoriteList,
  characterDetails: state.characterDetails,
  isLoading: state.isLoading,
  isDisplay: state.isDisplay,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  add: (character: CharacterInterface) => dispatch(addToFavorites(character)),
  remove: (character: CharacterInterface) =>
    dispatch(removeFromFavorites(character)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
