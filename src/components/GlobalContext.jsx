import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [movie, setMovie] = useState([]);

    const fetchData = (url = `https://api.themoviedb.org/3/search/movie?api_key=02db99b71ab12c53c6d3cba1dbb2dd15&query=matrix+reloaded`) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data.results)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <GlobalContext.Provider value={{ movie, fetchData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
