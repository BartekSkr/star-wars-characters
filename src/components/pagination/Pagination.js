import React, { Fragment, useContext } from 'react'
import './Pagination.css'
import DataContext from '../context/dataContext'

export const Pagination = () => {
  const dataContext = useContext(DataContext)
  const { charactersCount, getData, currentPage, api } = dataContext
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(charactersCount / 10); i++){
    pageNumbers.push(i)
  }

  return (
    <Fragment>
      <ul id='pagination-ul'>
        {pageNumbers.map(number => (
          <li className='pagination-li' key={number} onClick={()=>getData(api, number)}>
            <a className={currentPage === number ? 'pagination-a-active' : 'pagination-a'} href="/#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
