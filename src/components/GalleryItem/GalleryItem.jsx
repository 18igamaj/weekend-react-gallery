

function GalleryItem(){
    return (
        <>
        <img src={image.path} />
              {/* <p>{image.title}</p> */}
              <br></br>
              <button onClick={() => updateLike(image.id)}>Like</button>
              <p>{image.likes} Liked</p>
              </>
    )
}

export default GalleryItem