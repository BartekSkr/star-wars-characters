import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

import './Search.scss';
import { AppDispatch, RootState } from '../../store/store';
import { connect } from 'react-redux';
import React, { Dispatch } from 'react';
import {
  setCharactersAmount,
  fetchData,
  setDisplay,
  setLoading,
  setPageNumber,
  setSearchError,
} from '../../actions/actions';
import { CharacterInterface } from '../../interface/interface';
import {
  fetchDataFromApi,
  fetchDataFromApiByName,
} from '../../helpers/apiServices';

interface SearchProps {
  fetchData: (data: CharacterInterface[]) => void;
  setCharactersAmount: (num: number) => void;
  setSearchError: (isError: boolean) => void;
  setDisplay: (isDisplay: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setPageNumber: (number: number) => void;
  pageNumber?: number;
}

const Search: React.FC<SearchProps> = ({
  fetchData,
  setCharactersAmount,
  setSearchError,
  setDisplay,
  setLoading,
  setPageNumber,
  pageNumber,
}) => {
  return (
    <div className='search'>
      <button
        className='search-button'
        data-for='search-btn'
        data-tip='Show character list'
        onClick={() =>
          fetchDataFromApi(
            (pageNumber = 1),
            setLoading,
            setDisplay,
            fetchData,
            setCharactersAmount,
            setSearchError,
            setPageNumber
          )
        }
      >
        <FontAwesomeIcon icon={faJournalWhills} size='2x' />
      </button>
      <input
        type='text'
        name='text'
        className='search-input'
        placeholder='Search for a character...'
        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
          (e.currentTarget.value = '')
        }
        onKeyUp={(e) =>
          fetchDataFromApiByName(
            e,
            setLoading,
            setDisplay,
            setPageNumber,
            fetchData,
            setCharactersAmount,
            setSearchError
          )
        }
      />
      <ReactTooltip id='search-btn' place='right' effect='solid' type='info' />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  pageNumber: state.pageNumber,
});

const mapDispatchToProps = (dispatch: Dispatch<AppDispatch>) => ({
  setLoading: (isLoading: boolean) => dispatch(setLoading(isLoading)),
  setDisplay: (isDisplay: boolean) => dispatch(setDisplay(isDisplay)),
  fetchData: (data: CharacterInterface[]) => dispatch(fetchData(data)),
  setCharactersAmount: (num: number) => dispatch(setCharactersAmount(num)),
  setSearchError: (isError: boolean) => dispatch(setSearchError(isError)),
  setPageNumber: (number: number) => dispatch(setPageNumber(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
