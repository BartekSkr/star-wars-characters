import { useEffect } from 'react';
import './404-page.scss';
import darthVaderYellow from '../../assets/images/darth-vader-yellow.svg';
import darthVaderBlack from '../../assets/images/darth-vader-black.svg';
import { RootState } from '../../services/Redux/store';
import { connect } from 'react-redux';
import { PageNotFoundProps } from './types';

const PageNotFound: React.FC<PageNotFoundProps> = ({ isDarkTheme }) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Error 404 (Not Found)';
  }, []);

  return (
    <div className='not-found-container'>
      <img
        src={isDarkTheme === true ? darthVaderYellow : darthVaderBlack}
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

const mapStateToProps = (state: RootState) => ({
  isDarkTheme: state.isDarkTheme,
});

export default connect(mapStateToProps, null)(PageNotFound);
