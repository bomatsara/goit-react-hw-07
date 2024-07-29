import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
  const fieldIds = {
    search: useId(),
  };

  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={css['search-box']}>
      <div className={css['form-row']}>
        <label htmlFor={fieldIds.search} className={css['form-label']}>Find contacts by name</label>
        <input
          className={css['form-input']}
          type="text"
          name="search"
          id={fieldIds.search}
          value={filterValue}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </div>
  );
}