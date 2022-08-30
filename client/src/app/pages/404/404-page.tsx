import { useEffect } from 'react';
import darthVaderYellow from '../../assets/images/darth-vader-yellow.svg';
import darthVaderBlack from '../../assets/images/darth-vader-black.svg';
import { RootState } from '../../store/store';
import { connect } from 'react-redux';
import { PageNotFoundProps } from './types';
import { motion } from 'framer-motion';

const PageNotFound = ({ isDarkTheme }: PageNotFoundProps) => {
  useEffect(() => {
    document.title = 'Star Wars Characters - Error 404 (Not Found)';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-[80%] my-0 mx-auto py-0 px-8 md:w-[50%] duration-500"
    >
      <img
        src={isDarkTheme ? darthVaderYellow : darthVaderBlack}
        alt="darth vader icon"
        className="w-24 h-24 mx-auto mt-8 mb-4"
      />
      <p className="text-center text-larger">ERROR</p>
      <div className="text-left md:my-0 md:mx-auto">
        <p className="text-default-color text-center my-4 mx-0">
          The page you are looking for, we cannot find!
        </p>
        <ul className="list-disc inline-block">
          <li className="mb-4">Not exist, page does.</li>
          <li className="mb-4">The page changed its location.</li>
          <li className="mb-4">
            Under construction, the website is. Underway, maintenance work is.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isDarkTheme: state.isDarkTheme,
});

export default connect(mapStateToProps, null)(PageNotFound);
