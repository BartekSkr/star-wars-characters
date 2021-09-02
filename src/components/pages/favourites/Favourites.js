import React, { Fragment } from 'react'
import './Favourites.css'
import yoda from '../../icons/baby-yoda.svg'
import { initialState } from '../../reducers/favouritesReducer'

export const Favourites = () => {
  return (
    <Fragment>
      {initialState.favouriteCharacters.length === 0 &&
        <div className='empty-list'>
          <h3>No any favourite characters yet, sorry there is. Add your favourite characters, please. </h3>
          <img src={yoda} alt='yoda' id='yoda-icon' />
        </div>
      }
    </Fragment>
  )
}
