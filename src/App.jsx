import { useState } from 'react';
import SearchForm from './components/SearchForm';
import ImageGrid from './components/ImageGrid';
import ShowMoreButton from './components/ShowMoreButton';
// import './App.css';
function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const accessKey = 'lRm-tghsQxkIt6lz0L4cq15ywrzJee4R8WZUktkX3SE';

  const handleSearch = async(keyword) => {
    setSearchKeyword(keyword);
    setPage(1);

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    setImages(data.results); //save image data to state
    // console.log('Searching for: ', keyword);
  }

  const handleShowMore = async() =>{
     const nextPage = page + 1;
     setPage(nextPage);

     const url = `https://api.unsplash.com/search/photos?page=${nextPage}&query=${searchKeyword}&client_id=${accessKey}&per_page=12`;
   
     const response = await fetch(url);
     const data = await response.json();
     setImages(prevImages => [...prevImages, ...data.results]);
  };

  return (
    <div className="min-h-screen bg-opacity-10 bg-gray-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-5xl drop-shadow-lg font-bold mt-4 mb-8 md:mb-14 text-center text-white text-shadow-sm text-shadow-amber-50">Image Search App</h1>
      
      <SearchForm onSearch={handleSearch}
      />
      
      <ImageGrid images={images}/>

      {images.length > 0 && (
        <ShowMoreButton onClick={handleShowMore} />
      )}

    </div>
  );
}

export default App;
