import { useQuery } from '@apollo/client';
import { connect, useDispatch } from 'react-redux';
import { CHARACTER_DETAILS_SCHEMA } from '../../graphql/schema';
import { RootState } from '../../store/store';
import { Button } from '../common/Button/Button';
import { Spinner } from '../Spinner/Spinner';
import './CharacterDetails.scss';
import { FilmsInterface, StarshipsInterface, VehiclesInterface } from './types';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { isOnFavoriteList } from '../../utils/favoriteListServices';
import { addToList, removeFromList } from '../../store/actions';
import { useEffect } from 'react';
import { CharacterInterface } from '../../utils/types';
import { toast } from 'react-toastify';

interface CharacterDetailsProps {
  favoriteList?: CharacterInterface[];
  url: string;
}

const CharactersDetails: React.FC<CharacterDetailsProps> = ({
  url,
  favoriteList,
}) => {
  const dispatch = useDispatch();
  const characterDetailsQuery = useQuery(CHARACTER_DETAILS_SCHEMA, {
    variables: { url },
  });

  //  toast info
  const addToFavoritesToast = (info: string) => toast.success(info);
  const deleteFromFavoritesToast = (info: string) => toast.error(info);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <>
      {characterDetailsQuery.loading && <Spinner />}
      {characterDetailsQuery.data && (
        <div className='character-details'>
          <div className='character-info'>
            <h2>{characterDetailsQuery.data.characterDetails.name}</h2>
            <div>
              <Button
                btnIcon={faPlus}
                isDeleteList={false}
                tip='Add to favorites'
                action={() => {
                  dispatch(
                    addToList(characterDetailsQuery.data.characterDetails)
                  );
                  addToFavoritesToast(
                    `Been added to the favorites list, ${characterDetailsQuery.data.characterDetails.name} has.`
                  );
                }}
                isDisable={
                  isOnFavoriteList(
                    favoriteList!,
                    characterDetailsQuery.data.characterDetails
                  )
                    ? true
                    : false
                }
              />
              <Button
                btnIcon={faTrash}
                isDeleteList={false}
                tip='Delete from favorites'
                action={() => {
                  dispatch(
                    removeFromList(characterDetailsQuery.data.characterDetails)
                  );
                  deleteFromFavoritesToast(
                    `Been removed from the favorites list, ${characterDetailsQuery.data.characterDetails.name} has.`
                  );
                }}
                isDisable={
                  isOnFavoriteList(
                    favoriteList!,
                    characterDetailsQuery.data.characterDetails
                  )
                    ? false
                    : true
                }
              />
            </div>
          </div>
          <div className='character-info-details'>
            <span>
              <strong>Height: </strong>
              <p>{characterDetailsQuery.data.characterDetails.height} cm</p>
            </span>
            <span>
              <strong>Mass: </strong>
              <p>{characterDetailsQuery.data.characterDetails.mass} kg</p>
            </span>
            <span>
              <strong>Hair color: </strong>
              <p>{characterDetailsQuery.data.characterDetails.hair_color}</p>
            </span>
            <span>
              <strong>Skin color: </strong>
              <p>{characterDetailsQuery.data.characterDetails.skin_color}</p>
            </span>
            <span>
              <strong>Eye color: </strong>
              <p>{characterDetailsQuery.data.characterDetails.eye_color}</p>
            </span>
            <span>
              <strong>Birth year: </strong>
              <p>{characterDetailsQuery.data.characterDetails.birth_year}</p>
            </span>
            <span>
              <strong>Gender: </strong>
              <p>{characterDetailsQuery.data.characterDetails.gender}</p>
            </span>
            <span>
              <strong>Homeworld: </strong>
              <p>
                {characterDetailsQuery.data.characterDetails.homeworld.name}
              </p>
            </span>
            {characterDetailsQuery.data.characterDetails.films.length !== 0 && (
              <div className='movies'>
                <h3>
                  <p>Movies:</p>
                </h3>
                <>
                  {characterDetailsQuery.data.characterDetails.films.map(
                    (film: FilmsInterface) => (
                      <div key={film.episode_id}>
                        <div>
                          ● '{film.title}' (ep. {film.episode_id})
                        </div>
                      </div>
                    )
                  )}
                </>
              </div>
            )}
            {characterDetailsQuery.data.characterDetails.vehicles.length !==
              0 && (
              <div className='vehicles'>
                <h3>
                  <p>Vehicles:</p>
                </h3>
                <>
                  {characterDetailsQuery.data.characterDetails.vehicles.map(
                    (vehicle: VehiclesInterface) => (
                      <div key={vehicle.created}>
                        <div>● {vehicle.name}</div>
                      </div>
                    )
                  )}
                </>
              </div>
            )}
            {characterDetailsQuery.data.characterDetails.starships.length !==
              0 && (
              <div className='starships'>
                <h3>
                  <p>Starships:</p>
                </h3>
                <>
                  {characterDetailsQuery.data.characterDetails.starships.map(
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
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  favoriteList: state.favoriteList,
});

export default connect(mapStateToProps, null)(CharactersDetails);
