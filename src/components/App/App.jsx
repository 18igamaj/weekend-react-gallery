import React from 'react';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import GalleryList from '../GalleryList/GalleryList';


function App() {

const [listImg, setListImg] = useState([])
const [selectDescription,setDescription]= useState(false)

useEffect(() => {
  getImages()
}, [])

const getImages = () => {
  axios.get('/gallery')
  .then(response => {
    console.log(response.data)
    setListImg(response.data)
    console.log(listImg)
  }).catch(err => {
    console.log('Something is wrong with our get', err)
  })
}

const updateLike = (id) => {

    axios.put(`/gallery/like/${id}`)
    .then(response => {
      console.log(`${id}`)
      getImages()
      
    }).catch(err => {
      console.log('Error on put', err)
    })
}

// const handleDescription = () => {

// }

    return (
      <div >
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>

        </header>
        <p>Gallery goes here</p>
        <div className="bigDiv" >
          <GalleryList listImg = {listImg} getImages={getImages}/>
        </div>
      
      </div>
    );
}

export default App;

// {listImg.map( image => (
//   <div key={image.id}>
//     <img src={image.path} />
//     {/* <p>{image.title}</p> */}
//     <br></br>
//     <button onClick={() => updateLike(image.id)}>Like</button>
//     <p>{image.likes} Liked</p>
//   </div>
// ))}