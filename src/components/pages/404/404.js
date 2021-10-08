import React from 'react'
import './404-page.css'

export const Custom404 = () => {
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
