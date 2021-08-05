import React, { Fragment, useContext, useState } from 'react'
import DataContext from '../context/dataContext'
import './Pagination.css'

export const Pagination = ({ postsPerPage, totalPosts }) => {
  const dataContext = useContext(DataContext)
  const { getData, currentPage } = dataContext
  const pageNumbers = []

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
  //   pageNumbers.push(i)
  // }

  for (let i = 1; i <= 9; i++){
    pageNumbers.push(i)
  }

  return (
    <Fragment>
      <ul id='pagination-ul'>
        {pageNumbers.map(number => (
          <li className='pagination-li' key={number}>
            <a className={currentPage === number ? 'pagination-a-active' : 'pagination-a'}
              onClick={() => {
                getData(number)
                console.log('number: ', number)
              }}
              href="/#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
