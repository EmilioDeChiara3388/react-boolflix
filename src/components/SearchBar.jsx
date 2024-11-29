import { useGlobalContext } from "../contexts/GlobalContext";

export default function SearchBar() {
    const { searchMovies, setSearchMovies, handleSearch } = useGlobalContext()
    return (
        <>
            <div>
                <form onSubmit={handleSearch} className="d-flex align-items-center">
                    <div>
                        <input type="search"
                            className="p-2 border-danger rounded"
                            name='searchForm'
                            id='searchForm'
                            placeholder='Inserisci Film'
                            value={searchMovies}
                            onChange={e => setSearchMovies(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className="p-2 btn btn-danger mx-1">Cerca</button>
                    </div>

                </form >
            </div>

        </>
    )
}
