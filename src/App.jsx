import { useContext, useState, useEffect } from 'react';
import GlobalContext, { GlobalProvider } from './components/GlobalContext';
import SearchBar from './components/SearchBar';

const AppContent = () => {
  const [movie, setMovie] = useState([])

  return (
    <>
      <div className="container">

        <SearchBar setMovie={setMovie} movie={movie} />

        <h2>Risultati Ricerca</h2>
        {movie.length > 0 ? (
          movie.filter(movie => movie.media_type !== "person").map((movie) => (
            <div className="col" key={movie.id}>
              <ul>
                <div >
                  <li className='border border-danger'><p className="m-2"> {movie.title || movie.name} </p>
                    <p className="m-2"> {movie.original_title || movie.original_name} </p>
                    <p className="m-2"> {movie.original_language} </p>
                    <p className="m-2"> {movie.vote_average} </p>
                  </li>
                </div>
              </ul>
            </div>
          ))
        ) : (
          <p>Nessun risultato</p>
        )}
      </div>
    </>
  )
}

const App = () => (
  <GlobalProvider>
    <AppContent />
  </GlobalProvider>
)

export default App;