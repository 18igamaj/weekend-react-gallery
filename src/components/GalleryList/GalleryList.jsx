import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({listImg, getImages}) {

    return (
        <>
        {listImg.map( image => (
            <div >
              <GalleryItem key={image.id} listImg={listImg} getImages={getImages} />
            </div>
          ))}</>
    )
}

export default GalleryList