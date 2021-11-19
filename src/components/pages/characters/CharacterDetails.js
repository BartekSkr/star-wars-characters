import React, { Fragment, useContext } from 'react'
import './Characters.css'
import DataContext from '../../context/dataContext'
import { Spinner } from '../../layout/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToFavourites, deleteFromFavourites } from '../../actions/favouritesActions'
import ReactTooltip from 'react-tooltip'

const CharacterDetails = ({ list, remove }) => {
  const dataContext = useContext(DataContext)
  const { loading, display, characterDetails } = dataContext
  const dispatch = useDispatch()
  //  toast
  const addToFavouritesToastSuccess = toastInfo => toast.success(toastInfo)
  const addToFavouritesToastError = toastInfo => toast.error(toastInfo)
  const deleteFromFavouritesToast = toastInfo => toast.info(toastInfo)

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
                  // eslint-disable-next-line
                  let characterID = list.find(char => {
                    if (char.created === characterDetails.created) return true
                  })
                  if (!characterID) {
                    dispatch(addToFavourites(characterDetails))
                    addToFavouritesToastSuccess(`Been added to the favourites list, ${characterDetails.name} has.`)
                  } else {
                    addToFavouritesToastError(`Already on the favourites list, ${characterDetails.name} is.`)
                  }
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className='delete-button'
                data-tip='Delete from favourites'
                onClick={() => {
                  // eslint-disable-next-line
                  let characterID = list.find(char => {
                    if (char.created === characterDetails.created) return true
                  })
                  if (characterID) {
                    remove(characterDetails)
                    deleteFromFavouritesToast(`Been removed from the favorites list, ${characterDetails.name} has.`)
                  }
                  if(!characterID) {
                    addToFavouritesToastError(`Not in your favorites list, ${characterDetails.name} is.`)
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
            <span><strong>Homeworld: </strong><p>{characterDetails.homeworld}</p></span>
            {characterDetails.films.length !== 0 &&
              <div className='movies'>
                <h3><p>Movies:</p></h3>
                  <Fragment>
                    {characterDetails.films?.map(filmData => (
                      <div key={filmData.episode_id}>
                        <div>● '{filmData.title}' (ep. {filmData.episode_id})</div>
                      </div>
                    ))}
                  </Fragment>
              </div>
            }
            {characterDetails.vehicles.length !== 0 &&
              <div className='vehicles'>
                <h3><p>Vehicles:</p></h3>
                  <Fragment>
                    {characterDetails.vehicles?.map(vehicleData => (
                      <div key={vehicleData.created}>
                        <div>● {vehicleData.name}</div>
                      </div>
                    ))}
                  </Fragment>
              </div>
            }
            {characterDetails.starships.length !== 0 &&
              <div className='starships'>
                <h3><p>Starships:</p></h3>
                  <Fragment>
                    {characterDetails.starships?.map(starshipData => (
                      <div key={starshipData.created}>
                        <div>● {starshipData.name}</div>
                      </div>
                    ))}
                  </Fragment>
              </div>
            }
          </div>
          <ReactTooltip place='left' effect='solid' type='info' />
        </div>
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  remove: characterDetails => dispatch(deleteFromFavourites(characterDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails)
