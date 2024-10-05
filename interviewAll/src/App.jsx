import axios from 'axios';
import ImageShow from './Tests/02/02_ImageShowWithThumbnail';
import { useEffect, useState } from 'react';

function App() {
  const [fullData, setFullData] = useState(null);
  const [albums, setAlbums] = useState([]);

  // Function to add an entry to a specific album
  const addInAlbum = (albumId, data) => {
    setAlbums(prevAlbums => {
      const updatedAlbums = [...prevAlbums];
      
      // If the album doesn't exist yet, create it
      if (!updatedAlbums[albumId]) {
        updatedAlbums[albumId] = [];
      }
      
      // Add the new data to the selected album
      updatedAlbums[albumId].push(data);
      
      return updatedAlbums;
    });
  };

  // Fetching data
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => setFullData(res.data));
  }, []);

  // Processing the fetched data
  useEffect(() => {
    if (fullData) {
      fullData.forEach(e => {
        const albumId = e.albumId - 1; // Zero-based index for albums
        addInAlbum(albumId, [e.id, e.thumbnailUrl, e.url, e.title]);
      });
    }
  }, [fullData]);

  console.log(albums); 

  return (
    <>
      <ImageShow />
    </>
  );
}

export default App;
