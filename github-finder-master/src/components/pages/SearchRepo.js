import React from 'react';

const SearchRepo = () => {
  return (
    <div>
      <form  className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Repos...'
          
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      
    </div>
  );
};

export default SearchRepo;
