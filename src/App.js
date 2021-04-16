import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([])
  const fetchUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=> {
    fetchUsers()
  }, [])
  return (
    <div className="App">
      {photos.slice(0,9).map(photo => {
        return (
          <>
          <h1>{photo.title}</h1>
          </>
        )
      })}
    </div>
  );
}

export default App;
