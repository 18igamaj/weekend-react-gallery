import axios from 'axios'
import {useState} from 'react'
import './GalleryItem.css'
function GalleryItem({image,getImages}){

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

    const deleteImage = (id) => {
        axios.delete(`/gallery/${id}`)
        .then(response => {
            console.log (`${id}`)
            getImages()
        }).catch(err => {
            console.log('Error with axios delete', err)
        })
    }

    return (
        <>
        <div className='bigDiv' onClick= {() => setDescription(!selectDescription)}>
            {
                selectDescription ?
                
        ( 
                
                <b>  {image.description}    </b>
        ) 
        
        : 
        
        (

            <img src={image.path} /> 
        )
            
            } 
              </div>
              <div className='button'>
             <button onClick={() => updateLike(image.id)}>Like</button>
             <p className='p'>{image.likes} Liked</p>
             </div> 
             <div>
                <button onClick= {() => deleteImage(image.id)}>Remove</button>
             </div>
             </>
    )
}

export default GalleryItem