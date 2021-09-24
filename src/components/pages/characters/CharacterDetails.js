import React, { Fragment, useContext, useEffect } from 'react'
import './Characters.css'
import DataContext from '../../context/dataContext'
import { Spinner } from '../../layout/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { initialState } from '../../reducers/favouritesReducer'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToFavourites, deleteFromFavourites, getFavourites } from '../../actions/favouritesActions'
import ReactTooltip from 'react-tooltip'

export const CharacterDetails = () => {
  const dataContext = useContext(DataContext)
  const { loading, display, characterDetails } = dataContext
  const dispatch = useDispatch()
  //  toast
  const addToFavouritesToast = toastInfo => toast.info(toastInfo)
  const deleteFromFavouritesToast = toastInfo => toast.info(toastInfo)

  useEffect(() => {
    dispatch(getFavourites())
  })

  // eslint-disable-next-line
  // let characterFound = initialState.favouriteCharacters.find(char => {
  //   if (char.created === characterDetails.created) {
  //     return true
  //   }
  // })

  return (
    <Fragment>
      {loading === true && display === false &&
        <Fragment>
          <Spinner />
        </Fragment>
      }
      {loading === false && display === true &&
        <div className='character details'>
          <div className='character-info-header'>
          <h2>{characterDetails.name}</h2>
            <div>
              <button
                className='add-button'
                data-tip='Add to favourites'
                onClick={() => {
                  let characterID = initialState.favouriteCharacters.find(char => {
                    if (char.created === characterDetails.created) return true
                  })
                  // if (!characterFound) {
                  if (!characterID) {
                    dispatch(addToFavourites(characterDetails))
                    addToFavouritesToast(`Been added to the favourites list, ${characterDetails.name} has.`)
                  } else {
                    addToFavouritesToast(`Already on the favourites list, ${characterDetails.name} is.`)
                  }
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className='add-button'
                data-tip='Delete from favourites'
                onClick={() => {
                  let characterID = initialState.favouriteCharacters.find(char => {
                    if (char.created === characterDetails.created) return true
                  })
                  // if (characterFound) {
                  if (characterID) {
                    dispatch(deleteFromFavourites(characterDetails))
                    deleteFromFavouritesToast(`Been removed from the favorites list, ${characterDetails.name} has.`)
                  }
                  // if(!characterFound) {
                  if(!characterID) {
                    deleteFromFavouritesToast(`Not in your favorites list, this character is.`)
                  }
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className='character-info-details'>
            <span><strong>Height: </strong><p>{characterDetails.height} cm</p></span>
            <span><strong>Mass: </strong><p>{characterDetails.mass} kg</p></span>
            <span><strong>Hair color: </strong><p>{characterDetails.hair_color}</p></span>
            <span><strong>Skin color: </strong><p>{characterDetails.skin_color}</p></span>
            <span><strong>Eye color: </strong><p>{characterDetails.eye_color}</p></span>
            <span><strong>Birth year: </strong><p>{characterDetails.birth_year}</p></span>
            <span><strong>Gender: </strong><p>{characterDetails.gender}</p></span>
          </div>
          <ReactTooltip place='left' effect='solid' type='info' />
        </div>
      }
    </Fragment>
  )
}
