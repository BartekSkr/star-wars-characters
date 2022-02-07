import React, { Fragment, useContext, useEffect } from 'react'
import './Characters.scss'
import { Search } from '../Search/Search'
import { Spinner } from '../../ui/common/Spinner/Spinner'
import { Pagination } from '../../Pagination/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons'
import yoda from '../../../icons/baby-yoda.svg'
import yoda2 from '../../../icons/baby-yoda-2.svg'
import DataContext from '../../../context/dataContext'
import ReactTooltip from 'react-tooltip'
import { addToFavourites } from '../../../actions/favouritesActions'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Characters = ({ list, add, theme }) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Characters'
  }, [])

  const dataContext = useContext(DataContext)
  const { characters, loading, characterSearchError, display, getCharacterDetails } = dataContext
  //  toast
  const addToFavouritesToastSuccess = toastInfo => toast.success(toastInfo)
  const addToFavouritesToastError = toastInfo => toast.error(toastInfo)

  return (
    <Fragment>
      <Search />
      {/* information about missing character or a typo */}
      {characterSearchError === true && loading === false &&
        <div className='search-error' >
          <h3>Sorry, no such character, there is... Try again, please!</h3>
          <img src={theme.isDarkTheme === true ? yoda2 : yoda} alt='yoda' className='yoda-icon' />
        </div>
      }
      {/* spinner while loading data */}
      {loading === true &&
        <Fragment>
          <Spinner />
        </Fragment>
      }
      {/* initial info */}
      {display === false && loading === false &&
        <div className='initial-info'>
          <h3>
            Press the icon <FontAwesomeIcon className='initial-info-icon' icon={faJournalWhills} /> to display the entire list of <span>Star Wars</span> characters, or enter the name of the character you are interested in.
          </h3>
        </div>
      }
      {/* API data */}
      {display === true &&
        <Fragment>
          {characters.map((character) => (
            <div key={character.created} className='character'>
              <div className='character-info-header'>
                <h3>{character.name}</h3>
                <div>
                  <button
                    className='add-button'
                    data-tip='Add to favourites'
                    onClick={() => {
                      // eslint-disable-next-line
                      let characterID = list.list.find(char => {
                        if (char.created === character.created) {
                          return true
                        }
                      })
                      if (!characterID) {
                        add(character)
                        addToFavouritesToastSuccess(`Been added to the favourites list, ${character.name} has.`)
                      } else {
                        addToFavouritesToastError(`Already on the favourites list, ${character.name} is.`)
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <Link to={`/details/${character.name}`}>
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
              <ReactTooltip place='left' effect='solid' type='info' />
            </div>
          ))}
        </Fragment>
      }
      <Pagination />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  list: state.favourites,
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
  add: character => dispatch(addToFavourites(character))
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)