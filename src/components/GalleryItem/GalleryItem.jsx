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
             </>
    )
}

export default GalleryItem