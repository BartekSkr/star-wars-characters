import { Dispatch, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setCharactersAmount,
  fetchData,
  setDisplay,
  setLoading,
  setPageNumber,
  setSearchError,
} from '../../actions/actions';
import { fetchDataFromApi } from '../../helpers/apiServices';
import { CharacterInterface } from '../../interface/interface';
import { AppDispatch, RootState } from '../../store/store';
import './Pagination.scss';

interface PaginationProps {
  charactersAmount?: number;
  isDisplay?: boolean;
  pageNumber?: number;
  fetchData: (data: CharacterInterface[]) => void;
  setLoading: (isLoading: boolean) => void;
  setDisplay: (isDisplay: boolean) => void;
  setPageNumber: (number: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  charactersAmount,
  isDisplay,
  pageNumber,
  fetchData,
  setLoading,
  setDisplay,
  setPageNumber,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(charactersAmount! / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <Fragment>
      {isDisplay && (
        <ul className='pagination-ul'>
          {pageNumbers.map((number: number) => (
            <li
              className='pagination-li'
              key={number}
              onClick={() => {
                fetchDataFromApi(
                  number!,
                  setLoading,
                  setDisplay,
                  fetchData,
                  setCharactersAmount,
                  setSearchError,
                  setPageNumber
                );
              }}
            >
              <Link
                className={
                  pageNumber === number
                    ? 'pagination-link-active'
                    : 'pagination-link'
                }
                to={`/characters/#${number}`}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  charactersAmount: state.charactersAmount,
  isDisplay: state.isDisplay,
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

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
