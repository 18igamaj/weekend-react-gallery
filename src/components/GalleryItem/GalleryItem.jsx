import axios from 'axios'
import {useState} from 'react'
function GalleryItem({id,image,getImages}){

const [selectDescription,setDescription] = useState()

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
              {/* <br></br>
              
              <br></br> */}
              
              <button onClick={() => updateLike(image.id)}>Like</button><p>{image.likes} Liked</p>
              </>
    )
}

export default GalleryItem