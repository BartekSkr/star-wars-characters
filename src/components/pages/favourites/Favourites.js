import React, { Fragment, useContext } from 'react'
import './Favourites.css'
import yoda from '../../icons/baby-yoda.svg'
import yoda2 from '../../icons/baby-yoda-2.svg'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteFromFavourites } from '../../actions/favouritesActions'
import DataContext from '../../context/dataContext'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Favourites = ({ list, remove }) => {
  const dataContext = useContext(DataContext)
  const { getCharacterDetails, myTheme } = dataContext
  //  toast
  const deleteFromFavouritesToastInfo = toastInfo => toast.info(toastInfo)
  const deleteFromFavouritesToastError = toastInfo => toast.error(toastInfo)

  return (
    <Fragment>
      {list?.length === 0 &&
        <div className='empty-list'>
          <h3>No any favourite characters yet, sorry there is. Add your favourite characters, please. </h3>
          <img src={myTheme === 'light' ? yoda : yoda2} alt='yoda' id='yoda-icon' />
        </div>
      }
      <Fragment>
        {list.map((character) => (
          <div key={character.created} className='character'>
            <div className='character-info'>
              <div className='character-info-header'>
                <h3>{character.name}</h3>
                <div>
                  <button
                    className='delete-button'
                    data-tip='Delete from favourites'
                    onClick={() => {
                      // eslint-disable-next-line
                      let characterID = list.find(char => {
                        if (char.created === character.created) return true
                      })
                      if (characterID) {
                        remove(character)
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

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  remove: character => dispatch(deleteFromFavourites(character))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)