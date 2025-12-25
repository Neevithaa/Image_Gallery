
import ImageCard from "./ImageCard";
import imageData from "../data/imageData";
function Gallery() {
  return (
    <>
      <div className="gallery">
        {imageData.map((image) => (
          <ImageCard
            key={image.id}
            url={image.url}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
