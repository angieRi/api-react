import React,{useState,useEffect} from "react";
import './App.css';

function App() {
  const url='https://jsonplaceholder.typicode.com/albums'
  const [albums,setAlbum] = useState()
  const  fetchApi = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    setAlbum(responseJson)
  }
  useEffect(()=>{
    fetchApi()
  },[])

  return (
    <div className="App">
      <h3>Api Albums</h3>
      <ul className="ul-albums">
        {!albums ? 'Cargando..':
        albums.map((album,index) => {
          return <li className="title">{album.title}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
