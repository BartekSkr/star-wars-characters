import React, { useContext } from 'react'
import DataContext from '../context/dataContext'

export const Pagination = ({ postsPerPage, totalPosts }) => {
  const dataContext = useContext(DataContext)
  const { getData } = dataContext
  const pageNumbers = []

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
  //   pageNumbers.push(i)
  // }

  for (let i = 1; i <= 9; i++){
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => getData(number)} href="/#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
