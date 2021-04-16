import { useEffect, useState } from 'react';
import './App.css';
import Photo from './Photo';

function App() {
  const [photos, setPhotos] = useState([])
  const [visible, setVisible] = useState(8)
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
  const loadHandler = () => {
    setVisible(prev => prev + 8)
  }
  return (
    <div className="flex flex-wrap justify-center m-10 ">
      {photos.slice(0,visible).map(photo => {
        return (
          <>
          <Photo title={photo.title} url={photo.url} />
          </>
        )
      })}
      <div>
        <button className="w-full bg-blue-500 text-white font-bold py-2 px-10 m-12 rounded" onClick={loadHandler}>Load More</button>
      </div>
    </div>
  );
}

export default App;
