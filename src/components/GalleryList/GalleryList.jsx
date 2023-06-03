import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({listImg, getImages}) {

    return (
        <>
        {listImg.map( image => (
           
              <GalleryItem key={image.id} image={image} getImages={getImages} />
            
          ))}</>
    )
}

export default GalleryList