import React, { Fragment, useContext, useEffect } from 'react'
import './Favourites.css'
import yoda from '../../icons/baby-yoda.svg'
import { initialState } from '../../reducers/favouritesReducer'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteFromFavourites, getFavourites } from '../../actions/favouritesActions'
import DataContext from '../../context/dataContext'
// import { Pagination } from '../../pagination/Pagination'
import { connect, useDispatch } from 'react-redux'

// const mapStateToProps = state => ({
//   favouriteCharacters: state.favouriteCharacters
// })

// const enhance = connect(mapStateToProps, {})
// const enhance = connect(
//   (state) => ({favouriteCharacters: state.favouriteCharacters}),
//   {})

// export const Favourites = () => {
const FavouritesPage = () => {
  const dataContext = useContext(DataContext)
  const { buttonKey, setButtonKey } = dataContext
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getFavourites())
  })

  return (
    <Fragment>
      {initialState.favouriteCharacters.length === 0 &&
        <div className='empty-list'>
          <h3>No any favourite characters yet, sorry there is. Add your favourite characters, please. </h3>
          <img src={yoda} alt='yoda' id='yoda-icon' />
        </div>
      }
      <Fragment>
        {initialState.favouriteCharacters.map((character) => (
          <div key={character.created} className='character'>
            <div className='character-info'>
              <div className='character-info-header'>
                <h3>{character.name}</h3>
                <div>
                  <button
                    className='add-button'
                    data-tip='Delete from favourites'
                    onClick={() => {
                      dispatch(deleteFromFavourites(character))
                      // let characterID = initialState.favouriteCharacters.find(char => {
                      //   if (char.created === character.created) {
                      //     return false
                      //   }
                      // })
                      // if (characterID) {
                      //   dispatch.deleteFromFavourites(character)
                      // }
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className={buttonKey !== character.created ? 'details-button' : 'details-button-rotated'}
                    data-tip='Show details'
                    onClick={() => {
                      setButtonKey(character.created)
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
              </div>
              <div className={buttonKey === character.created ? 'character-info-details-active' : 'character-info-details'}>
                <span><strong>Height: </strong><p>{character.height} cm</p></span>
                <span><strong>Mass: </strong><p>{character.mass} kg</p></span>
                <span><strong>Hair color: </strong><p>{character.hair_color}</p></span>
                <span><strong>Birth year: </strong><p>{character.birth_year}</p></span>
                <span><strong>Gender: </strong><p>{character.gender}</p></span>
              </div>
            </div>
            <ReactTooltip place='left' effect='solid' type='info' />
          </div>
        ))}
      </Fragment>
      {/* <Pagination charactersNumber={initialState.favouriteCharacters.length}/> */}
    </Fragment>
  )
}

// export const Favourites = enhance(FavouritesPage)
export const Favourites = connect((state) => ({ favouriteCharacters: state.favouriteCharacters }), {})(FavouritesPage)