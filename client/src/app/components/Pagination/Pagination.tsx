import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPage } from '../../store/actions';
import { RootState } from '../../store/store';
import './Pagination.scss';
import { PaginationProps } from './types';

const Pagination = ({ pageNumber, charactersAmount }: PaginationProps) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(charactersAmount / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination-ul">
        {pageNumbers.map((number: number) => (
          <li
            className="pagination-li"
            key={number}
            onClick={() => dispatch(setPage(number.toString()))}
          >
            <Link
              className={
                Number(pageNumber) === number
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
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  pageNumber: state.page,
});

export default connect(mapStateToProps, null)(Pagination);
