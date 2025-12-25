function ImageCard({url, title, description})
{
   return (
    <>
      <div className="image-card">
        <img src={url} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default ImageCard;
