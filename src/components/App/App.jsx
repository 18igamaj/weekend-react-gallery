import React from 'react';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'


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

    return (
      <div >
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>

        </header>
        <p>Gallery goes here</p>
        <div >
          {listImg.map( image => (
            <div key={image.id}>
              <img src={image.path} />
              {/* <p>{image.title}</p> */}
              <br></br>
              <button>Like</button>
            </div>
          ))}
        </div>
      
      </div>
    );
}

export default App;
