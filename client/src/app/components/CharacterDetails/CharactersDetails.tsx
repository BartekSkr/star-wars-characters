import { connect, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Button } from '../common/Button/Button';
import { Spinner } from '../Spinner/Spinner';
import './CharacterDetails.scss';
import {
  CharacterDetailsProps,
  FilmsInterface,
  StarshipsInterface,
  VehiclesInterface,
} from './types';
import {
  faArrowLeft,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { isOnFavoriteList } from '../../utils/favoriteListServices';
import { addToList, removeFromList } from '../../store/actions';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCharactersDetailsData } from './queries';

const CharactersDetails = ({ url, favoriteList }: CharacterDetailsProps) => {
  const { data, state } = useCharactersDetailsData({ url });
  const characterDetails = data?.characterDetails;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //  toast info
  const addToFavoritesToast = (info: string) => toast.success(info);
  const deleteFromFavoritesToast = (info: string) => toast.error(info);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
    if (state.loading) {
      document.title = 'StarWars - loading...';
    } else if (!state.loading && characterDetails) {
      document.title = `StarWars - ${characterDetails.name}`;
    }
    // eslint-disable-next-line
  }, [favoriteList, characterDetails]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {state.loading && <Spinner />}
      {characterDetails && (
        <div className="character-details">
          <div className="character-info">
            <h2>{characterDetails.name}</h2>
            <div>
              <Button
                btnIcon={faPlus}
                isDeleteList={false}
                tip="Add to favorites"
                action={() => {
                  dispatch(addToList(characterDetails));
                  addToFavoritesToast(
                    `Been added to the favorites list, ${characterDetails.name} has.`
                  );
                }}
                isDisable={Boolean(
                  isOnFavoriteList(favoriteList!, characterDetails)
                )}
              />
              <Button
                btnIcon={faTrash}
                isDeleteList={false}
                tip="Delete from favorites"
                action={() => {
                  dispatch(removeFromList(characterDetails));
                  deleteFromFavoritesToast(
                    `Been removed from the favorites list, ${characterDetails.name} has.`
                  );
                }}
                isDisable={Boolean(
                  !isOnFavoriteList(favoriteList!, characterDetails)
                )}
              />
            </div>
          </div>
          <div className="character-info-details">
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
              <p>{characterDetails.homeworld.name}</p>
            </span>
            {characterDetails.films.length !== 0 && (
              <div className="movies">
                <h3>
                  <p>Movies:</p>
                </h3>
                <>
                  {characterDetails.films.map((film: FilmsInterface) => (
                    <div key={film.episode_id}>
                      <div>
                        ● '{film.title}' (ep. {film.episode_id})
                      </div>
                    </div>
                  ))}
                </>
              </div>
            )}
            {characterDetails.vehicles.length !== 0 && (
              <div className="vehicles">
                <h3>
                  <p>Vehicles:</p>
                </h3>
                <>
                  {characterDetails.vehicles.map(
                    (vehicle: VehiclesInterface) => (
                      <div key={vehicle.created}>
                        <div>● {vehicle.name}</div>
                      </div>
                    )
                  )}
                </>
              </div>
            )}
            {characterDetails.starships.length !== 0 && (
              <div className="starships">
                <h3>
                  <p>Starships:</p>
                </h3>
                <>
                  {characterDetails.starships.map(
                    (starships: StarshipsInterface) => (
                      <div key={starships.created}>
                        <div>● {starships.name}</div>
                      </div>
                    )
                  )}
                </>
              </div>
            )}
          </div>
          <div className="button-wrapper">
            <Button
              action={() => navigate(-1)}
              btnIcon={faArrowLeft}
              isDeleteList={false}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

const mapStateToProps = (state: RootState) => ({
  favoriteList: state.favoriteList,
});

export default connect(mapStateToProps, null)(CharactersDetails);
