import React, { Fragment, useContext, useEffect } from 'react'
import './Favourites.css'
import yoda from '../../icons/baby-yoda.svg'
import { initialState } from '../../reducers/favouritesReducer'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteFromFavourites, getFavourites } from '../../actions/favouritesActions'
import DataContext from '../../context/dataContext'
// import { Pagination } from '../../pagination/Pagination'
import { connect, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const FavouritesPage = () => {
  const dataContext = useContext(DataContext)
  const { getCharacterDetails } = dataContext
  const dispatch = useDispatch()
  //  toast
  const deleteFromFavouritesToast = toastInfo => toast.info(toastInfo)

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
                      deleteFromFavouritesToast(`Been removed from the favorites list, ${character.name} has.`)
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
                    className='details-button'
                    data-tip='Show details'
                    onClick={() => {
                      let characterNumber = character.url.slice(29, 31).match(/\d+/).toString()
                      getCharacterDetails(characterNumber)
                    }}
                  >
                    <Link
                      to={`/character/${character.name}`}
                    >
                    <FontAwesomeIcon className='details-button-icon' icon={faInfo} />
                    </Link>
                  </button>
                </div>
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

export const Favourites = connect((state) => ({ favouriteCharacters: state.favouriteCharacters }), {})(FavouritesPage)