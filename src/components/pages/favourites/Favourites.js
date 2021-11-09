import React, { Fragment, useContext, useEffect } from 'react'
import './Favourites.css'
import yoda from '../../icons/baby-yoda.svg'
import yoda2 from '../../icons/baby-yoda-2.svg'
import { initialState } from '../../reducers/favouritesReducer'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteFromFavourites, getFavourites } from '../../actions/favouritesActions'
import DataContext from '../../context/dataContext'
import { connect, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const FavouritesPage = () => {
  const dataContext = useContext(DataContext)
  const { getCharacterDetails, myTheme } = dataContext
  const dispatch = useDispatch()
  //  toast
  const deleteFromFavouritesToastInfo = toastInfo => toast.info(toastInfo)
  const deleteFromFavouritesToastError = toastInfo => toast.error(toastInfo)

  useEffect(() => {
    dispatch(getFavourites())
  } ,[dispatch])

  return (
    <Fragment>
      {initialState.favouriteCharacters.length === 0 &&
        <div className='empty-list'>
          <h3>No any favourite characters yet, sorry there is. Add your favourite characters, please. </h3>
          <img src={myTheme === 'light' ? yoda : yoda2} alt='yoda' id='yoda-icon' />
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
                      // eslint-disable-next-line
                      let characterID = initialState.favouriteCharacters.find(char => {
                        if (char.created === character.created) return true
                      })
                      if (characterID) {
                        dispatch(deleteFromFavourites(character))
                        deleteFromFavouritesToastInfo(`Been removed from the favorites list, ${character.name} has.`)
                      }
                      if(!characterID){
                        deleteFromFavouritesToastError(`Not in your favorites list, this character is.`)
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <Link to={`/details`}>
                    <button
                      className='details-button'
                      data-tip='Show details'
                      onClick={() => getCharacterDetails(character.url)}
                    >
                      <FontAwesomeIcon className='details-button-icon' icon={faInfo} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <ReactTooltip place='left' effect='solid' type='info' />
          </div>
        ))}
      </Fragment>
    </Fragment>
  )
}

export const Favourites = connect((state) => ({ favouriteCharacters: state.favouriteCharacters }), {})(FavouritesPage)