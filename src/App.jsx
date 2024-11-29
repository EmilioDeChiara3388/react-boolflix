import { GlobalContextProvider, useGlobalContext } from "./contexts/GlobalContext"
import SearchBar from "./components/SearchBar";

function App() {

  function ListOfResults() {
    const { movies } = useGlobalContext()

    console.log(movies);
    return (
      <div className="container">
        <h2>Risultati Ricerca</h2>
        {movies.length > 0 ? (
          movies.filter(movie => movie.media_type !== "person").map((movie) => (
            <div className="col" key={movie.id}>
              <ul>
                <div >
                  <li className='border border-danger'><p className="m-2"> {movie.title || movie.name} </p>
                    <p className="m-2"> {movie.original_title || movie.original_name} </p>
                    {["it", "es", "fr", "en"].includes(movie.original_language) ? (
                      <img src={`../flags/${movie.original_language}.jpg`} alt="" />
                    ) : (
                      <p className="m-2"> {movie.original_language} </p>
                    )}
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
    )
  }



  return (
    <>

      <GlobalContextProvider>

        <SearchBar />
        <main>
          <ListOfResults />
        </main>

      </GlobalContextProvider>


    </>
  )
}

export default App


