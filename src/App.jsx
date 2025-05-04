import { useState } from 'react';
import SearchForm from './components/SearchForm';
import ImageGrid from './components/ImageGrid';
import ShowMoreButton from './components/ShowMoreButton';

function App() {
  const accessKey = 'MEuoaAlzy-iZeJyj_qUHh167ELCpyChqTOXjM26Zl9s';
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async (newSearch = false) => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (newSearch) {
      setImages(data.results);
    } else {
      setImages(prev => [...prev, ...data.results]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImages(true);
  };

  const handleShowMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages();
  };

  return (
    <div className="min-h-screen bg-opacity-10 backdrop-blur-sm bg-gradient-to-tr from-indigo-200 via-purple-400 to-pink-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-5xl drop-shadow-lg font-bold mt-4 mb-8 md:mb-14 text-center">Image Search App</h1>
      
      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
      />

      <ImageGrid images={images} />

      {images.length > 0 && (
        <ShowMoreButton onClick={handleShowMore} />
      )}
    </div>
  );
}

export default App;
