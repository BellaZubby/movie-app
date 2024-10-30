import CoverPage from '@/components/CoverPage';
import DisplayItems from '@/components/DisplayItems';
import { now_playing, airing_today, apiKey} from '@/modules/ApiLinks';
import {useState, useEffect} from 'react'


const itemsProps = {
    numberOfMovies: 10,
    showButtons: true
  }

const NowPlaying = () => {

  const [headerImage, setHeaderImage] = useState("")

  // Fetch the header image for homepage from the server
  useEffect(() => {
    fetch(`${now_playing}?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];

      if(randomMovie && randomMovie.backdrop_path) {
        const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
        setHeaderImage(imageUrl)
      }
    })

    .catch((err) => {
      console.error(err);
    })
  }, [])
  return (
    <>
       <CoverPage
        title='Now Playing/ Streaming'
        description='Movies currently playing in the cinemas/ or streaming online'
        headerImage={headerImage}
        catchyPhrase='Watch it Today!'
        showHeaderImage={true}
      />
      <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${now_playing}?api_key=${apiKey}`} 
        itemHeading='Now Playing'
        moviesOn= {true}
        tvShowOn= {false}
        
      />
       <DisplayItems 
        {...itemsProps}
        apiEndpoint={`${airing_today}?api_key=${apiKey}`} 
        itemHeading='Now Streaming'
        moviesOn= {false}
        tvShowOn= {true}
        
      />
    </>
  )
}

export default NowPlaying;