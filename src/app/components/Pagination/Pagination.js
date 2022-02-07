import React, { Fragment, useContext } from 'react'
import './Pagination.scss'
import DataContext from '../../context/dataContext'
import { Link } from 'react-router-dom'

export const Pagination = () => {
  const dataContext = useContext(DataContext)
  const { charactersCount, getData, currentPage, api, display } = dataContext
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(charactersCount / 10); i++) {
    pageNumbers.push(i)
  }

  return (
    <Fragment>
      {display === true &&
        <ul className='pagination-ul'>
          {pageNumbers.map(number => (
            <li className='pagination-li' key={number} onClick={() => getData(api, number)}>
              <Link className={currentPage === number ? 'pagination-link-active' : 'pagination-link'}
                to={`/characters/#${number}`}>
                {number}
              </Link>
            </li>
          ))}
        </ul>
      }
    </Fragment>
  )
}
