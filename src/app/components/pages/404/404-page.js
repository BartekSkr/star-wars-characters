import React, { useEffect } from 'react';
import './404-page.scss';
import darthVader from '../../../icons/darth-vader.svg';
import darthVader2 from '../../../icons/darth-vader-2.svg';
import { connect } from 'react-redux';

export const PageNotFound = ({ theme }) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Error 404 (Not Found)';
  }, []);

  return (
    <div className='not-found-container'>
      <img
        src={theme === true ? darthVader2 : darthVader}
        alt='darth vader icon'
      />
      <h2>ERROR</h2>
      <div className='not-found-info'>
        <h3>The page you are looking for, we cannot find!</h3>
        <ul className='not-found-ul'>
          <li>Not exist, page does.</li>
          <li>The page changed its location.</li>
          <li>
            Under construction, the website is. Underway, maintenance work is.
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.isDarkTheme,
});

export default connect(mapStateToProps, {})(PageNotFound);
