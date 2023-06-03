import React from 'react';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import GalleryList from '../GalleryList/GalleryList';


function App() {

const [listImg, setListImg] = useState([])

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

