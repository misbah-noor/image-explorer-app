import React from 'react'

function SearchForm({onSearch}) {

  const handleSubmit =(e) => {
    e.preventDefault();
    const keyword = e.target.elements.searchInput.value;
    onSearch(keyword)
  }

 return(
  <div>
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input type="text"
      name='searchInput'
      placeholder='Explore World...'
      className='md:py-2 py-0 border border-gray-200 px-4 md:px-8 w-full rounded-lg text-white md:text-xl text-lg outline-none'
      />
      <button type='submit' className='border border-blue-600 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold'>Search</button>
    </form>
  </div>
 )
};
  
  export default SearchForm;
  