import { useState } from 'react';
import s from './SearchForm.module.css';
import { BiSearchAlt } from 'react-icons/bi';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <button className={s.searchButton} type="submit">
          <BiSearchAlt size="22" />
        </button>
        <input
          onChange={onChange}
          type="text"
          name="searchQuery"
          value={query}
          autoComplete="off"
          placeholder="Search images..."
          className={s.searchInput}
        />
      </form>
    </div>
  );
};

export default SearchForm;
