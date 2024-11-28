import React, { useContext } from 'react';
import GlobalContext, { GlobalProvider } from './components/GlobalContext';

const AppContent = () => {
  const { movie } = useContext(GlobalContext);

  return (
    <>
      <div className="container">
        <h2>Risultati Ricerca</h2>
        {movie.length > 0 ? (
          movie.map((movie) => (
            <div className="col" key={movie.id}>
              <ul>
                <div >
                  <li className='border border-danger'><p className="m-2"> {movie.title} </p>
                    <p className="m-2"> {movie.original_title} </p>
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