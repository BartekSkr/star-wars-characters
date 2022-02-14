import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../store/store';
import './Spinner.scss';

interface SpinnerProps {
  loading?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div className={!loading ? 'spinner-hidden' : 'spinner'}>
      <div className='spinner-dot'></div>
      <div className='spinner-dot'></div>
      <div className='spinner-dot'></div>
      <div className='spinner-dot'></div>
      <div className='spinner-dot'></div>
      <div className='spinner-dot'></div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  loading: state.isLoading,
});

export default connect(mapStateToProps, null)(Spinner);
