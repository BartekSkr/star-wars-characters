import React from 'react'
import './404-page.css'
import darthVader from '../../icons/darth-vader.svg'
import darthVader2 from '../../icons/darth-vader-2.svg'
import { useContext } from 'react'
import DataContext from '../../context/dataContext'

export const PageNotFound = () => {
  const dataContext = useContext(DataContext)
  const { myTheme } = dataContext

  return (
    <div className='not-found-container'>
      <img src={myTheme === 'light' ? darthVader : darthVader2} alt="darth vader icon" />
      <h2>ERROR</h2>
      <div className='not-found-info'>
        <h3>The page you are looking for, we cannot find!</h3>
          <ul className='not-found-ul'>
            <li>Not exist, page does.</li>
            <li>The page changed its location.</li>
            <li>Under construction, the website is. Underway, maintenance work is.</li>
          </ul>
      </div>
    </div>
  )
}
