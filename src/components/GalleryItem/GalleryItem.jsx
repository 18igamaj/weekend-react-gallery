import axios from 'axios'

function GalleryItem({id,image,getImages}){

    const updateLike = (id) => {

        axios.put(`/gallery/like/${id}`)
        .then(response => {
          console.log(`${id}`)
          getImages()
          
        }).catch(err => {
          console.log('Error on put', err)
        })
    }


    return (
        <>
        <img src={image.path} />
              {/* <p>{image.title}</p> */}
              <br></br>
              <button onClick={() => updateLike(image.id)}>Like</button>
              <br></br>
              <p>{image.likes} Liked</p>
              </>
    )
}

export default GalleryItem