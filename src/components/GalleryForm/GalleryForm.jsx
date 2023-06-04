import { useState } from 'react'
import axios from 'axios'


function GalleryForm({getImages}) {

const [image, setImage] = useState('')
const [imgDescription,setDescription] = useState('')

const postImage = () => {
    
    axios.post('/gallery',{path:image,description:imgDescription})
    .then(response => {
        getImages()

        setImage('')
        setDescription('')

    }).catch(err => {
        console.log('Error with Post', err)
    })
}


    return (
        <>
        <h2> Post To Gallery </h2>
        <form>
           <label>Upload Image</label> <input value={image} type="text" placeholder="Upload" onChange={(e) => setImage(e.target.value)} />
           <br></br>
           <label>Image Description</label> <input value={imgDescription} type="text" placeholder="Description" onChange={ (e) => setDescription(e.target.value)}/>
           <br></br>
           <button type="submit" onClick={postImage}>POST</button>

        </form>
    </>)
}

export default GalleryForm