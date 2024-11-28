import { useState } from "react"

export default function SearchBar({ movie, setMovie }) {

    const [searchMovie, setSearchMovie] = useState("")
    const [foundMovie, setfoundMovie] = useState([])

    function handleSearch(e) {
        e.preventDefault()

        fetch(`https://api.themoviedb.org/3/search/multi?api_key=02db99b71ab12c53c6d3cba1dbb2dd15&query=${searchMovie}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovie(data.results)
            })
    }

    return (
        <>
            <form className='my-3' onSubmit={handleSearch}>
                <input type="search"
                    name='searchForm'
                    id='searchForm'
                    placeholder='Inserisci Film'
                    value={searchMovie}
                    onChange={e => setSearchMovie(e.target.value)} />
                <button type='submit'>Cerca</button>
            </form >
        </>
    )
}