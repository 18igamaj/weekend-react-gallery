

function GalleryList() {

    return (
        <>
        {listImg.map( image => (
            <div key={image.id}>
              <img src={image.path} />
              {/* <p>{image.title}</p> */}
              <br></br>
              <button onClick={() => updateLike(image.id)}>Like</button>
              <p>{image.likes} Liked</p>
            </div>
          ))}</>
    )
}

export default GalleryList