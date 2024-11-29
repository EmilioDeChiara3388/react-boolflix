/* import { GlobalContextProvider, useGlobalContext } from "../contexts/GlobalContext"


export default function SearchBar() {
    const { searchMovies, setSearchMovie, handleSearch } = useGlobalContext()
    return (
        <>
            <form className='my-3' onSubmit={handleSearch}>
                <input type="search"
                    name='searchForm'
                    id='searchForm'
                    placeholder='Inserisci Film'
                    value={searchMovies}
                    onChange={e => setSearchMovie(e.target.value)} />
                <button type='submit'>Cerca</button>
            </form >
        </>
    )
} */