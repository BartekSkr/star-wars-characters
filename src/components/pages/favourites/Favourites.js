import React, { Fragment } from 'react'
import './Favourites.css'
import yoda from '../../icons/baby-yoda.svg'

export const Favourites = () => {
  return (
    <Fragment>
      <div className='empty-list'>
        <h3>No any favourite characters yet, sorry there is. Add your favourite characters, please. </h3>
        <img src={yoda} alt='yoda' id='yoda-icon' />
      </div>
    </Fragment>
  )
}
