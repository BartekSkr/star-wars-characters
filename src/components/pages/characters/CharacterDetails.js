import React, { Fragment, useContext } from 'react'
import DataContext from '../../context/dataContext'
import { Spinner } from '../../layout/Spinner'

export const CharacterDetails = () => {
  const dataContext = useContext(DataContext)
  const { loading, display, characterDetails } = dataContext

  return (
    <Fragment>
      {loading === true && display === false &&
        <Fragment>
          <Spinner />
        </Fragment>
      }
      {loading === false && display === true &&
        <div>
          <h3>{characterDetails.name}</h3>
        </div>
      }
    </Fragment>
  )
}
