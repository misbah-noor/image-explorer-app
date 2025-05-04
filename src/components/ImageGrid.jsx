import ImageCard from './ImageCard';

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
      {images.map((img) => (
        <ImageCard key={img.id} img={img} />
      ))}
    </div>
  );
}

export default ImageGrid;
