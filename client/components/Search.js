import React from 'react';

const Search = ({ onSubmit, label, placeholder }) => {
  return (
    <React.Fragment>
      <h6 className="scrolltoload">Scroll to Load More</h6>
      <div className="artistSearch">
        <form onSubmit={evt => onSubmit(evt)}>
          <label className="searchLabel">{label}</label>
          <input name="name" placeholder={placeholder} />
          <button type="submit">Search</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Search;
