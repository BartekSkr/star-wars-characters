import { connect, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Button } from '../common/Button/Button';
import { Spinner } from '../Spinner/Spinner';
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
  }, [favoriteList, characterDetails]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {state.loading && <Spinner />}
      {characterDetails && (
        <div className="rounded-2xl w-[90%] my-4 mx-auto border-3 border-default-color md:w-[50%]">
          <div className="w-full py-2 px-4 flex items-center justify-between text-default-color transition-colors duration-0.2">
            <p className="ml-4 text-1.5rem font-bold">
              {characterDetails.name}
            </p>
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
          <div className="py-0 px-4 transition-colors duration-0.2">
            <span className="flex">
              <strong>Height: </strong>
              <p className="ml-2">{characterDetails.height} cm</p>
            </span>
            <span className="flex">
              <strong>Mass: </strong>
              <p className="ml-2">{characterDetails.mass} kg</p>
            </span>
            <span className="flex">
              <strong>Hair color: </strong>
              <p className="ml-2">{characterDetails.hair_color}</p>
            </span>
            <span className="flex">
              <strong>Skin color: </strong>
              <p className="ml-2">{characterDetails.skin_color}</p>
            </span>
            <span className="flex">
              <strong>Eye color: </strong>
              <p className="ml-2">{characterDetails.eye_color}</p>
            </span>
            <span className="flex">
              <strong>Birth year: </strong>
              <p className="ml-2">{characterDetails.birth_year}</p>
            </span>
            <span className="flex">
              <strong>Gender: </strong>
              <p className="ml-2">{characterDetails.gender}</p>
            </span>
            <span className="flex">
              <strong>Homeworld: </strong>
              <p className="ml-2">{characterDetails.homeworld.name}</p>
            </span>
            {characterDetails.films.length !== 0 && (
              <div className="my-3">
                <p className="text-larger text-default-color font-bold text-left ml-6">
                  Movies:
                </p>
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
              <div className="my-3">
                <p className="text-larger text-default-color font-bold text-left ml-6">
                  Vehicles:
                </p>
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
              <div className="my-3">
                <p className="text-larger text-default-color font-bold text-left ml-6">
                  Starships:
                </p>
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
          <div className="w-full py-2 px-4 text-right text-default-color transition-colors duration-0.2">
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
