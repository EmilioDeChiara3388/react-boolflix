import { createContext, useContext, useState } from 'react';
const GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState("")

    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchMovies}`

    function handleSearch(e) {
        e.preventDefault()

        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    }

    const values = {
        movies,
        setMovies,
        searchMovies,
        setSearchMovies,
        handleSearch
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalContextProvider, useGlobalContext }
