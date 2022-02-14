import { Dispatch, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { CharacterInterface } from '../../../interface/interface';
import { AppDispatch, RootState } from '../../../store/store';
import Search from '../../Search/Search';
import './Characters.scss';
import yoda from '../../../icons/baby-yoda.svg';
import yoda2 from '../../../icons/baby-yoda-2.svg';
import Spinner from '../../ui/common/Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJournalWhills,
  faPlus,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../ui/buttons/Button/Button';
import {
  addToFavorites,
  setCharacterDetails,
  setDisplay,
  setLoading,
} from '../../../actions/actions';
import { Link } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';
import {
  addCharacterToList,
  isOnFavoriteList,
} from '../../../helpers/favoriteListServices';
import { getCharacterDetails } from '../../../helpers/characterDetailsServices';

interface CharactersProps {
  theme?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isDisplay?: boolean;
  dataFromApi?: CharacterInterface[];
  favorites: CharacterInterface[];
  add: (character: CharacterInterface) => void;
  setCharacterDetails: (character: CharacterInterface[]) => void;
  setLoading: (isLoading: boolean) => void;
  setDisplay: (isDisplay: boolean) => void;
}

const Characters: React.FC<CharactersProps> = ({
  theme,
  isLoading,
  isError,
  isDisplay,
  dataFromApi,
  favorites,
  add,
  setCharacterDetails,
  setLoading,
  setDisplay,
}) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Characters';
  }, []);

  return (
    <Fragment>
      <Search />
      {/* info about missing character or a typo */}
      {isError && !isLoading && (
        <div className='search-error'>
          <h3>Sorry, no such character, there is... Try again, please!</h3>
          <img
            src={theme === true ? yoda2 : yoda}
            alt='yoda'
            className='yoda-icon'
          />
        </div>
      )}
      {/* spinner while loading data */}
      {isLoading && (
        <Fragment>
          <Spinner />
        </Fragment>
      )}
      {/* initial info */}
      {!isDisplay && !isLoading && (
        <div className='initial-info'>
          <h3>
            Press the icon{' '}
            <FontAwesomeIcon
              className='initial-info-icon'
              icon={faJournalWhills}
            />{' '}
            to display the entire list of <span>Star Wars</span> characters, or
            enter the name of the character you are interested in.
          </h3>
        </div>
      )}
      {/* data from API */}
      {isDisplay && (
        <Fragment>
          {dataFromApi!.map((character: CharacterInterface) => (
            <div key={character.created} className='character'>
              <div className='character-info'>
                <h3>{character.name}</h3>
                <div>
                  <Button
                    btnIcon={faPlus}
                    isDeleteList={false}
                    tip='Add to favorites'
                    action={() => addCharacterToList(character, favorites, add)}
                    isDisable={
                      isOnFavoriteList(favorites, character) ? true : false
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
      <Pagination />
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.isDarkTheme,
  isLoading: state.isLoading,
  isError: state.isError,
  isDisplay: state.isDisplay,
  dataFromApi: state.dataFromApi,
  favorites: state.favoriteList,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  add: (character: CharacterInterface) => dispatch(addToFavorites(character)),
  setCharacterDetails: (character: CharacterInterface[]) =>
    dispatch(setCharacterDetails(character)),
  setLoading: (isLoading: boolean) => dispatch(setLoading(isLoading)),
  setDisplay: (isDisplay: boolean) => dispatch(setDisplay(isDisplay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
