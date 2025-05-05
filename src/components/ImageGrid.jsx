import ImageCard from './ImageCard';

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mt-10 mb-5">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
}

export default ImageGrid;
