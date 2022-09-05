import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPage } from '../../store/actions';
import { RootState } from '../../store/store';
import { PaginationProps } from './types';

const Pagination = ({ pageNumber, charactersAmount }: PaginationProps) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(charactersAmount / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="mb-4 list-none flex justify-center">
        {pageNumbers.map((number: number) => (
          <li
            className="text-text-color cursor-pointer transition-all ease-in-out duration-0.2s hover:scale-150 hover:text-accent-color"
            key={number}
            onClick={() => dispatch(setPage(number.toString()))}
          >
            <Link
              className={
                Number(pageNumber) === number
                  ? 'my-0 mx-4 border-b-2px text-accent-color transition-colors duration-0.2s'
                  : 'my-0 mx-4 transition-colors duration-0.2s'
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
