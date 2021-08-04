import React, { Fragment, useContext, useState } from 'react'
import DataContext from '../context/dataContext'
import './Pagination.css'

export const Pagination = ({ postsPerPage, totalPosts }) => {
  const dataContext = useContext(DataContext)
  const { getData } = dataContext
  const [currentPage, setCurrentPage] = useState(1)
  const pageNumbers = []

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
  //   pageNumbers.push(i)
  // }

  for (let i = 1; i <= 9; i++){
    pageNumbers.push(i)
  }

  const handleOnClick = num => {
    return function () {
      getData(num)
      setCurrentPage(num)
      console.log('currentPage: ', currentPage)
      console.log('number: ', num)
    }
  }

  return (
    <Fragment>
      <ul id='pagination-ul'>
        {pageNumbers.map(number => (
          // <li id='pagination-li' key={number}>
          // <li id='pagination-li-chosen' key={currentPage}>
          <li id='pagination-li' key={number}>
            {/* <a onClick={() => getData(number)} href="/#"> */}
            {/* <a id='pagination-a' */}
            <a id={number === currentPage ? 'pagination-a-chosen' : 'pagination-a'}
              // onClick={() => {
              //   getData(number)
              //   setCurrentPage(number)
              //   console.log('currentPage: ', currentPage)
              //   console.log('number: ', number)
              // }}
              onClick={handleOnClick(number)}
              href="/#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  )

  // return (
  //   <div>
  //     <ul>
  //       {pageNumbers.map(number => (
  //         <li key={number}>
  //           <a onClick={() => getData(number)} href="/#">
  //             {number}
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // )
}
